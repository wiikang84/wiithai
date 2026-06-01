const { spawnSync } = require("child_process");

const tasks = [
  { root: "audio-ja", lang: "ja-JP", voice: "ja-JP-Wavenet-A", field: "ja", letters: "ja" },
  { root: "audio-ja-male", lang: "ja-JP", voice: "ja-JP-Wavenet-C", field: "ja", letters: "ja" },
  { root: "audio-en", lang: "en-US", voice: "en-US-Wavenet-F", field: "en", letters: "en" },
  { root: "audio-en-male", lang: "en-US", voice: "en-US-Wavenet-D", field: "en", letters: "en" },
  { root: "audio-zh", lang: "cmn-CN", voice: "cmn-CN-Wavenet-A", field: "zh", letters: "zh" },
  { root: "audio-zh-male", lang: "cmn-CN", voice: "cmn-CN-Wavenet-B", field: "zh", letters: "zh" },
  { root: "audio-vi", lang: "vi-VN", voice: "vi-VN-Wavenet-A", field: "vi", letters: "vi" },
  { root: "audio-vi-male", lang: "vi-VN", voice: "vi-VN-Wavenet-B", field: "vi", letters: "vi" },
  { root: "audio-es", lang: "es-ES", voice: "es-ES-Wavenet-F", field: "es", letters: "es" },
  { root: "audio-es-male", lang: "es-ES", voice: "es-ES-Wavenet-E", field: "es", letters: "es" }
];

for (const task of tasks) {
  console.log(`\n=== ${task.root} / ${task.voice} ===`);
  const result = spawnSync(process.execPath, ["tools/generate-google-tts.js"], {
    cwd: process.cwd(),
    env: {
      ...process.env,
      WIITHAI_AUDIO_ROOT: task.root,
      WIITHAI_TTS_LANGUAGE: task.lang,
      WIITHAI_TTS_VOICE: task.voice,
      WIITHAI_PHRASE_FIELD: task.field,
      WIITHAI_LETTER_SOURCE: task.letters,
      WIITHAI_TTS_OVERWRITE: "true"
    },
    stdio: "inherit"
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

console.log("\nvoice batch complete");
