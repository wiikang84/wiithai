(async function () {
  const ASSET_VERSION = "20260618-21";
  const LANGUAGES = window.WIIINFO_LANGUAGES || {};
  const LANGUAGE_NAMES = window.WIIINFO_LANGUAGE_NAMES || {};
  const PROFILES = window.WIIINFO_LEARNER_PROFILES || [];
  const UI_COPY = window.WIIINFO_UI_COPY || {};
  const CATEGORY_LABELS = window.WIIINFO_CATEGORY_LABELS || {};
  const SEARCH_KEYWORDS = window.WIIINFO_SEARCH_KEYWORDS || {};
  const PLACES = window.WIIINFO_PLACES || [];
  const PLACE_COPY = window.WIIINFO_PLACE_COPY || {};
  // [2026-06-18] 언어 버튼/온보딩에 표시할 각 언어의 자국어 이름
  const LANG_NATIVE = { ko: "한국어", th: "ไทย", ja: "日本語", en: "English", zh: "中文", vi: "Tiếng Việt", es: "Español" };
  // [2026-06-18] 온보딩 국기 버튼의 각 언어 환영 한마디 (마케팅팀 카피)
  // ⚠️ th/vi는 출시 전 원어민 검수 권장
  const WELCOME_HELLO = { ko: "환영해요", en: "Welcome", th: "ยินดีต้อนรับ", vi: "Chào mừng", zh: "欢迎", ja: "ようこそ", es: "Bienvenido" };
  // [2026-06-18] 공유 버튼 라벨 (QR 획득루프)
  const SHARE_LABEL = { ko: "공유", en: "Share", th: "แชร์", vi: "Chia sẻ", zh: "分享", ja: "共有", es: "Compartir" };
  const INFO_DEFAULT_UPDATED = "2026-06";
  const INFO_OFFICIAL_CHECK_SECTIONS = new Set(["life", "housing", "realty", "safety", "warning"]);
  const DEFAULT_LOCATION = { lat: 35.5359, lng: 129.3248, label: "울산 남구" };
  const PLACE_CATEGORY_LABELS = {
    all: { ko: "전체", en: "All", th: "ทั้งหมด", ja: "すべて", zh: "全部", vi: "Tất cả", es: "Todo" },
    grocery: { ko: "식료품", en: "Grocery", th: "ของชำ", ja: "食材店", zh: "食品店", vi: "Tạp hóa", es: "Comestibles" },
    halal: { ko: "할랄", en: "Halal", th: "ฮาลาล", ja: "ハラル", zh: "清真", vi: "Halal", es: "Halal" },
    restaurant: { ko: "식당", en: "Restaurant", th: "ร้านอาหาร", ja: "飲食店", zh: "餐厅", vi: "Nhà hàng", es: "Restaurante" },
    remittance: { ko: "송금", en: "Remittance", th: "โอนเงิน", ja: "送金", zh: "汇款", vi: "Chuyển tiền", es: "Remesas" },
    mobile: { ko: "통신", en: "Mobile", th: "มือถือ", ja: "通信", zh: "通信", vi: "Di động", es: "Móvil" }
  };
  const PLACE_NATIONALITY_LABELS = {
    all: { ko: "전 국적", en: "All countries", th: "ทุกประเทศ", ja: "全ての国", zh: "所有国家", vi: "Mọi quốc gia", es: "Todos" },
    vietnam: { ko: "베트남", en: "Vietnam", th: "เวียดนาม", ja: "ベトナム", zh: "越南", vi: "Việt Nam", es: "Vietnam" },
    thai: { ko: "태국", en: "Thailand", th: "ไทย", ja: "タイ", zh: "泰国", vi: "Thái Lan", es: "Tailandia" },
    "southeast-asia": { ko: "동남아", en: "Southeast Asia", th: "เอเชียตะวันออกเฉียงใต้", ja: "東南アジア", zh: "东南亚", vi: "Đông Nam Á", es: "Sudeste Asiático" },
    "central-asia": { ko: "중앙아", en: "Central Asia", th: "เอเชียกลาง", ja: "中央アジア", zh: "中亚", vi: "Trung Á", es: "Asia Central" },
    indonesia: { ko: "인도네시아", en: "Indonesia", th: "อินโดนีเซีย", ja: "インドネシア", zh: "印度尼西亚", vi: "Indonesia", es: "Indonesia" },
    uzbekistan: { ko: "우즈벡", en: "Uzbekistan", th: "อุซเบกิสถาน", ja: "ウズベキスタン", zh: "乌兹别克斯坦", vi: "Uzbekistan", es: "Uzbekistán" },
    halal: { ko: "할랄", en: "Halal", th: "ฮาลาล", ja: "ハラル", zh: "清真", vi: "Halal", es: "Halal" }
  };
  const KOREAN_LETTER_META = {
    "ㄱ": { kind: "consonant", name: "기역", roman: "g/k", example: "가(ga)", desc: { ko: "ㄱ/ㅋ에 가까운 소리", en: "close to g/k", th: "เสียงใกล้ ก/ค", ja: "g/kに近い音", zh: "接近 g/k 的音", vi: "gần âm g/k", es: "sonido parecido a g/k" } },
    "ㄴ": { kind: "consonant", name: "니은", roman: "n", example: "나(na)", desc: { ko: "ㄴ 소리", en: "n sound", th: "เสียงใกล้ น", ja: "nの音", zh: "n 音", vi: "âm n", es: "sonido n" } },
    "ㄷ": { kind: "consonant", name: "디귿", roman: "d/t", example: "다(da)", desc: { ko: "ㄷ/ㅌ에 가까운 소리", en: "close to d/t", th: "เสียงใกล้ ด/ท", ja: "d/tに近い音", zh: "接近 d/t 的音", vi: "gần âm d/t", es: "sonido parecido a d/t" } },
    "ㄹ": { kind: "consonant", name: "리을", roman: "r/l", example: "라(ra)", desc: { ko: "ㄹ 소리", en: "between r and l", th: "เสียงอยู่ระหว่าง ร และ ล", ja: "rとlの間に近い音", zh: "介于 r 和 l 之间", vi: "giữa âm r và l", es: "entre r y l" } },
    "ㅁ": { kind: "consonant", name: "미음", roman: "m", example: "마(ma)", desc: { ko: "ㅁ 소리", en: "m sound", th: "เสียงใกล้ ม", ja: "mの音", zh: "m 音", vi: "âm m", es: "sonido m" } },
    "ㅂ": { kind: "consonant", name: "비읍", roman: "b/p", example: "바(ba)", desc: { ko: "ㅂ/ㅍ에 가까운 소리", en: "close to b/p", th: "เสียงใกล้ บ/ป", ja: "b/pに近い音", zh: "接近 b/p 的音", vi: "gần âm b/p", es: "sonido parecido a b/p" } },
    "ㅅ": { kind: "consonant", name: "시옷", roman: "s", example: "사(sa)", desc: { ko: "ㅅ 소리", en: "s sound", th: "เสียงใกล้ ซ/ส", ja: "sの音", zh: "s 音", vi: "âm s", es: "sonido s" } },
    "ㅇ": { kind: "consonant", name: "이응", roman: "ng/silent", example: "아(a), 강(gang)", desc: { ko: "초성에서는 소리 없음, 받침에서는 ㅇ 소리", en: "silent at the start, ng at the end", th: "ต้นพยางค์ไม่มีเสียง ท้ายพยางค์เป็น ng", ja: "語頭では無音、終声ではng", zh: "音节开头不发音，收尾为 ng", vi: "đầu âm tiết câm, cuối âm tiết là ng", es: "muda al inicio, ng al final" } },
    "ㅈ": { kind: "consonant", name: "지읒", roman: "j", example: "자(ja)", desc: { ko: "ㅈ 소리", en: "j sound", th: "เสียงใกล้ จ", ja: "jに近い音", zh: "接近 j 的音", vi: "gần âm j", es: "sonido parecido a j" } },
    "ㅊ": { kind: "consonant", name: "치읓", roman: "ch", example: "차(cha)", desc: { ko: "ㅊ 소리", en: "ch sound", th: "เสียงใกล้ ช", ja: "chに近い音", zh: "接近 ch 的音", vi: "gần âm ch", es: "sonido ch" } },
    "ㅋ": { kind: "consonant", name: "키읔", roman: "k", example: "카(ka)", desc: { ko: "강한 ㅋ 소리", en: "strong k sound", th: "เสียงใกล้ ค/ข", ja: "強いkの音", zh: "较强的 k 音", vi: "âm k bật hơi", es: "sonido k fuerte" } },
    "ㅌ": { kind: "consonant", name: "티읕", roman: "t", example: "타(ta)", desc: { ko: "강한 ㅌ 소리", en: "strong t sound", th: "เสียงใกล้ ท", ja: "強いtの音", zh: "较强的 t 音", vi: "âm t bật hơi", es: "sonido t fuerte" } },
    "ㅍ": { kind: "consonant", name: "피읖", roman: "p", example: "파(pa)", desc: { ko: "강한 ㅍ 소리", en: "strong p sound", th: "เสียงใกล้ พ/ผ", ja: "強いpの音", zh: "较强的 p 音", vi: "âm p bật hơi", es: "sonido p fuerte" } },
    "ㅎ": { kind: "consonant", name: "히읗", roman: "h", example: "하(ha)", desc: { ko: "ㅎ 소리", en: "h sound", th: "เสียงใกล้ ห", ja: "hの音", zh: "h 音", vi: "âm h", es: "sonido h" } },
    "ㅏ": { kind: "vowel", name: "아", roman: "a", example: "아(a)", desc: { ko: "아 소리", en: "a as in ah", th: "เสียง อา", ja: "アに近い音", zh: "类似 a 的音", vi: "âm a", es: "sonido a abierto" } },
    "ㅑ": { kind: "vowel", name: "야", roman: "ya", example: "야(ya)", desc: { ko: "야 소리", en: "ya sound", th: "เสียง ยา", ja: "ヤに近い音", zh: "ya 音", vi: "âm ya", es: "sonido ya" } },
    "ㅓ": { kind: "vowel", name: "어", roman: "eo", example: "어(eo)", desc: { ko: "어 소리", en: "eo, like a broad uh/aw", th: "เสียง ออ/เออ", ja: "オ/アの中間に近い音", zh: "类似 eo 的音", vi: "âm eo/ơ", es: "sonido eo, entre o y a" } },
    "ㅕ": { kind: "vowel", name: "여", roman: "yeo", example: "여(yeo)", desc: { ko: "여 소리", en: "yeo sound", th: "เสียง ยอ/เยอ", ja: "ヨ/ヤの中間に近い音", zh: "yeo 音", vi: "âm yeo", es: "sonido yeo" } },
    "ㅗ": { kind: "vowel", name: "오", roman: "o", example: "오(o)", desc: { ko: "오 소리", en: "o sound", th: "เสียง โอ", ja: "オの音", zh: "o 音", vi: "âm o", es: "sonido o" } },
    "ㅛ": { kind: "vowel", name: "요", roman: "yo", example: "요(yo)", desc: { ko: "요 소리", en: "yo sound", th: "เสียง โย", ja: "ヨの音", zh: "yo 音", vi: "âm yo", es: "sonido yo" } },
    "ㅜ": { kind: "vowel", name: "우", roman: "u", example: "우(u)", desc: { ko: "우 소리", en: "u/oo sound", th: "เสียง อู", ja: "ウの音", zh: "u 音", vi: "âm u", es: "sonido u" } },
    "ㅠ": { kind: "vowel", name: "유", roman: "yu", example: "유(yu)", desc: { ko: "유 소리", en: "yu sound", th: "เสียง ยู", ja: "ユの音", zh: "yu 音", vi: "âm yu", es: "sonido yu" } },
    "ㅡ": { kind: "vowel", name: "으", roman: "eu", example: "으(eu)", desc: { ko: "으 소리", en: "eu, a flat vowel", th: "เสียง อือ", ja: "ウを横に広げる音", zh: "eu 音，扁平元音", vi: "âm eu/ư", es: "sonido eu, vocal plana" } },
    "ㅣ": { kind: "vowel", name: "이", roman: "i", example: "이(i)", desc: { ko: "이 소리", en: "i/ee sound", th: "เสียง อี", ja: "イの音", zh: "i 音", vi: "âm i", es: "sonido i" } }
  };
  // const INFO_SECTIONS = window.WIIINFO_INFO_SECTIONS || {}; // 구 코드: 가이드 데이터가 data/info-guide.js로 분리되어 지연 로드됨 (2026-06-04)
  function getInfoSections() {
    return window.WIIINFO_INFO_SECTIONS || {};
  }

  // Korea info 가이드(215KB)를 필요 시점에 동적 로드 — 초기 로딩 경량화 (2026-06-04)
  let infoGuideLoad = null;
  function loadInfoGuide() {
    if (getInfoSections().ko) return Promise.resolve();
    if (infoGuideLoad) return infoGuideLoad;
    infoGuideLoad = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = `./data/info-guide.js?v=${ASSET_VERSION}`;
      script.onload = () => resolve();
      script.onerror = () => {
        infoGuideLoad = null; // 실패 시 다음 호출에서 재시도
        resolve();
      };
      document.head.appendChild(script);
    });
    return infoGuideLoad;
  }
  const AUDIO_FOLDERS = {
    ja: { female: "audio-ja", male: "audio-ja-male" },
    en: { female: "audio-en", male: "audio-en-male" },
    zh: { female: "audio-zh", male: "audio-zh-male" },
    vi: { female: "audio-vi", male: "audio-vi-male" },
    es: { female: "audio-es", male: "audio-es-male" }
  };
  let phrases = (window.WIIINFO_MULTI_PHRASES || window.THAI_PHRASES || []).map((item, index) => {
    const audioIndex = Number(item.audioIndex || item.n || index + 1);
    return {
      ...item,
      audioIndex,
      // audioUrl: item.audioUrl || `./audio/phrases/${String(index + 1).padStart(3, "0")}.mp3` // 구 코드: 배열 순서 기준이라 n/audioIndex 지정 시 여성 음성이 어긋남 (2026-06-04 audioIndex 기준으로 수정)
      audioUrl: item.audioUrl || `./audio/phrases/${String(audioIndex).padStart(3, "0")}.mp3`
    };
  });

  // 구 키(thaiPhraseFavorites) → 신 키(wiiinfoFavorites) 즐겨찾기 1회 마이그레이션 (2026-06-04)
  if (!localStorage.getItem("wiiinfoFavorites") && localStorage.getItem("thaiPhraseFavorites")) {
    localStorage.setItem("wiiinfoFavorites", localStorage.getItem("thaiPhraseFavorites"));
  }

  const state = {
    appTab: localStorage.getItem("wiiinfoAppTab") || "nearby",
    placeSearch: "",
    placeCategory: "all",
    placeNationality: "all",
    placeView: "list",
    userLocation: null,
    savedPlaceIds: new Set(readJson("wiiinfoSavedPlaces", [])),
    category: "전체",
    search: "",
    quiz: false,
    info: "life",
    // favorites: new Set(readJson("thaiPhraseFavorites", [])) // 구 키 (2026-06-04 wiiinfoFavorites로 교체)
    favorites: new Set(readJson("wiiinfoFavorites", []))
  };

  const list = document.getElementById("phraseList");
  const letterList = document.getElementById("letterList");
  const loadMoreWrap = document.getElementById("loadMoreWrap");
  const loadMoreButton = document.getElementById("loadMoreButton");
  const loadMoreMeta = document.getElementById("loadMoreMeta");
  const template = document.getElementById("phraseCardTemplate");
  const letterTemplate = document.getElementById("letterCardTemplate");
  const tabs = document.getElementById("categoryTabs");
  const searchInput = document.getElementById("searchInput");
  const quizToggle = document.getElementById("quizToggle");
  const totalCount = document.getElementById("totalCount");
  const favoriteCount = document.getElementById("favoriteCount");
  const todayCount = document.getElementById("todayCount");
  const homeFlagButton = document.getElementById("homeFlagButton");
  const phrasesModeButton = document.getElementById("phrasesModeButton");
  const lettersModeButton = document.getElementById("lettersModeButton");
  const profileTabs = document.getElementById("profileTabs");
  const targetTabs = document.getElementById("targetTabs");
  const femaleVoiceButton = document.getElementById("femaleVoiceButton");
  const maleVoiceButton = document.getElementById("maleVoiceButton");
  const audienceLabel = document.getElementById("audienceLabel");
  const targetLabel = document.getElementById("targetLabel");
  const modeLabel = document.getElementById("modeLabel");
  const voiceLabel = document.getElementById("voiceLabel");
  const quizLabel = document.getElementById("quizLabel");
  const authButton = document.getElementById("authButton");
  const authStatus = document.getElementById("authStatus");
  const authSyncStatus = document.getElementById("authSyncStatus");
  const heroFlagEmoji = document.getElementById("heroFlagEmoji");
  const heroTargetFlagEmoji = document.getElementById("heroTargetFlagEmoji");
  const countryQuestion = document.getElementById("countryQuestion");
  const infoTabs = document.getElementById("infoTabs");
  const infoEyebrow = document.getElementById("infoEyebrow");
  const infoTitle = document.getElementById("infoTitle");
  const infoSummary = document.getElementById("infoSummary");
  const infoCards = document.getElementById("infoCards");
  const infoPanel = document.querySelector(".infoPanel");
  const detailModal = createInfoDetailModal();
  const appViews = {
    nearby: document.getElementById("nearbyView"),
    saved: document.getElementById("savedView"),
    learn: document.getElementById("learnView"),
    me: document.getElementById("meView")
  };
  const bottomNavButtons = [...document.querySelectorAll(".bottomNav [data-app-tab]")];
  const placeTitle = document.getElementById("placeTitle");
  const placeSeedNote = document.getElementById("placeSeedNote");
  const placeLocationButton = document.getElementById("placeLocationButton");
  const placeLocationLabel = document.getElementById("placeLocationLabel");
  const placeLangButton = document.getElementById("placeLangButton");
  const placeLangLabel = document.getElementById("placeLangLabel");
  const langOnboardingClose = document.getElementById("langOnboardingClose");
  const placeSearchInput = document.getElementById("placeSearchInput");
  const placeCategoryTabs = document.getElementById("placeCategoryTabs");
  const placeNationalityTabs = document.getElementById("placeNationalityTabs");
  const placeResultCount = document.getElementById("placeResultCount");
  const placeViewToggle = document.getElementById("placeViewToggle");
  const placeList = document.getElementById("placeList");
  const placeMapPanel = document.getElementById("placeMapPanel");
  const placeMap = document.getElementById("placeMap");
  const placeMapStatus = document.getElementById("placeMapStatus");
  const savedTitle = document.getElementById("savedTitle");
  const savedPlaceList = document.getElementById("savedPlaceList");
  const meTitle = document.getElementById("meTitle");
  const meText = document.getElementById("meText");
  const meAuthButton = document.getElementById("meAuthButton");
  const meAuthStatus = document.getElementById("meAuthStatus");
  const meAuthSyncStatus = document.getElementById("meAuthSyncStatus");
  const ownerRegisterButton = document.getElementById("ownerRegisterButton");
  const ownerRegisterNote = document.getElementById("ownerRegisterNote");
  const placeDetailOverlay = document.getElementById("placeDetailOverlay");
  const placeDetailClose = document.getElementById("placeDetailClose");
  const placeDetailHero = document.getElementById("placeDetailHero");
  const placeDetailMeta = document.getElementById("placeDetailMeta");
  const placeDetailTitle = document.getElementById("placeDetailTitle");
  const placeDetailItems = document.getElementById("placeDetailItems");
  const placeDetailRows = document.getElementById("placeDetailRows");
  const placeDetailCoupon = document.getElementById("placeDetailCoupon");
  const placeDetailActions = document.getElementById("placeDetailActions");
  let kakaoMapLoad = null;
  let kakaoMapInstance = null;
  let kakaoMarkers = [];

  // URL 딥링크: ?from=국가&learn=언어 (2026-06-04) 예: https://wiiinfo.web.app/?from=th&learn=ko
  const urlParams = new URLSearchParams(location.search);
  const urlFrom = (urlParams.get("from") || "").toLowerCase();
  const urlLearn = (urlParams.get("learn") || "").toLowerCase();
  const urlPlace = (urlParams.get("place") || "").trim(); // [2026-06-18] QR/공유 딥링크: 가게 상세 직접 열기 (영업 QR 포스터 진입점)
  const hasValidUrlFrom = PROFILES.some((profile) => profile.id === urlFrom);
  // [2026-06-18 P1-b] 첫 방문(저장된 언어 없음 + 딥링크 아님) → 진입 시 언어 선택 온보딩 표시
  const needsLangOnboarding = !localStorage.getItem("wiiinfoProfileId") && !hasValidUrlFrom;

  let categories = [];
  let currentMode = "phrases";
  let visibleLimit = 0;
  let voiceMode = localStorage.getItem("wiiinfoVoiceMode") || "female";
  let auth = null;
  let db = null;
  let currentUser = null;
  let firebaseReady = false;
  let syncTimer = null;
  // let profileId = localStorage.getItem("wiiinfoProfileId") || preferredProfileId(); // 구 코드 (2026-06-04 URL 파라미터 우선)
  let profileId = hasValidUrlFrom ? urlFrom : (localStorage.getItem("wiiinfoProfileId") || preferredProfileId());
  let activeProfile = getProfile(profileId);
  let sourceLang = activeProfile.source;
  // let targetLang = localStorage.getItem("wiiinfoTargetLang") || activeProfile.targets[0]; // 구 코드 (2026-06-04 URL 파라미터 우선)
  let targetLang = activeProfile.targets.includes(urlLearn) ? urlLearn : (localStorage.getItem("wiiinfoTargetLang") || activeProfile.targets[0]);
  if (!activeProfile.targets.includes(targetLang)) targetLang = activeProfile.targets[0];
  // 딥링크로 열었으면 선택을 저장해 다음 방문에도 유지 (2026-06-04)
  if (hasValidUrlFrom) {
    localStorage.setItem("wiiinfoProfileId", profileId);
    localStorage.setItem("wiiinfoTargetLang", targetLang);
  }

  // 현재 상태를 URL에 반영 — 주소만 복사해도 같은 화면이 열리는 공유용 딥링크 (2026-06-04)
  function syncUrl() {
    try {
      const params = new URLSearchParams(location.search);
      params.set("from", profileId);
      params.set("learn", targetLang);
      history.replaceState(null, "", `${location.pathname}?${params.toString()}${location.hash || ""}`);
    } catch (error) {
      // file:// 등 replaceState 미지원 환경은 무시
    }
  }

  function readJson(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      localStorage.removeItem(key);
      return fallback;
    }
  }

  function getProfile(id) {
    return PROFILES.find((profile) => profile.id === id) || PROFILES[0] || {
      id: "ko",
      source: "ko",
      targets: ["th"],
      label: "한국인이 배워요",
      flag: "🇰🇷"
    };
  }

  function preferredProfileId() {
    const locale = (navigator.language || navigator.userLanguage || "").toLowerCase();
    const prefix = locale.split("-")[0];
    const mapped = { en: "en", ja: "ja", th: "th", zh: "zh", vi: "vi", es: "es", ko: "ko" }[prefix] || "en";
    return PROFILES.some((profile) => profile.id === mapped) ? mapped : "en";
  }

  async function loadFirebasePhrases() {
    if (!window.firebase || !window.WIIINFO_FIREBASE_CONFIG) return [];
    try {
      if (!firebase.apps.length) firebase.initializeApp(window.WIIINFO_FIREBASE_CONFIG);
      const collection = window.WIIINFO_FIRESTORE_COLLECTION || "wiiinfoPhrases";
      const snapshot = await firebase.firestore().collection(collection).where("isActive", "==", true).get();

      return snapshot.docs.map((doc, index) => {
        const data = doc.data();
        const audioIndex = Number(data.audioIndex || data.n || data.sortOrder || index + 1);
        const extra = window.WIIINFO_EXTRA_PHRASES?.[audioIndex - 1] || {};
        const baseThai = data.th || "";
        const baseRoman = data.roman || data.ro || "";
        return {
          id: doc.id,
          c: data.category || "기타",
          ko: data.ko || "",
          th: baseThai,
          thMale: data.thMale || baseThai,
          thFemale: data.thFemale || (window.WIIINFO_MAKE_FEMALE_THAI ? window.WIIINFO_MAKE_FEMALE_THAI(baseThai) : baseThai),
          ro: baseRoman,
          roMale: data.roMale || baseRoman,
          roFemale: data.roFemale || (window.WIIINFO_MAKE_FEMALE_ROMAN ? window.WIIINFO_MAKE_FEMALE_ROMAN(baseRoman) : baseRoman),
          en: data.en || extra.en || "",
          ja: data.ja || extra.ja || "",
          zh: data.zh || extra.zh || "",
          vi: data.vi || extra.vi || "",
          es: data.es || extra.es || "",
          roByLang: data.roByLang || extra.ro || {},
          audioUrl: data.audioUrl || "",
          audioUrlMale: data.audioUrlMale || "",
          koAudioUrl: data.koAudioUrl || "",
          koAudioUrlMale: data.koAudioUrlMale || "",
          audioIndex,
          sortOrder: data.sortOrder || 0
        };
      }).filter((item) => item.ko && item.th)
        .sort((a, b) => a.sortOrder - b.sortOrder);
    } catch (error) {
      console.warn("Firestore 문장 로드 실패, 로컬 문장으로 대체합니다.", error);
      return [];
    }
  }

  function refreshCategories() {
    categories = ["전체", ...Array.from(new Set(availablePhrases().map((item) => item.c)))];
  }

  function categoryLabel(category) {
    return CATEGORY_LABELS[sourceLang]?.[category] || CATEGORY_LABELS.ko?.[category] || category;
  }

  function categorySearchText(category) {
    const keywordGroups = SEARCH_KEYWORDS.categories || {};
    const labels = Object.values(CATEGORY_LABELS).map((labelsByLang) => labelsByLang?.[category]).filter(Boolean);
    const aliases = Object.values(keywordGroups).flatMap((keywordsByLang) => keywordsByLang?.[category] || []);
    return [...new Set([...labels, ...aliases])].join(" ");
  }

  function saveFavorites() {
    // localStorage.setItem("thaiPhraseFavorites", JSON.stringify([...state.favorites])); // 구 키 (2026-06-04 wiiinfoFavorites로 교체)
    localStorage.setItem("wiiinfoFavorites", JSON.stringify([...state.favorites]));
    favoriteCount.textContent = state.favorites.size;
    queueCloudFavoriteSync();
  }

  function getFirebaseApp() {
    if (!window.firebase || !window.WIIINFO_FIREBASE_CONFIG) return null;
    if (!firebase.apps.length) firebase.initializeApp(window.WIIINFO_FIREBASE_CONFIG);
    firebaseReady = true;
    return firebase.app();
  }

  function authText(key, fallback) {
    return uiText(key) || fallback;
  }

  function updateAuthUi(statusKey) {
    const signedIn = !!currentUser;
    const unavailable = statusKey === "authUnavailable";
    const buttonText = signedIn ? authText("authSignOut", "Sign out") : authText("authSignIn", "Sign in with Google");
    const statusText = signedIn
      ? authText("authSignedIn", "Signed in").replace("{name}", currentUser.displayName || currentUser.email || "Google")
      : authText("authGuest", "Guest mode");
    const key = statusKey || (signedIn ? "authSyncCloud" : "authSyncLocal");
    const syncText = authText(key, signedIn ? "Saved items sync with your Google account." : "Saved items stay on this device.");

    [
      { button: authButton, status: authStatus, sync: authSyncStatus },
      { button: meAuthButton, status: meAuthStatus, sync: meAuthSyncStatus }
    ].forEach((view) => {
      if (!view.button || !view.status || !view.sync) return;
      view.button.disabled = unavailable;
      view.button.textContent = buttonText;
      view.status.textContent = statusText;
      view.sync.textContent = syncText;
    });
  }

  async function initAuth() {
    try {
      getFirebaseApp();
      if (!window.firebase?.auth || !window.firebase?.firestore) {
        updateAuthUi("authSyncLocal");
        return;
      }
      if (!window.WIIINFO_AUTH_ENABLED) {
        updateAuthUi("authUnavailable");
        return;
      }
      auth = firebase.auth();
      db = firebase.firestore();
      auth.onAuthStateChanged(async (user) => {
        currentUser = user;
        updateAuthUi(user ? "authSyncing" : "authSyncLocal");
        if (user) await mergeCloudFavorites(user);
      });
    } catch (error) {
      updateAuthUi("authSyncError");
    }
  }

  async function toggleAuth() {
    try {
      if (!auth) await initAuth();
      if (!auth) return;
      if (currentUser) {
        await auth.signOut();
        track("sign_out", { source: sourceLang });
        return;
      }
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      await auth.signInWithPopup(provider);
      track("sign_in_google", { source: sourceLang });
    } catch (error) {
      updateAuthUi("authSyncError");
    }
  }

  function userDoc(user) {
    if (!db || !user) return null;
    return db.collection("users").doc(user.uid);
  }

  async function mergeCloudFavorites(user) {
    const ref = userDoc(user);
    if (!ref) return;
    try {
      const snap = await ref.get();
      const data = snap.exists ? snap.data() : {};
      const remoteIds = Array.isArray(data.favoriteIds) ? data.favoriteIds.filter(Boolean) : [];
      const merged = [...new Set([...remoteIds, ...state.favorites])];
      state.favorites = new Set(merged);
      localStorage.setItem("wiiinfoFavorites", JSON.stringify(merged));
      favoriteCount.textContent = state.favorites.size;
      if (currentMode === "letters") renderLetters();
      else render();
      await writeUserDoc(user, merged, !snap.exists);
      updateAuthUi("authSyncCloud");
    } catch (error) {
      updateAuthUi("authSyncError");
    }
  }

  async function writeUserDoc(user, favoriteIds, isNew) {
    const ref = userDoc(user);
    if (!ref) return;
    const now = firebase.firestore.FieldValue.serverTimestamp();
    const payload = {
      uid: user.uid,
      email: user.email || "",
      displayName: user.displayName || "",
      photoURL: user.photoURL || "",
      preferredFrom: profileId,
      preferredLearn: targetLang,
      favoriteIds,
      updatedAt: now,
      lastLoginAt: now
    };
    if (isNew) payload.createdAt = now;
    await ref.set(payload, { merge: true });
  }

  function queueCloudFavoriteSync() {
    if (!currentUser || !db || !firebaseReady) return;
    window.clearTimeout(syncTimer);
    syncTimer = window.setTimeout(async () => {
      try {
        updateAuthUi("authSyncing");
        await writeUserDoc(currentUser, [...state.favorites], false);
        updateAuthUi("authSyncCloud");
      } catch (error) {
        updateAuthUi("authSyncError");
      }
    }, 450);
  }

  // 오늘 학습 카운트: 오늘 음성을 들은 항목 수 (2026-06-04 구현, 이전엔 항상 0 표시)
  function todayKey() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }

  function todayLearnedCount() {
    const saved = readJson("wiiinfoTodayLearned", { date: "", ids: [] });
    return saved.date === todayKey() ? saved.ids.length : 0;
  }

  function markLearned(id) {
    const saved = readJson("wiiinfoTodayLearned", { date: "", ids: [] });
    const ids = new Set(saved.date === todayKey() ? saved.ids : []);
    ids.add(id);
    localStorage.setItem("wiiinfoTodayLearned", JSON.stringify({ date: todayKey(), ids: [...ids] }));
    todayCount.textContent = ids.size;
  }

  // Firebase Analytics (2026-06-04 도입) — 어느 나라 사용자가 어떤 언어 조합을 쓰는지 파악용
  let analytics = null;
  function initAnalytics() {
    try {
      if (window.firebase?.analytics && window.WIIINFO_FIREBASE_CONFIG?.measurementId) {
        getFirebaseApp();
        analytics = firebase.analytics();
      }
    } catch (error) {
      console.warn("Analytics 초기화 실패 (앱 동작에는 영향 없음)", error);
    }
  }

  function track(eventName, params) {
    try {
      if (analytics) analytics.logEvent(eventName, params || {});
    } catch (error) {
      // 수집 실패는 앱 동작에 영향 주지 않도록 무시
    }
  }

  function getVoice(lang) {
    if (!("speechSynthesis" in window)) return null;
    const voices = speechSynthesis.getVoices();
    return voices.find((voice) => voice.lang.toLowerCase().startsWith(lang.toLowerCase().slice(0, 2))) || null;
  }

  function formatIndex(number) {
    return String(number || 0).padStart(3, "0");
  }

  function romanizeKorean(text) {
    const initials = ["g", "kk", "n", "d", "tt", "r", "m", "b", "pp", "s", "ss", "", "j", "jj", "ch", "k", "t", "p", "h"];
    const vowels = ["a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "wo", "we", "wi", "yu", "eu", "ui", "i"];
    const finals = ["", "k", "k", "k", "n", "n", "n", "t", "l", "k", "m", "p", "l", "l", "p", "l", "m", "p", "p", "t", "t", "ng", "t", "t", "k", "t", "p", "t"];
    return text.replace(/[가-힣]+/g, (word) => [...word].map((char) => {
      const code = char.charCodeAt(0) - 0xac00;
      const initial = Math.floor(code / 588);
      const vowel = Math.floor((code % 588) / 28);
      const final = code % 28;
      return `${initials[initial]}${vowels[vowel]}${finals[final]}`;
    }).join("-"));
  }

  function sourceIsThai() {
    return sourceLang === "th";
  }

  function uiText(key) {
    return UI_COPY[sourceLang]?.[key] || UI_COPY.ko?.[key] || key;
  }

  function placeUi(key) {
    return PLACE_COPY[sourceLang]?.[key] || PLACE_COPY.en?.[key] || PLACE_COPY.ko?.[key] || key;
  }

  function localizedValue(value, fallback = "") {
    if (!value) return fallback;
    if (typeof value === "string") return value;
    return value[sourceLang] || value.en || value.ko || Object.values(value).find(Boolean) || fallback;
  }

  function placeCategoryLabel(category) {
    const labels = PLACE_CATEGORY_LABELS[category] || PLACE_CATEGORY_LABELS.all;
    return labels[sourceLang] || labels.en || labels.ko || category;
  }

  function placeNationalityLabel(nationality) {
    const labels = PLACE_NATIONALITY_LABELS[nationality] || PLACE_NATIONALITY_LABELS.all;
    return labels[sourceLang] || labels.en || labels.ko || nationality;
  }

  function savePlaceIds() {
    localStorage.setItem("wiiinfoSavedPlaces", JSON.stringify([...state.savedPlaceIds]));
  }

  function toggleSavedPlace(placeId) {
    if (state.savedPlaceIds.has(placeId)) state.savedPlaceIds.delete(placeId);
    else state.savedPlaceIds.add(placeId);
    savePlaceIds();
    renderPlaces();
    renderSavedPlaces();
    track("toggle_saved_place", { place: placeId, saved: state.savedPlaceIds.has(placeId) });
  }

  function availablePlaceCategories() {
    return ["all", ...Array.from(new Set(PLACES.map((place) => place.category).filter(Boolean)))];
  }

  function availablePlaceNationalities() {
    return ["all", ...Array.from(new Set(PLACES.flatMap((place) => place.nationalities || []).filter(Boolean)))];
  }

  function placeSearchText(place) {
    return [
      localizedValue(place.name),
      localizedValue(place.address),
      localizedValue(place.items),
      placeCategoryLabel(place.category),
      ...(place.nationalities || []).map(placeNationalityLabel),
      ...(place.tags || [])
    ].join(" ").toLowerCase();
  }

  function filteredPlaces(scope = "all") {
    const keyword = state.placeSearch.trim().toLowerCase();
    const location = state.userLocation || DEFAULT_LOCATION;
    return PLACES
      .filter((place) => scope !== "saved" || state.savedPlaceIds.has(place.id))
      .filter((place) => state.placeCategory === "all" || place.category === state.placeCategory)
      .filter((place) => state.placeNationality === "all" || (place.nationalities || []).includes(state.placeNationality))
      .filter((place) => !keyword || placeSearchText(place).includes(keyword))
      .map((place) => ({ ...place, distanceKm: distanceKm(location, place) }))
      .sort((a, b) => (a.distanceKm ?? 999) - (b.distanceKm ?? 999));
  }

  function distanceKm(origin, place) {
    if (!origin?.lat || !origin?.lng || !place?.lat || !place?.lng) return null;
    const radius = 6371;
    const toRad = (value) => value * Math.PI / 180;
    const dLat = toRad(place.lat - origin.lat);
    const dLng = toRad(place.lng - origin.lng);
    const lat1 = toRad(origin.lat);
    const lat2 = toRad(place.lat);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
    return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function distanceLabel(place) {
    if (place.distanceKm == null) return placeUi("needCheck");
    if (place.distanceKm < 1) return `${Math.round(place.distanceKm * 1000)}m`;
    return `${place.distanceKm.toFixed(place.distanceKm < 10 ? 1 : 0)}km`;
  }

  function renderPlaceFilters() {
    if (!placeCategoryTabs || !placeNationalityTabs) return;
    renderPlaceChipGroup(placeCategoryTabs, availablePlaceCategories(), state.placeCategory, (category) => {
      state.placeCategory = category;
      renderPlaces();
    }, placeCategoryLabel);
    renderPlaceChipGroup(placeNationalityTabs, availablePlaceNationalities(), state.placeNationality, (nationality) => {
      state.placeNationality = nationality;
      renderPlaces();
    }, placeNationalityLabel);
  }

  function renderPlaceChipGroup(container, values, activeValue, onSelect, labelFn) {
    container.innerHTML = "";
    values.forEach((value) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = value === activeValue ? "active" : "";
      button.textContent = labelFn(value);
      button.setAttribute("aria-pressed", String(value === activeValue));
      button.addEventListener("click", () => onSelect(value));
      container.appendChild(button);
    });
  }

  function renderPlaceCard(place) {
    const saved = state.savedPlaceIds.has(place.id);
    const sourceBadge = place.source === "demo-seed" ? "DEMO" : place.verified ? placeUi("verified") : placeUi("needCheck");
    const nationalities = (place.nationalities || []).slice(0, 3).map((item) => `<span class="placeNat">${escapeHtml(placeNationalityLabel(item))}</span>`).join("");
    const coupon = place.coupon?.title ? `<p class="placeCouponPill">🎟 ${escapeHtml(localizedValue(place.coupon.title))}</p>` : "";
    // 상태 배지: 인증/확인필요/데모 (색 점 + 텍스트)
    const badgeClass = place.source === "demo-seed" ? "placeBadge--demo" : place.verified ? "placeBadge--ok" : "placeBadge--check";
    const statusBadge = `<span class="placeBadge ${badgeClass}">${escapeHtml(sourceBadge)}</span>`;
    // 사진 있으면 <img>, 없으면 카테고리별 컬러 플레이스홀더 + 큰 이모지 + 이니셜 워터마크
    const emoji = escapeHtml(place.emoji || "🛒");
    const initial = escapeHtml((localizedValue(place.name) || "?").slice(0, 1));
    const cat = escapeHtml(place.category || "all");
    const photoInner = place.photo
      ? `<img class="placePhotoImg" src="${escapeHtml(safeUrl(place.photo))}" alt="${escapeHtml(localizedValue(place.name))}" loading="lazy" />`
      : `<span class="placePhotoEmoji">${emoji}</span><span class="placePhotoInitial">${initial}</span>`;
    return `
      <article class="placeCard" data-place-id="${escapeHtml(place.id)}">
        <button class="placeCardMain" type="button" data-place-open="${escapeHtml(place.id)}">
          <span class="placePhoto placePhoto--${cat}">
            ${photoInner}
            ${statusBadge}
          </span>
          <span class="placeCardBody">
            <span class="placeCardHead">
              <strong>${escapeHtml(localizedValue(place.name))}</strong>
            </span>
            <span class="placeMeta">${escapeHtml(distanceLabel(place))} · ${escapeHtml(localizedValue(place.address))}</span>
            <span class="placeItems">${escapeHtml(localizedValue(place.items))}</span>
            <span class="placeCardFoot">
              <span class="placeTags">${nationalities}</span>
              ${coupon}
            </span>
          </span>
        </button>
        <button class="placeSaveButton ${saved ? "active" : ""}" type="button" data-place-save="${escapeHtml(place.id)}" aria-pressed="${String(saved)}">${saved ? "♥" : "♡"}</button>
      </article>
    `;
  }

  function bindPlaceCardEvents(container) {
    container.querySelectorAll("[data-place-open]").forEach((button) => {
      button.addEventListener("click", () => openPlaceDetail(button.dataset.placeOpen));
    });
    container.querySelectorAll("[data-place-save]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleSavedPlace(button.dataset.placeSave);
        if (button.closest(".placeDetailActions")) openPlaceDetail(button.dataset.placeSave);
      });
    });
    container.querySelectorAll("[data-place-share]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        sharePlace(button.dataset.placeShare, button);
      });
    });
  }

  // [2026-06-18] 가게 공유 — QR/링크 진입점. ?place=<id>&from=<lang> 딥링크 생성
  function sharePlace(placeId, button) {
    const place = PLACES.find((item) => item.id === placeId);
    if (!place) return;
    const url = `${location.origin}${location.pathname}?place=${encodeURIComponent(placeId)}&from=${encodeURIComponent(profileId)}`;
    track("share_place", { place: placeId, source: sourceLang });
    if (navigator.share) {
      navigator.share({ title: `${localizedValue(place.name)} · wiiInfo`, url }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        if (!button) return;
        const original = button.textContent;
        button.textContent = "✓";
        setTimeout(() => { button.textContent = original; }, 1200);
      }).catch(() => {});
    }
  }

  function renderPlaces() {
    if (!placeList) return;
    renderPlaceFilters();
    const places = filteredPlaces();
    placeResultCount.textContent = `${places.length} ${placeUi("results")}`;
    placeViewToggle.innerHTML = state.placeView === "map"
      ? `☰ <span>${escapeHtml(placeUi("list"))}</span>`
      : `🗺 <span>${escapeHtml(placeUi("map"))}</span>`;
    placeList.hidden = state.placeView === "map";
    placeMapPanel.hidden = state.placeView !== "map";
    placeList.innerHTML = places.length
      ? places.map(renderPlaceCard).join("")
      : `<div class="emptyState">${escapeHtml(placeUi("noResults"))}</div>`;
    bindPlaceCardEvents(placeList);
    if (state.placeView === "map") renderPlaceMap(places);
  }

  function renderSavedPlaces() {
    if (!savedPlaceList) return;
    const places = filteredPlaces("saved");
    savedTitle.textContent = placeUi("saved");
    savedPlaceList.innerHTML = places.length
      ? places.map(renderPlaceCard).join("")
      : `<div class="emptyState">${escapeHtml(placeUi("noSaved"))}</div>`;
    bindPlaceCardEvents(savedPlaceList);
  }

  function renderPlaceMap(places) {
    if (!placeMap || !placeMapStatus) return;
    const key = String(window.WIIINFO_KAKAO_JS_KEY || "").trim();
    if (!key) {
      renderFallbackPlaceMap(places);
      placeMapStatus.textContent = placeUi("mapNeedsKey");
      return;
    }
    placeMapStatus.textContent = "";
    renderKakaoPlaceMap(places, key).catch(() => {
      renderFallbackPlaceMap(places);
      placeMapStatus.textContent = placeUi("mapLoadFailed");
    });
  }

  function renderFallbackPlaceMap(places) {
    if (!placeMap) return;
    const points = places.map((place, index) => {
      const left = 24 + ((index * 17) % 56);
      const top = 24 + ((index * 23) % 52);
      return `<button class="fallbackMapPin" type="button" style="left:${left}%;top:${top}%" data-place-open="${escapeHtml(place.id)}">${escapeHtml(place.emoji || "🛒")}</button>`;
    }).join("");
    placeMap.innerHTML = `<div class="fallbackMapGrid"></div><span class="fallbackMapMe"></span>${points}`;
    bindPlaceCardEvents(placeMap);
  }

  function loadKakaoMap(key) {
    if (window.kakao?.maps) return Promise.resolve();
    if (kakaoMapLoad) return kakaoMapLoad;
    kakaoMapLoad = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(key)}&autoload=false&libraries=services`;
      script.onload = () => window.kakao?.maps?.load(resolve);
      script.onerror = reject;
      document.head.appendChild(script);
    });
    return kakaoMapLoad;
  }

  async function renderKakaoPlaceMap(places, key) {
    await loadKakaoMap(key);
    const centerPlace = places.find((place) => place.lat && place.lng) || PLACES[0] || DEFAULT_LOCATION;
    const center = new kakao.maps.LatLng(centerPlace.lat || DEFAULT_LOCATION.lat, centerPlace.lng || DEFAULT_LOCATION.lng);
    if (!kakaoMapInstance) {
      kakaoMapInstance = new kakao.maps.Map(placeMap, { center, level: 6 });
    } else {
      kakaoMapInstance.setCenter(center);
    }
    kakaoMarkers.forEach((marker) => marker.setMap(null));
    kakaoMarkers = places.filter((place) => place.lat && place.lng).map((place) => {
      const marker = new kakao.maps.Marker({
        map: kakaoMapInstance,
        position: new kakao.maps.LatLng(place.lat, place.lng),
        title: localizedValue(place.name)
      });
      kakao.maps.event.addListener(marker, "click", () => openPlaceDetail(place.id));
      return marker;
    });
  }

  function openPlaceDetail(placeId) {
    const place = PLACES.find((item) => item.id === placeId);
    if (!place || !placeDetailOverlay) return;
    const saved = state.savedPlaceIds.has(place.id);
    const routeUrl = place.lat && place.lng
      ? `https://map.kakao.com/link/to/${encodeURIComponent(localizedValue(place.name))},${place.lat},${place.lng}`
      : `https://map.kakao.com/link/search/${encodeURIComponent(localizedValue(place.name))}`;
    const dBadgeClass = place.source === "demo-seed" ? "placeBadge--demo" : place.verified ? "placeBadge--ok" : "placeBadge--check";
    const dBadge = place.source === "demo-seed" ? "DEMO" : place.verified ? placeUi("verified") : placeUi("needCheck");
    const dPhoto = place.photo ? `<img class="placePhotoImg" src="${escapeHtml(safeUrl(place.photo))}" alt="${escapeHtml(localizedValue(place.name))}" loading="lazy" />` : escapeHtml(place.emoji || "🛒");
    placeDetailHero.innerHTML = `${dPhoto}<span class="placeBadge ${dBadgeClass}">${escapeHtml(dBadge)}</span>`;
    placeDetailMeta.textContent = `${placeCategoryLabel(place.category)} · ${(place.nationalities || []).map(placeNationalityLabel).join(" · ") || placeUi("all")}`;
    placeDetailTitle.textContent = localizedValue(place.name);
    placeDetailItems.textContent = localizedValue(place.items);
    placeDetailRows.innerHTML = `
      <div><span>📍</span><strong>${escapeHtml(localizedValue(place.address))}</strong></div>
      <div><span>🕐</span><strong>${escapeHtml(localizedValue(place.hours))}</strong></div>
      <div><span>✓</span><strong>${escapeHtml(place.verified ? placeUi("verified") : placeUi("needCheck"))}</strong></div>
    `;
    if (place.coupon?.title) {
      placeDetailCoupon.hidden = false;
      placeDetailCoupon.textContent = `🎟 ${localizedValue(place.coupon.title)}`;
    } else {
      placeDetailCoupon.hidden = true;
      placeDetailCoupon.textContent = "";
    }
    placeDetailActions.innerHTML = `
      ${place.phone ? `<a class="detailAction callAction" href="tel:${escapeHtml(place.phone)}">📞 ${escapeHtml(placeUi("call"))}</a>` : ""}
      <a class="detailAction" href="${escapeHtml(routeUrl)}" target="_blank" rel="noopener">🧭 ${escapeHtml(placeUi("route"))}</a>
      <button class="detailAction" type="button" data-place-save="${escapeHtml(place.id)}">${saved ? "★" : "☆"} ${escapeHtml(saved ? placeUi("savedPlace") : placeUi("save"))}</button>
      <button class="detailAction" type="button" data-place-share="${escapeHtml(place.id)}">🔗 ${escapeHtml(SHARE_LABEL[sourceLang] || "Share")}</button>
    `;
    bindPlaceCardEvents(placeDetailActions);
    placeDetailOverlay.hidden = false;
    document.body.classList.add("modalOpen");
    placeDetailClose.focus();
    track("open_place_detail", { place: place.id, source: sourceLang });
  }

  function closePlaceDetail() {
    if (!placeDetailOverlay) return;
    placeDetailOverlay.hidden = true;
    document.body.classList.remove("modalOpen");
  }

  function setAppTab(tab) {
    if (!appViews[tab]) tab = "nearby";
    state.appTab = tab;
    localStorage.setItem("wiiinfoAppTab", tab);
    Object.entries(appViews).forEach(([key, element]) => {
      if (element) element.hidden = key !== tab;
    });
    bottomNavButtons.forEach((button) => {
      const active = button.dataset.appTab === tab;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (tab === "nearby") renderPlaces();
    if (tab === "saved") renderSavedPlaces();
    window.scrollTo({ top: 0, behavior: "smooth" });
    track("select_app_tab", { tab });
  }

  function updatePlaceStaticLabels() {
    if (placeTitle) placeTitle.textContent = placeUi("nearby");
    if (placeSeedNote) placeSeedNote.textContent = placeUi("seedNote");
    if (placeLocationLabel) placeLocationLabel.textContent = state.userLocation?.label || placeUi("location");
    if (placeLangLabel) placeLangLabel.textContent = LANG_NATIVE[sourceLang] || sourceLang;
    if (placeSearchInput) placeSearchInput.placeholder = placeUi("search");
    if (savedTitle) savedTitle.textContent = placeUi("saved");
    if (meTitle) meTitle.textContent = placeUi("profileTitle");
    if (meText) meText.textContent = placeUi("profileText");
    if (ownerRegisterButton) ownerRegisterButton.textContent = placeUi("ownerCta");
    if (ownerRegisterNote) ownerRegisterNote.textContent = placeUi("ownerNote");
    bottomNavButtons.forEach((button) => {
      const tab = button.dataset.appTab;
      const label = button.querySelector("span");
      if (label) label.textContent = placeUi(tab);
    });
    renderPlaces();
    renderSavedPlaces();
  }

  function languageName(lang) {
    return LANGUAGE_NAMES[sourceLang]?.[lang] || LANGUAGES[lang]?.label || lang;
  }

  function getPhrasePageSize() {
    const width = list?.clientWidth || window.innerWidth;
    if (width < 680) return 10;
    if (width < 960) return 20;
    if (width < 1280) return 18;
    return 20;
  }

  function resetVisibleLimit() {
    visibleLimit = getPhrasePageSize();
  }

  function loadMoreText(count) {
    return (uiText("showMore") || "{count}개 더보기").replace("{count}", count);
  }

  function loadMoreMetaText(visible, total) {
    return (uiText("showingCount") || "{visible}/{total}개 표시 중")
      .replace("{visible}", visible)
      .replace("{total}", total);
  }

  function versionedAudioUrl(url) {
    if (!url || /^(https?:|data:|blob:)/.test(url)) return url;
    return `${url}${url.includes("?") ? "&" : "?"}v=${ASSET_VERSION}`;
  }

  function getThaiText(item) {
    return voiceMode === "male" ? item.thMale || item.th : item.thFemale || item.th;
  }

  function getThaiRoman(item) {
    return voiceMode === "male" ? item.roMale || item.ro : item.roFemale || item.ro;
  }

  function getText(item, lang) {
    if (lang === "ko") return item.ko || "";
    if (lang === "th") return getThaiText(item);
    return item[lang] || "";
  }

  function getRoman(item, lang) {
    if (lang === "ko") return `read Korean: ${romanizeKorean(item.ko || "")}`;
    if (lang === "th") return getThaiRoman(item);
    return item.roByLang?.[lang] || "";
  }

  function getPhraseAudioUrl(item, lang) {
    if (lang === "th") {
      const customUrl = voiceMode === "male" ? item.audioUrlMale : item.audioUrl;
      if (customUrl) return versionedAudioUrl(customUrl);
      const folder = voiceMode === "male" ? "audio-male" : "audio";
      return versionedAudioUrl(`./${folder}/phrases/${formatIndex(item.audioIndex)}.mp3`);
    }
    if (lang === "ko") {
      const customUrl = voiceMode === "male" ? item.koAudioUrlMale : item.koAudioUrl;
      if (customUrl) return versionedAudioUrl(customUrl);
      const folder = voiceMode === "male" ? "audio-ko-male" : "audio-ko";
      return versionedAudioUrl(`./${folder}/phrases/${formatIndex(item.audioIndex)}.mp3`);
    }
    if (AUDIO_FOLDERS[lang]) {
      const folder = AUDIO_FOLDERS[lang][voiceMode] || AUDIO_FOLDERS[lang].female;
      return versionedAudioUrl(`./${folder}/phrases/${formatIndex(item.audioIndex)}.mp3`);
    }
    return "";
  }

  function getLetterAudioUrl(audioIndex, lang) {
    if (lang === "th") {
      const folder = voiceMode === "male" ? "audio-male" : "audio";
      return versionedAudioUrl(`./${folder}/letters/${formatIndex(audioIndex)}.mp3`);
    }
    if (lang === "ko") {
      const folder = voiceMode === "male" ? "audio-ko-male" : "audio-ko";
      return versionedAudioUrl(`./${folder}/letters/${formatIndex(audioIndex)}.mp3`);
    }
    if (AUDIO_FOLDERS[lang]) {
      const folder = AUDIO_FOLDERS[lang][voiceMode] || AUDIO_FOLDERS[lang].female;
      return versionedAudioUrl(`./${folder}/letters/${formatIndex(audioIndex)}.mp3`);
    }
    return "";
  }

  function speak(text, audioUrl, lang) {
    if (audioUrl) {
      // 미디어 요청은 SW 캐시에 저장되지 않는 경우가 있어 fetch로도 요청해 오프라인 캐시에 적재 (2026-06-04, HTTP 캐시 덕에 이중 다운로드 부담 없음)
      if ("serviceWorker" in navigator && navigator.serviceWorker.controller) fetch(audioUrl).catch(() => {});
      const audio = new Audio(audioUrl);
      audio.play().catch(() => speak(text, "", lang));
      return;
    }
    if (!("speechSynthesis" in window)) {
      alert(detailLabel("speechUnsupported"));
      return;
    }
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.82;
    const voice = getVoice(lang);
    if (voice) utterance.voice = voice;
    speechSynthesis.speak(utterance);
  }

  function filteredPhrases() {
    const keyword = state.search.trim().toLowerCase();
    return availablePhrases().filter((item) => {
      const inCategory = state.category === "전체" || item.c === state.category;
      // const text = `${getText(item, sourceLang)} ${getText(item, targetLang)} ${getRoman(item, targetLang)} ${item.c}`.toLowerCase(); // 구 코드: 카테고리가 한국어 키로만 검색됨 (2026-06-04 번역 라벨 추가)
      const text = `${getText(item, sourceLang)} ${getText(item, targetLang)} ${getRoman(item, targetLang)} ${item.c} ${categoryLabel(item.c)} ${categorySearchText(item.c)}`.toLowerCase();
      return inCategory && (!keyword || text.includes(keyword));
    });
  }

  function hasTranslation(item, lang) {
    return Boolean(getText(item, lang).trim());
  }

  function availablePhrases() {
    return phrases.filter((item) => hasTranslation(item, sourceLang) && hasTranslation(item, targetLang));
  }

  function renderProfileTabs() {
    // 구 코드: 전부 영어 하드코딩 (Korea, Thailand, ...) — 2026-06-04 자국어 표기로 교체
    // 국가 선택은 언어를 고르기 전 화면이므로 각 나라를 자국어로 표기 (언어 선택기 표준 패턴)
    const countryNames = {
      ko: "한국",
      th: "ไทย",
      ja: "日本",
      en: "USA · English",
      zh: "中国",
      vi: "Việt Nam",
      es: "España"
    };
    profileTabs.innerHTML = "";
    PROFILES.forEach((profile) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = profile.id === profileId ? "active" : "";
      button.setAttribute("aria-pressed", String(profile.id === profileId));
      button.innerHTML = `<span class="flag">${profile.flag}</span><span>${countryNames[profile.source] || profile.label}</span>`;
      button.addEventListener("click", () => setProfile(profile.id));
      profileTabs.appendChild(button);
    });
  }

  // [2026-06-18 P1-b] 첫 방문 언어 선택 온보딩 — 선택 즉시 setProfile()로 전역 언어 확정 후 닫힘
  // allowClose=false(첫 방문): 선택을 강제 → 닫기 숨김. true(언어 바꾸기 버튼): 닫기 허용.
  function showLangOnboarding(allowClose = false) {
    const overlay = document.getElementById("langOnboarding");
    const grid = document.getElementById("langOnboardingGrid");
    if (!overlay || !grid) return;
    grid.innerHTML = "";
    PROFILES.forEach((profile) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = profile.id === profileId ? "active" : "";
      button.innerHTML = `<span class="flag">${profile.flag}</span><span class="langName">${LANG_NATIVE[profile.source] || profile.label}</span><span class="langHello">${WELCOME_HELLO[profile.source] || ""}</span>`;
      button.addEventListener("click", () => {
        setProfile(profile.id); // 전역 언어 확정 + localStorage 저장 + 전체 라벨 갱신(발견탭·내비 포함)
        overlay.hidden = true;
        track("onboarding_select_language", { profile: profile.id });
      });
      grid.appendChild(button);
    });
    if (langOnboardingClose) langOnboardingClose.hidden = !allowClose;
    overlay.hidden = false;
    track("onboarding_shown", { mode: allowClose ? "change" : "first" });
  }

  function renderTargetTabs() {
    targetTabs.innerHTML = "";
    activeProfile.targets.forEach((lang) => {
      const language = LANGUAGES[lang] || { flag: "", label: lang };
      const button = document.createElement("button");
      button.type = "button";
      button.className = lang === targetLang ? "active" : "";
      button.setAttribute("aria-pressed", String(lang === targetLang));
      button.innerHTML = `<span class="flag">${language.flag}</span><span>${languageName(lang)}</span>`;
      button.addEventListener("click", () => setTarget(lang));
      targetTabs.appendChild(button);
    });
  }

  function renderTabs() {
    refreshCategories();
    tabs.innerHTML = "";
    categories.forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = categoryLabel(category);
      button.className = category === state.category ? "active" : "";
      button.addEventListener("click", () => {
        state.category = category;
        resetVisibleLimit();
        render();
      });
      tabs.appendChild(button);
    });
  }

  function renderInfoHub() {
    if (!infoTabs || !infoCards) return;
    loadInfoGuide().then(renderInfoHubNow); // 가이드 데이터 지연 로드 후 렌더 (2026-06-04)
  }

  function renderInfoHubNow() {
    // const sections = INFO_SECTIONS[sourceLang] || INFO_SECTIONS.ko || []; // 구 코드 (2026-06-04 지연 로드 전환)
    const sections = getInfoSections()[sourceLang] || getInfoSections().ko || [];
    const selected = sections.find((section) => section.id === state.info) || sections[0];
    if (!selected) return;
    state.info = selected.id;
    infoTabs.innerHTML = "";
    sections.forEach((section) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = section.id === state.info ? "active" : "";
      button.textContent = `${section.icon} ${section.tab}`;
      button.addEventListener("click", () => {
        state.info = section.id;
        renderInfoHub();
      });
      infoTabs.appendChild(button);
    });
    infoEyebrow.textContent = uiText("infoEyebrow");
    infoTitle.textContent = selected.title;
    infoSummary.textContent = selected.summary;
    renderInfoVisual(selected);
    infoCards.innerHTML = "";
    selected.cards.forEach((card) => {
      const item = document.createElement("article");
      item.className = "infoCard";
      item.tabIndex = 0;
      item.setAttribute("role", "button");
      item.setAttribute("aria-label", `${card.title} ${detailLabel("viewDetail")}`);
      // item.innerHTML = `<strong>${card.title}</strong><p>${card.text}</p>`; // 구 코드 (2026-06-04 escapeHtml 적용)
      item.innerHTML = `<strong>${escapeHtml(card.title)}</strong><p>${escapeHtml(card.text)}</p>`;
      item.addEventListener("click", () => openInfoDetail(card, selected));
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openInfoDetail(card, selected);
        }
      });
      infoCards.appendChild(item);
    });
  }

  function renderInfoVisual(section) {
    if (!infoPanel || !section?.cards?.length) return;
    let visual = infoPanel.querySelector(".infoVisual");
    if (!visual) {
      visual = document.createElement("div");
      visual.className = "infoVisual";
      infoPanel.insertBefore(visual, infoPanel.firstElementChild);
    }
    const cards = section.cards.slice(0, 4);
    const images = cards.map((card) => {
      const image = card.detail?.images?.[0] || {};
      return { ...image, label: card.title };
    });
    // 2026-06-04 escapeHtml 적용 (구 코드: image.src/alt/label 원본 그대로 삽입)
    visual.innerHTML = images.map((image, index) => image.src
      ? `<figure class="${index === 0 ? "featured" : ""}" role="button" tabindex="0" data-card-index="${index}" aria-label="${escapeHtml(image.label)} ${detailLabel("viewDetail")}"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || image.label)}" loading="lazy" /><figcaption>${escapeHtml(image.label)}</figcaption></figure>`
      : `<figure class="imageFallback ${index === 0 ? "featured" : ""}" role="button" tabindex="0" data-card-index="${index}" aria-label="${escapeHtml(image.label)} ${detailLabel("viewDetail")}"><span>${escapeHtml(image.label)}</span></figure>`).join("");
    visual.querySelectorAll("figure").forEach((figure) => {
      const open = () => {
        const card = section.cards[Number(figure.dataset.cardIndex)];
        if (card) openInfoDetail(card, section);
      };
      figure.addEventListener("click", open);
      figure.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open();
        }
      });
    });
    visual.querySelectorAll("img").forEach((image) => {
      image.addEventListener("error", () => {
        const figure = image.closest("figure");
        if (!figure) return;
        figure.classList.add("imageFallback");
        figure.innerHTML = `<span>${escapeHtml(image.alt || "")}</span>`; // 2026-06-04 escapeHtml 적용
      }, { once: true });
    });
  }

  function createInfoDetailModal() {
    const overlay = document.createElement("div");
    overlay.className = "infoDetailOverlay";
    overlay.hidden = true;
    overlay.innerHTML = `
      <section class="infoDetail" role="dialog" aria-modal="true" aria-labelledby="infoDetailTitle">
        <button class="infoDetailClose" type="button" aria-label="상세 닫기">×</button>
        <div class="infoDetailGallery"></div>
        <div class="infoDetailBody">
          <p class="controlLabel infoDetailEyebrow"></p>
          <h2 id="infoDetailTitle"></h2>
          <p class="infoDetailLead"></p>
          <div class="infoDetailMeta"></div>
          <div class="infoDetailActions"></div>
          <div class="infoDetailSections"></div>
        </div>
      </section>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector(".infoDetailClose").addEventListener("click", closeInfoDetail);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closeInfoDetail();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !overlay.hidden) closeInfoDetail();
    });
    return overlay;
  }

  function detailLabel(key) {
    const labels = {
      ko: { address: "주소", directions: "가는 방법", hours: "운영/시간", map: "지도 보기", source: "자료 기준", copied: "복사됨", close: "상세 닫기", viewDetail: "상세 보기", favoriteAdd: "즐겨찾기 추가", favoriteRemove: "즐겨찾기 해제", showLanguage: "{language} 보기", speechUnsupported: "이 브라우저는 음성 읽기를 지원하지 않습니다.", answer: "정답", listen: "듣기", lastChecked: "최종 확인", officialCheck: "비자, 계약, 의료, 행정 정보는 공식 기관에서 다시 확인하세요." },
      en: { address: "Address", directions: "How to get there", hours: "Hours", map: "Open map", source: "Reference", copied: "Copied", close: "Close details", viewDetail: "View details", favoriteAdd: "Save item", favoriteRemove: "Remove saved item", showLanguage: "Show {language}", speechUnsupported: "This browser does not support speech playback.", answer: "answer", listen: "Listen", lastChecked: "Last checked", officialCheck: "Confirm visa, contract, medical, and public-office details with official sources." },
      ja: { address: "住所", directions: "行き方", hours: "時間", map: "地図を見る", source: "参考", copied: "コピー済み", close: "詳細を閉じる", viewDetail: "詳細を見る", favoriteAdd: "保存に追加", favoriteRemove: "保存を解除", showLanguage: "{language}を見る", speechUnsupported: "このブラウザは音声再生に対応していません。", answer: "答え", listen: "聞く", lastChecked: "最終確認", officialCheck: "ビザ、契約、医療、行政情報は公式機関で再確認してください。" },
      th: { address: "ที่อยู่", directions: "วิธีเดินทาง", hours: "เวลา", map: "เปิดแผนที่", source: "แหล่งข้อมูล", copied: "คัดลอกแล้ว", close: "ปิดรายละเอียด", viewDetail: "ดูรายละเอียด", favoriteAdd: "บันทึกรายการ", favoriteRemove: "ลบรายการที่บันทึก", showLanguage: "ดู{language}", speechUnsupported: "เบราว์เซอร์นี้ไม่รองรับการเล่นเสียง", answer: "คำตอบ", listen: "ฟัง", lastChecked: "ตรวจล่าสุด", officialCheck: "ข้อมูลวีซ่า สัญญา การแพทย์ และราชการควรตรวจซ้ำกับหน่วยงานทางการ" },
      zh: { address: "地址", directions: "交通方式", hours: "时间", map: "查看地图", source: "参考", copied: "已复制", close: "关闭详情", viewDetail: "查看详情", favoriteAdd: "添加收藏", favoriteRemove: "取消收藏", showLanguage: "查看{language}", speechUnsupported: "此浏览器不支持语音播放。", answer: "答案", listen: "收听", lastChecked: "最后确认", officialCheck: "签证、合同、医疗和行政信息请以官方机构为准。" },
      vi: { address: "Địa chỉ", directions: "Cách đi", hours: "Thời gian", map: "Mở bản đồ", source: "Nguồn tham khảo", copied: "Đã sao chép", close: "Đóng chi tiết", viewDetail: "Xem chi tiết", favoriteAdd: "Lưu mục", favoriteRemove: "Bỏ lưu mục", showLanguage: "Xem {language}", speechUnsupported: "Trình duyệt này không hỗ trợ phát giọng nói.", answer: "đáp án", listen: "Nghe", lastChecked: "Cập nhật lần cuối", officialCheck: "Hãy xác nhận lại thông tin visa, hợp đồng, y tế và hành chính với cơ quan chính thức." },
      es: { address: "Dirección", directions: "Cómo llegar", hours: "Horario", map: "Abrir mapa", source: "Referencia", copied: "Copiado", close: "Cerrar detalles", viewDetail: "Ver detalles", favoriteAdd: "Guardar elemento", favoriteRemove: "Quitar guardado", showLanguage: "Ver {language}", speechUnsupported: "Este navegador no admite reproducción de voz.", answer: "respuesta", listen: "Escuchar", lastChecked: "Última revisión", officialCheck: "Confirma datos de visa, contrato, salud y trámites con fuentes oficiales." }
    };
    const lang = labels[sourceLang] ? sourceLang : "en";
    return labels[lang][key] || key;
  }

  function infoFreshnessText(section, card) {
    const updated = card.updated || section.updated || INFO_DEFAULT_UPDATED;
    const officialCheck = card.officialCheck ?? section.officialCheck ?? INFO_OFFICIAL_CHECK_SECTIONS.has(section.id);
    const parts = [`${detailLabel("lastChecked")}: ${updated}`];
    if (officialCheck) parts.push(detailLabel("officialCheck"));
    return parts.join(" · ");
  }

  function koreanLetterTypeLabel(kind) {
    const labels = {
      consonant: { ko: "한글 자음", en: "Korean consonant", th: "พยัญชนะเกาหลี", ja: "韓国語の子音", zh: "韩语辅音", vi: "Phụ âm tiếng Hàn", es: "Consonante coreana" },
      vowel: { ko: "한글 모음", en: "Korean vowel", th: "สระเกาหลี", ja: "韓国語の母音", zh: "韩语元音", vi: "Nguyên âm tiếng Hàn", es: "Vocal coreana" }
    };
    return labels[kind]?.[sourceLang] || labels[kind]?.en || kind;
  }

  function displayLetter(item) {
    if (targetLang !== "ko") return displayNonKoreanLetter(item);
    const meta = KOREAN_LETTER_META[item.char];
    if (!meta) return item;
    const desc = meta.desc[sourceLang] || meta.desc.en;
    return {
      ...item,
      type: koreanLetterTypeLabel(meta.kind),
      name: meta.name,
      sound: `${meta.roman} · ${desc}`,
      example: meta.example
    };
  }

  function displayNonKoreanLetter(item) {
    if (sourceLang === "ko") return item;
    const typeLabels = {
      th: {
        "자음": { en: "Thai consonant", th: "พยัญชนะไทย", ja: "タイ語の子音", zh: "泰语辅音", vi: "Phụ âm tiếng Thái", es: "Consonante tailandesa" },
        "모음": { en: "Thai vowel", th: "สระไทย", ja: "タイ語の母音", zh: "泰语元音", vi: "Nguyên âm tiếng Thái", es: "Vocal tailandesa" }
      },
      ja: {
        "히라가나": { en: "Hiragana", th: "ฮิรางานะ", ja: "ひらがな", zh: "平假名", vi: "Hiragana", es: "Hiragana" },
        "가타카나": { en: "Katakana", th: "คาตาคานะ", ja: "カタカナ", zh: "片假名", vi: "Katakana", es: "Katakana" }
      },
      en: {
        "알파벳": { en: "Alphabet", th: "อักษรอังกฤษ", ja: "英字", zh: "英文字母", vi: "Bảng chữ cái", es: "Alfabeto" }
      },
      zh: {
        "성조": { en: "Tone", th: "วรรณยุกต์จีน", ja: "声調", zh: "声调", vi: "Thanh điệu", es: "Tono" },
        "기초 한자": { en: "Basic character", th: "ตัวอักษรจีนพื้นฐาน", ja: "基本漢字", zh: "基础汉字", vi: "Chữ Hán cơ bản", es: "Carácter básico" }
      }
    };
    const clean = (value) => String(value || "")
      .replace(/\s*·\s*[\u3131-\u318e\uac00-\ud7a3].*$/u, "")
      .replace(/\s+[\u3131-\u318e\uac00-\ud7a3][\u3131-\u318e\uac00-\ud7a3\s()~·/]*$/u, "")
      .trim();
    const fallbackType = typeLabels[targetLang]?.[item.type]?.[sourceLang] || typeLabels[targetLang]?.[item.type]?.en || item.type;
    return {
      ...item,
      type: fallbackType,
      sound: clean(item.sound) || item.name || item.char,
      example: clean(item.example) || item.char
    };
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    }[char]));
  }

  // [2026-06-18 보안] href/src 출력용 URL 스킴 화이트리스트.
  // http(s)/tel/mailto/상대경로(/, ./, #, ?)만 허용하고 javascript:·data: 등 위험 스킴은 빈 문자열로 차단.
  // (현재 데이터는 정적 시드지만, 점포/점주 데이터를 Firestore 등 외부에서 받기 시작하면 필수 방어선)
  function safeUrl(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";
    if (/^(\/\/|\\\\)/.test(raw)) return "";
    if (/^(#|\?)/.test(raw)) return raw;
    if (/^\/(?!\/)/.test(raw)) return raw;
    try {
      const parsed = new URL(raw, window.location.origin);
      if (parsed.origin === window.location.origin && /^\.{1,2}\//.test(raw)) return raw;
      return ["http:", "https:", "tel:", "mailto:"].includes(parsed.protocol) ? raw : "";
    } catch {
      return "";
    }
  }

  function detailText(key, replacements = {}) {
    return Object.entries(replacements).reduce((text, [name, value]) => text.replace(`{${name}}`, value), detailLabel(key));
  }

  function fallbackChecklist() {
    const labels = {
      ko: {
        title: "체크 포인트",
        items: ["계약·방문·신청 전에 필요한 서류와 비용을 먼저 확인합니다.", "이해가 안 되는 문장은 사진으로 저장하고 한국어 가능한 사람에게 확인받습니다.", "금액을 송금하거나 서명하기 전에는 이름, 주소, 날짜를 다시 확인합니다."]
      },
      en: {
        title: "Checklist",
        items: ["Check required documents and costs before visiting, applying, or signing.", "Save unclear Korean text and ask someone who can read Korean to review it.", "Before sending money or signing, check names, addresses, and dates again."]
      },
      ja: {
        title: "チェックポイント",
        items: ["訪問・申請・契約の前に必要書類と費用を確認します。", "分からない韓国語は写真で保存し、韓国語が分かる人に確認してもらいます。", "送金や署名前に名前、住所、日付をもう一度確認します。"]
      },
      th: {
        title: "จุดที่ต้องเช็ก",
        items: ["ก่อนเยี่ยมชม สมัคร หรือเซ็นสัญญา ให้เช็กเอกสารและค่าใช้จ่ายที่จำเป็น", "ถ้าข้อความเกาหลีไม่เข้าใจ ให้ถ่ายรูปไว้และให้คนที่อ่านเกาหลีได้ช่วยตรวจ", "ก่อนโอนเงินหรือเซ็นชื่อ ให้ตรวจชื่อ ที่อยู่ และวันที่อีกครั้ง"]
      },
      zh: {
        title: "检查事项",
        items: ["访问、申请或签约前，先确认所需文件和费用。", "看不懂的韩语请拍照保存，并请懂韩语的人确认。", "汇款或签名前，再次确认姓名、地址和日期。"]
      },
      vi: {
        title: "Điểm cần kiểm tra",
        items: ["Trước khi đến, đăng ký hoặc ký hợp đồng, hãy kiểm tra giấy tờ và chi phí cần thiết.", "Lưu lại câu tiếng Hàn chưa hiểu bằng ảnh và nhờ người đọc được tiếng Hàn kiểm tra.", "Trước khi chuyển tiền hoặc ký, hãy kiểm tra lại tên, địa chỉ và ngày tháng."]
      },
      es: {
        title: "Lista de verificación",
        items: ["Antes de visitar, solicitar o firmar, revisa documentos y costos necesarios.", "Guarda en foto el texto coreano que no entiendas y pide revisión a alguien que lea coreano.", "Antes de enviar dinero o firmar, revisa nombres, dirección y fechas otra vez."]
      }
    };
    return labels[sourceLang] || labels.en;
  }

  function fallbackDetail(card, section) {
    const checklist = fallbackChecklist();
    return {
      lead: card.text,
      images: [],
      meta: [],
      sections: [
        { title: section.title, items: [card.text] },
        { title: checklist.title, items: checklist.items }
      ]
    };
  }

  function openInfoDetail(card, section) {
    const detail = card.detail || fallbackDetail(card, section);
    const gallery = detailModal.querySelector(".infoDetailGallery");
    const eyebrow = detailModal.querySelector(".infoDetailEyebrow");
    const title = detailModal.querySelector("#infoDetailTitle");
    const lead = detailModal.querySelector(".infoDetailLead");
    const meta = detailModal.querySelector(".infoDetailMeta");
    const actions = detailModal.querySelector(".infoDetailActions");
    const sections = detailModal.querySelector(".infoDetailSections");
    const images = detail.images && detail.images.length ? detail.images : [{ src: "", alt: card.title }];

    detailModal.querySelector(".infoDetailClose").setAttribute("aria-label", detailLabel("close"));

    // 2026-06-04 escapeHtml 적용 (구 코드: image.src/alt/card.title 원본 그대로 삽입)
    gallery.innerHTML = images.map((image, index) => {
      const countBadge = images.length > 1 ? `<span class="galleryCount">${index + 1}/${images.length}</span>` : "";
      return image.src
        ? `<figure class="${index === 0 ? "featured" : ""}"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || card.title)}" loading="lazy" />${countBadge}<figcaption>${escapeHtml(image.alt || card.title)}</figcaption></figure>`
        : `<figure class="imageFallback featured"><span>${escapeHtml(card.title)}</span></figure>`;
    }).join("");
    gallery.querySelectorAll("img").forEach((image) => {
      image.addEventListener("error", () => {
        const figure = image.closest("figure");
        if (!figure) return;
        figure.classList.add("imageFallback");
        figure.innerHTML = `<span>${escapeHtml(image.alt || card.title)}</span>`; // 2026-06-04 escapeHtml 적용
      }, { once: true });
    });

    eyebrow.textContent = section.tab;
    title.textContent = card.title;
    lead.textContent = detail.lead || card.text;

    const metaRows = [
      detail.address ? [detailLabel("address"), detail.address] : null,
      detail.directions ? [detailLabel("directions"), detail.directions] : null,
      detail.hours ? [detailLabel("hours"), detail.hours] : null
    ].filter(Boolean);
    // 2026-06-04 escapeHtml 적용 (구 코드: value/mapUrl 원본 그대로 삽입)
    meta.innerHTML = metaRows.map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("");
    if (detail.mapUrl) {
      meta.innerHTML += `<a class="mapLink" href="${escapeHtml(detail.mapUrl)}" target="_blank" rel="noopener">${detailLabel("map")}</a>`;
    }

    actions.innerHTML = (detail.actions || []).map((action, index) => {
      const label = escapeHtml(action.label);
      if (action.type === "copy") {
        return `<button type="button" class="detailAction copyAction" data-action-index="${index}">${label}</button>`;
      }
      // [2026-06-18 보안] tel 값은 숫자/+/-/공백만 남기고, link href는 safeUrl로 스킴 검증
      // const href = action.type === "tel" ? `tel:${action.value}` : action.href;
      const href = action.type === "tel"
        ? `tel:${String(action.value || "").replace(/[^0-9+\-\s]/g, "")}`
        : safeUrl(action.href);
      return `<a class="detailAction ${action.type === "tel" ? "callAction" : ""}" href="${escapeHtml(href)}" ${action.type === "link" ? "target=\"_blank\" rel=\"noopener\"" : ""}>${label}</a>`;
    }).join("");
    actions.hidden = !(detail.actions || []).length;
    actions.querySelectorAll(".copyAction").forEach((button) => {
      button.addEventListener("click", async () => {
        const action = detail.actions[Number(button.dataset.actionIndex)];
        if (!action?.value) return;
        try {
          await navigator.clipboard.writeText(action.value);
          button.textContent = detailLabel("copied");
        } catch (error) {
          button.textContent = action.value;
        }
      });
    });

    // 2026-06-04 escapeHtml 적용 (구 코드: group.title/items 원본 그대로 삽입)
    sections.innerHTML = (detail.sections || []).map((group) => `
      <section>
        <h3>${escapeHtml(group.title)}</h3>
        <ul>${(group.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    `).join("") + `<p class="infoFreshness">${escapeHtml(infoFreshnessText(section, card))}</p>`;

    detailModal.hidden = false;
    document.body.classList.add("modalOpen");
    detailModal.querySelector(".infoDetailClose").focus();
    track("open_info_detail", { section: section.id, lang: sourceLang }); // Analytics (2026-06-04)
  }

  function closeInfoDetail() {
    detailModal.hidden = true;
    document.body.classList.remove("modalOpen");
  }

  function render() {
    renderTabs();
    const items = filteredPhrases();
    if (!visibleLimit) resetVisibleLimit();
    const visibleItems = items.slice(0, visibleLimit);
    list.innerHTML = "";
    list.setAttribute("aria-label", uiText("phraseListLabel"));
    letterList.setAttribute("aria-label", uiText("letterListLabel"));
    totalCount.textContent = items.length;
    favoriteCount.textContent = state.favorites.size;
    // todayCount.textContent = "0"; // 구 코드: 항상 0 (2026-06-04 실제 카운트로 교체)
    todayCount.textContent = todayLearnedCount();

    visibleItems.forEach((item, index) => {
      const id = item.id || `phrase-${formatIndex(item.audioIndex)}`;
      const card = template.content.firstElementChild.cloneNode(true);
      const star = card.querySelector(".starButton");
      const reveal = card.querySelector(".revealButton");
      const audioNumber = formatIndex(item.audioIndex);
      const sourceText = getText(item, sourceLang);
      const targetText = getText(item, targetLang);
      const romanText = getRoman(item, targetLang);
      const targetLanguage = LANGUAGES[targetLang] || {};

      card.dataset.audioFile = audioNumber;
      card.querySelector(".numberBadge").textContent = `#${audioNumber}`;
      card.querySelector(".tag").textContent = categoryLabel(item.c);
      card.querySelector(".korean").textContent = sourceText;
      card.querySelector(".thai").textContent = targetText;
      card.querySelector(".roman").textContent = romanText;
      card.querySelector(".speakButton").textContent = `▶ ${languageName(targetLang) || targetLanguage.label || detailLabel("listen")}`;

      if (state.quiz) card.classList.add("hiddenThai");

      star.textContent = state.favorites.has(id) ? "★" : "☆";
      star.classList.toggle("on", state.favorites.has(id));
      const favoriteLabel = state.favorites.has(id) ? detailLabel("favoriteRemove") : detailLabel("favoriteAdd");
      star.setAttribute("aria-label", favoriteLabel);
      star.title = favoriteLabel;
      star.setAttribute("aria-pressed", String(state.favorites.has(id)));
      star.addEventListener("click", () => {
        if (state.favorites.has(id)) state.favorites.delete(id);
        else state.favorites.add(id);
        saveFavorites();
        render();
      });

      card.querySelector(".speakButton").addEventListener("click", () => {
        speak(targetText, getPhraseAudioUrl(item, targetLang), LANGUAGES[targetLang]?.speech || "ko-KR");
        markLearned(`${targetLang}:${id}`); // 오늘 학습 카운트 (2026-06-04)
        track("play_phrase_audio", { lang: targetLang, item: audioNumber }); // Analytics (2026-06-04)
      });
      reveal.addEventListener("click", () => {
        card.classList.toggle("hiddenThai");
        reveal.textContent = card.classList.contains("hiddenThai")
          ? detailText("showLanguage", { language: languageName(targetLang) || targetLanguage.label || detailLabel("answer") })
          : uiText("hide");
      });

      if (!state.quiz) reveal.textContent = uiText("hide");
      card.style.order = String(index);
      list.appendChild(card);
    });

    renderLoadMore(items.length);
  }

  function renderLoadMore(total) {
    if (!loadMoreWrap || !loadMoreButton || !loadMoreMeta) return;
    const visible = Math.min(visibleLimit, total);
    const remaining = Math.max(total - visible, 0);
    loadMoreWrap.hidden = currentMode !== "phrases" || remaining <= 0;
    if (remaining <= 0) {
      loadMoreMeta.textContent = total ? loadMoreMetaText(visible, total) : "";
      return;
    }
    const nextCount = Math.min(getPhrasePageSize(), remaining);
    loadMoreButton.textContent = loadMoreText(nextCount);
    loadMoreMeta.textContent = loadMoreMetaText(visible, total);
  }

  function getLetterSource() {
    const lang = targetLang === "ko" ? "ko" : targetLang;
    if (lang === "ko") return window.KOREAN_LETTERS || [];
    if (lang === "th") return window.THAI_LETTERS || [];
    if (lang === "ja") return window.JAPANESE_LETTERS || [];
    if (lang === "en") return window.ENGLISH_LETTERS || [];
    if (lang === "zh") return window.CHINESE_LETTERS || [];
    if (lang === "vi") return window.VIETNAMESE_LETTERS || [];
    if (lang === "es") return window.SPANISH_LETTERS || [];
    return [];
  }

  function renderLetters() {
    const keyword = state.search.trim().toLowerCase();
    const sourceLetters = getLetterSource();
    const letters = sourceLetters.map((item, index) => ({ ...item, audioIndex: index + 1 }));
    letterList.innerHTML = "";
    loadMoreWrap.hidden = true;
    list.setAttribute("aria-label", uiText("phraseListLabel"));
    letterList.setAttribute("aria-label", uiText("letterListLabel"));
    const filtered = letters.filter((item) => {
      const display = displayLetter(item);
      const text = `${display.type} ${display.char} ${display.name} ${display.sound} ${display.example}`.toLowerCase();
      return !keyword || text.includes(keyword);
    });
    totalCount.textContent = filtered.length;
    // todayCount.textContent = "0"; // 구 코드: 항상 0 (2026-06-04 실제 카운트로 교체)
    todayCount.textContent = todayLearnedCount();

    filtered.forEach((item) => {
      const display = displayLetter(item);
      const card = letterTemplate.content.firstElementChild.cloneNode(true);
      const audioNumber = formatIndex(item.audioIndex);
      card.dataset.audioFile = audioNumber;
      card.querySelector(".letterNumber").textContent = `#${audioNumber}`;
      card.querySelector(".letter").textContent = display.char;
      card.querySelector(".letterName").textContent = `${display.type} · ${display.name}`;
      card.querySelector(".letterSound").textContent = display.sound;
      card.querySelector(".letterExample").textContent = display.example;
      card.querySelector(".letterSpeakButton").addEventListener("click", () => {
        const text = `${item.char} ${item.name}`;
        speak(text, getLetterAudioUrl(item.audioIndex, targetLang), LANGUAGES[targetLang]?.speech || "ko-KR");
        markLearned(`letter-${targetLang}:${formatIndex(item.audioIndex)}`); // 오늘 학습 카운트 (2026-06-04)
        track("play_letter_audio", { lang: targetLang }); // Analytics (2026-06-04)
      });
      letterList.appendChild(card);
    });
  }

  function setVoice(mode) {
    voiceMode = mode;
    localStorage.setItem("wiiinfoVoiceMode", mode);
    femaleVoiceButton.classList.toggle("active", mode === "female");
    maleVoiceButton.classList.toggle("active", mode === "male");
    femaleVoiceButton.setAttribute("aria-pressed", String(mode === "female"));
    maleVoiceButton.setAttribute("aria-pressed", String(mode === "male"));
    femaleVoiceButton.textContent = uiText("female");
    maleVoiceButton.textContent = uiText("male");
    currentMode === "letters" ? renderLetters() : render();
  }

  function setProfile(id) {
    profileId = id;
    activeProfile = getProfile(profileId);
    sourceLang = activeProfile.source;
    targetLang = activeProfile.targets[0];
    localStorage.setItem("wiiinfoProfileId", profileId);
    localStorage.setItem("wiiinfoTargetLang", targetLang);
    syncUrl(); // 딥링크 URL 갱신 (2026-06-04)
    track("select_profile", { profile: profileId, target: targetLang }); // Analytics (2026-06-04)
    state.category = "전체";
    state.search = "";
    searchInput.value = "";
    resetVisibleLimit();
    updateStaticLabels();
    updateHeroFlag();
    renderProfileTabs();
    renderTargetTabs();
    renderInfoHub();
    refreshCategories();
    currentMode === "letters" ? renderLetters() : render();
  }

  function setTarget(lang) {
    targetLang = lang;
    localStorage.setItem("wiiinfoTargetLang", targetLang);
    syncUrl(); // 딥링크 URL 갱신 (2026-06-04)
    track("select_target", { source: sourceLang, target: targetLang }); // Analytics (2026-06-04)
    state.category = "전체";
    state.search = "";
    searchInput.value = "";
    resetVisibleLimit();
    updateStaticLabels();
    updateHeroFlag();
    renderTargetTabs();
    refreshCategories();
    currentMode === "letters" ? renderLetters() : render();
  }

  function setMode(mode) {
    const isLetters = mode === "letters";
    currentMode = mode;
    phrasesModeButton.classList.toggle("active", !isLetters);
    lettersModeButton.classList.toggle("active", isLetters);
    phrasesModeButton.setAttribute("aria-pressed", String(!isLetters));
    lettersModeButton.setAttribute("aria-pressed", String(isLetters));
    list.hidden = isLetters;
    letterList.hidden = !isLetters;
    tabs.hidden = isLetters;
    quizToggle.parentElement.hidden = isLetters;
    searchInput.placeholder = isLetters ? uiText("searchLetters") : uiText("searchPhrases");
    isLetters ? renderLetters() : render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goHome() {
    state.category = "전체";
    state.search = "";
    searchInput.value = "";
    quizToggle.checked = false;
    state.quiz = false;
    resetVisibleLimit();
    setMode("phrases");
  }

  function updateStaticLabels() {
    document.documentElement.lang = sourceLang || "en";
    document.querySelector(".statCard.teal small").textContent = uiText("total");
    document.querySelector(".statCard.coral small").textContent = uiText("favorites");
    document.querySelector(".statCard.yellow small").textContent = uiText("today");
    audienceLabel.textContent = uiText("audience");
    countryQuestion.textContent = uiText("countryQuestion");
    targetLabel.textContent = uiText("target");
    modeLabel.textContent = uiText("mode");
    voiceLabel.textContent = uiText("voice");
    phrasesModeButton.textContent = uiText("phrases");
    lettersModeButton.textContent = uiText("letters");
    femaleVoiceButton.textContent = uiText("female");
    maleVoiceButton.textContent = uiText("male");
    quizLabel.textContent = uiText("quiz");
    searchInput.placeholder = currentMode === "letters" ? uiText("searchLetters") : uiText("searchPhrases");
    updatePlaceStaticLabels();
    updateAuthUi();
  }

  function updateHeroFlag() {
    const sourceLanguage = LANGUAGES[sourceLang] || {};
    const targetLanguage = LANGUAGES[targetLang] || {};
    setFlagVisual(heroFlagEmoji, sourceLang, sourceLanguage.flag || sourceLang.toUpperCase());
    setFlagVisual(heroTargetFlagEmoji, targetLang, targetLanguage.flag || targetLang.toUpperCase());
  }

  function setFlagVisual(element, lang, label) {
    if (!element) return;
    element.className = element.className
      .split(/\s+/)
      .filter((name) => name && !name.startsWith("flag-"))
      .join(" ");
    element.classList.add("flagVisual", `flag-${lang}`);
    element.textContent = label;
  }

  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    resetVisibleLimit();
    letterList.hidden ? render() : renderLetters();
  });
  quizToggle.addEventListener("change", (event) => {
    state.quiz = event.target.checked;
    render();
  });
  phrasesModeButton.addEventListener("click", () => { setMode("phrases"); track("select_mode", { mode: "phrases" }); }); // Analytics (2026-06-04)
  lettersModeButton.addEventListener("click", () => { setMode("letters"); track("select_mode", { mode: "letters" }); }); // Analytics (2026-06-04)
  femaleVoiceButton.addEventListener("click", () => setVoice("female"));
  maleVoiceButton.addEventListener("click", () => setVoice("male"));
  homeFlagButton.addEventListener("click", goHome);
  authButton?.addEventListener("click", toggleAuth);
  meAuthButton?.addEventListener("click", toggleAuth);
  bottomNavButtons.forEach((button) => {
    button.addEventListener("click", () => setAppTab(button.dataset.appTab));
  });
  placeSearchInput?.addEventListener("input", (event) => {
    state.placeSearch = event.target.value;
    renderPlaces();
  });
  placeViewToggle?.addEventListener("click", () => {
    state.placeView = state.placeView === "map" ? "list" : "map";
    renderPlaces();
    track("toggle_place_view", { view: state.placeView });
  });
  placeLocationButton?.addEventListener("click", () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((position) => {
      state.userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        label: placeUi("nearby")
      };
      updatePlaceStaticLabels();
      renderPlaces();
      track("set_place_location", { source: "geolocation" });
    }, () => {
      state.userLocation = null;
      updatePlaceStaticLabels();
    }, { enableHighAccuracy: false, timeout: 7000, maximumAge: 300000 });
  });
  // [2026-06-18] 언어 바꾸기 버튼 → 선택 카드 재표시(닫기 허용) / 닫기 버튼 → 변경 취소
  placeLangButton?.addEventListener("click", () => showLangOnboarding(true));
  langOnboardingClose?.addEventListener("click", () => {
    const overlay = document.getElementById("langOnboarding");
    if (overlay) overlay.hidden = true;
  });
  placeDetailClose?.addEventListener("click", closePlaceDetail);
  placeDetailOverlay?.addEventListener("click", (event) => {
    if (event.target === placeDetailOverlay) closePlaceDetail();
  });
  ownerRegisterButton?.addEventListener("click", () => {
    ownerRegisterNote.textContent = placeUi("ownerNote");
    track("owner_register_interest", { source: sourceLang });
  });
  loadMoreButton.addEventListener("click", () => {
    visibleLimit += getPhrasePageSize();
    render();
  });
  window.addEventListener("resize", () => {
    if (currentMode !== "phrases") return;
    const pageSize = getPhrasePageSize();
    if (!visibleLimit || visibleLimit < pageSize) visibleLimit = pageSize;
    render();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && placeDetailOverlay && !placeDetailOverlay.hidden) closePlaceDetail();
  });

  if ("speechSynthesis" in window) speechSynthesis.onvoiceschanged = () => getVoice("th-TH");
  initAnalytics(); // Analytics (2026-06-04)
  track("app_start", { profile: profileId, source: sourceLang, target: targetLang });
  // Firestore 문장 로드 비활성화 (2026-06-04 구조 정리): wiiinfoPhrases 컬렉션이 비어 있어
  // 매 방문마다 불필요한 쿼리만 발생했음. 콘텐츠는 로컬 js로 운영.
  // 재활성화: 아래 두 줄 주석 해제 + index.html의 firestore-compat 스크립트 주석 해제
  // const firebasePhrases = await loadFirebasePhrases();
  // if (firebasePhrases.length > 0) phrases = firebasePhrases;

  refreshCategories();
  resetVisibleLimit();
  saveFavorites();
  updateStaticLabels(); // 내부에서 updatePlaceStaticLabels()까지 호출 → 부팅 시 발견탭·하단내비 라벨도 sourceLang 기준으로 갱신됨
  updateHeroFlag();
  updateAuthUi();
  renderProfileTabs();
  renderTargetTabs();
  renderInfoHub();
  setVoice(voiceMode);
  setMode("phrases");
  setAppTab(state.appTab);
  initAuth();
  // syncUrl(); // 구: 첫 화면부터 URL에 ?from= 자동 기록 (2026-06-04)
  //            → 그 URL로는 온보딩이 영영 안 뜨는 원인이라 자동 호출 제거 (2026-06-18).
  //            언어를 실제 선택할 때(setProfile/setTarget L1558·1576)만 syncUrl 호출해 공유 링크 유지.

  // [2026-06-18 P1-b] 첫 방문이면 언어 선택 온보딩 표시 (저장된 언어/딥링크 있으면 건너뜀)
  if (needsLangOnboarding) showLangOnboarding();

  // [2026-06-18] QR/공유 딥링크: ?place=<id> → 발견 탭 + 해당 가게 상세 바로 열기
  if (urlPlace) { setAppTab("nearby"); openPlaceDetail(urlPlace); }

  // [2026-06-18] master 등록 점포(Firestore stores)를 정적 places에 머지 — 실패 시 정적만(graceful)
  loadFirebaseStores();
  async function loadFirebaseStores() {
    if (!window.firebase || !window.WIIINFO_FIREBASE_CONFIG) return;
    try {
      if (!firebase.apps.length) firebase.initializeApp(window.WIIINFO_FIREBASE_CONFIG);
      const snap = await firebase.firestore().collection("stores").limit(200).get();
      const emojiByCat = { grocery: "🛒", restaurant: "🍽️", halal: "🛒" };
      snap.docs.forEach((doc) => {
        if (PLACES.some((item) => item.id === doc.id)) return;
        const d = doc.data();
        PLACES.push({
          id: doc.id, source: d.source || "master-form", verified: !!d.verified,
          category: d.category || "grocery", nationalities: d.nationalities || [],
          emoji: d.emoji || emojiByCat[d.category] || "🛒",
          name: d.name || {}, address: d.address || {}, lat: d.lat, lng: d.lng,
          phone: d.phone || "", hours: d.hours || {}, items: d.items || {}, coupon: d.coupon || null,
          photo: d.photo || null
        });
      });
      if (state.appTab === "nearby") renderPlaces();
    } catch (error) { /* Firestore 미연결/실패 시 정적 places만 사용 */ }
  }

  // PWA 서비스워커 등록 (2026-06-04) — 홈화면 설치 + 오프라인 학습 지원
  // 주의: controllerchange reload 등 자동 새로고침 코드를 추가하지 말 것 (무한 새로고침 사고 예방)
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // 등록 실패해도 앱 동작에는 영향 없음
    });
  }
})();
