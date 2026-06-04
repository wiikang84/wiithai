// 확장된 문자표(ja/zh/vi/es) 음성만 일괄 재생성 (2026-06-04)
// 문장(phrases)은 건드리지 않음 (WIIINFO_SKIP_PHRASES=true)
const { spawnSync } = require("child_process");

const tasks = [
  { root: "audio-ja", lang: "ja-JP", voice: "ja-JP-Wavenet-A", field: "ja", letters: "ja" },
  { root: "audio-ja-male", lang: "ja-JP", voice: "ja-JP-Wavenet-C", field: "ja", letters: "ja" },
  { root: "audio-zh", lang: "cmn-CN", voice: "cmn-CN-Wavenet-A", field: "zh", letters: "zh" },
  { root: "audio-zh-male", lang: "cmn-CN", voice: "cmn-CN-Wavenet-B", field: "zh", letters: "zh" },
  { root: "audio-vi", lang: "vi-VN", voice: "vi-VN-Wavenet-A", field: "vi", letters: "vi" },
  { root: "audio-vi-male", lang: "vi-VN", voice: "vi-VN-Wavenet-B", field: "vi", letters: "vi" },
  { root: "audio-es", lang: "es-ES", voice: "es-ES-Wavenet-F", field: "es", letters: "es" },
  { root: "audio-es-male", lang: "es-ES", voice: "es-ES-Wavenet-E", field: "es", letters: "es" }
];

for (const task of tasks) {
  console.log(`\n=== ${task.root} / ${task.voice} (letters only) ===`);
  const result = spawnSync(process.execPath, ["tools/generate-google-tts.js"], {
    cwd: process.cwd(),
    env: {
      ...process.env,
      WIIINFO_AUDIO_ROOT: task.root,
      WIIINFO_TTS_LANGUAGE: task.lang,
      WIIINFO_TTS_VOICE: task.voice,
      WIIINFO_PHRASE_FIELD: task.field,
      WIIINFO_LETTER_SOURCE: task.letters,
      WIIINFO_SKIP_PHRASES: "true",
      WIIINFO_TTS_OVERWRITE: "true"
    },
    stdio: "inherit"
  });
  if (result.status !== 0) process.exit(result.status || 1);
}

console.log("\nletters batch complete");
