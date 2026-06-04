// 3-3 문장 200개 × 7개 언어 완전성 검증 (2026-06-04)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const file of ["phrases.js", "multilingual-data.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), sandbox, { filename: file });
}

const w = sandbox.window;
const phrases = w.WIIINFO_MULTI_PHRASES || [];
const problems = [];

phrases.forEach((p, i) => {
  const n = i + 1;
  for (const lang of ["ko", "th", "en", "ja", "zh", "vi", "es"]) {
    if (!p[lang] || !String(p[lang]).trim()) problems.push(`#${n} ${lang} 비어있음`);
  }
  if (!p.ro) problems.push(`#${n} 태국어 로마자 없음`);
  if (!p.thFemale || p.thFemale === p.th && p.th.includes("ครับ")) problems.push(`#${n} 여성형 변환 실패`);
  for (const lang of ["en", "ja", "zh", "vi", "es"]) {
    if (!p.roByLang?.[lang]) problems.push(`#${n} ro.${lang} 없음`);
  }
  if (!p.c) problems.push(`#${n} 카테고리 없음`);
});

const cats = [...new Set(phrases.map((p) => p.c))];
const labelLangs = Object.keys(w.WIIINFO_CATEGORY_LABELS || {});
const missingLabels = [];
for (const lang of labelLangs) {
  for (const cat of cats) {
    if (!w.WIIINFO_CATEGORY_LABELS[lang][cat]) missingLabels.push(`${lang}:${cat}`);
  }
}

console.log(JSON.stringify({
  total: phrases.length,
  categories: cats,
  categoryCounts: Object.fromEntries(cats.map((c) => [c, phrases.filter((p) => p.c === c).length])),
  missingLabels,
  problems: problems.slice(0, 20),
  problemCount: problems.length
}, null, 2));

const ok = phrases.length === 200 && problems.length === 0 && missingLabels.length === 0;
console.log(ok ? "PASS" : "FAIL");
process.exit(ok ? 0 : 1);
