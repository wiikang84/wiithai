// 오디오 캐시 미동작 원인 진단 (2026-06-04)
const { chromium } = require("playwright-core");

(async () => {
  const browser = await chromium.connectOverCDP("http://127.0.0.1:9333");
  const context = browser.contexts()[0] || (await browser.newContext());
  const page = await context.newPage();
  const consoleMsgs = [];
  page.on("console", (m) => consoleMsgs.push(`${m.type()}: ${m.text().slice(0, 150)}`));

  await page.goto("https://wiiinfo.web.app/?from=ko&learn=th", { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForTimeout(2000);

  const r = await page.evaluate(async () => {
    const out = {};
    out.controlled = Boolean(navigator.serviceWorker.controller);

    // 1. 수동 fetch로 SW 경유 + 캐시 저장 확인
    const res = await fetch("./audio/phrases/005.mp3?v=debug");
    out.manualFetchStatus = res.status;
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const cache = await caches.open("wiiinfo-audio-v1");
    out.entriesAfterManualFetch = (await cache.keys()).map((k) => k.url.split("/").slice(-2).join("/"));

    // 2. Audio.play() 결과 확인
    out.audioPlay = await new Promise((resolve) => {
      const audio = new Audio("./audio/phrases/006.mp3?v=debug");
      audio.play().then(() => resolve("played")).catch((e) => resolve("REJECTED: " + e.name + " " + e.message));
      setTimeout(() => resolve("timeout"), 4000);
    });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    out.entriesAfterAudioPlay = (await cache.keys()).map((k) => k.url.split("/").slice(-2).join("/"));
    return out;
  });

  r.console = consoleMsgs.slice(-10);
  console.log(JSON.stringify(r, null, 2));
  await page.close();
  await browser.close();
})().catch((e) => {
  console.error("DEBUG FAIL:", e.message);
  process.exit(1);
});
