window.WIIINFO_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCV4nNKfCxxtmkzw868uc7nSFTbYciyGpA",
  authDomain: "wiigame-448c7.firebaseapp.com",
  projectId: "wiigame-448c7",
  storageBucket: "wiigame-448c7.firebasestorage.app",
  messagingSenderId: "818513928188",
  appId: "1:818513928188:web:9018c4024701d0df13dc79",
  measurementId: "G-4YQ97308W9" // Analytics 도입 (2026-06-04, firebase apps:sdkconfig에서 확인)
};

window.WIIINFO_FIRESTORE_COLLECTION = "wiiinfoPhrases";
// Firebase Console > Authentication에서 Google 로그인 제공업체를 활성화한 뒤 true로 바꿀 것
window.WIIINFO_AUTH_ENABLED = true;
// Kakao Developers > 앱 > 플랫폼 키의 JavaScript Key.
// 등록 도메인 예: https://wiiinfo.web.app, http://localhost:5173 또는 실제 테스트 포트
window.WIIINFO_KAKAO_JS_KEY = "02feb593e5336ca301b1e5a08eaf4612";
// [2026-06-18 L2] 운영자(master) 이메일 단일 출처 — app.js·store-admin.html 공유.
// ⚠️ firestore.rules / storage.rules 의 isMaster()와 동일하게 유지할 것 (Firebase rules는 별도 언어라 코드 공유 불가).
window.WIIINFO_MASTER_EMAILS = ["dy17715@naver.com", "tmzkt2@gmail.com", "ironyjk@gmail.com", "dylab177151@gmail.com"];
