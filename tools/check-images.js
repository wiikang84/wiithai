// 가이드 이미지 URL 전수 점검 (2026-06-04)
const fs = require("fs");
const path = require("path");
const https = require("https");

const src = fs.readFileSync(path.join(__dirname, "..", "data", "info-guide.js"), "utf8");
const files = [...new Set([...src.matchAll(/wiiInfoImage\("([^"]+)"\)/g)].map((m) => m[1]))];

function head(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: "HEAD", headers: { "User-Agent": "wiiinfo-check/1.0" } }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        const next = new URL(res.headers.location, url).href;
        head(next).then(resolve);
      } else {
        resolve(res.statusCode);
      }
      res.resume();
    });
    req.on("error", () => resolve("ERR"));
    req.setTimeout(15000, () => { req.destroy(); resolve("TIMEOUT"); });
    req.end();
  });
}

(async () => {
  console.log(`고유 이미지 ${files.length}개 점검`);
  const bad = [];
  for (const f of files) {
    const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}?width=900`;
    const status = await head(url);
    if (status !== 200) bad.push(`${status} ${f}`);
    process.stdout.write(status === 200 ? "." : "X");
  }
  console.log("\n");
  console.log(bad.length ? "깨진 이미지:\n" + bad.join("\n") : "전부 정상(200)");
})();
