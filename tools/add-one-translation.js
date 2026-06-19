// 일회성: 누락된 items 1건 번역 추가
const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "..", "data", "collected", "translations.json");
const t = JSON.parse(fs.readFileSync(p, "utf8"));
const key = "필리핀 식재료·냉동식품·간식·식사, 일요일 노천 장터";
t.items[key] = {
  ko: "필리핀 식재료·냉동식품·간식·식사, 일요일 노천 장터",
  en: "Filipino groceries, frozen food, snacks & meals, Sunday open-air market",
  th: "วัตถุดิบฟิลิปปินส์ อาหารแช่แข็ง ของว่างและอาหาร ตลาดนัดกลางแจ้งวันอาทิตย์",
  ja: "フィリピン食材・冷凍食品・軽食・食事、日曜の青空市場",
  zh: "菲律宾食材、冷冻食品、零食与餐食，周日露天市集",
  vi: "Thực phẩm Philippines, đồ đông lạnh, đồ ăn vặt và bữa ăn, chợ trời Chủ Nhật",
  es: "Productos filipinos, congelados, snacks y comidas, mercado dominical al aire libre"
};
fs.writeFileSync(p, JSON.stringify(t, null, 1), "utf8");
console.log("추가 완료, items 총:", Object.keys(t.items).length);
