// 오디오 오프라인 캐시 집중 검증 (2026-06-04)
const { chromium } = require("playwright-core");

(async () => {
  const browser = await chromium.connectOverCDP("http://127.0.0.1:9333");
  const context = browser.contexts()[0] || (await browser.newContext());
  const page = await context.newPage();

  await page.goto("https://wiiinfo.web.app/?from=ko&learn=th", { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForTimeout(2500); // SW 업데이트(skipWaiting) 대기

  // 새 SW 버전 활성 확인 후 새로고침으로 새 SW가 페이지를 제어하게 함
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);

  const r = {};
  r.swVersionCaches = await page.evaluate(() => caches.keys());
  r.controlled = await page.evaluate(() => Boolean(navigator.serviceWorker.controller));

  // 음성 3개 재생
  const buttons = page.locator(".phraseCard .speakButton");
  for (let i = 0; i < 3; i++) {
    await buttons.nth(i).click();
    await page.waitForTimeout(1200);
  }
  await page.waitForTimeout(2000); // 백그라운드 full fetch 저장 대기

  r.audioCacheEntries = await page.evaluate(async () => {
    if (!(await caches.has("wiiinfo-audio-v1"))) return [];
    const cache = await caches.open("wiiinfo-audio-v1");
    return (await cache.keys()).map((req) => req.url.split("/").slice(-3).join("/"));
  });

  console.log(JSON.stringify(r, null, 2));
  await page.close();
  await browser.close();
})().catch((e) => {
  console.error("VERIFY FAIL:", e.message);
  process.exit(1);
});
