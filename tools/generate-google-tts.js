const fs = require("fs");
const path = require("path");
const https = require("https");
const { execFileSync } = require("child_process");

global.window = global;
require("../phrases.js");
require("../multilingual-data.js");

const projectId = process.env.GOOGLE_CLOUD_PROJECT || "wiigame-448c7";
const root = path.resolve(__dirname, "..");
const audioRoot = process.env.WIITHAI_AUDIO_ROOT || "audio";
const phraseDir = path.join(root, audioRoot, "phrases");
const letterDir = path.join(root, audioRoot, "letters");
const voiceName = process.env.WIITHAI_TTS_VOICE || "th-TH-Standard-A";
const languageCode = process.env.WIITHAI_TTS_LANGUAGE || "th-TH";
const phraseField = process.env.WIITHAI_PHRASE_FIELD || "th";
const includeLetters = process.env.WIITHAI_INCLUDE_LETTERS !== "false";
const letterSource = process.env.WIITHAI_LETTER_SOURCE || "thai";
const overwrite = process.env.WIITHAI_TTS_OVERWRITE === "true";
const phrases = process.env.WIITHAI_USE_MULTI_PHRASES === "false"
  ? THAI_PHRASES
  : (global.WIITHAI_MULTI_PHRASES || THAI_PHRASES);
const letterSources = {
  thai: global.THAI_LETTERS,
  th: global.THAI_LETTERS,
  korean: global.KOREAN_LETTERS,
  ko: global.KOREAN_LETTERS,
  japanese: global.JAPANESE_LETTERS,
  ja: global.JAPANESE_LETTERS,
  english: global.ENGLISH_LETTERS,
  en: global.ENGLISH_LETTERS,
  chinese: global.CHINESE_LETTERS,
  zh: global.CHINESE_LETTERS,
  vietnamese: global.VIETNAMESE_LETTERS,
  vi: global.VIETNAMESE_LETTERS,
  spanish: global.SPANISH_LETTERS,
  es: global.SPANISH_LETTERS
};

fs.mkdirSync(phraseDir, { recursive: true });
fs.mkdirSync(letterDir, { recursive: true });

function getAccessToken() {
  if (process.env.GCLOUD_ACCESS_TOKEN) {
    return process.env.GCLOUD_ACCESS_TOKEN;
  }

  const localGcloud = path.join(
    process.env.LOCALAPPDATA || "",
    "Google",
    "Cloud SDK",
    "google-cloud-sdk",
    "bin",
    "gcloud.cmd"
  );
  const command = fs.existsSync(localGcloud) ? localGcloud : "gcloud";
  const tokenCommand = process.platform === "win32" && command.endsWith(".cmd")
    ? ["cmd.exe", ["/c", command, "auth", "print-access-token"]]
    : [command, ["auth", "print-access-token"]];
  return execFileSync(tokenCommand[0], tokenCommand[1], {
    encoding: "utf8"
  }).trim();
}

function synthesize(token, text) {
  const body = JSON.stringify({
    input: { text },
    voice: {
      languageCode,
      name: voiceName
    },
    audioConfig: {
      audioEncoding: "MP3",
      speakingRate: 0.88,
      pitch: 0
    }
  });

  return new Promise((resolve, reject) => {
    const request = https.request(
      {
        hostname: "texttospeech.googleapis.com",
        path: "/v1/text:synthesize",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
          "x-goog-user-project": projectId
        }
      },
      (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          if (response.statusCode < 200 || response.statusCode >= 300) {
            reject(new Error(`TTS ${response.statusCode}: ${data}`));
            return;
          }
          try {
            resolve(JSON.parse(data).audioContent);
          } catch (error) {
            reject(error);
          }
        });
      }
    );

    request.on("error", reject);
    request.write(body);
    request.end();
  });
}

async function writeAudio(token, text, filePath) {
  if (!overwrite && fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
    return "skip";
  }
  const audioContent = await synthesize(token, text);
  fs.writeFileSync(filePath, Buffer.from(audioContent, "base64"));
  return "write";
}

async function main() {
  const token = getAccessToken();
  let written = 0;
  let skipped = 0;

  for (const [index, phrase] of phrases.entries()) {
    const filePath = path.join(phraseDir, `${String(index + 1).padStart(3, "0")}.mp3`);
    const text = phrase[phraseField];
    if (!text) {
      console.log(`skip phrase ${index + 1}: missing ${phraseField}`);
      skipped += 1;
      continue;
    }
    const result = await writeAudio(token, text, filePath);
    written += result === "write" ? 1 : 0;
    skipped += result === "skip" ? 1 : 0;
    console.log(`${result} phrase ${index + 1}: ${text}`);
  }

  if (includeLetters) {
    const letters = letterSources[letterSource] || [];
    if (letters.length === 0) {
      console.log(`skip letters: unknown source ${letterSource}`);
    }
    for (const [index, letter] of letters.entries()) {
      const filePath = path.join(letterDir, `${String(index + 1).padStart(3, "0")}.mp3`);
      const text = `${letter.char} ${letter.name}`;
      const result = await writeAudio(token, text, filePath);
      written += result === "write" ? 1 : 0;
      skipped += result === "skip" ? 1 : 0;
      console.log(`${result} letter ${index + 1}: ${text}`);
    }
  }

  console.log(`done: written=${written}, skipped=${skipped}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
