// [2026-06-19] 수집 점포(ko/en) + 번역사전 → 7개 언어 적재용 ready JSON 생성
// 실행: node tools/build-stores-ready.js
// 입력: data/collected/foreign_stores_collected.json, data/collected/translations.json
// 출력: data/collected/foreign_stores_ready.json (store-admin 일괄 등록에 붙여넣기)
const fs = require("fs");
const path = require("path");
const BASE = path.join(__dirname, "..", "data", "collected");

const stores = JSON.parse(fs.readFileSync(path.join(BASE, "foreign_stores_collected.json"), "utf8"));
// [2026-06-19] 공공데이터 CSV 변환분(_csv_converted.json) 합류 — 있으면 뒤에 붙여 함께 적재
let csvStores = [];
try { csvStores = JSON.parse(fs.readFileSync(path.join(BASE, "_csv_converted.json"), "utf8")); } catch (e) { /* 없으면 무시 */ }
const allStores = stores.concat(csvStores);
const tr = JSON.parse(fs.readFileSync(path.join(BASE, "translations.json"), "utf8"));
const itemsDict = tr.items || {};
const nameEn = tr.nameEn || {};

let itemHit = 0, enHit = 0;
const miss = [];
const ready = allStores.map((s) => {
  const o = Object.assign({}, s);
  const ko = (s.items || {}).ko;
  if (ko && itemsDict[ko]) { o.items = itemsDict[ko]; itemHit++; }
  else if (ko) miss.push(ko);
  if (!(s.name || {}).en && nameEn[s.id]) { o.name = Object.assign({}, s.name, { en: nameEn[s.id] }); enHit++; }
  return o;
});

fs.writeFileSync(path.join(BASE, "foreign_stores_ready.json"), JSON.stringify(ready, null, 1), "utf8");
console.log("총", ready.length, "개 / items 7개언어 적용:", itemHit, "/ name.en 보강:", enHit, "/ items 미매칭:", miss.length);
miss.forEach((m) => console.log("  MISS items:", m));
