// [2026-06-19] 잔여 미번역 items 추가 (꿔바로우 등 중국집 3종)
const fs = require("fs"), path = require("path");
const p = path.join(__dirname, "..", "data", "collected", "translations.json");
const t = JSON.parse(fs.readFileSync(p, "utf8"));
const add = {
  "마라탕, 마라샹궈, 꿔바로우, 중국 음식": { ko: "마라탕, 마라샹궈, 꿔바로우, 중국 음식", en: "Malatang, mala xiang guo, guo bao rou, Chinese food", th: "หมาล่าทัง หมาล่าเซียงกัว กัวเปาโร่ว อาหารจีน", ja: "マーラータン、マーラーシャングオ、グオバオロウ、中華料理", zh: "麻辣烫、麻辣香锅、锅包肉、中国菜", vi: "Malatang, mala xiang guo, guo bao rou, món Trung Quốc", es: "Malatang, mala xiang guo, guo bao rou, comida china" },
  "마라탕, 꿔바로우, 중국 음식": { ko: "마라탕, 꿔바로우, 중국 음식", en: "Malatang, guo bao rou, Chinese food", th: "หมาล่าทัง กัวเปาโร่ว อาหารจีน", ja: "マーラータン、グオバオロウ、中華料理", zh: "麻辣烫、锅包肉、中国菜", vi: "Malatang, guo bao rou, món Trung Quốc", es: "Malatang, guo bao rou, comida china" },
  "양꼬치, 꿔바로우, 중국 동북요리": { ko: "양꼬치, 꿔바로우, 중국 동북요리", en: "Lamb skewers, guo bao rou, Chinese northeastern cuisine", th: "เนื้อแกะเสียบไม้ กัวเปาโร่ว อาหารจีนภาคตะวันออกเฉียงเหนือ", ja: "ラム串、グオバオロウ、中国東北料理", zh: "羊肉串、锅包肉、东北菜", vi: "Xiên thịt cừu, guo bao rou, món Đông Bắc Trung Quốc", es: "Brochetas de cordero, guo bao rou, cocina del noreste de China" },
  "양꼬치, 마라탕, 꿔바로우, 중국 동북요리": { ko: "양꼬치, 마라탕, 꿔바로우, 중국 동북요리", en: "Lamb skewers, malatang, guo bao rou, Chinese northeastern cuisine", th: "เนื้อแกะเสียบไม้ หมาล่าทัง กัวเปาโร่ว อาหารจีนภาคตะวันออกเฉียงเหนือ", ja: "ラム串、マーラータン、グオバオロウ、中国東北料理", zh: "羊肉串、麻辣烫、锅包肉、东北菜", vi: "Xiên thịt cừu, malatang, guo bao rou, món Đông Bắc Trung Quốc", es: "Brochetas de cordero, malatang, guo bao rou, cocina del noreste de China" },
  "양꼬치, 마라탕, 꿔바로우, 중국 음식": { ko: "양꼬치, 마라탕, 꿔바로우, 중국 음식", en: "Lamb skewers, malatang, guo bao rou, Chinese food", th: "เนื้อแกะเสียบไม้ หมาล่าทัง กัวเปาโร่ว อาหารจีน", ja: "ラム串、マーラータン、グオバオロウ、中華料理", zh: "羊肉串、麻辣烫、锅包肉、中国菜", vi: "Xiên thịt cừu, malatang, guo bao rou, món Trung Quốc", es: "Brochetas de cordero, malatang, guo bao rou, comida china" }
};
let n = 0;
for (const k in add) { if (!t.items[k]) { t.items[k] = add[k]; n++; } }
fs.writeFileSync(p, JSON.stringify(t, null, 1), "utf8");
console.log("신규 번역 추가:", n, "/ items 총:", Object.keys(t.items).length);
