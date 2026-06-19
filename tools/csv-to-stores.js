// [2026-06-19] 공공데이터 CSV(경기 무슬림친화 + 김해 외국인음식점) → 표준 stores 스키마 변환
// 인천("외국인 이용 편리"=관광객용 한식)은 형님 결정으로 제외.
// 실행: node tools/csv-to-stores.js → data/collected/_csv_converted.json (검색팀 149개와 중복 제거된 신규분)
const fs = require("fs"), path = require("path");
const BASE = path.join(__dirname, "..", "data", "collected");
const read = (f) => JSON.parse(fs.readFileSync(path.join(BASE, f), "utf8"));

// 국적 한글 → 표준 nationalities 키
const NAT = {
  "중국": ["china"], "우즈베키스탄": ["uzbekistan", "central-asia"], "베트남": ["vietnam"],
  "러시아": ["russia"], "태국": ["thai"], "인도네시아": ["indonesia"], "미얀마": ["myanmar"],
  "카자흐스탄": ["central-asia"], "캄보디아": ["cambodia"], "네팔": ["nepal"],
  "방글라데시": ["bangladesh"], "몽골": ["mongolia"], "키르기스스탄": ["central-asia"], "필리핀": ["philippines"]
};
const SKIP_NAT = new Set(["미국", "캐나다", "일본"]); // 우리 타겟(외국인 거주민 외국음식) 아님
// 국적 → items 기본 음식명(기존 translations 키와 최대한 일치시켜 번역 재사용)
const NAT_FOOD = {
  "중국": "중국 음식", "베트남": "베트남 음식", "태국": "태국 음식", "인도네시아": "인도네시아 음식",
  "미얀마": "미얀마 음식", "캄보디아": "캄보디아 음식", "네팔": "네팔 음식", "러시아": "러시아 음식",
  "우즈베키스탄": "우즈베키스탄 음식", "카자흐스탄": "중앙아시아 음식", "키르기스스탄": "중앙아시아 음식",
  "몽골": "몽골 음식", "방글라데시": "방글라데시 음식", "필리핀": "필리핀 음식"
};
// 경기 '종류' → nationalities(+halal) + items
const GG_TYPE = {
  "인도식": { nat: ["india", "halal"], item: "인도 음식, 커리" },
  "인도네시아식": { nat: ["indonesia", "halal"], item: "인도네시아 음식" },
  "네팔인도식": { nat: ["nepal", "india", "halal"], item: "인도·네팔 음식, 커리" },
  "우즈베키스탄식": { nat: ["uzbekistan", "central-asia", "halal"], item: "우즈베키스탄 음식" },
  "터키식": { nat: ["halal"], item: "터키·중동 음식, 할랄" },
  "방글라데시식": { nat: ["bangladesh", "halal"], item: "방글라데시 음식, 할랄" },
  "파키스탄식": { nat: ["pakistan", "halal"], item: "인도·파키스탄 음식, 할랄" },
  "지중해식": { nat: ["halal"], item: "지중해·중동 음식, 할랄" }
};
// 김해에서 제외할 한국형 업종(외국인이 운영해도 현지 음식이라 타겟 아님)
const KO_UPTAE = new Set(["한식", "식육(숯불구이)", "커피숍", "기타 휴게음식점", "호프/통닭",
  "일반조리판매", "일식", "경양식", "분식", "감성주점", "패밀리레스트랑", "패스트푸드", "편의점"]);

const out = [];

// === 경기 (무슬림친화, 전부 적합·할랄) ===
read("_raw_gyeonggi.json").forEach((r) => {
  const t = GG_TYPE[(r["종류"] || "").trim()] || { nat: ["halal"], item: "할랄 음식" };
  out.push({
    name: { ko: (r["상호"] || "").trim() }, category: "halal", nationalities: t.nat,
    address: { ko: (r["주소"] || "").trim() }, region: "경기 " + (r["지역"] || "").trim(),
    phone: (r["연락처"] || "").trim(), items: { ko: t.item },
    source: "data.go.kr 경기관광공사 무슬림친화",
    sourceUrl: "https://www.data.go.kr/data/15099378/fileData.do", confidence: "high"
  });
});

// === 김해 (외국음식만 선별) ===
read("_raw_gimhae.json").forEach((r) => {
  const nat = (r["국적"] || "").trim();
  const upte = (r["업태명"] || "").trim();
  if (SKIP_NAT.has(nat)) return;          // 미/캐/일 제외
  const keys = NAT[nat]; if (!keys) return; // 매핑 안 되는 국적 제외
  const isForeignBakery = upte === "제과점영업" && /러시아|우즈베키스탄|카자흐스탄|키르기스스탄/.test(nat);
  if (KO_UPTAE.has(upte) && !isForeignBakery) return; // 한국형 업종 제외(외국 베이커리는 예외)
  let item = NAT_FOOD[nat] || (nat + " 음식");
  if (isForeignBakery) item = (NAT_FOOD[nat] || nat + " 음식") + ", 베이커리";
  const conf = (upte === "외국음식전문점(인도,태국등)" || upte === "중국식") ? "high" : "medium";
  out.push({
    name: { ko: (r["업소명"] || "").trim() }, category: isForeignBakery ? "grocery" : "restaurant",
    nationalities: keys, address: { ko: (r["소재지(도로명)"] || r["소재지(지번)"] || "").trim() },
    region: "경남 김해시", phone: "", items: { ko: item },
    source: "data.go.kr 김해시 외국인음식점",
    sourceUrl: "https://www.data.go.kr/data/15092353/fileData.do", confidence: conf
  });
});

// === 검색팀 149개 + CSV 내부 중복 제거 ===
const norm = (s) => String(s || "").trim().toLowerCase().replace(/\s+/g, "");
const existing = new Set(read("foreign_stores_collected.json").map((p) => norm(p.name && p.name.ko) + "@@" + norm(p.address && p.address.ko)));
const seen = new Set();
const dedup = out.filter((p) => {
  if (!p.name.ko || !p.address.ko) return false;
  const k = norm(p.name.ko) + "@@" + norm(p.address.ko);
  if (existing.has(k) || seen.has(k)) return false;
  seen.add(k); return true;
});

fs.writeFileSync(path.join(BASE, "_csv_converted.json"), JSON.stringify(dedup, null, 1), "utf8");
console.log("경기+김해 변환 총", out.length, "→ 중복제거 후 신규", dedup.length, "개");
const cat = {}; dedup.forEach((p) => { cat[p.category] = (cat[p.category] || 0) + 1; });
console.log("category:", JSON.stringify(cat));
const tr = read("translations.json").items || {};
const newItems = [...new Set(dedup.map((p) => p.items.ko))].filter((i) => !tr[i]);
console.log("새 items(번역 필요):", newItems.length);
newItems.forEach((i) => console.log("  ·", i));
