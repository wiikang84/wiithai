// 데이터 분리 후 무결성 검증 (2026-06-04)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);

for (const file of ["phrases.js", "multilingual-data.js", "data/info-guide.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), sandbox, { filename: file });
}

const w = sandbox.window;
const out = {
  infoLangs: Object.keys(w.WIIINFO_INFO_SECTIONS || {}),
  infoSectionCounts: Object.fromEntries(Object.entries(w.WIIINFO_INFO_SECTIONS || {}).map(([k, v]) => [k, v.length])),
  koFirstCardHasDetail: Boolean(w.WIIINFO_INFO_SECTIONS?.ko?.[0]?.cards?.[0]?.detail),
  thTravelDetailSections: w.WIIINFO_INFO_SECTIONS?.th?.find((s) => s.id === "travel")?.cards?.[0]?.detail?.sections?.length || 0,
  multiPhrases: (w.WIIINFO_MULTI_PHRASES || []).length,
  extraPhrases: (w.WIIINFO_EXTRA_PHRASES || []).length,
  uiCopyLangs: Object.keys(w.WIIINFO_UI_COPY || {}).length,
  letters: {
    th: (w.THAI_LETTERS || []).length, ko: (w.KOREAN_LETTERS || []).length,
    ja: (w.JAPANESE_LETTERS || []).length, en: (w.ENGLISH_LETTERS || []).length,
    zh: (w.CHINESE_LETTERS || []).length, vi: (w.VIETNAMESE_LETTERS || []).length, es: (w.SPANISH_LETTERS || []).length
  }
};
console.log(JSON.stringify(out, null, 2));

// const ok = ... out.multiPhrases === 100 ... // 구 기준 (2026-06-04 문장 200 확장 반영)
const ok = out.infoLangs.length === 7 && out.koFirstCardHasDetail && out.multiPhrases === 200 && out.thTravelDetailSections > 0;
console.log(ok ? "PASS" : "FAIL");
process.exit(ok ? 0 : 1);
