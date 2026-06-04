// 원어민 검수용 CSV 시트 생성 (태국어·베트남어) — Excel 호환 UTF-8 BOM (2026-06-04)
// 실행: node tools/export-review-sheet.js → review/ 폴더에 생성
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const f of ["phrases.js", "multilingual-data.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), sandbox, { filename: f });
}
const phrases = sandbox.window.WIIINFO_MULTI_PHRASES || [];

const outDir = path.join(root, "review");
fs.mkdirSync(outDir, { recursive: true });

function csvCell(value) {
  const s = String(value ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function writeCsv(file, header, rows) {
  const body = [header, ...rows].map((r) => r.map(csvCell).join(",")).join("\r\n");
  fs.writeFileSync(path.join(outDir, file), "﻿" + body, "utf8");
  console.log(`${file} (${rows.length}행)`);
}

writeCsv(
  "thai_review_2026-06-04.csv",
  ["번호", "카테고리", "한국어", "영어", "태국어(남성형)", "태국어(여성형)", "로마자", "수정 제안", "비고"],
  phrases.map((p, i) => [i + 1, p.c, p.ko, p.en, p.thMale || p.th, p.thFemale || "", p.ro, "", i >= 100 ? "신규(검수 필요)" : "기존"])
);

writeCsv(
  "vietnamese_review_2026-06-04.csv",
  ["번호", "카테고리", "한국어", "영어", "베트남어", "로마자", "수정 제안", "비고"],
  phrases.map((p, i) => [i + 1, p.c, p.ko, p.en, p.vi, p.roByLang?.vi || "", "", i >= 100 ? "신규(검수 필요)" : "기존"])
);

console.log("완료: " + outDir);
