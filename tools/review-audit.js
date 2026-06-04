// 재검토 감사: 중복 문장 / 여성형 의문문 입자 / 데이터 정합 (2026-06-04)
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
const out = { dupKo: [], dupTh: [], dupEn: [], femaleQuestionParticle: [] };

// 1. 중복 문장 (ko/th/en 기준)
for (const [field, bucket] of [["ko", "dupKo"], ["th", "dupTh"], ["en", "dupEn"]]) {
  const seen = new Map();
  phrases.forEach((p, i) => {
    const key = String(p[field]).trim();
    if (seen.has(key)) out[bucket].push(`#${seen.get(key) + 1} = #${i + 1}: ${key}`);
    else seen.set(key, i);
  });
}

// 2. 여성형 의문문인데 ค่ะ(평서형 입자)로 끝나는 경우 (의문문은 คะ가 맞음)
const questionMarkers = ["ไหม", "อะไร", "ไหน", "เท่าไหร่", "กี่", "เมื่อไหร่", "หรือ", "ยังไง", "ใคร", "ทำไม"];
phrases.forEach((p, i) => {
  const f = p.thFemale || "";
  if (f.endsWith("ค่ะ") && questionMarkers.some((m) => f.includes(m))) {
    out.femaleQuestionParticle.push(`#${i + 1}: ${f}`);
  }
});

out.counts = {
  dupKo: out.dupKo.length, dupTh: out.dupTh.length, dupEn: out.dupEn.length,
  femaleParticle: out.femaleQuestionParticle.length
};
out.femaleQuestionParticle = out.femaleQuestionParticle.slice(0, 40);
console.log(JSON.stringify(out, null, 2));
