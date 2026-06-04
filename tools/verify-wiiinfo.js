// wiiInfo 실브라우저 검증 (Brave CDP 9333, 2026-06-04)
// 실행: NODE_PATH=전역모듈 설정 후 node tools/verify-wiiinfo.js
const { chromium } = require("playwright-core");

const BASE = "https://wiiinfo.web.app";
const SHOT_DIR = "C:\\Users\\fathe\\dy-openwork\\.playwright-mcp";

(async () => {
  const browser = await chromium.connectOverCDP("http://127.0.0.1:9333");
  const context = browser.contexts()[0] || (await browser.newContext());
  const page = await context.newPage();
  const errors = [];
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text().slice(0, 200)); });
  page.on("pageerror", (err) => errors.push("PAGEERROR: " + err.message.slice(0, 200)));

  const r = {};

  // 1. 딥링크로 진입 (태국인 프로필 + 한국어 학습)
  await page.goto(`${BASE}/?from=th&learn=ko`, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForTimeout(1500);
  r.url = page.url();
  r.cardCount = await page.locator(".phraseCard").count();
  r.activeProfile = (await page.locator("#profileTabs button.active").innerText()).replace(/\s+/g, " ").trim();
  r.activeTarget = (await page.locator("#targetTabs button.active").innerText()).replace(/\s+/g, " ").trim();
  r.countryTabs = (await page.locator("#profileTabs button").allInnerTexts()).map((t) => t.replace(/\s+/g, " ").trim());
  r.htmlLang = await page.evaluate(() => document.documentElement.lang);

  // 2. 오늘 학습 카운터: ▶ 클릭 전후
  r.todayBefore = await page.locator("#todayCount").innerText();
  await page.locator(".phraseCard .speakButton").first().click();
  await page.waitForTimeout(800);
  r.todayAfter = await page.locator("#todayCount").innerText();

  // 3. 즐겨찾기: 별 클릭 → 신 키(wiiinfoFavorites)에 저장되는지
  await page.locator(".phraseCard .starButton").first().click();
  await page.waitForTimeout(400);
  r.favoritesKey = await page.evaluate(() => localStorage.getItem("wiiinfoFavorites"));
  r.favoritesOldKey = await page.evaluate(() => localStorage.getItem("thaiPhraseFavorites"));

  // 4. info 카드 상세 모달 (escapeHtml 적용 후 정상 렌더링 확인)
  await page.locator("#infoCards .infoCard").first().click();
  await page.waitForTimeout(600);
  r.modalVisible = await page.locator(".infoDetailOverlay").isVisible();
  r.modalTitle = (await page.locator("#infoDetailTitle").innerText()).trim();
  r.modalSectionCount = await page.locator(".infoDetailSections section").count();
  await page.keyboard.press("Escape");

  // 5. 서비스워커 + 캐시
  await page.waitForTimeout(2000);
  r.swRegistered = await page.evaluate(async () => {
    const reg = await navigator.serviceWorker.getRegistration();
    return reg ? (reg.active ? "active" : reg.installing ? "installing" : reg.waiting ? "waiting" : "unknown") : "none";
  });
  r.cacheKeys = await page.evaluate(() => caches.keys());
  r.manifestLink = await page.evaluate(() => document.querySelector('link[rel="manifest"]')?.href || "none");

  // 6. 번역 카테고리 검색 (영어 프로필에서 'greetings')
  await page.goto(`${BASE}/?from=en&learn=ko`, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForTimeout(1000);
  await page.locator("#searchInput").fill("greetings");
  await page.waitForTimeout(600);
  r.searchGreetingsCount = await page.locator(".phraseCard").count();
  r.urlAfterEn = page.url();

  // 7. 음성 mp3 응답 확인 (재생 클릭 후 audio 캐시 생성 여부)
  r.audioCacheEntries = await page.evaluate(async () => {
    const has = await caches.has("wiiinfo-audio-v1");
    if (!has) return 0;
    const cache = await caches.open("wiiinfo-audio-v1");
    return (await cache.keys()).length;
  });

  await page.screenshot({ path: `${SHOT_DIR}\\wiiinfo-verify-en.png` });
  await page.goto(`${BASE}/?from=th&learn=ko`, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${SHOT_DIR}\\wiiinfo-verify-th.png` });

  r.consoleErrors = errors;
  console.log(JSON.stringify(r, null, 2));
  await page.close();
  await browser.close();
})().catch((e) => {
  console.error("VERIFY FAIL:", e.message);
  process.exit(1);
});
