// 가이드 사진 후보 수집 (Unsplash 공개 검색, 2026-06-04)
// 사용법: node tools/fetch-photo-candidates.js [시작인덱스] [끝인덱스]
const fs = require("fs");
const path = require("path");
const https = require("https");

const TOPICS = [
  { key: "palace", q: "gyeongbokgung palace" },
  { key: "tower", q: "namsan seoul tower" },
  { key: "hongdae", q: "seoul street night neon" },
  { key: "hangang", q: "han river seoul" },
  { key: "lotte", q: "lotte world tower seoul" },
  { key: "nami", q: "nami island korea" },
  { key: "busan", q: "busan gwangan bridge beach" },
  { key: "suwon", q: "hwaseong fortress suwon" },
  { key: "gyeongju", q: "gyeongju korea temple" },
  { key: "jeonju", q: "jeonju hanok village" },
  { key: "hanok", q: "bukchon hanok seoul" },
  { key: "market", q: "korean street food market" },
  { key: "skyline", q: "seoul skyline night" },
  { key: "civic", q: "seoul city street day" },
  { key: "transit", q: "seoul subway station" },
  { key: "housing", q: "seoul apartment buildings" }
];

const outDir = path.join(__dirname, "..", "..", ".playwright-mcp", "photo-candidates");
fs.mkdirSync(outDir, { recursive: true });

function getJson(url, depth = 0) {
  return new Promise((resolve, reject) => {
    if (depth > 5) return reject(new Error("redirect loop"));
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" } }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        res.resume();
        return getJson(new URL(res.headers.location, url).href, depth + 1).then(resolve, reject);
      }
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => {
        if (res.statusCode !== 200) return reject(new Error(`${res.statusCode} ${url}`));
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on("error", reject);
  });
}

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
        ws.on("finish", () => resolve());
        ws.on("error", reject);
      }).on("error", reject);
    };
    go(url, 0);
  });
}

(async () => {
  const from = Number(process.argv[2] ?? 0);
  const to = Number(process.argv[3] ?? TOPICS.length - 1);
  const credits = {};
  for (const topic of TOPICS.slice(from, to + 1)) {
    try {
      const json = await getJson(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(topic.q)}&per_page=12`);
      const results = (json.results || [])
        .filter((r) => r.width >= 1200 && !r.premium)
        .sort((a, b) => (b.likes || 0) - (a.likes || 0))
        .slice(0, 3);
      credits[topic.key] = [];
      for (const [i, r] of results.entries()) {
        const url = `${r.urls.raw}&w=900&q=80&fm=jpg&fit=crop`;
        const file = path.join(outDir, `${topic.key}-${i + 1}.jpg`);
        await download(url, file);
        credits[topic.key].push({ n: i + 1, id: r.id, likes: r.likes, author: r.user?.name, desc: (r.alt_description || "").slice(0, 60), raw: r.urls.raw });
        process.stdout.write(`${topic.key}-${i + 1} `);
      }
      console.log("");
    } catch (e) {
      console.log(`${topic.key}: 실패 — ${e.message}`);
    }
    await new Promise((r) => setTimeout(r, 800));
  }
  const creditFile = path.join(outDir, "credits.json");
  const prev = fs.existsSync(creditFile) ? JSON.parse(fs.readFileSync(creditFile, "utf8")) : {};
  fs.writeFileSync(creditFile, JSON.stringify({ ...prev, ...credits }, null, 2));
  console.log("완료: " + outDir);
})();
