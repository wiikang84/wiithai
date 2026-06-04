// Brave 실브라우저로 Unsplash 검색 (봇 차단 우회, 2026-06-04)
// 결과: .playwright-mcp/photo-candidates/search-results.json
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright-core");

const TOPICS = [
  { key: "palace", q: "gyeongbokgung palace" },
  { key: "tower", q: "namsan seoul tower night" },
  { key: "hongdae", q: "seoul street night neon" },
  { key: "hangang", q: "han river seoul park" },
  { key: "lotte", q: "lotte world tower" },
  { key: "nami", q: "nami island" },
  { key: "busan", q: "busan gwangan bridge" },
  { key: "suwon", q: "hwaseong fortress suwon" },
  { key: "gyeongju", q: "gyeongju" },
  { key: "jeonju", q: "jeonju hanok" },
  { key: "hanok", q: "bukchon hanok village" },
  { key: "market", q: "korean street food market" },
  { key: "skyline", q: "seoul skyline night" },
  { key: "civic", q: "seoul street" },
  { key: "transit", q: "seoul subway" },
  { key: "housing", q: "seoul apartment buildings" }
];

(async () => {
  const browser = await chromium.connectOverCDP("http://127.0.0.1:9333");
  const context = browser.contexts()[0];
  const page = await context.newPage();
  await page.goto("https://unsplash.com/s/photos/seoul", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(4000); // 안티봇 통과 대기

  const out = {};
  for (const t of TOPICS) {
    try {
      const results = await page.evaluate(async (q) => {
        const res = await fetch(`/napi/search/photos?query=${encodeURIComponent(q)}&per_page=14`, { headers: { Accept: "application/json" } });
        if (!res.ok) return { error: res.status };
        const json = await res.json();
        return (json.results || [])
          .filter((r) => r.width >= 1200 && !r.premium && !r.plus)
          .map((r) => ({ id: r.id, likes: r.likes || 0, author: r.user?.name || "", desc: (r.alt_description || "").slice(0, 70), raw: r.urls?.raw || "" }))
          .filter((r) => r.raw)
          .sort((a, b) => b.likes - a.likes)
          .slice(0, 4);
      }, t.q);
      out[t.key] = results;
      console.log(`${t.key}: ${Array.isArray(results) ? results.length + "건" : "오류 " + JSON.stringify(results)}`);
      await page.waitForTimeout(900);
    } catch (e) {
      console.log(`${t.key}: 실패 ${e.message}`);
    }
  }

  const dir = path.join(__dirname, "..", "..", ".playwright-mcp", "photo-candidates");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "search-results.json"), JSON.stringify(out, null, 2));
  console.log("저장 완료");
  await page.close();
  await browser.close();
})().catch((e) => { console.error("FAIL:", e.message); process.exit(1); });
