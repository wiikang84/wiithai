// 문장 #101~200 확장에 따른 음성 생성 배치 (2026-06-04)
// 사용법: node tools/generate-phrases-batch.js <시작인덱스> <끝인덱스>
// - th/ko: 보이스 일관성을 위해 전체(문장+문자) 재생성 (보이스 아래에 문서화)
// - ja/en/zh/vi/es: 기존 파일은 건너뛰고 신규 101~200만 생성 (문자는 3-2에서 생성 완료)
const { spawnSync } = require("child_process");

const tasks = [
  { root: "audio", lang: "th-TH", voice: "th-TH-Standard-A", field: "thFemale", letters: "th", overwrite: "true" },
  { root: "audio-male", lang: "th-TH", voice: "th-TH-Standard-A", field: "thMale", letters: "th", overwrite: "true" },
  { root: "audio-ko", lang: "ko-KR", voice: "ko-KR-Wavenet-A", field: "ko", letters: "ko", overwrite: "true" },
  { root: "audio-ko-male", lang: "ko-KR", voice: "ko-KR-Wavenet-C", field: "ko", letters: "ko", overwrite: "true" },
  { root: "audio-ja", lang: "ja-JP", voice: "ja-JP-Wavenet-A", field: "ja", letters: "ja", overwrite: "false" },
  { root: "audio-ja-male", lang: "ja-JP", voice: "ja-JP-Wavenet-C", field: "ja", letters: "ja", overwrite: "false" },
  { root: "audio-en", lang: "en-US", voice: "en-US-Wavenet-F", field: "en", letters: "en", overwrite: "false" },
  { root: "audio-en-male", lang: "en-US", voice: "en-US-Wavenet-D", field: "en", letters: "en", overwrite: "false" },
  { root: "audio-zh", lang: "cmn-CN", voice: "cmn-CN-Wavenet-A", field: "zh", letters: "zh", overwrite: "false" },
  { root: "audio-zh-male", lang: "cmn-CN", voice: "cmn-CN-Wavenet-B", field: "zh", letters: "zh", overwrite: "false" },
  { root: "audio-vi", lang: "vi-VN", voice: "vi-VN-Wavenet-A", field: "vi", letters: "vi", overwrite: "false" },
  { root: "audio-vi-male", lang: "vi-VN", voice: "vi-VN-Wavenet-B", field: "vi", letters: "vi", overwrite: "false" },
  { root: "audio-es", lang: "es-ES", voice: "es-ES-Wavenet-F", field: "es", letters: "es", overwrite: "false" },
  { root: "audio-es-male", lang: "es-ES", voice: "es-ES-Wavenet-E", field: "es", letters: "es", overwrite: "false" }
];

const from = Number(process.argv[2] ?? 0);
const to = Number(process.argv[3] ?? tasks.length - 1);

for (const task of tasks.slice(from, to + 1)) {
  console.log(`\n=== ${task.root} / ${task.voice} (overwrite=${task.overwrite}) ===`);
  const result = spawnSync(process.execPath, ["tools/generate-google-tts.js"], {
    cwd: process.cwd(),
    env: {
      ...process.env,
      WIIINFO_AUDIO_ROOT: task.root,
      WIIINFO_TTS_LANGUAGE: task.lang,
      WIIINFO_TTS_VOICE: task.voice,
      WIIINFO_PHRASE_FIELD: task.field,
      WIIINFO_LETTER_SOURCE: task.letters,
      WIIINFO_TTS_OVERWRITE: task.overwrite
    },
    stdio: "inherit"
  });
  if (result.status !== 0) process.exit(result.status || 1);
}

console.log("\nphrase batch slice complete");
