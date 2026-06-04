// 3-3 검증: 200문장 표시, 신규 카테고리 탭, 신규 음성 200 응답, 여성형 변환 (2026-06-04)
const { chromium } = require("playwright-core");

(async () => {
  const browser = await chromium.connectOverCDP("http://127.0.0.1:9333");
  const context = browser.contexts()[0] || (await browser.newContext());
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message.slice(0, 150)));

  const r = {};
  await page.goto("https://wiiinfo.web.app/?from=ko&learn=th", { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForSelector(".phraseCard", { timeout: 15000 });

  r.totalCount = await page.locator("#totalCount").innerText();
  r.categoryTabs = await page.locator("#categoryTabs button").allInnerTexts();

  // 신규 카테고리(부동산) 필터 동작
  await page.locator("#categoryTabs button", { hasText: "부동산" }).click();
  await page.waitForTimeout(500);
  r.realtyCount = await page.locator("#totalCount").innerText();
  r.realtyFirst = (await page.locator(".phraseCard .korean").first().innerText()).trim();
  r.realtyThai = (await page.locator(".phraseCard .thai").first().innerText()).trim();

  // 신규 음성 응답 (여성 #161, 남성 #200, 한국어 #150)
  r.audioStatus = await page.evaluate(async () => {
    const targets = ["./audio/phrases/161.mp3", "./audio-male/phrases/200.mp3", "./audio-ko/phrases/150.mp3", "./audio-ja/phrases/200.mp3"];
    const out = {};
    for (const t of targets) out[t] = (await fetch(t, { method: "HEAD" })).status;
    return out;
  });

  // 여성 음성 모드에서 여성형 태국어 표시 확인 (#161 ผม→ฉัน)
  r.femaleThai = r.realtyThai.includes("ฉัน") ? "여성형 OK (ฉัน)" : r.realtyThai;

  // 남성 전환 후
  await page.locator("#maleVoiceButton").click();
  await page.waitForTimeout(500);
  r.maleThai = (await page.locator(".phraseCard .thai").first().innerText()).includes("ผม") ? "남성형 OK (ผม)" : "확인 필요";

  // 영어 사용자 → 일본어 학습 신규 문장
  await page.goto("https://wiiinfo.web.app/?from=en&learn=ja", { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForSelector(".phraseCard", { timeout: 15000 });
  r.enJaTotal = await page.locator("#totalCount").innerText();
  await page.locator("#searchInput").fill("hospital");
  await page.waitForTimeout(500);
  r.enSearchHospital = await page.locator(".phraseCard").count();

  r.pageErrors = errors;
  console.log(JSON.stringify(r, null, 2));
  await page.close();
  await browser.close();
})().catch((e) => {
  console.error("VERIFY FAIL:", e.message);
  process.exit(1);
});
