// [2026-06-19] CSV 변환분의 새 items 7개 번역 추가
const fs = require("fs"), path = require("path");
const p = path.join(__dirname, "..", "data", "collected", "translations.json");
const t = JSON.parse(fs.readFileSync(p, "utf8"));
const add = {
  "방글라데시 음식, 할랄": { ko: "방글라데시 음식, 할랄", en: "Bangladeshi food, halal", th: "อาหารบังกลาเทศ ฮาลาล", ja: "バングラデシュ料理、ハラル", zh: "孟加拉国菜、清真", vi: "Món Bangladesh, halal", es: "Comida bangladesí, halal" },
  "지중해·중동 음식, 할랄": { ko: "지중해·중동 음식, 할랄", en: "Mediterranean & Middle Eastern food, halal", th: "อาหารเมดิเตอร์เรเนียนและตะวันออกกลาง ฮาลาล", ja: "地中海・中東料理、ハラル", zh: "地中海与中东菜、清真", vi: "Món Địa Trung Hải & Trung Đông, halal", es: "Comida mediterránea y de Oriente Medio, halal" },
  "인도·파키스탄 음식, 할랄": { ko: "인도·파키스탄 음식, 할랄", en: "Indian & Pakistani food, halal", th: "อาหารอินเดียและปากีสถาน ฮาลาล", ja: "インド・パキスタン料理、ハラル", zh: "印度与巴基斯坦菜、清真", vi: "Món Ấn Độ & Pakistan, halal", es: "Comida india y pakistaní, halal" },
  "네팔 음식": { ko: "네팔 음식", en: "Nepali food", th: "อาหารเนปาล", ja: "ネパール料理", zh: "尼泊尔菜", vi: "Món Nepal", es: "Comida nepalí" },
  "방글라데시 음식": { ko: "방글라데시 음식", en: "Bangladeshi food", th: "อาหารบังกลาเทศ", ja: "バングラデシュ料理", zh: "孟加拉国菜", vi: "Món Bangladesh", es: "Comida bangladesí" },
  "러시아 음식, 베이커리": { ko: "러시아 음식, 베이커리", en: "Russian food, bakery", th: "อาหารรัสเซีย เบเกอรี่", ja: "ロシア料理、ベーカリー", zh: "俄罗斯菜、烘焙坊", vi: "Món Nga, tiệm bánh", es: "Comida rusa, panadería" },
  "우즈베키스탄 음식, 베이커리": { ko: "우즈베키스탄 음식, 베이커리", en: "Uzbek food, bakery", th: "อาหารอุซเบกิสถาน เบเกอรี่", ja: "ウズベキスタン料理、ベーカリー", zh: "乌兹别克斯坦菜、烘焙坊", vi: "Món Uzbekistan, tiệm bánh", es: "Comida uzbeka, panadería" }
};
let n = 0;
for (const k in add) { if (!t.items[k]) { t.items[k] = add[k]; n++; } }
fs.writeFileSync(p, JSON.stringify(t, null, 1), "utf8");
console.log("신규 번역 추가:", n, "/ items 총:", Object.keys(t.items).length);
