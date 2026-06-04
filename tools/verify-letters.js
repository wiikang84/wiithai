// 3-2 문자표 확장 검증: 문자 모드 카드 수 + 음성 URL 200 확인 (2026-06-04)
const { chromium } = require("playwright-core");

(async () => {
  const browser = await chromium.connectOverCDP("http://127.0.0.1:9333");
  const context = browser.contexts()[0] || (await browser.newContext());
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message.slice(0, 150)));

  const expected = { ja: 92, zh: 30, vi: 35, es: 27, th: 38, ko: 24, en: 26 };
  const r = { letters: {}, audioChecks: {} };

  for (const lang of Object.keys(expected)) {
    // 한국인 프로필에서 각 언어 학습 (ko는 태국인 프로필에서)
    const from = lang === "ko" ? "th" : "ko";
    await page.goto(`https://wiiinfo.web.app/?from=${from}&learn=${lang}`, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForSelector("#lettersModeButton", { timeout: 15000 });
    await page.locator("#lettersModeButton").click();
    await page.waitForTimeout(700);
    const count = await page.locator(".letterCard").count();
    r.letters[lang] = `${count} (기대 ${expected[lang]}) ${count === expected[lang] ? "OK" : "MISMATCH"}`;
  }

  // 새로 생성된 마지막 문자 음성 URL이 실제 200인지 확인
  r.audioChecks = await page.evaluate(async () => {
    const targets = [
      "./audio-ja/letters/092.mp3", "./audio-ja-male/letters/092.mp3",
      "./audio-zh/letters/030.mp3", "./audio-vi/letters/035.mp3", "./audio-es/letters/027.mp3"
    ];
    const out = {};
    for (const t of targets) {
      const res = await fetch(t, { method: "HEAD" });
      out[t] = res.status;
    }
    return out;
  });

  r.pageErrors = errors;
  console.log(JSON.stringify(r, null, 2));
  await page.close();
  await browser.close();
})().catch((e) => {
  console.error("VERIFY FAIL:", e.message);
  process.exit(1);
});
