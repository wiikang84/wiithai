// 검색 결과 상위 후보 다운로드 (2026-06-04)
const fs = require("fs");
const path = require("path");
const https = require("https");

const dir = path.join(__dirname, "..", "..", ".playwright-mcp", "photo-candidates");
const results = JSON.parse(fs.readFileSync(path.join(dir, "search-results.json"), "utf8"));

function download(url, file) {
  return new Promise((resolve, reject) => {
    const go = (u, depth) => {
      if (depth > 5) return reject(new Error("redirect loop"));
      https.get(u, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if ([301, 302, 303, 307, 308].includes(res.statusCode)) {
          res.resume();
          return go(new URL(res.headers.location, u).href, depth + 1);
        }
        if (res.statusCode !== 200) { res.resume(); return reject(new Error(`${res.statusCode}`)); }
        const ws = fs.createWriteStream(file);
        res.pipe(ws);
        ws.on("finish", resolve);
        ws.on("error", reject);
      }).on("error", reject);
    };
    go(url, 0);
  });
}

(async () => {
  const perTopic = Number(process.argv[2] ?? 2);
  for (const [key, list] of Object.entries(results)) {
    for (const [i, r] of list.slice(0, perTopic).entries()) {
      const url = `${r.raw}${r.raw.includes("?") ? "&" : "?"}w=900&q=80&fm=jpg&fit=crop`;
      const file = path.join(dir, `${key}-${i + 1}.jpg`);
      try {
        await download(url, file);
        process.stdout.write(`${key}-${i + 1}(${Math.round(fs.statSync(file).size / 1024)}KB) `);
      } catch (e) {
        process.stdout.write(`${key}-${i + 1}:실패(${e.message}) `);
      }
    }
  }
  console.log("\n완료");
})();
