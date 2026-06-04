// 3-1 지연 로드 검증: 7개 프로필 전부 info 허브 렌더링 + 가이드 동적 로드 확인 (2026-06-04)
const { chromium } = require("playwright-core");

(async () => {
  const browser = await chromium.connectOverCDP("http://127.0.0.1:9333");
  const context = browser.contexts()[0] || (await browser.newContext());
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message.slice(0, 150)));

  const r = { profiles: {} };
  for (const lang of ["ko", "th", "ja", "en", "zh", "vi", "es"]) {
    await page.goto(`https://wiiinfo.web.app/?from=${lang}`, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForSelector("#infoTabs button", { timeout: 15000 });
    r.profiles[lang] = {
      infoTabs: await page.locator("#infoTabs button").count(),
      infoTitle: (await page.locator("#infoTitle").innerText()).trim().slice(0, 30),
      infoCards: await page.locator("#infoCards .infoCard").count(),
      phraseCards: await page.locator(".phraseCard").count()
    };
  }

  // 가이드가 동적 script로 로드됐는지 + 메인 데이터 크기
  r.loadedResources = await page.evaluate(() =>
    performance.getEntriesByType("resource")
      .filter((e) => e.name.includes("multilingual-data") || e.name.includes("info-guide"))
      .map((e) => `${e.name.split("/").slice(-1)[0].split("?")[0]} ${(e.transferSize / 1024).toFixed(1)}KB(전송)`)
  );
  r.pageErrors = errors;
  console.log(JSON.stringify(r, null, 2));
  await page.close();
  await browser.close();
})().catch((e) => {
  console.error("VERIFY FAIL:", e.message);
  process.exit(1);
});
