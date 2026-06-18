// wiiInfo 서비스워커 (2026-06-04 PWA 도입)
// 배포 시 SW_VERSION을 index.html ?v= / app.js ASSET_VERSION과 같이 올릴 것
// 주의: controllerchange 자동 reload 금지 (구버전-신버전 충돌로 무한 새로고침 사고 예방)
const SW_VERSION = "20260618-08";
const CORE_CACHE = `wiiinfo-core-${SW_VERSION}`;
// const AUDIO_CACHE = "wiiinfo-audio-v1"; // 구 버전 (2026-06-04 문자 음성 재생성으로 v2 승격)
const AUDIO_CACHE = "wiiinfo-audio-v4"; // 재생한 mp3만 저장. 음성 파일을 다시 생성하면 버전을 올릴 것 (v3: 2026-06-04 th/ko 전체 재생성 + 문장 200 확장)
const RUNTIME_CACHE = "wiiinfo-runtime-v1"; // firebase SDK 등 CDN
const IMAGE_CACHE = "wiiinfo-images-v1"; // 가이드 사진 (2026-06-04 자체 호스팅 전환)

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./privacy.html",
  "./styles.css",
  "./app.js",
  "./phrases.js",
  "./multilingual-data.js",
  "./data/places.js",
  "./data/info-guide.js",
  "./firebase-config.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CORE_CACHE).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          // 구 코드: core 캐시만 정리 → 오디오 캐시 버전업 시 구 버전이 남음 (2026-06-04 보강)
          .filter((key) =>
            (key.startsWith("wiiinfo-core-") && key !== CORE_CACHE) ||
            (key.startsWith("wiiinfo-audio-") && key !== AUDIO_CACHE) ||
            (key.startsWith("wiiinfo-images-") && key !== IMAGE_CACHE)
          )
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);

  // mp3: 캐시 우선 — 한 번 들은 음성은 오프라인에서도 재생 (전체 선캐시는 용량 문제로 안 함)
  if (url.pathname.endsWith(".mp3")) {
    event.respondWith(cacheFirst(request, AUDIO_CACHE));
    return;
  }

  // 가이드 사진: 캐시 우선 (잘 안 바뀌는 정적 자산, 2026-06-04)
  if (url.origin === location.origin && url.pathname.includes("/images/")) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
    return;
  }

  // 같은 출처(html/js/css/아이콘): 네트워크 우선, 오프라인일 때만 캐시 — 항상 최신 자산 우선
  if (url.origin === location.origin) {
    event.respondWith(networkFirst(request, CORE_CACHE));
    return;
  }

  // firebase SDK CDN: 네트워크 우선 + 캐시 백업 (오프라인 재실행 대비)
  if (url.hostname === "www.gstatic.com") {
    event.respondWith(networkFirst(request, RUNTIME_CACHE));
  }
  // 그 외(Firestore API, Analytics 수집 등)는 서비스워커 개입 없이 통과
});

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  // ignoreSearch: ?v= 버전이 바뀌어도 저장된 음성을 재사용 (음성 자체를 다시 만들면 AUDIO_CACHE 이름을 올려서 비움)
  const cached = await cache.match(request, { ignoreSearch: true });
  if (cached) return cached;
  const response = await fetch(request);
  // if (response.ok) cache.put(request, response.clone()); // 구 코드: 206(Range 부분응답)은 put이 실패해서 오디오가 캐시 안 됨 (2026-06-04 수정)
  if (response.status === 200 && isAudioResponse(response)) {
    cache.put(request, response.clone()).catch(() => {});
  } else if (response.status === 206) {
    // Range 응답은 캐시에 저장할 수 없으므로 전체 파일을 백그라운드로 받아 저장
    fetch(request.url)
      .then((full) => { if (full.status === 200 && isAudioResponse(full)) return cache.put(request.url, full); })
      .catch(() => {});
  }
  return response;
}

function isAudioResponse(response) {
  return (response.headers.get("content-type") || "").toLowerCase().startsWith("audio/");
}

async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    // 오프라인에서 처음 여는 경로는 index.html로 폴백 (SPA rewrite와 동일 동작)
    if (request.mode === "navigate") {
      const fallback = await cache.match("./index.html");
      if (fallback) return fallback;
    }
    throw error;
  }
}
