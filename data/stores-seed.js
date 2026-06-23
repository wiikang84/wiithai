// [2026-06-22] 전국 외국인 대상 점포 정적 시드 (274개) — foreign_stores_ready.json 변환본
// 웹수집 160 + 공공데이터 CSV 114. 전부 미검증(verified:false) · 좌표 없음(현장/지오코딩으로 보강).
// Firestore stores와 id 충돌 시 Firestore가 덮어씀(운영자 검증/소유권 반영). app.js가 WIIINFO_PLACES에 머지.
window.WIIINFO_STORES_SEED = [
  {
    "id": "ansan-warung-kita",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "와룽키타",
      "en": "Warung Kita"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로 3 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-vietnam-gohyang",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "베트남고향식당",
      "en": "Vietnam Gohyang"
    },
    "address": {
      "ko": "경기도 안산시 단원구 중앙대로 443 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "031-492-0865",
    "items": {
      "ko": "베트남 쌀국수, 베트남 가정식",
      "en": "Vietnamese pho, home-style food",
      "th": "ก๋วยเตี๋ยวเฝอเวียดนาม อาหารบ้านเวียดนาม",
      "ja": "ベトナムのフォー、家庭料理",
      "zh": "越南河粉、越南家常菜",
      "vi": "Phở Việt Nam, cơm nhà Việt",
      "es": "Pho vietnamita, comida casera"
    },
    "sourceUrl": "https://www.ekw.co.kr/news/articleView.html?idxno=1684",
    "confidence": "high"
  },
  {
    "id": "ansan-eurasia",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "유라시아",
      "en": "Eurasia"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화1길 4-1, 2층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중앙아시아 음식",
      "en": "Central Asian food",
      "th": "อาหารเอเชียกลาง",
      "ja": "中央アジア料理",
      "zh": "中亚菜",
      "vi": "Món ăn Trung Á",
      "es": "Comida de Asia Central"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-dyu-hien-quan",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "디유 히엔 콴",
      "en": "Dyu Hien Quan"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화1길 6 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "베트남 음식",
      "en": "Vietnamese food",
      "th": "อาหารเวียดนาม",
      "ja": "ベトナム料理",
      "zh": "越南菜",
      "vi": "Món ăn Việt Nam",
      "es": "Comida vietnamita"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-fursheida-samarkand",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "후르셰다사마르칸트",
      "en": "Fursheida Samarkand"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화2길 3 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄/러시아 음식, 플로프, 삼사, 양고기꼬치, 할랄",
      "en": "Uzbek/Russian food, plov, samsa, lamb skewers, halal",
      "th": "อาหารอุซเบก/รัสเซีย พลอฟ ซัมซา เนื้อแกะเสียบไม้ ฮาลาล",
      "ja": "ウズベク/ロシア料理、プロフ、サムサ、ラム串、ハラル",
      "zh": "乌兹别克/俄罗斯菜、抓饭、烤包子、羊肉串、清真",
      "vi": "Món Uzbek/Nga, plov, samsa, xiên thịt cừu, halal",
      "es": "Comida uzbeka/rusa, plov, samsa, brochetas de cordero, halal"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=uDDgfeNhZSQ1",
    "confidence": "high"
  },
  {
    "id": "ansan-imperia-chaihana",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "임페리아차이하나",
      "en": "Imperia Chaihana"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화2길 12 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중앙아시아/러시아 음식",
      "en": "Central Asian/Russian food",
      "th": "อาหารเอเชียกลาง/รัสเซีย",
      "ja": "中央アジア/ロシア料理",
      "zh": "中亚/俄罗斯菜",
      "vi": "Món ăn Trung Á/Nga",
      "es": "Comida de Asia Central/rusa"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-bakso-sultan",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal",
      "indonesia"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "박소술탄",
      "en": "Bakso Sultan"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화길 13-1, 2층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "할랄/중동·인도네시아 음식",
      "en": "Halal/Middle Eastern & Indonesian food",
      "th": "อาหารฮาลาล/ตะวันออกกลางและอินโดนีเซีย",
      "ja": "ハラル/中東・インドネシア料理",
      "zh": "清真/中东·印尼菜",
      "vi": "Món halal/Trung Đông và Indonesia",
      "es": "Comida halal/de Oriente Medio e Indonesia"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "medium"
  },
  {
    "id": "ansan-lak-thai",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "thai"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "락타이",
      "en": "Lak Thai"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원곡로 25 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "태국 음식",
      "en": "Thai food",
      "th": "อาหารไทย",
      "ja": "タイ料理",
      "zh": "泰国菜",
      "vi": "Món ăn Thái Lan",
      "es": "Comida tailandesa"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-lanka-korea",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "sri-lanka",
      "south-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "랑카코리아",
      "en": "Lanka Korea"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화1길 53 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "스리랑카 음식",
      "en": "Sri Lankan food",
      "th": "อาหารศรีลังกา",
      "ja": "スリランカ料理",
      "zh": "斯里兰卡菜",
      "vi": "Món ăn Sri Lanka",
      "es": "Comida de Sri Lanka"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-new-taj-mahal",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "india"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "뉴타지마할",
      "en": "New Taj Mahal"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화1길 49 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-kantipur",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "nepal",
      "india"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "칸티뿌르레스토랑",
      "en": "Kantipur Restaurant"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화2길 28 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도/네팔 음식, 커리",
      "en": "Indian/Nepali food, curry",
      "th": "อาหารอินเดีย/เนปาล แกงกะหรี่",
      "ja": "インド/ネパール料理、カレー",
      "zh": "印度/尼泊尔菜、咖喱",
      "vi": "Món ăn Ấn Độ/Nepal, cà ri",
      "es": "Comida india/nepalí, curry"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-nusantara",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "누산따라",
      "en": "Nusantara"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화2길 28, 지하층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-kdai-rinjani",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "크다이 린자니",
      "en": "Kedai Rinjani"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화2길 30 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-lindu-alam",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "린두알람",
      "en": "Lindu Alam"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화길 18, 2층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-suwal-thai",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "thai"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "수왈태국레스토랑",
      "en": "Suwal Thai Restaurant"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화길 18 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "태국 음식",
      "en": "Thai food",
      "th": "อาหารไทย",
      "ja": "タイ料理",
      "zh": "泰国菜",
      "vi": "Món ăn Thái Lan",
      "es": "Comida tailandesa"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-asiana-restaurant",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "아시아나레스토랑",
      "en": "Asiana Restaurant"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화2길 51 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "필리핀 음식",
      "en": "Filipino food",
      "th": "อาหารฟิลิปปินส์",
      "ja": "フィリピン料理",
      "zh": "菲律宾菜",
      "vi": "Món ăn Philippines",
      "es": "Comida filipina"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "medium"
  },
  {
    "id": "ansan-agun-restaurant",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "india"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "아건레스토랑",
      "en": "Agun Restaurant"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화길 6, 2층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도 음식",
      "en": "Indian food",
      "th": "อาหารอินเดีย",
      "ja": "インド料理",
      "zh": "印度菜",
      "vi": "Món ăn Ấn Độ",
      "es": "Comida india"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "medium"
  },
  {
    "id": "ansan-langka-india",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "india"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "랑까인디아레스토랑",
      "en": "Langka India Restaurant"
    },
    "address": {
      "ko": "경기도 안산시 단원구 중앙대로 455, 3층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-rea-indonesia",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "레아 인도네시아",
      "en": "Rea Indonesia"
    },
    "address": {
      "ko": "경기도 안산시 단원구 중앙대로 453 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-solti-indonepal",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "nepal",
      "india"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "솔티인도네팔음식점",
      "en": "Solti Indo Nepal"
    },
    "address": {
      "ko": "경기도 안산시 단원구 중앙대로 453, 3층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도/네팔 음식, 커리",
      "en": "Indian/Nepali food, curry",
      "th": "อาหารอินเดีย/เนปาล แกงกะหรี่",
      "ja": "インド/ネパール料理、カレー",
      "zh": "印度/尼泊尔菜、咖喱",
      "vi": "Món ăn Ấn Độ/Nepal, cà ri",
      "es": "Comida india/nepalí, curry"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-warung-batavia",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "와룽바타비아",
      "en": "Warung Batavia"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화길 4, 3층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-she-sisa",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "myanmar"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "쉐시사",
      "en": "Shwe Sisa"
    },
    "address": {
      "ko": "경기도 안산시 단원구 중앙대로 459, 2층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "미얀마 음식",
      "en": "Myanmar food",
      "th": "อาหารพม่า",
      "ja": "ミャンマー料理",
      "zh": "缅甸菜",
      "vi": "Món ăn Myanmar",
      "es": "Comida de Myanmar"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-choigo-banjeom",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "최고반점",
      "en": "Choigo Banjeom"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원곡공원로 12 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중국 동북요리, 양꼬치",
      "en": "Chinese northeastern cuisine, lamb skewers",
      "th": "อาหารจีนภาคตะวันออกเฉียงเหนือ เนื้อแกะเสียบไม้",
      "ja": "中国東北料理、ラム串",
      "zh": "东北菜、羊肉串",
      "vi": "Món Đông Bắc Trung Quốc, xiên thịt cừu",
      "es": "Cocina del noreste de China, brochetas de cordero"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-sinbukgyeong-ussankowi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "신북경우싼코위",
      "en": "Sinbukgyeong Ussankowi"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로1길 11 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중국 동북요리",
      "en": "Chinese northeastern cuisine",
      "th": "อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "中国東北料理",
      "zh": "东北菜",
      "vi": "Món Đông Bắc Trung Quốc",
      "es": "Cocina del noreste de China"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-syochai",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "쇼차이",
      "en": "Syochai"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로1길 5 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-gohyang-yangkkochi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "고향양꼬치",
      "en": "Gohyang Yangkkochi"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로1길 10-6 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "양꼬치, 중국 동북요리",
      "en": "Lamb skewers, Chinese northeastern cuisine",
      "th": "เนื้อแกะเสียบไม้ อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "ラム串、中国東北料理",
      "zh": "羊肉串、东北菜",
      "vi": "Xiên thịt cừu, món Đông Bắc Trung Quốc",
      "es": "Brochetas de cordero, cocina del noreste de China"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-jangggang-banjeom",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "장강반점",
      "en": "Janggang Banjeom"
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로1길 21 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-yeongil-soyangkkochiwang",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "연길소양꼬치왕",
      "en": "Yeongil So Yangkkochi Wang"
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로1길 19 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "연길 양꼬치, 중국 동북요리",
      "en": "Yanji lamb skewers, Chinese northeastern cuisine",
      "th": "เนื้อแกะเสียบไม้เหยียนจี๋ อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "延吉ラム串、中国東北料理",
      "zh": "延吉羊肉串、东北菜",
      "vi": "Xiên thịt cừu Diên Cát, món Đông Bắc Trung Quốc",
      "es": "Brochetas de cordero de Yanji, cocina del noreste de China"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-hwangharu",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "황학루",
      "en": "Hwanghaknu"
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로1길 17 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-hwaryong-yangkkochi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "화룡양꼬치",
      "en": "Hwaryong Yangkkochi"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로1길 10-8 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "양꼬치, 중국 동북요리",
      "en": "Lamb skewers, Chinese northeastern cuisine",
      "th": "เนื้อแกะเสียบไม้ อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "ラム串、中国東北料理",
      "zh": "羊肉串、东北菜",
      "vi": "Xiên thịt cừu, món Đông Bắc Trung Quốc",
      "es": "Brochetas de cordero, cocina del noreste de China"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-somyeong-yangkkochi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "소명양꼬치",
      "en": "Somyeong Yangkkochi"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로1길 10-14 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "양꼬치, 중국 동북요리",
      "en": "Lamb skewers, Chinese northeastern cuisine",
      "th": "เนื้อแกะเสียบไม้ อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "ラム串、中国東北料理",
      "zh": "羊肉串、东北菜",
      "vi": "Xiên thịt cừu, món Đông Bắc Trung Quốc",
      "es": "Brochetas de cordero, cocina del noreste de China"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-mara-yuhok",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "마라유혹",
      "en": "Mara Yuhok"
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로2길 20 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "마라탕, 마라샹궈, 중국 음식",
      "en": "Malatang, malaxiangguo, Chinese food",
      "th": "หมาล่าทัง หมาล่าเซียงกัว อาหารจีน",
      "ja": "麻辣湯、麻辣香鍋、中華料理",
      "zh": "麻辣烫、麻辣香锅、中国菜",
      "vi": "Malatang, malaxiangguo, món ăn Trung Quốc",
      "es": "Malatang, malaxiangguo, comida china"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-gilim-sukbul",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "길림숯불생고기구이",
      "en": "Gilim Sukbul Gogigui"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로1길 10-7 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중국 동북요리, 숯불구이",
      "en": "Chinese northeastern cuisine, charcoal grill",
      "th": "อาหารจีนภาคตะวันออกเฉียงเหนือ ปิ้งย่างถ่าน",
      "ja": "中国東北料理、炭火焼き",
      "zh": "东北菜、炭火烧烤",
      "vi": "Món Đông Bắc Trung Quốc, nướng than",
      "es": "Cocina del noreste de China, parrilla al carbón"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-yeongil-jindallae-naengmyeon",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "연길진달래냉면",
      "en": "Yeongil Jindallae Naengmyeon"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로1길 10-5 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "연길냉면, 중국 동북요리",
      "en": "Yanji cold noodles, Chinese northeastern cuisine",
      "th": "บะหมี่เย็นเหยียนจี๋ อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "延吉冷麺、中国東北料理",
      "zh": "延吉冷面、东北菜",
      "vi": "Mì lạnh Diên Cát, món Đông Bắc Trung Quốc",
      "es": "Fideos fríos de Yanji, cocina del noreste de China"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-yeongil-wangkkochi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "연길왕꼬치",
      "en": "Yeongil Wangkkochi"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로1길 10-1 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "양꼬치, 중국 동북요리",
      "en": "Lamb skewers, Chinese northeastern cuisine",
      "th": "เนื้อแกะเสียบไม้ อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "ラム串、中国東北料理",
      "zh": "羊肉串、东北菜",
      "vi": "Xiên thịt cừu, món Đông Bắc Trung Quốc",
      "es": "Brochetas de cordero, cocina del noreste de China"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "seoul-gwanghui-samarkand-main",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "사마르칸트 본점",
      "en": "Samarkand"
    },
    "address": {
      "ko": "서울특별시 중구 마른내로 159-10 (광희동)"
    },
    "region": "서울 중구",
    "phone": "02-2277-4261",
    "items": {
      "ko": "우즈베키스탄 요리, 플로프, 삼사, 양고기",
      "en": "Uzbek cuisine, plov, samsa, lamb",
      "th": "อาหารอุซเบก พลอฟ ซัมซา เนื้อแกะ",
      "ja": "ウズベク料理、プロフ、サムサ、ラム肉",
      "zh": "乌兹别克菜、抓饭、烤包子、羊肉",
      "vi": "Món Uzbek, plov, samsa, thịt cừu",
      "es": "Cocina uzbeka, plov, samsa, cordero"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=eGUQFf9eNgHa",
    "confidence": "high"
  },
  {
    "id": "seoul-gwanghui-cafe-uzbekistan",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "카페 우즈베키스탄",
      "en": "Cafe Uzbekistan"
    },
    "address": {
      "ko": "서울특별시 중구 마른내로 159-23 (광희동)"
    },
    "region": "서울 중구",
    "phone": "02-2277-4163",
    "items": {
      "ko": "우즈베키스탄/러시아 음식, 삼사, 양고기",
      "en": "Uzbek/Russian food, samsa, lamb",
      "th": "อาหารอุซเบก/รัสเซีย ซัมซา เนื้อแกะ",
      "ja": "ウズベク/ロシア料理、サムサ、ラム肉",
      "zh": "乌兹别克/俄罗斯菜、烤包子、羊肉",
      "vi": "Món Uzbek/Nga, samsa, thịt cừu",
      "es": "Comida uzbeka/rusa, samsa, cordero"
    },
    "sourceUrl": "https://love.seoul.go.kr/articles/7238",
    "confidence": "high"
  },
  {
    "id": "seoul-gwanghui-imperia",
    "source": "web-research",
    "verified": false,
    "category": "grocery",
    "nationalities": [
      "russia",
      "central-asia"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "임페리아",
      "en": "Imperia"
    },
    "address": {
      "ko": "서울특별시 중구 마른내로 161 (광희동)"
    },
    "region": "서울 중구",
    "phone": "02-2263-4115",
    "items": {
      "ko": "러시아·중앙아시아 식료품, 소시지, 통조림, 빵",
      "en": "Russian & Central Asian groceries, sausages, canned goods, bread",
      "th": "ของชำรัสเซียและเอเชียกลาง ไส้กรอก อาหารกระป๋อง ขนมปัง",
      "ja": "ロシア・中央アジア食料品、ソーセージ、缶詰、パン",
      "zh": "俄罗斯·中亚食品、香肠、罐头、面包",
      "vi": "Thực phẩm Nga và Trung Á, xúc xích, đồ hộp, bánh mì",
      "es": "Comestibles rusos y de Asia Central, salchichas, conservas, pan"
    },
    "sourceUrl": "https://love.seoul.go.kr/articles/7238",
    "confidence": "high"
  },
  {
    "id": "seoul-gwanghui-mongol-nomadic",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "mongolia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "유목민 몽골",
      "en": "Mongol Nomadic"
    },
    "address": {
      "ko": "서울특별시 중구 을지로44길 19 (광희동)"
    },
    "region": "서울 중구",
    "phone": "02-2269-6669",
    "items": {
      "ko": "몽골 음식, 허르헉, 양갈비",
      "en": "Mongolian food, khorkhog, lamb ribs",
      "th": "อาหารมองโกเลีย คอร์ค็อก ซี่โครงแกะ",
      "ja": "モンゴル料理、ホルホグ、ラムあばら",
      "zh": "蒙古菜、石烤羊肉(霍尔霍格)、羊排",
      "vi": "Món Mông Cổ, khorkhog, sườn cừu",
      "es": "Comida mongola, khorkhog, costillas de cordero"
    },
    "sourceUrl": "https://love.seoul.go.kr/articles/7238",
    "confidence": "high"
  },
  {
    "id": "seoul-gwanghui-cafe-baikal",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "카페 바이칼",
      "en": "Cafe Baikal"
    },
    "address": {
      "ko": "서울특별시 중구 동호로34길 24, 2층 (광희동)"
    },
    "region": "서울 중구",
    "phone": "02-3390-4310",
    "items": {
      "ko": "러시아 부랴트 전통음식",
      "en": "Russian Buryat traditional food",
      "th": "อาหารดั้งเดิมบูร์ยัตรัสเซีย",
      "ja": "ロシア・ブリヤート伝統料理",
      "zh": "俄罗斯布里亚特传统菜",
      "vi": "Món ăn truyền thống Buryat của Nga",
      "es": "Comida tradicional buriato-rusa"
    },
    "sourceUrl": "https://love.seoul.go.kr/articles/7238",
    "confidence": "high"
  },
  {
    "id": "seoul-gwanghui-russia-cake",
    "source": "web-research",
    "verified": false,
    "category": "grocery",
    "nationalities": [
      "russia"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "러시아케익",
      "en": "Russia Cake"
    },
    "address": {
      "ko": "서울특별시 중구 을지로42길 7 (광희동)"
    },
    "region": "서울 중구",
    "phone": "02-6053-4079",
    "items": {
      "ko": "러시아 케이크·파이 베이커리",
      "en": "Russian cake & pie bakery",
      "th": "เบเกอรี่เค้กและพายรัสเซีย",
      "ja": "ロシアのケーキ・パイのベーカリー",
      "zh": "俄罗斯蛋糕·派烘焙店",
      "vi": "Tiệm bánh ngọt và pie kiểu Nga",
      "es": "Pastelería rusa de tartas y pasteles"
    },
    "sourceUrl": "https://love.seoul.go.kr/articles/7238",
    "confidence": "high"
  },
  {
    "id": "seoul-itaewon-usmania",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "우스마니아",
      "en": "Usmania"
    },
    "address": {
      "ko": "서울특별시 용산구 우사단로 34 (이태원)"
    },
    "region": "서울 용산구",
    "phone": "02-798-7155",
    "items": {
      "ko": "인도·파키스탄 할랄 음식, 커리",
      "en": "Indian & Pakistani halal food, curry",
      "th": "อาหารฮาลาลอินเดียและปากีสถาน แกงกะหรี่",
      "ja": "インド・パキスタンのハラル料理、カレー",
      "zh": "印度·巴基斯坦清真菜、咖喱",
      "vi": "Món halal Ấn Độ và Pakistan, cà ri",
      "es": "Comida halal india y pakistaní, curry"
    },
    "sourceUrl": "https://korean.visitseoul.net/restaurants/우스마니아_/12767",
    "confidence": "high"
  },
  {
    "id": "seoul-itaewon-makan-halal",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "마칸 할랄 코리안 레스토랑",
      "en": "Makan Halal Korean Restaurant"
    },
    "address": {
      "ko": "서울특별시 용산구 우사단로10길 52 (이태원)"
    },
    "region": "서울 용산구",
    "phone": "02-6012-2231",
    "items": {
      "ko": "할랄 한식",
      "en": "Halal Korean food",
      "th": "อาหารเกาหลีฮาลาล",
      "ja": "ハラル韓国料理",
      "zh": "清真韩餐",
      "vi": "Món Hàn Quốc halal",
      "es": "Comida coreana halal"
    },
    "sourceUrl": "https://k-life.co/travel/9480",
    "confidence": "high"
  },
  {
    "id": "seoul-itaewon-petra",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "페트라",
      "en": "Petra"
    },
    "address": {
      "ko": "서울특별시 용산구 녹사평대로40길 33 (이태원)"
    },
    "region": "서울 용산구",
    "phone": "02-790-4433",
    "items": {
      "ko": "중동(요르단) 음식, 할랄",
      "en": "Middle Eastern (Jordanian) food, halal",
      "th": "อาหารตะวันออกกลาง (จอร์แดน) ฮาลาล",
      "ja": "中東(ヨルダン)料理、ハラル",
      "zh": "中东(约旦)菜、清真",
      "vi": "Món Trung Đông (Jordan), halal",
      "es": "Comida de Oriente Medio (jordana), halal"
    },
    "sourceUrl": "https://k-life.co/travel/9480",
    "confidence": "high"
  },
  {
    "id": "seoul-itaewon-bombay-grill",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "봄베그릴 이태원",
      "en": "Bombay Grill Itaewon"
    },
    "address": {
      "ko": "서울특별시 용산구 우사단로10길 11, 2층 (이태원)"
    },
    "region": "서울 용산구",
    "phone": "02-792-7155",
    "items": {
      "ko": "인도 그릴, 할랄",
      "en": "Indian grill, halal",
      "th": "อาหารย่างอินเดีย ฮาลาล",
      "ja": "インドのグリル料理、ハラル",
      "zh": "印度烧烤、清真",
      "vi": "Món nướng Ấn Độ, halal",
      "es": "Parrilla india, halal"
    },
    "sourceUrl": "https://k-life.co/travel/9480",
    "confidence": "high"
  },
  {
    "id": "seoul-itaewon-kervan",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "케르반레스토랑 이태원점",
      "en": "Kervan Restaurant"
    },
    "address": {
      "ko": "서울특별시 용산구 이태원로 192 (이태원)"
    },
    "region": "서울 용산구",
    "phone": "02-792-4767",
    "items": {
      "ko": "터키·중동 음식, 할랄",
      "en": "Turkish & Middle Eastern food, halal",
      "th": "อาหารตุรกีและตะวันออกกลาง ฮาลาล",
      "ja": "トルコ・中東料理、ハラル",
      "zh": "土耳其·中东菜、清真",
      "vi": "Món Thổ Nhĩ Kỳ và Trung Đông, halal",
      "es": "Comida turca y de Oriente Medio, halal"
    },
    "sourceUrl": "https://k-life.co/travel/9480",
    "confidence": "high"
  },
  {
    "id": "seoul-itaewon-mr-kebab",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "미스터케밥",
      "en": "Mr. Kebab"
    },
    "address": {
      "ko": "서울특별시 용산구 이태원로 192 (이태원)"
    },
    "region": "서울 용산구",
    "phone": "02-3463-2356",
    "items": {
      "ko": "케밥, 중동 음식, 할랄",
      "en": "Kebab, Middle Eastern food, halal",
      "th": "เคบับ อาหารตะวันออกกลาง ฮาลาล",
      "ja": "ケバブ、中東料理、ハラル",
      "zh": "烤肉串(卡巴)、中东菜、清真",
      "vi": "Kebab, món Trung Đông, halal",
      "es": "Kebab, comida de Oriente Medio, halal"
    },
    "sourceUrl": "https://k-life.co/travel/9480",
    "confidence": "high"
  },
  {
    "id": "seoul-itaewon-murree-tandoori",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "머리 탄두리 앤 커리",
      "en": "Murree Tandoori & Curry"
    },
    "address": {
      "ko": "서울특별시 용산구 이태원로 140-6 (이태원)"
    },
    "region": "서울 용산구",
    "phone": "02-3785-1436",
    "items": {
      "ko": "인도·파키스탄 음식, 탄두리, 커리, 할랄",
      "en": "Indian & Pakistani food, tandoori, curry, halal",
      "th": "อาหารอินเดียและปากีสถาน ทันดูรี แกงกะหรี่ ฮาลาล",
      "ja": "インド・パキスタン料理、タンドリー、カレー、ハラル",
      "zh": "印度·巴基斯坦菜、坦都里、咖喱、清真",
      "vi": "Món Ấn Độ và Pakistan, tandoori, cà ri, halal",
      "es": "Comida india y pakistaní, tandoori, curry, halal"
    },
    "sourceUrl": "https://k-life.co/travel/9480",
    "confidence": "high"
  },
  {
    "id": "seoul-itaewon-taj-palace",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "타지팰리스",
      "en": "Taj Palace"
    },
    "address": {
      "ko": "서울특별시 용산구 우사단로 39 (이태원)"
    },
    "region": "서울 용산구",
    "phone": "02-790-5786",
    "items": {
      "ko": "중동·인도 음식, 할랄",
      "en": "Middle Eastern & Indian food, halal",
      "th": "อาหารตะวันออกกลางและอินเดีย ฮาลาล",
      "ja": "中東・インド料理、ハラル",
      "zh": "中东·印度菜、清真",
      "vi": "Món Trung Đông và Ấn Độ, halal",
      "es": "Comida de Oriente Medio e india, halal"
    },
    "sourceUrl": "https://k-life.co/travel/9480",
    "confidence": "high"
  },
  {
    "id": "seoul-itaewon-dubai-restaurant",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "두바이 레스토랑",
      "en": "Dubai Restaurant"
    },
    "address": {
      "ko": "서울특별시 용산구 이태원로 192, 2층 (이태원)"
    },
    "region": "서울 용산구",
    "phone": "02-798-9277",
    "items": {
      "ko": "아랍 음식, 할랄",
      "en": "Arabic food, halal",
      "th": "อาหารอาหรับ ฮาลาล",
      "ja": "アラブ料理、ハラル",
      "zh": "阿拉伯菜、清真",
      "vi": "Món Ả Rập, halal",
      "es": "Comida árabe, halal"
    },
    "sourceUrl": "https://k-life.co/travel/9480",
    "confidence": "high"
  },
  {
    "id": "seoul-itaewon-rajat",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "라자트",
      "en": "Rajat"
    },
    "address": {
      "ko": "서울특별시 용산구 우사단로 37, 3층 (이태원)"
    },
    "region": "서울 용산구",
    "phone": "02-792-7008",
    "items": {
      "ko": "중동·인도 음식, 할랄",
      "en": "Middle Eastern & Indian food, halal",
      "th": "อาหารตะวันออกกลางและอินเดีย ฮาลาล",
      "ja": "中東・インド料理、ハラル",
      "zh": "中东·印度菜、清真",
      "vi": "Món Trung Đông và Ấn Độ, halal",
      "es": "Comida de Oriente Medio e india, halal"
    },
    "sourceUrl": "https://k-life.co/travel/9480",
    "confidence": "high"
  },
  {
    "id": "gimhae-yatao",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "야타오",
      "en": "Ya Tao"
    },
    "address": {
      "ko": "경상남도 김해시 분성로335번길 3-1, 1층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "010-4182-0819",
    "items": {
      "ko": "베트남 쌀국수, 덮밥",
      "en": "Vietnamese pho, rice bowls",
      "th": "ก๋วยเตี๋ยวเฝอเวียดนาม ข้าวราดหน้า",
      "ja": "ベトナムのフォー、丼物",
      "zh": "越南河粉、盖饭",
      "vi": "Phở Việt Nam, cơm tô",
      "es": "Pho vietnamita, platos de arroz"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-samarkand",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "사마르칸트",
      "en": "Samarkand"
    },
    "address": {
      "ko": "경상남도 김해시 분성로335번길 3 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식, 플로프, 삼사",
      "en": "Uzbek food, plov, samsa",
      "th": "อาหารอุซเบก พลอฟ ซัมซา",
      "ja": "ウズベク料理、プロフ、サムサ",
      "zh": "乌兹别克菜、抓饭、烤包子",
      "vi": "Món Uzbek, plov, samsa",
      "es": "Comida uzbeka, plov, samsa"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-urgut",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "우르굿레스토랑",
      "en": "Urgut Restaurant"
    },
    "address": {
      "ko": "경상남도 김해시 분성로335번길 6 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-khmer",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "cambodia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "크메이",
      "en": "Khmer"
    },
    "address": {
      "ko": "경상남도 김해시 가락로86번길 5-8, 2층"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "캄보디아 음식",
      "en": "Cambodian food",
      "th": "อาหารกัมพูชา",
      "ja": "カンボジア料理",
      "zh": "柬埔寨菜",
      "vi": "Món ăn Campuchia",
      "es": "Comida camboyana"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-namaste",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "india",
      "nepal"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "나마스떼 김해레스토랑",
      "en": "Namaste Gimhae"
    },
    "address": {
      "ko": "경상남도 김해시 가락로94번길 2-1, 3층"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "인도·네팔 음식, 커리",
      "en": "Indian & Nepali food, curry",
      "th": "อาหารอินเดียและเนปาล แกงกะหรี่",
      "ja": "インド・ネパール料理、カレー",
      "zh": "印度·尼泊尔菜、咖喱",
      "vi": "Món Ấn Độ và Nepal, cà ri",
      "es": "Comida india y nepalí, curry"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-taj-mahal",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "india"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "타지마할",
      "en": "Taj Mahal"
    },
    "address": {
      "ko": "경상남도 김해시 분성로335번길 13, 2층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-kabayan",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "philippines"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "카바얀",
      "en": "Kabayan"
    },
    "address": {
      "ko": "경상남도 김해시 가락로86번길 5-20"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "필리핀 음식",
      "en": "Filipino food",
      "th": "อาหารฟิลิปปินส์",
      "ja": "フィリピン料理",
      "zh": "菲律宾菜",
      "vi": "Món ăn Philippines",
      "es": "Comida filipina"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-lan-con-muong",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "란콘므엉",
      "en": "Lan Con Muong"
    },
    "address": {
      "ko": "경상남도 김해시 가락로94번길 5-7"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "베트남 음식",
      "en": "Vietnamese food",
      "th": "อาหารเวียดนาม",
      "ja": "ベトナム料理",
      "zh": "越南菜",
      "vi": "Món ăn Việt Nam",
      "es": "Comida vietnamita"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-thai-food",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "thai"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "타이푸드",
      "en": "Thai Food"
    },
    "address": {
      "ko": "경상남도 김해시 분성로317번길 21 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "태국 음식",
      "en": "Thai food",
      "th": "อาหารไทย",
      "ja": "タイ料理",
      "zh": "泰国菜",
      "vi": "Món ăn Thái Lan",
      "es": "Comida tailandesa"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-new-little-india",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "india",
      "nepal"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "뉴리틀인디아",
      "en": "New Little India"
    },
    "address": {
      "ko": "경상남도 김해시 가락로 95"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "인도·네팔 음식, 커리",
      "en": "Indian & Nepali food, curry",
      "th": "อาหารอินเดียและเนปาล แกงกะหรี่",
      "ja": "インド・ネパール料理、カレー",
      "zh": "印度·尼泊尔菜、咖喱",
      "vi": "Món Ấn Độ và Nepal, cà ri",
      "es": "Comida india y nepalí, curry"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "busan-choryang-sinbalwon",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "신발원",
      "en": "Sinbalwon"
    },
    "address": {
      "ko": "부산광역시 동구 중앙대로214번길 11-3 (초량동)"
    },
    "region": "부산 동구",
    "phone": "",
    "items": {
      "ko": "중국 만두·딤섬, 중국 음식",
      "en": "Chinese dumplings & dim sum, Chinese food",
      "th": "เกี๊ยวจีนและติ่มซำ อาหารจีน",
      "ja": "中華まんじゅう・点心、中華料理",
      "zh": "中式饺子·点心、中国菜",
      "vi": "Bánh bao và dim sum Trung Quốc, món ăn Trung Quốc",
      "es": "Dumplings y dim sum chinos, comida china"
    },
    "sourceUrl": "https://kr.trip.com/moments/theme/poi-busan-chinatown-82901-restaurant-993134/",
    "confidence": "high"
  },
  {
    "id": "busan-choryang-maga-mandu",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "마가만두",
      "en": "Maga Mandu"
    },
    "address": {
      "ko": "부산광역시 동구 중앙대로225번길 3 (초량동)"
    },
    "region": "부산 동구",
    "phone": "",
    "items": {
      "ko": "중국 만두, 중국 음식",
      "en": "Chinese dumplings, Chinese food",
      "th": "เกี๊ยวจีน อาหารจีน",
      "ja": "中華まんじゅう、中華料理",
      "zh": "中式饺子、中国菜",
      "vi": "Bánh bao Trung Quốc, món ăn Trung Quốc",
      "es": "Dumplings chinos, comida china"
    },
    "sourceUrl": "https://brunch.co.kr/@poetgarden/204",
    "confidence": "high"
  },
  {
    "id": "busan-choryang-hongseongbang",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "홍성방 본점",
      "en": "Hongseongbang"
    },
    "address": {
      "ko": "부산광역시 동구 중앙대로179번길 16 (초량동)"
    },
    "region": "부산 동구",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://kr.trip.com/moments/theme/poi-busan-chinatown-82901-restaurant-993134/",
    "confidence": "high"
  },
  {
    "id": "busan-choryang-uchkuduk2",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "우치쿠둑2",
      "en": "Uchkuduk2"
    },
    "address": {
      "ko": "부산광역시 동구 초량동 차이나타운/텍사스거리 일대"
    },
    "region": "부산 동구",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://kr.trip.com/moments/theme/poi-busan-chinatown-82901-restaurant-993134/",
    "confidence": "low"
  },
  {
    "id": "busan-choryang-mayak",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "마야크 레스토랑",
      "en": "Mayak Restaurant"
    },
    "address": {
      "ko": "부산광역시 동구 초량동 텍사스거리 일대"
    },
    "region": "부산 동구",
    "phone": "",
    "items": {
      "ko": "러시아 음식",
      "en": "Russian food",
      "th": "อาหารรัสเซีย",
      "ja": "ロシア料理",
      "zh": "俄罗斯菜",
      "vi": "Món ăn Nga",
      "es": "Comida rusa"
    },
    "sourceUrl": "https://brunch.co.kr/@northalps/1724",
    "confidence": "low"
  },
  {
    "id": "incheon-bupyeong-mingalaba",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "myanmar"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "밍그라바미얀마식당",
      "en": "Mingalaba Myanmar"
    },
    "address": {
      "ko": "인천광역시 부평구 경원대로 1360, 지하1층 (부평동)"
    },
    "region": "인천 부평구",
    "phone": "",
    "items": {
      "ko": "미얀마 음식",
      "en": "Myanmar food",
      "th": "อาหารพม่า",
      "ja": "ミャンマー料理",
      "zh": "缅甸菜",
      "vi": "Món ăn Myanmar",
      "es": "Comida de Myanmar"
    },
    "sourceUrl": "https://www.siksinhot.com/P/1435718",
    "confidence": "high"
  },
  {
    "id": "incheon-bupyeong-bihani",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "india",
      "nepal"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "비하니",
      "en": "Bihani"
    },
    "address": {
      "ko": "인천광역시 부평구 광장로24번길 13, 신성빌딩 (부평동)"
    },
    "region": "인천 부평구",
    "phone": "",
    "items": {
      "ko": "인도·네팔 음식, 커리",
      "en": "Indian & Nepali food, curry",
      "th": "อาหารอินเดียและเนปาล แกงกะหรี่",
      "ja": "インド・ネパール料理、カレー",
      "zh": "印度·尼泊尔菜、咖喱",
      "vi": "Món Ấn Độ và Nepal, cà ri",
      "es": "Comida india y nepalí, curry"
    },
    "sourceUrl": "https://www.siksinhot.com/P/254300",
    "confidence": "high"
  },
  {
    "id": "incheon-bupyeong-myanmar-village",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "myanmar"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "미얀마마을 (부평 미얀마 식당)",
      "en": "Myanmar Village"
    },
    "address": {
      "ko": "인천광역시 부평구 광장로4번길 8 (부평동)"
    },
    "region": "인천 부평구",
    "phone": "",
    "items": {
      "ko": "미얀마 음식",
      "en": "Myanmar food",
      "th": "อาหารพม่า",
      "ja": "ミャンマー料理",
      "zh": "缅甸菜",
      "vi": "Món ăn Myanmar",
      "es": "Comida de Myanmar"
    },
    "sourceUrl": "https://www.tabling.co.kr/place/67a19c33fb544fef682bc1e2",
    "confidence": "medium"
  },
  {
    "id": "gwangju-goryeo-family-restaurant",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "central-asia",
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "고려가족식당",
      "en": "Goryeo Family Restaurant"
    },
    "address": {
      "ko": "광주광역시 광산구 산정공원로 57 (월곡동/산정동)"
    },
    "region": "광주 광산구",
    "phone": "070-4001-5040",
    "items": {
      "ko": "고려인·중앙아시아·러시아 음식, 라그만, 샤슬릭, 굴라쉬, 필라프, 국시",
      "en": "Koryo-saram, Central Asian & Russian food, lagman, shashlik, goulash, pilaf, guksi",
      "th": "อาหารโครยอ-ซารัม เอเชียกลางและรัสเซีย ลักมัน ชาชลิก กูลาช พิลาฟ กุกซี",
      "ja": "高麗人・中央アジア・ロシア料理、ラグマン、シャシリク、グーラシュ、ピラフ、ククシ",
      "zh": "高丽人·中亚·俄罗斯菜、拉条子(拉格曼)、烤肉串(沙什利克)、匈牙利炖肉、抓饭、朝鲜冷面(国수)",
      "vi": "Món Koryo-saram, Trung Á và Nga, lagman, shashlik, goulash, pilaf, guksi",
      "es": "Comida koryo-saram, de Asia Central y rusa, lagman, shashlik, gulash, pilaf, guksi"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=5hRxhIoNBTXV",
    "confidence": "high"
  },
  {
    "id": "gwangju-goryeo-family-cafe-1",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "central-asia",
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "고려인마을가족카페 1호점",
      "en": "Goryeoin Village Family Cafe"
    },
    "address": {
      "ko": "광주광역시 광산구 산정로54번길 26 (산정동)"
    },
    "region": "광주 광산구",
    "phone": "",
    "items": {
      "ko": "러시아·중앙아시아 음식·베이커리, 샤슬릭, 필라프, 삼사",
      "en": "Russian & Central Asian food & bakery, shashlik, pilaf, samsa",
      "th": "อาหารและเบเกอรี่รัสเซียและเอเชียกลาง ชาชลิก พิลาฟ ซัมซา",
      "ja": "ロシア・中央アジア料理・ベーカリー、シャシリク、ピラフ、サムサ",
      "zh": "俄罗斯·中亚菜·烘焙、烤肉串(沙什利克)、抓饭、烤包子",
      "vi": "Món ăn và tiệm bánh Nga, Trung Á, shashlik, pilaf, samsa",
      "es": "Comida y panadería rusa y de Asia Central, shashlik, pilaf, samsa"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=NPspfLUCwL7V",
    "confidence": "high"
  },
  {
    "id": "gwangju-goryeoin-coop",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "central-asia",
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "고려인마을협동조합 (가족카페 본점)",
      "en": "Goryeoin Village Coop"
    },
    "address": {
      "ko": "광주광역시 광산구 산정공원로28번길 35 (월곡동 518-6)"
    },
    "region": "광주 광산구",
    "phone": "",
    "items": {
      "ko": "고려인·러시아·중앙아시아 음식, 식료품 (1호점 식당·2호점 카페·3호점 식료품점)",
      "en": "Koryo-saram, Russian & Central Asian food and groceries (1st: restaurant, 2nd: cafe, 3rd: grocery)",
      "th": "อาหารและของชำโครยอ-ซารัม รัสเซีย เอเชียกลาง (สาขา 1 ร้านอาหาร·สาขา 2 คาเฟ่·สาขา 3 ร้านของชำ)",
      "ja": "高麗人・ロシア・中央アジア料理、食料品(1号店レストラン・2号店カフェ・3号店食料品店)",
      "zh": "高丽人·俄罗斯·中亚菜、食品(1号店餐厅·2号店咖啡·3号店食品店)",
      "vi": "Món ăn và thực phẩm Koryo-saram, Nga, Trung Á (cơ sở 1 nhà hàng·cơ sở 2 quán cà phê·cơ sở 3 cửa hàng thực phẩm)",
      "es": "Comida y comestibles koryo-saram, rusos y de Asia Central (1.º restaurante, 2.º café, 3.º tienda)"
    },
    "sourceUrl": "https://www.koreancoop.com/",
    "confidence": "medium"
  },
  {
    "id": "hwaseong-balan-anilsa",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "sri-lanka",
      "south-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "아닐사레스토랑",
      "en": "Anilsa Restaurant"
    },
    "address": {
      "ko": "경기도 화성시 향남읍 3.1만세로 1122, 3층"
    },
    "region": "경기 화성시",
    "phone": "070-5100-6033",
    "items": {
      "ko": "스리랑카·남아시아 음식",
      "en": "Sri Lankan & South Asian food",
      "th": "อาหารศรีลังกาและเอเชียใต้",
      "ja": "スリランカ・南アジア料理",
      "zh": "斯里兰卡·南亚菜",
      "vi": "Món ăn Sri Lanka và Nam Á",
      "es": "Comida de Sri Lanka y del sur de Asia"
    },
    "sourceUrl": "https://www.keyzard.cc/daboram_j/nb/224119117149",
    "confidence": "high"
  },
  {
    "id": "siheung-jeongwang-39-vietnam",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "39베트남식당",
      "en": "39 Vietnam"
    },
    "address": {
      "ko": "경기도 시흥시 평안상가4길 24, 우석빌딩 (정왕동)"
    },
    "region": "경기 시흥시",
    "phone": "",
    "items": {
      "ko": "베트남 음식, 쌀국수",
      "en": "Vietnamese food, pho",
      "th": "อาหารเวียดนาม ก๋วยเตี๋ยวเฝอ",
      "ja": "ベトナム料理、フォー",
      "zh": "越南菜、河粉",
      "vi": "Món ăn Việt Nam, phở",
      "es": "Comida vietnamita, pho"
    },
    "sourceUrl": "https://www.siksinhot.com/P/1882633",
    "confidence": "medium"
  },
  {
    "id": "siheung-jeongwang-welcome-saigon",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "웰컴 사이공",
      "en": "Welcome Saigon"
    },
    "address": {
      "ko": "경기도 시흥시 정왕동 2703, 퍼스트에비뉴2차 5층 508호"
    },
    "region": "경기 시흥시",
    "phone": "",
    "items": {
      "ko": "베트남 음식, 쌀국수",
      "en": "Vietnamese food, pho",
      "th": "อาหารเวียดนาม ก๋วยเตี๋ยวเฝอ",
      "ja": "ベトナム料理、フォー",
      "zh": "越南菜、河粉",
      "vi": "Món ăn Việt Nam, phở",
      "es": "Comida vietnamita, pho"
    },
    "sourceUrl": "https://autoreserve.com/ko/kr/gyeonggi/siheung-si/vietnamese-food",
    "confidence": "medium"
  },
  {
    "id": "ansan-hanoi-hof-cafe",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "하노이호프카페",
      "en": "Hanoi Hof Cafe"
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로 44, 3층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "베트남 음식·카페",
      "en": "Vietnamese food & cafe",
      "th": "อาหารเวียดนามและคาเฟ่",
      "ja": "ベトナム料理・カフェ",
      "zh": "越南菜·咖啡",
      "vi": "Món ăn Việt Nam và cà phê",
      "es": "Comida vietnamita y café"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-bondok-bali",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "본독발리",
      "en": "Bondok Bali"
    },
    "address": {
      "ko": "경기도 안산시 단원구 중앙대로 451, 2층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-warung-sahabat",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "와롱사하밧트",
      "en": "Warung Sahabat"
    },
    "address": {
      "ko": "경기도 안산시 단원구 중앙대로 447, 1층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-crystal",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "크리스탈",
      "en": "Crystal"
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로 4, 3층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-mari-restaurant",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "thai"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "마리레스토랑",
      "en": "Mari Restaurant"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화길 19, 2층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "태국 음식",
      "en": "Thai food",
      "th": "อาหารไทย",
      "ja": "タイ料理",
      "zh": "泰国菜",
      "vi": "Món ăn Thái Lan",
      "es": "Comida tailandesa"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-mit-thai",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "thai"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "및타이",
      "en": "Mit Thai"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화길 19, 지하1층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "태국 음식",
      "en": "Thai food",
      "th": "อาหารไทย",
      "ja": "タイ料理",
      "zh": "泰国菜",
      "vi": "Món ăn Thái Lan",
      "es": "Comida tailandesa"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-gatotkaca",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "가톳카차",
      "en": "Gatotkaca"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화2길 25, 2층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-batavia",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "바타비아",
      "en": "Batavia"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화길 4, 2층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-doda-kebab",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "도다케밥",
      "en": "Doda Kebab"
    },
    "address": {
      "ko": "경기도 안산시 단원구 중앙대로 457-1, 1층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "케밥, 중동 음식, 할랄",
      "en": "Kebab, Middle Eastern food, halal",
      "th": "เคบับ อาหารตะวันออกกลาง ฮาลาล",
      "ja": "ケバブ、中東料理、ハラル",
      "zh": "烤肉串(卡巴)、中东菜、清真",
      "vi": "Kebab, món Trung Đông, halal",
      "es": "Kebab, comida de Oriente Medio, halal"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-pengpeng-food",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "펑펑푸드",
      "en": "Pengpeng Food"
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화1길 42 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "gyeongju-gyeongnam-asia-mart",
    "source": "web-research",
    "verified": false,
    "category": "grocery",
    "nationalities": [
      "southeast-asia"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "경남아시아마트",
      "en": "Gyeongnam Asia Mart"
    },
    "address": {
      "ko": "경상북도 경주시 황오동 251"
    },
    "region": "경북 경주시",
    "phone": "010-8691-8242",
    "items": {
      "ko": "동남아·외국 식료품, 식자재",
      "en": "Southeast Asian & foreign groceries, ingredients",
      "th": "ของชำเอเชียตะวันออกเฉียงใต้และต่างประเทศ วัตถุดิบ",
      "ja": "東南アジア・外国食料品、食材",
      "zh": "东南亚·进口食品、食材",
      "vi": "Thực phẩm Đông Nam Á và nước ngoài, nguyên liệu",
      "es": "Comestibles del sudeste asiático y extranjeros, ingredientes"
    },
    "sourceUrl": "https://www.diningcode.com/list.dc?query=경주+베트남음식",
    "confidence": "medium"
  },
  {
    "id": "ansan-green-asia-mart",
    "source": "web-research",
    "verified": false,
    "category": "grocery",
    "nationalities": [
      "india",
      "indonesia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "그린아시아레스토랑앤마트",
      "en": "Green Asia Restaurant & Mart"
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로 28-1 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "외국 식료품·식자재, 레스토랑 복합",
      "en": "Foreign groceries & ingredients, with restaurant",
      "th": "ของชำและวัตถุดิบต่างประเทศ พร้อมร้านอาหาร",
      "ja": "外国食料品・食材、レストラン併設",
      "zh": "进口食品·食材、餐厅综合",
      "vi": "Thực phẩm và nguyên liệu nước ngoài, kèm nhà hàng",
      "es": "Comestibles e ingredientes extranjeros, con restaurante"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-pad-thai",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "thai"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "팟타이",
      "en": "Pad Thai"
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로 4, 1층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "태국 음식, 팟타이",
      "en": "Thai food, pad thai",
      "th": "อาหารไทย ผัดไทย",
      "ja": "タイ料理、パッタイ",
      "zh": "泰国菜、泰式炒河粉",
      "vi": "Món ăn Thái Lan, pad thai",
      "es": "Comida tailandesa, pad thai"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-new-garuda",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "뉴가루다레스토랑",
      "en": "New Garuda Restaurant"
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로 4, 4층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-albaraka",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "알바라카",
      "en": "Albaraka"
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로 28-1, 2층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중동 음식, 할랄",
      "en": "Middle Eastern food, halal",
      "th": "อาหารตะวันออกกลาง ฮาลาล",
      "ja": "中東料理、ハラル",
      "zh": "中东菜、清真",
      "vi": "Món Trung Đông, halal",
      "es": "Comida de Oriente Medio, halal"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-butt-kebab",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "바트케밥",
      "en": "Butt Kebab"
    },
    "address": {
      "ko": "경기도 안산시 단원구 중앙대로 441, 1층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "케밥, 중동·파키스탄 음식, 할랄",
      "en": "Kebab, Middle Eastern & Pakistani food, halal",
      "th": "เคบับ อาหารตะวันออกกลางและปากีสถาน ฮาลาล",
      "ja": "ケバブ、中東・パキスタン料理、ハラル",
      "zh": "烤肉串(卡巴)、中东·巴基斯坦菜、清真",
      "vi": "Kebab, món Trung Đông và Pakistan, halal",
      "es": "Kebab, comida de Oriente Medio y pakistaní, halal"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-real-taste-doner-kebab",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "리얼테이스트도너케밥",
      "en": "Real Taste Doner Kebab"
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로 34, 1층 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "도너케밥, 중동 음식, 할랄",
      "en": "Doner kebab, Middle Eastern food, halal",
      "th": "โดเนอร์เคบับ อาหารตะวันออกกลาง ฮาลาล",
      "ja": "ドネルケバブ、中東料理、ハラル",
      "zh": "旋转烤肉(多纳卡巴)、中东菜、清真",
      "vi": "Doner kebab, món Trung Đông, halal",
      "es": "Döner kebab, comida de Oriente Medio, halal"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-haerangang-chodubu",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "해란강초두부",
      "en": ""
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로1길 21-1 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "조선족 동북요리, 초두부",
      "en": "Korean-Chinese northeastern cuisine, soft tofu",
      "th": "อาหารจีนภาคตะวันออกเฉียงเหนือแบบเกาหลีจีน เต้าหู้อ่อน",
      "ja": "朝鮮族の中国東北料理、おぼろ豆腐",
      "zh": "朝鲜族东北菜、嫩豆腐",
      "vi": "Món Đông Bắc Trung Quốc của người Triều Tiên, đậu hũ non",
      "es": "Cocina coreano-china del noreste, tofu suave"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-yeongil-naengmyeon",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "연길냉면",
      "en": ""
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로1길 8 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "연길냉면, 조선족 동북요리",
      "en": "Yanji cold noodles, Korean-Chinese northeastern cuisine",
      "th": "บะหมี่เย็นเหยียนจี๋ อาหารจีนภาคตะวันออกเฉียงเหนือแบบเกาหลีจีน",
      "ja": "延吉冷麺、朝鮮族の中国東北料理",
      "zh": "延吉冷面、朝鲜族东北菜",
      "vi": "Mì lạnh Diên Cát, món Đông Bắc Trung Quốc của người Triều Tiên",
      "es": "Fideos fríos de Yanji, cocina coreano-china del noreste"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-heungwang-jbaoyu",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "흥왕즈바오위",
      "en": ""
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로1길 10-6 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "medium"
  },
  {
    "id": "ansan-meari-sikdang",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "메아리식당",
      "en": ""
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로1길 21-1 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "조선족 동북요리",
      "en": "Korean-Chinese northeastern cuisine",
      "th": "อาหารจีนภาคตะวันออกเฉียงเหนือแบบเกาหลีจีน",
      "ja": "朝鮮族の中国東北料理",
      "zh": "朝鲜族东北菜",
      "vi": "Món Đông Bắc Trung Quốc của người Triều Tiên",
      "es": "Cocina coreano-china del noreste de China"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-sultan",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "술탄",
      "en": "Sultan"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원곡로 43 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중동·파키스탄 음식, 할랄",
      "en": "Middle Eastern & Pakistani food, halal",
      "th": "อาหารตะวันออกกลางและปากีสถาน ฮาลาล",
      "ja": "中東・パキスタン料理、ハラル",
      "zh": "中东·巴基斯坦菜、清真",
      "vi": "Món Trung Đông và Pakistan, halal",
      "es": "Comida de Oriente Medio y pakistaní, halal"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-sulo",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "술로",
      "en": "Sulo"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원곡로 41 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중동 음식, 할랄",
      "en": "Middle Eastern food, halal",
      "th": "อาหารตะวันออกกลาง ฮาลาล",
      "ja": "中東料理、ハラル",
      "zh": "中东菜、清真",
      "vi": "Món Trung Đông, halal",
      "es": "Comida de Oriente Medio, halal"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-shanghai",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "상하이",
      "en": "Shanghai"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로1길 20-14 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-chuanpai-mara",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "촨파이 마라장터",
      "en": "Chuanpai Mara"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원본로1길 20-15 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "마라탕, 마라샹궈, 중국 음식",
      "en": "Malatang, malaxiangguo, Chinese food",
      "th": "หมาล่าทัง หมาล่าเซียงกัว อาหารจีน",
      "ja": "麻辣湯、麻辣香鍋、中華料理",
      "zh": "麻辣烫、麻辣香锅、中国菜",
      "vi": "Malatang, malaxiangguo, món ăn Trung Quốc",
      "es": "Malatang, malaxiangguo, comida china"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-bokgeon-pungmigwan",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "복건풍미관",
      "en": ""
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로 34 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중국 복건요리",
      "en": "Chinese Fujian cuisine",
      "th": "อาหารจีนฝูเจี้ยน",
      "ja": "中国福建料理",
      "zh": "中国福建菜",
      "vi": "Món Phúc Kiến Trung Quốc",
      "es": "Cocina china de Fujian"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-yak-restaurant",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "야크레스토랑",
      "en": "Yak Restaurant"
    },
    "address": {
      "ko": "경기도 안산시 단원구 부부로 30 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄·러시아 음식",
      "en": "Uzbek & Russian food",
      "th": "อาหารอุซเบกและรัสเซีย",
      "ja": "ウズベク・ロシア料理",
      "zh": "乌兹别克·俄罗斯菜",
      "vi": "Món Uzbek và Nga",
      "es": "Comida uzbeka y rusa"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-aringyeon",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "아링연",
      "en": ""
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화1길 36 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-heoheuk-ori",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "허흑오리",
      "en": ""
    },
    "address": {
      "ko": "경기도 안산시 단원구 다문화2길 49 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "중국 오리요리",
      "en": "Chinese duck dishes",
      "th": "อาหารเป็ดจีน",
      "ja": "中国の鴨料理",
      "zh": "中国鸭肉菜",
      "vi": "Món vịt Trung Quốc",
      "es": "Platos chinos de pato"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "high"
  },
  {
    "id": "ansan-ottugi-sutamyeon",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "myanmar"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "오뚜기수타면",
      "en": ""
    },
    "address": {
      "ko": "경기도 안산시 단원구 원곡로 23 (원곡동)"
    },
    "region": "경기 안산시 단원구",
    "phone": "",
    "items": {
      "ko": "미얀마 음식, 수타면",
      "en": "Myanmar food, hand-pulled noodles",
      "th": "อาหารพม่า บะหมี่ดึงมือ",
      "ja": "ミャンマー料理、手延べ麺",
      "zh": "缅甸菜、手拉面",
      "vi": "Món Myanmar, mì kéo tay",
      "es": "Comida de Myanmar, fideos hechos a mano"
    },
    "sourceUrl": "http://food.ansan.go.kr/ASF/bbs/content.php?co_id=s211",
    "confidence": "medium"
  },
  {
    "id": "gwangju-goryeo-family-cafe-wolgok",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "central-asia",
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "고려인마을가족카페 (월곡)",
      "en": "Goryeoin Village Family Cafe"
    },
    "address": {
      "ko": "광주광역시 광산구 산정공원로60번길 4 (월곡동 510-1)"
    },
    "region": "광주 광산구",
    "phone": "",
    "items": {
      "ko": "러시아·중앙아시아 음식·베이커리, 라그만, 샤슬릭, 만두, 빵",
      "en": "Russian & Central Asian food & bakery, lagman, shashlik, dumplings, bread",
      "th": "อาหารและเบเกอรี่รัสเซียและเอเชียกลาง ลักมัน ชาชลิก เกี๊ยว ขนมปัง",
      "ja": "ロシア・中央アジア料理・ベーカリー、ラグマン、シャシリク、餃子、パン",
      "zh": "俄罗斯·中亚菜·烘焙、拉条子(拉格曼)、烤肉串(沙什利克)、饺子、面包",
      "vi": "Món ăn và tiệm bánh Nga, Trung Á, lagman, shashlik, bánh bao, bánh mì",
      "es": "Comida y panadería rusa y de Asia Central, lagman, shashlik, dumplings, pan"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=zfca4mWCrK6o",
    "confidence": "high"
  },
  {
    "id": "gimhae-cambodia-restaurant",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "cambodia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "캄보디아레스토랑",
      "en": "Cambodia Restaurant"
    },
    "address": {
      "ko": "경상남도 김해시 가락로86번길 8-2"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "캄보디아 음식",
      "en": "Cambodian food",
      "th": "อาหารกัมพูชา",
      "ja": "カンボジア料理",
      "zh": "柬埔寨菜",
      "vi": "Món ăn Campuchia",
      "es": "Comida camboyana"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-kafe-vodiy",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "카페버디",
      "en": "Kafe Vodiy"
    },
    "address": {
      "ko": "경상남도 김해시 가락로86번길 10-1, 1층"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄·중앙아시아 음식·카페",
      "en": "Uzbek & Central Asian food & cafe",
      "th": "อาหารและคาเฟ่อุซเบกและเอเชียกลาง",
      "ja": "ウズベク・中央アジア料理・カフェ",
      "zh": "乌兹别克·中亚菜·咖啡",
      "vi": "Món ăn và cà phê Uzbek, Trung Á",
      "es": "Comida y café uzbeko y de Asia Central"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-tambayan",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "philippines"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "탐바얀",
      "en": "Tambayan"
    },
    "address": {
      "ko": "경상남도 김해시 분성로 333, 1층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "필리핀 음식",
      "en": "Filipino food",
      "th": "อาหารฟิลิปปินส์",
      "ja": "フィリピン料理",
      "zh": "菲律宾菜",
      "vi": "Món ăn Philippines",
      "es": "Comida filipina"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-gyeonghwachun",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "경화춘",
      "en": ""
    },
    "address": {
      "ko": "경상남도 김해시 분성로335번길 8-1 (동상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-naan-curry",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "india",
      "nepal"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "난 앤 커리",
      "en": "Naan & Curry"
    },
    "address": {
      "ko": "경상남도 김해시 분성로335번길 9-1"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "인도·네팔 음식, 난, 커리",
      "en": "Indian & Nepali food, naan, curry",
      "th": "อาหารอินเดียและเนปาล นาน แกงกะหรี่",
      "ja": "インド・ネパール料理、ナン、カレー",
      "zh": "印度·尼泊尔菜、馕(印度烤饼)、咖喱",
      "vi": "Món Ấn Độ và Nepal, naan, cà ri",
      "es": "Comida india y nepalí, naan, curry"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-mibamitta",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "myanmar"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "미바밋타",
      "en": "Mibamitta"
    },
    "address": {
      "ko": "경상남도 김해시 가락로86번길 5-16, 1층"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "미얀마 음식",
      "en": "Myanmar food",
      "th": "อาหารพม่า",
      "ja": "ミャンマー料理",
      "zh": "缅甸菜",
      "vi": "Món ăn Myanmar",
      "es": "Comida de Myanmar"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-ruanthai",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "thai"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "르안타이",
      "en": "Ruan Thai"
    },
    "address": {
      "ko": "경상남도 김해시 왕릉로 9 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "태국 음식",
      "en": "Thai food",
      "th": "อาหารไทย",
      "ja": "タイ料理",
      "zh": "泰国菜",
      "vi": "Món ăn Thái Lan",
      "es": "Comida tailandesa"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-tagun-myanmar",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "myanmar"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "따군미얀마식당",
      "en": "Tagun Myanmar"
    },
    "address": {
      "ko": "경상남도 김해시 분성로336번길 12, 2층"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "미얀마 음식",
      "en": "Myanmar food",
      "th": "อาหารพม่า",
      "ja": "ミャンマー料理",
      "zh": "缅甸菜",
      "vi": "Món ăn Myanmar",
      "es": "Comida de Myanmar"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "gimhae-manrihyang-mandu",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "김해만두 만리향",
      "en": "Manrihyang"
    },
    "address": {
      "ko": "경상남도 김해시 분성로335번길 4 (동상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 만두",
      "en": "Chinese dumplings",
      "th": "เกี๊ยวจีน",
      "ja": "中華まんじゅう",
      "zh": "中式饺子",
      "vi": "Bánh bao Trung Quốc",
      "es": "Dumplings chinos"
    },
    "sourceUrl": "https://www.gimhae.go.kr/00510/03080/03820.web?idx=137&amode=view",
    "confidence": "high"
  },
  {
    "id": "seoul-jayang-dongbuk-pungmi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "동북풍미양꼬치",
      "en": "Dongbuk Pungmi"
    },
    "address": {
      "ko": "서울특별시 광진구 동일로18길 90, 1층 (자양동)"
    },
    "region": "서울 광진구",
    "phone": "02-468-9493",
    "items": {
      "ko": "양꼬치, 중국 동북요리",
      "en": "Lamb skewers, Chinese northeastern cuisine",
      "th": "เนื้อแกะเสียบไม้ อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "ラム串、中国東北料理",
      "zh": "羊肉串、东北菜",
      "vi": "Xiên thịt cừu, món Đông Bắc Trung Quốc",
      "es": "Brochetas de cordero, cocina del noreste de China"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=Ir4FxV4mZZeN",
    "confidence": "high"
  },
  {
    "id": "seoul-jayang-maeunhyangsot",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "매운향솥",
      "en": ""
    },
    "address": {
      "ko": "서울특별시 광진구 동일로18길 61 (자양동)"
    },
    "region": "서울 광진구",
    "phone": "",
    "items": {
      "ko": "마라샹궈, 중국 음식",
      "en": "Mala xiang guo, Chinese food",
      "th": "หมาล่าเซียงกัว อาหารจีน",
      "ja": "麻辣香鍋、中華料理",
      "zh": "麻辣香锅、中国菜",
      "vi": "Mala xiang guo, món ăn Trung Quốc",
      "es": "Mala xiang guo, comida china"
    },
    "sourceUrl": "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=f225fdfa-d60b-44a7-8b40-b22eeb83442a",
    "confidence": "high"
  },
  {
    "id": "seoul-jayang-haeryong-mararungsha",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "해룡 마라룽샤",
      "en": "Haeryong Mala"
    },
    "address": {
      "ko": "서울특별시 광진구 동일로18길 36 (자양동)"
    },
    "region": "서울 광진구",
    "phone": "",
    "items": {
      "ko": "마라룽샤, 마라탕, 중국 음식",
      "en": "Mala crayfish, malatang, Chinese food",
      "th": "กุ้งเครย์ฟิชหมาล่า หมาล่าทัง อาหารจีน",
      "ja": "麻辣ザリガニ、麻辣湯、中華料理",
      "zh": "麻辣龙虾、麻辣烫、中国菜",
      "vi": "Tôm hùm đất mala, malatang, món ăn Trung Quốc",
      "es": "Cangrejos de río mala, malatang, comida china"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=vAekr6UVblJ6",
    "confidence": "high"
  },
  {
    "id": "seoul-jayang-songhwa-yangkkochi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "송화양꼬치",
      "en": "Songhwa"
    },
    "address": {
      "ko": "서울특별시 광진구 동일로18길 70 (자양동)"
    },
    "region": "서울 광진구",
    "phone": "",
    "items": {
      "ko": "양꼬치, 중국 동북요리",
      "en": "Lamb skewers, Chinese northeastern cuisine",
      "th": "เนื้อแกะเสียบไม้ อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "ラム串、中国東北料理",
      "zh": "羊肉串、东北菜",
      "vi": "Xiên thịt cừu, món Đông Bắc Trung Quốc",
      "es": "Brochetas de cordero, cocina del noreste de China"
    },
    "sourceUrl": "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=f225fdfa-d60b-44a7-8b40-b22eeb83442a",
    "confidence": "high"
  },
  {
    "id": "seoul-jayang-eoltangja",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "얼땅쟈 본점",
      "en": "Eoltangja"
    },
    "address": {
      "ko": "서울특별시 광진구 동일로18길 68 (자양동)"
    },
    "region": "서울 광진구",
    "phone": "",
    "items": {
      "ko": "훠궈, 양꼬치, 중국 음식",
      "en": "Hotpot, lamb skewers, Chinese food",
      "th": "หม้อไฟหั่วกัว เนื้อแกะเสียบไม้ อาหารจีน",
      "ja": "火鍋、ラム串、中華料理",
      "zh": "火锅、羊肉串、中国菜",
      "vi": "Lẩu, xiên thịt cừu, món ăn Trung Quốc",
      "es": "Hotpot, brochetas de cordero, comida china"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=n7JVCgbLvC8F",
    "confidence": "high"
  },
  {
    "id": "seoul-jayang-bongja-maratang",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "봉자마라탕",
      "en": "Bongja Maratang"
    },
    "address": {
      "ko": "서울특별시 광진구 동일로18길 22 (자양동 12-5)"
    },
    "region": "서울 광진구",
    "phone": "02-499-8889",
    "items": {
      "ko": "마라탕, 양고기, 중국 음식",
      "en": "Malatang, lamb, Chinese food",
      "th": "หมาล่าทัง เนื้อแกะ อาหารจีน",
      "ja": "麻辣湯、ラム肉、中華料理",
      "zh": "麻辣烫、羊肉、中国菜",
      "vi": "Malatang, thịt cừu, món ăn Trung Quốc",
      "es": "Malatang, cordero, comida china"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=D6nC7rTyp1GG",
    "confidence": "high"
  },
  {
    "id": "seoul-jayang-chwiheon-kkochi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "취헌꼬치구이전문점",
      "en": "Chwiheon"
    },
    "address": {
      "ko": "서울특별시 광진구 동일로18길 35, 1층 (자양동)"
    },
    "region": "서울 광진구",
    "phone": "",
    "items": {
      "ko": "양꼬치, 꼬치구이, 중국 동북요리",
      "en": "Lamb skewers, grilled skewers, Chinese northeastern cuisine",
      "th": "เนื้อแกะเสียบไม้ ของย่างเสียบไม้ อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "ラム串、串焼き、中国東北料理",
      "zh": "羊肉串、烤串、东北菜",
      "vi": "Xiên thịt cừu, đồ nướng xiên, món Đông Bắc Trung Quốc",
      "es": "Brochetas de cordero, brochetas a la parrilla, cocina del noreste de China"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=qQwybdHmxpcA",
    "confidence": "high"
  },
  {
    "id": "suwon-tashkent",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "타슈켄트",
      "en": "Tashkent"
    },
    "address": {
      "ko": "경기도 수원시 팔달구 매산로 2-10, 수원역전시장 지하1층 다문화푸드랜드 (매산로1가)"
    },
    "region": "경기 수원시 팔달구",
    "phone": "0507-1331-4012",
    "items": {
      "ko": "우즈베키스탄 음식, 쌈사, 슈르빠, 라그만, 샤슬릭",
      "en": "Uzbek food, samsa, shurpa, lagman, shashlik",
      "th": "อาหารอุซเบก ซัมซา ชูร์ปา ลักมัน ชาชลิก",
      "ja": "ウズベク料理、サムサ、シュルパ、ラグマン、シャシリク",
      "zh": "乌兹别克菜、烤包子、舒尔帕汤、拉条子(拉格曼)、烤肉串(沙什利克)",
      "vi": "Món Uzbek, samsa, shurpa, lagman, shashlik",
      "es": "Comida uzbeka, samsa, shurpa, lagman, shashlik"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=jTUMVVs8jvgj",
    "confidence": "high"
  },
  {
    "id": "suwon-foodland-vietnam",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "다문화푸드랜드 베트남",
      "en": "Multicultural Foodland Vietnam"
    },
    "address": {
      "ko": "경기도 수원시 팔달구 매산로 2-10, 지하1층 103호 (매산로1가)"
    },
    "region": "경기 수원시 팔달구",
    "phone": "0507-1374-4774",
    "items": {
      "ko": "베트남 음식, 쌀국수, 월남쌈",
      "en": "Vietnamese food, pho, fresh spring rolls",
      "th": "อาหารเวียดนาม ก๋วยเตี๋ยวเฝอ ปอเปี๊ยะสดเวียดนาม",
      "ja": "ベトナム料理、フォー、生春巻き",
      "zh": "越南菜、河粉、越南春卷",
      "vi": "Món ăn Việt Nam, phở, gỏi cuốn",
      "es": "Comida vietnamita, pho, rollitos vietnamitas"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=BZdjfk1GVdIf",
    "confidence": "high"
  },
  {
    "id": "incheon-hambak-the-chef",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "central-asia",
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "더쉐프",
      "en": "The Chef"
    },
    "address": {
      "ko": "인천광역시 연수구 함박로 86 (연수동)"
    },
    "region": "인천 연수구",
    "phone": "",
    "items": {
      "ko": "러시아·중앙아시아·고려인 음식, 함박",
      "en": "Russian, Central Asian & Koryo-saram food, hamburg steak",
      "th": "อาหารรัสเซีย เอเชียกลางและโครยอ-ซารัม แฮมเบิร์กสเต๊ก",
      "ja": "ロシア・中央アジア・高麗人料理、ハンバーグ",
      "zh": "俄罗斯·中亚·高丽人菜、汉堡肉饼",
      "vi": "Món Nga, Trung Á và Koryo-saram, bít tết hamburg",
      "es": "Comida rusa, de Asia Central y koryo-saram, filete hamburguesa"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=SKvXfiCebLHu",
    "confidence": "high"
  },
  {
    "id": "incheon-hambak-karavan",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "central-asia",
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "카라반",
      "en": "Karavan"
    },
    "address": {
      "ko": "인천광역시 연수구 함박로 60-1 (연수동)"
    },
    "region": "인천 연수구",
    "phone": "",
    "items": {
      "ko": "러시아·중앙아시아 음식, 샤슬릭, 플로프",
      "en": "Russian & Central Asian food, shashlik, plov",
      "th": "อาหารรัสเซียและเอเชียกลาง ชาชลิก พลอฟ",
      "ja": "ロシア・中央アジア料理、シャシリク、プロフ",
      "zh": "俄罗斯·中亚菜、烤肉串(沙什利克)、抓饭",
      "vi": "Món Nga và Trung Á, shashlik, plov",
      "es": "Comida rusa y de Asia Central, shashlik, plov"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=JRGJHZFPIgaI",
    "confidence": "high"
  },
  {
    "id": "incheon-hambak-chaihana",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "central-asia",
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "차이하나",
      "en": "Chaihana"
    },
    "address": {
      "ko": "인천광역시 연수구 함박로 75, 1층 (연수동)"
    },
    "region": "인천 연수구",
    "phone": "",
    "items": {
      "ko": "중앙아시아·러시아 음식",
      "en": "Central Asian & Russian food",
      "th": "อาหารเอเชียกลางและรัสเซีย",
      "ja": "中央アジア・ロシア料理",
      "zh": "中亚·俄罗斯菜",
      "vi": "Món Trung Á và Nga",
      "es": "Comida de Asia Central y rusa"
    },
    "sourceUrl": "http://www.st-news.co.kr/news/articleView.html?idxno=7916",
    "confidence": "high"
  },
  {
    "id": "seoul-itaewon-halal-meat-shop",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "할랄미트",
      "en": "Halal Meat Shop"
    },
    "address": {
      "ko": "서울특별시 용산구 우사단로10길 (서울중앙성원 옆, 이태원)"
    },
    "region": "서울 용산구",
    "phone": "",
    "items": {
      "ko": "할랄 정육점, 무슬림 식자재",
      "en": "Halal butcher, Muslim grocery ingredients",
      "th": "ร้านขายเนื้อฮาลาล วัตถุดิบมุสลิม",
      "ja": "ハラル精肉店、ムスリム食材",
      "zh": "清真肉铺、穆斯林食材",
      "vi": "Cửa hàng thịt halal, nguyên liệu Hồi giáo",
      "es": "Carnicería halal, ingredientes para musulmanes"
    },
    "sourceUrl": "https://mbiz.heraldcorp.com/article/1762989",
    "confidence": "medium"
  },
  {
    "id": "daegu-new-saladin-knu",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "pakistan",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "뉴살라딘 경대점",
      "en": "New Saladin"
    },
    "address": {
      "ko": "대구광역시 북구 대학로 79"
    },
    "region": "대구 북구",
    "phone": "053-942-3535",
    "items": {
      "ko": "인도·파키스탄 음식, 할랄, 커리",
      "en": "Indian & Pakistani food, halal, curry",
      "th": "อาหารอินเดียและปากีสถาน ฮาลาล แกงกะหรี่",
      "ja": "インド・パキスタン料理、ハラル、カレー",
      "zh": "印度·巴基斯坦菜、清真、咖喱",
      "vi": "Món Ấn Độ và Pakistan, halal, cà ri",
      "es": "Comida india y pakistaní, halal, curry"
    },
    "sourceUrl": "https://www.daegufood.go.kr/kor/sub/halal.asp?snm=137",
    "confidence": "high"
  },
  {
    "id": "daegu-new-saladin-keimyung",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "pakistan",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "뉴살라딘 계명대점",
      "en": "New Saladin"
    },
    "address": {
      "ko": "대구광역시 달서구 계대동문로 17"
    },
    "region": "대구 달서구",
    "phone": "053-588-9259",
    "items": {
      "ko": "인도·파키스탄 음식, 할랄, 커리",
      "en": "Indian & Pakistani food, halal, curry",
      "th": "อาหารอินเดียและปากีสถาน ฮาลาล แกงกะหรี่",
      "ja": "インド・パキスタン料理、ハラル、カレー",
      "zh": "印度·巴基斯坦菜、清真、咖喱",
      "vi": "Món Ấn Độ và Pakistan, halal, cà ri",
      "es": "Comida india y pakistaní, halal, curry"
    },
    "sourceUrl": "https://www.daegufood.go.kr/kor/sub/halal.asp?snm=137",
    "confidence": "high"
  },
  {
    "id": "daegu-new-saladin-dongseong",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "뉴살라딘 동성로점",
      "en": "New Saladin"
    },
    "address": {
      "ko": "대구광역시 중구 동성로3길 67"
    },
    "region": "대구 중구",
    "phone": "053-424-9259",
    "items": {
      "ko": "인도 음식, 할랄, 커리",
      "en": "Indian food, halal, curry",
      "th": "อาหารอินเดีย ฮาลาล แกงกะหรี่",
      "ja": "インド料理、ハラル、カレー",
      "zh": "印度菜、清真、咖喱",
      "vi": "Món ăn Ấn Độ, halal, cà ri",
      "es": "Comida india, halal, curry"
    },
    "sourceUrl": "https://www.daegufood.go.kr/kor/sub/halal.asp?snm=137",
    "confidence": "high"
  },
  {
    "id": "daegu-baraji",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "바라지 레스토랑",
      "en": "Baraji Restaurant"
    },
    "address": {
      "ko": "대구광역시 중구 동성로 73"
    },
    "region": "대구 중구",
    "phone": "053-425-3242",
    "items": {
      "ko": "인도·아랍 음식, 할랄",
      "en": "Indian & Arabic food, halal",
      "th": "อาหารอินเดียและอาหรับ ฮาลาล",
      "ja": "インド・アラブ料理、ハラル",
      "zh": "印度·阿拉伯菜、清真",
      "vi": "Món Ấn Độ và Ả Rập, halal",
      "es": "Comida india y árabe, halal"
    },
    "sourceUrl": "https://www.daegufood.go.kr/kor/sub/halal.asp?snm=137",
    "confidence": "high"
  },
  {
    "id": "daegu-tara",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "타라",
      "en": "Tara"
    },
    "address": {
      "ko": "대구광역시 중구 달구벌대로 2109-25"
    },
    "region": "대구 중구",
    "phone": "053-215-8050",
    "items": {
      "ko": "인도 음식, 할랄, 커리",
      "en": "Indian food, halal, curry",
      "th": "อาหารอินเดีย ฮาลาล แกงกะหรี่",
      "ja": "インド料理、ハラル、カレー",
      "zh": "印度菜、清真、咖喱",
      "vi": "Món ăn Ấn Độ, halal, cà ri",
      "es": "Comida india, halal, curry"
    },
    "sourceUrl": "https://www.daegufood.go.kr/kor/sub/halal.asp?snm=137",
    "confidence": "high"
  },
  {
    "id": "daegu-india-bangrangi",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "인도방랑기",
      "en": "India Bangrangi"
    },
    "address": {
      "ko": "대구광역시 북구 대학로 81"
    },
    "region": "대구 북구",
    "phone": "053-956-9940",
    "items": {
      "ko": "인도 음식, 할랄, 커리",
      "en": "Indian food, halal, curry",
      "th": "อาหารอินเดีย ฮาลาล แกงกะหรี่",
      "ja": "インド料理、ハラル、カレー",
      "zh": "印度菜、清真、咖喱",
      "vi": "Món ăn Ấn Độ, halal, cà ri",
      "es": "Comida india, halal, curry"
    },
    "sourceUrl": "https://www.daegufood.go.kr/kor/sub/halal.asp?snm=137",
    "confidence": "high"
  },
  {
    "id": "daegu-taj-mahal-in-korea",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "타지마할 인 코리아",
      "en": "Taj Mahal in Korea"
    },
    "address": {
      "ko": "대구광역시 수성구 달구벌대로 3224"
    },
    "region": "대구 수성구",
    "phone": "053-795-1686",
    "items": {
      "ko": "인도·아랍 음식, 할랄, 커리",
      "en": "Indian & Arabic food, halal, curry",
      "th": "อาหารอินเดียและอาหรับ ฮาลาล แกงกะหรี่",
      "ja": "インド・アラブ料理、ハラル、カレー",
      "zh": "印度·阿拉伯菜、清真、咖喱",
      "vi": "Món Ấn Độ và Ả Rập, halal, cà ri",
      "es": "Comida india y árabe, halal, curry"
    },
    "sourceUrl": "https://www.daegufood.go.kr/kor/sub/halal.asp?snm=137",
    "confidence": "high"
  },
  {
    "id": "daegu-raga",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "pakistan",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "라가",
      "en": "Raga"
    },
    "address": {
      "ko": "대구광역시 수성구 신매로16길 45"
    },
    "region": "대구 수성구",
    "phone": "053-794-1645",
    "items": {
      "ko": "인도·파키스탄·아시아 음식, 할랄, 커리",
      "en": "Indian, Pakistani & Asian food, halal, curry",
      "th": "อาหารอินเดีย ปากีสถานและเอเชีย ฮาลาล แกงกะหรี่",
      "ja": "インド・パキスタン・アジア料理、ハラル、カレー",
      "zh": "印度·巴基斯坦·亚洲菜、清真、咖喱",
      "vi": "Món Ấn Độ, Pakistan và châu Á, halal, cà ri",
      "es": "Comida india, pakistaní y asiática, halal, curry"
    },
    "sourceUrl": "https://www.daegufood.go.kr/kor/sub/halal.asp?snm=137",
    "confidence": "high"
  },
  {
    "id": "seoul-gwanghui-medovik",
    "source": "web-research",
    "verified": false,
    "category": "grocery",
    "nationalities": [
      "russia",
      "central-asia"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "메도빅",
      "en": "Medovik"
    },
    "address": {
      "ko": "서울특별시 중구 마른내로 159 (광희동)"
    },
    "region": "서울 중구",
    "phone": "02-2285-4700",
    "items": {
      "ko": "러시아·중앙아시아 식료품, 치즈·유제품·빵·소시지·꿀케이크",
      "en": "Russian & Central Asian groceries, cheese, dairy, bread, sausages, honey cake (medovik)",
      "th": "ของชำรัสเซียและเอเชียกลาง ชีส ผลิตภัณฑ์นม ขนมปัง ไส้กรอก เค้กน้ำผึ้ง (เมโดวิค)",
      "ja": "ロシア・中央アジア食料品、チーズ・乳製品・パン・ソーセージ・蜂蜜ケーキ(メドヴィク)",
      "zh": "俄罗斯·中亚食品、奶酪·乳制品·面包·香肠·蜂蜜蛋糕(梅多维克)",
      "vi": "Thực phẩm Nga và Trung Á, phô mai, sữa, bánh mì, xúc xích, bánh mật ong (medovik)",
      "es": "Comestibles rusos y de Asia Central, queso, lácteos, pan, salchichas, tarta de miel (medovik)"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=ONMiFXLE5usQ",
    "confidence": "high"
  },
  {
    "id": "busan-choryang-imperia-food",
    "source": "web-research",
    "verified": false,
    "category": "grocery",
    "nationalities": [
      "russia",
      "central-asia"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "임페리아푸드",
      "en": "Imperia Food Market"
    },
    "address": {
      "ko": "부산광역시 동구 대영로243번길 46 (초량동)"
    },
    "region": "부산 동구",
    "phone": "",
    "items": {
      "ko": "러시아·중앙아시아 식료품, 빵",
      "en": "Russian & Central Asian groceries, bread",
      "th": "ของชำรัสเซียและเอเชียกลาง ขนมปัง",
      "ja": "ロシア・中央アジア食料品、パン",
      "zh": "俄罗斯·中亚食品、面包",
      "vi": "Thực phẩm Nga và Trung Á, bánh mì",
      "es": "Comestibles rusos y de Asia Central, pan"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=sl8JKYHRrQEA",
    "confidence": "high"
  },
  {
    "id": "busan-choryang-samarkand",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "사마르칸트",
      "en": "Samarkand"
    },
    "address": {
      "ko": "부산광역시 동구 대영로243번길 37 (초량동)"
    },
    "region": "부산 동구",
    "phone": "051-465-4734",
    "items": {
      "ko": "우즈베키스탄·러시아 음식, 보르쉬, 양꼬치, 난빵",
      "en": "Uzbek & Russian food, borscht, lamb skewers, naan bread",
      "th": "อาหารอุซเบกและรัสเซีย บอร์ช เนื้อแกะเสียบไม้ ขนมปังนาน",
      "ja": "ウズベク・ロシア料理、ボルシチ、ラム串、ナン",
      "zh": "乌兹别克·俄罗斯菜、罗宋汤(红菜汤)、羊肉串、馕",
      "vi": "Món Uzbek và Nga, borscht, xiên thịt cừu, bánh naan",
      "es": "Comida uzbeka y rusa, borscht, brochetas de cordero, pan naan"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=AlDB0kJw54gj",
    "confidence": "high"
  },
  {
    "id": "seoul-hyehwa-philippine-market",
    "source": "web-research",
    "verified": false,
    "category": "grocery",
    "nationalities": [
      "philippines"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "혜화동 필리핀마켓 (일요장터)",
      "en": "Hyehwa Philippine Market"
    },
    "address": {
      "ko": "서울특별시 종로구 혜화동 혜화동성당 앞 대로변 (매주 일요일 10:00-16:00)"
    },
    "region": "서울 종로구",
    "phone": "",
    "items": {
      "ko": "필리핀 식재료·냉동식품·간식·식사, 일요일 노천 장터",
      "en": "Filipino groceries, frozen food, snacks & meals, Sunday open-air market",
      "th": "วัตถุดิบฟิลิปปินส์ อาหารแช่แข็ง ของว่างและอาหาร ตลาดนัดกลางแจ้งวันอาทิตย์",
      "ja": "フィリピン食材・冷凍食品・軽食・食事、日曜の青空市場",
      "zh": "菲律宾食材、冷冻食品、零食与餐食，周日露天市集",
      "vi": "Thực phẩm Philippines, đồ đông lạnh, đồ ăn vặt và bữa ăn, chợ trời Chủ Nhật",
      "es": "Productos filipinos, congelados, snacks y comidas, mercado dominical al aire libre"
    },
    "sourceUrl": "https://mediahub.seoul.go.kr/archives/1287701",
    "confidence": "medium"
  },
  {
    "id": "incheon-hambak-assorti",
    "source": "web-research",
    "verified": false,
    "category": "grocery",
    "nationalities": [
      "russia",
      "central-asia"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "아써르티",
      "en": "Assorti"
    },
    "address": {
      "ko": "인천광역시 연수구 함박로 51 (연수동)"
    },
    "region": "인천 연수구",
    "phone": "",
    "items": {
      "ko": "러시아·중앙아시아 빵·식료품 (고려인 빵집), 24시간",
      "en": "Russian & Central Asian bread & groceries (Koryo-saram bakery), 24h",
      "th": "ขนมปังและของชำรัสเซียและเอเชียกลาง (เบเกอรี่โครยอ-ซารัม) เปิด 24 ชั่วโมง",
      "ja": "ロシア・中央アジアのパン・食料品(高麗人ベーカリー)、24時間",
      "zh": "俄罗斯·中亚面包·食品(高丽人面包店)、24小时",
      "vi": "Bánh mì và thực phẩm Nga, Trung Á (tiệm bánh Koryo-saram), 24 giờ",
      "es": "Pan y comestibles rusos y de Asia Central (panadería koryo-saram), 24h"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=jIocjSuocvZc",
    "confidence": "high"
  },
  {
    "id": "seoul-jayang-hongyadong-yangkkochi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "홍야동양꼬치 훠궈무한리필",
      "en": "Hongyadong"
    },
    "address": {
      "ko": "서울특별시 광진구 동일로18길 23 (자양동)"
    },
    "region": "서울 광진구",
    "phone": "010-8004-0825",
    "items": {
      "ko": "양꼬치, 훠궈, 중국 동북요리",
      "en": "Lamb skewers, hotpot, Chinese northeastern cuisine",
      "th": "เนื้อแกะเสียบไม้ หม้อไฟหั่วกัว อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "ラム串、火鍋、中国東北料理",
      "zh": "羊肉串、火锅、东北菜",
      "vi": "Xiên thịt cừu, lẩu, món Đông Bắc Trung Quốc",
      "es": "Brochetas de cordero, hotpot, cocina del noreste de China"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=0pUAwiU9CTXZ",
    "confidence": "high"
  },
  {
    "id": "seoul-jayang-cheonmyeong-kkochi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "천명꼬치구이",
      "en": "Cheonmyeong"
    },
    "address": {
      "ko": "서울특별시 광진구 동일로18길 26, 1층 (자양동)"
    },
    "region": "서울 광진구",
    "phone": "02-498-8860",
    "items": {
      "ko": "양꼬치, 마라양갈비, 중국 동북요리",
      "en": "Lamb skewers, mala lamb ribs, Chinese northeastern cuisine",
      "th": "เนื้อแกะเสียบไม้ ซี่โครงแกะหมาล่า อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "ラム串、麻辣ラムあばら、中国東北料理",
      "zh": "羊肉串、麻辣羊排、东北菜",
      "vi": "Xiên thịt cừu, sườn cừu mala, món Đông Bắc Trung Quốc",
      "es": "Brochetas de cordero, costillas de cordero mala, cocina del noreste de China"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=fqoafQrsHbKC",
    "confidence": "high"
  },
  {
    "id": "seoul-jayang-sunpyeong-yangkkochi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "순평양꼬치훠궈무한리필",
      "en": "Sunpyeong"
    },
    "address": {
      "ko": "서울특별시 광진구 동일로18길 96, 1층 (자양동)"
    },
    "region": "서울 광진구",
    "phone": "010-7639-8971",
    "items": {
      "ko": "양꼬치, 훠궈, 중국 동북요리",
      "en": "Lamb skewers, hotpot, Chinese northeastern cuisine",
      "th": "เนื้อแกะเสียบไม้ หม้อไฟหั่วกัว อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "ラム串、火鍋、中国東北料理",
      "zh": "羊肉串、火锅、东北菜",
      "vi": "Xiên thịt cừu, lẩu, món Đông Bắc Trung Quốc",
      "es": "Brochetas de cordero, hotpot, cocina del noreste de China"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=iaul43yXtDdv",
    "confidence": "high"
  },
  {
    "id": "seoul-jayang-bokmanru",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "복만루 1호점",
      "en": "Bokmanru"
    },
    "address": {
      "ko": "서울특별시 광진구 동일로18길 43 (자양동)"
    },
    "region": "서울 광진구",
    "phone": "",
    "items": {
      "ko": "훠궈, 훠궈무한리필, 중국 음식",
      "en": "Hotpot, all-you-can-eat hotpot, Chinese food",
      "th": "หม้อไฟหั่วกัว หม้อไฟบุฟเฟ่ต์ไม่อั้น อาหารจีน",
      "ja": "火鍋、火鍋食べ放題、中華料理",
      "zh": "火锅、火锅自助、中国菜",
      "vi": "Lẩu, lẩu buffet không giới hạn, món ăn Trung Quốc",
      "es": "Hotpot, hotpot a voluntad, comida china"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=oikRjsh0x3sh",
    "confidence": "high"
  },
  {
    "id": "seoul-itaewon-eid",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "이드",
      "en": "Eid"
    },
    "address": {
      "ko": "서울특별시 용산구 우사단로10길 67 (이태원)"
    },
    "region": "서울 용산구",
    "phone": "",
    "items": {
      "ko": "할랄 음식 (할랄 한식·퓨전)",
      "en": "Halal food (halal Korean & fusion)",
      "th": "อาหารฮาลาล (อาหารเกาหลีฮาลาลและฟิวชัน)",
      "ja": "ハラル料理(ハラル韓国料理・フュージョン)",
      "zh": "清真菜(清真韩餐·融合菜)",
      "vi": "Món halal (món Hàn halal và fusion)",
      "es": "Comida halal (coreana halal y fusión)"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=0WXy7Qprwbt7",
    "confidence": "high"
  },
  {
    "id": "seoul-myeongdong-gurkha",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "nepal",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "구르카 인도레스토랑",
      "en": "Gurkha Indian Restaurant"
    },
    "address": {
      "ko": "서울특별시 중구 명동10길 16-1, 5층 (명동)"
    },
    "region": "서울 중구",
    "phone": "02-775-8860",
    "items": {
      "ko": "인도·네팔 음식, 커리, 할랄",
      "en": "Indian & Nepali food, curry, halal",
      "th": "อาหารอินเดียและเนปาล แกงกะหรี่ ฮาลาล",
      "ja": "インド・ネパール料理、カレー、ハラル",
      "zh": "印度·尼泊尔菜、咖喱、清真",
      "vi": "Món Ấn Độ và Nepal, cà ri, halal",
      "es": "Comida india y nepalí, curry, halal"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=mprhLIyxJuUa",
    "confidence": "high"
  },
  {
    "id": "seoul-hello-beirut",
    "source": "web-research",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "헬로 베이루트",
      "en": "Hello Beirut"
    },
    "address": {
      "ko": "서울특별시 중구 서소문로9길 28, 지하1층 (순화동)"
    },
    "region": "서울 중구",
    "phone": "",
    "items": {
      "ko": "레바논·중동 음식, 할랄",
      "en": "Lebanese & Middle Eastern food, halal",
      "th": "อาหารเลบานอนและตะวันออกกลาง ฮาลาล",
      "ja": "レバノン・中東料理、ハラル",
      "zh": "黎巴嫩·中东菜、清真",
      "vi": "Món Liban và Trung Đông, halal",
      "es": "Comida libanesa y de Oriente Medio, halal"
    },
    "sourceUrl": "https://www.siksinhot.com/P/864593",
    "confidence": "high"
  },
  {
    "id": "seoul-gwanghui-samarkand-city",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "사마르칸트 시티",
      "en": "Samarkand City"
    },
    "address": {
      "ko": "서울특별시 중구 을지로42길 16, 성산빌딩 2층 (광희동)"
    },
    "region": "서울 중구",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄·중앙아시아 음식, 샤슬릭, 플로프",
      "en": "Uzbek & Central Asian food, shashlik, plov",
      "th": "อาหารอุซเบกและเอเชียกลาง ชาชลิก พลอฟ",
      "ja": "ウズベク・中央アジア料理、シャシリク、プロフ",
      "zh": "乌兹别克·中亚菜、烤肉串(沙什利克)、抓饭",
      "vi": "Món Uzbek và Trung Á, shashlik, plov",
      "es": "Comida uzbeka y de Asia Central, shashlik, plov"
    },
    "sourceUrl": "https://stockddalbae.com/93",
    "confidence": "medium"
  },
  {
    "id": "ulsan-donggu-ozbek-diyor",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "halal"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "우즈벡디여르",
      "en": "O'ZBEK DIYOR"
    },
    "address": {
      "ko": "울산광역시 동구 문현로 36 (방어동 1158-12)"
    },
    "region": "울산 동구",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄·중앙아시아 음식, 할랄",
      "en": "Uzbek & Central Asian food, halal",
      "th": "อาหารอุซเบกและเอเชียกลาง ฮาลาล",
      "ja": "ウズベク・中央アジア料理、ハラル",
      "zh": "乌兹别克·中亚菜、清真",
      "vi": "Món Uzbek và Trung Á, halal",
      "es": "Comida uzbeka y de Asia Central, halal"
    },
    "sourceUrl": "http://localmap.co.kr/web/splus/kmap/view.php?sigun=6310000&gugun=3710000&keyno=202",
    "confidence": "high"
  },
  {
    "id": "ulsan-namgu-namaskar-samsan",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "india"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "나마스까르 삼산점",
      "en": "Namaskar Samsan"
    },
    "address": {
      "ko": "울산광역시 남구 삼산중로48번길 11, 2층 (달동 1364-1)"
    },
    "region": "울산 남구",
    "phone": "052-261-3362",
    "items": {
      "ko": "인도 음식, 커리, 탄두리",
      "en": "Indian food, curry, tandoori",
      "th": "อาหารอินเดีย แกงกะหรี่ ทันดูรี",
      "ja": "インド料理、カレー、タンドリー",
      "zh": "印度菜、咖喱、坦都里",
      "vi": "Món ăn Ấn Độ, cà ri, tandoori",
      "es": "Comida india, curry, tandoori"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=heLe6svWW0EY",
    "confidence": "high"
  },
  {
    "id": "ulsan-namgu-pai-thai",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "thai"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "빠이타이",
      "en": "Pai Thai"
    },
    "address": {
      "ko": "울산광역시 남구 돋질로312번길 5, 1층 101호 (삼산동 1550-4)"
    },
    "region": "울산 남구",
    "phone": "",
    "items": {
      "ko": "태국 음식, 팟타이, 푸팟퐁커리, 쏨땀, 똠얌꿍",
      "en": "Thai food, pad thai, poo pad pong curry, som tam, tom yum goong",
      "th": "อาหารไทย ผัดไทย ปูผัดผงกะหรี่ ส้มตำ ต้มยำกุ้ง",
      "ja": "タイ料理、パッタイ、プーパッポンカリー、ソムタム、トムヤムクン",
      "zh": "泰国菜、泰式炒河粉、咖喱炒蟹、青木瓜沙拉(宋丹)、冬阴功汤",
      "vi": "Món Thái, pad thai, poo pad pong curry, som tam, tom yum goong",
      "es": "Comida tailandesa, pad thai, poo pad pong curry, som tam, tom yum goong"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=NTvZdkfVIMad",
    "confidence": "medium"
  },
  {
    "id": "ulsan-namgu-miss-saigon-gongeoptap",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "미스사이공 공업탑점",
      "en": "Miss Saigon"
    },
    "address": {
      "ko": "울산광역시 남구 삼산로 9 (신정동)"
    },
    "region": "울산 남구",
    "phone": "052-258-0422",
    "items": {
      "ko": "베트남 음식, 쌀국수, 분짜, 반미",
      "en": "Vietnamese food, pho, bun cha, banh mi",
      "th": "อาหารเวียดนาม ก๋วยเตี๋ยวเฝอ บุนจ่า บั๋นหมี่",
      "ja": "ベトナム料理、フォー、ブンチャー、バインミー",
      "zh": "越南菜、河粉、烤肉米线(分查)、越式法包(班米)",
      "vi": "Món ăn Việt Nam, phở, bún chả, bánh mì",
      "es": "Comida vietnamita, pho, bun cha, banh mi"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=k3JVvH77GMa9",
    "confidence": "medium"
  },
  {
    "id": "gyeongju-hanoi-sinchao",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "하노이신짜오",
      "en": "Hanoi Xin Chao"
    },
    "address": {
      "ko": "경상북도 경주시 백률로 37"
    },
    "region": "경북 경주시",
    "phone": "010-5709-0866",
    "items": {
      "ko": "베트남 음식, 쌀국수, 분짜, 반쎄오, 반미",
      "en": "Vietnamese food, pho, bun cha, banh xeo, banh mi",
      "th": "อาหารเวียดนาม ก๋วยเตี๋ยวเฝอ บุนจ่า บั๋นแส่ว บั๋นหมี่",
      "ja": "ベトナム料理、フォー、ブンチャー、バインセオ、バインミー",
      "zh": "越南菜、河粉、烤肉米线(分查)、越式煎饼(班赛奥)、越式法包(班米)",
      "vi": "Món ăn Việt Nam, phở, bún chả, bánh xèo, bánh mì",
      "es": "Comida vietnamita, pho, bun cha, banh xeo, banh mi"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=IFbueiKgTIbZ",
    "confidence": "high"
  },
  {
    "id": "ulsan-onsan-deoksin-pengkwang-mala",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "펑쾅마라탕 온산점",
      "en": "Pengkwang Mala"
    },
    "address": {
      "ko": "울산광역시 울주군 온산읍 온덕2길 8 (덕신리)"
    },
    "region": "울산 울주군",
    "phone": "052-237-8808",
    "items": {
      "ko": "마라탕, 마라샹궈, 꿔바로우, 중국 음식",
      "en": "Malatang, mala xiang guo, guo bao rou, Chinese food",
      "th": "หมาล่าทัง หมาล่าเซียงกัว กัวเปาโร่ว อาหารจีน",
      "ja": "マーラータン、マーラーシャングオ、グオバオロウ、中華料理",
      "zh": "麻辣烫、麻辣香锅、锅包肉、中国菜",
      "vi": "Malatang, mala xiang guo, guo bao rou, món Trung Quốc",
      "es": "Malatang, mala xiang guo, guo bao rou, comida china"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=JMQUMHelPpYF",
    "confidence": "high"
  },
  {
    "id": "ulsan-donggu-chunli-mala-jeonha",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "춘리마라탕 전하점",
      "en": "Chunli Mala"
    },
    "address": {
      "ko": "울산광역시 동구 진성5길 79, 1층 (전하동 673-14)"
    },
    "region": "울산 동구",
    "phone": "0507-1377-1025",
    "items": {
      "ko": "마라탕, 꿔바로우, 중국 음식",
      "en": "Malatang, guo bao rou, Chinese food",
      "th": "หมาล่าทัง กัวเปาโร่ว อาหารจีน",
      "ja": "マーラータン、グオバオロウ、中華料理",
      "zh": "麻辣烫、锅包肉、中国菜",
      "vi": "Malatang, guo bao rou, món Trung Quốc",
      "es": "Malatang, guo bao rou, comida china"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=wfJxUGCy1211",
    "confidence": "high"
  },
  {
    "id": "ulsan-donggu-huguguy-yangkkochi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "후구구양꼬치구이",
      "en": "Huguguy"
    },
    "address": {
      "ko": "울산광역시 동구 진성8길 121 (전하동 638-13)"
    },
    "region": "울산 동구",
    "phone": "052-236-7999",
    "items": {
      "ko": "양꼬치, 꿔바로우, 중국 동북요리",
      "en": "Lamb skewers, guo bao rou, Chinese northeastern cuisine",
      "th": "เนื้อแกะเสียบไม้ กัวเปาโร่ว อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "ラム串、グオバオロウ、中国東北料理",
      "zh": "羊肉串、锅包肉、东北菜",
      "vi": "Xiên thịt cừu, guo bao rou, món Đông Bắc Trung Quốc",
      "es": "Brochetas de cordero, guo bao rou, cocina del noreste de China"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=apav2tK3Offd",
    "confidence": "high"
  },
  {
    "id": "ulsan-donggu-marahyangwon-jeonha",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "마라향원 전하점",
      "en": "Mala Hyangwon"
    },
    "address": {
      "ko": "울산광역시 동구 진성3길 46 (전하동)"
    },
    "region": "울산 동구",
    "phone": "052-700-6868",
    "items": {
      "ko": "마라탕, 마라샹궈, 중국 음식",
      "en": "Malatang, malaxiangguo, Chinese food",
      "th": "หมาล่าทัง หมาล่าเซียงกัว อาหารจีน",
      "ja": "麻辣湯、麻辣香鍋、中華料理",
      "zh": "麻辣烫、麻辣香锅、中国菜",
      "vi": "Malatang, malaxiangguo, món ăn Trung Quốc",
      "es": "Malatang, malaxiangguo, comida china"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=l2I6TxMdB9FX",
    "confidence": "high"
  },
  {
    "id": "ulsan-donggu-ilsan-yangkkochi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "일산양꼬치",
      "en": "Ilsan Yangkkochi"
    },
    "address": {
      "ko": "울산광역시 동구 해수욕장길 6, 1층 (화정동 638-4)"
    },
    "region": "울산 동구",
    "phone": "052-904-9384",
    "items": {
      "ko": "양꼬치, 마라탕, 꿔바로우, 중국 동북요리",
      "en": "Lamb skewers, malatang, guo bao rou, Chinese northeastern cuisine",
      "th": "เนื้อแกะเสียบไม้ หมาล่าทัง กัวเปาโร่ว อาหารจีนภาคตะวันออกเฉียงเหนือ",
      "ja": "ラム串、マーラータン、グオバオロウ、中国東北料理",
      "zh": "羊肉串、麻辣烫、锅包肉、东北菜",
      "vi": "Xiên thịt cừu, malatang, guo bao rou, món Đông Bắc Trung Quốc",
      "es": "Brochetas de cordero, malatang, guo bao rou, cocina del noreste de China"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=LAGsBBe4Yl1W",
    "confidence": "high"
  },
  {
    "id": "ulsan-samnam-wow-yangkkochi",
    "source": "web-research",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "와우양꼬치 마라자매마라탕",
      "en": "Wow Yangkkochi"
    },
    "address": {
      "ko": "울산광역시 울주군 삼남읍 교동로 107, 1층"
    },
    "region": "울산 울주군",
    "phone": "0507-1448-9914",
    "items": {
      "ko": "양꼬치, 마라탕, 꿔바로우, 중국 음식",
      "en": "Lamb skewers, malatang, guo bao rou, Chinese food",
      "th": "เนื้อแกะเสียบไม้ หมาล่าทัง กัวเปาโร่ว อาหารจีน",
      "ja": "ラム串、マーラータン、グオバオロウ、中華料理",
      "zh": "羊肉串、麻辣烫、锅包肉、中国菜",
      "vi": "Xiên thịt cừu, malatang, guo bao rou, món Trung Quốc",
      "es": "Brochetas de cordero, malatang, guo bao rou, comida china"
    },
    "sourceUrl": "https://www.diningcode.com/profile.php?rid=H48xPPH6EdQ4",
    "confidence": "high"
  },
  {
    "id": "gd-001",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "뉴델리"
    },
    "address": {
      "ko": "고양시 덕양구 화신로272번길 29"
    },
    "region": "경기 고양시",
    "phone": "070-4105-1010",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-002",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "아시아아시아"
    },
    "address": {
      "ko": "고양시 일산동구 장항동 868 웨스턴돔 2층"
    },
    "region": "경기 고양시",
    "phone": "031-901-0086",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-003",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "bangladesh",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "KB케밥&닭강정"
    },
    "address": {
      "ko": "김포시 통진읍 조강로 40"
    },
    "region": "경기 김포시",
    "phone": "031-981-3293",
    "items": {
      "ko": "방글라데시 음식, 할랄",
      "en": "Bangladeshi food, halal",
      "th": "อาหารบังกลาเทศ ฮาลาล",
      "ja": "バングラデシュ料理、ハラル",
      "zh": "孟加拉国菜、清真",
      "vi": "Món Bangladesh, halal",
      "es": "Comida bangladesí, halal"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-004",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "FORTUNE(파르투네)"
    },
    "address": {
      "ko": "김포시 통진읍 조강로44번길 4 2층"
    },
    "region": "경기 김포시",
    "phone": "031-997-2776",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-005",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "indonesia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "말리오보로"
    },
    "address": {
      "ko": "김포시 통진읍 서암로 94-30"
    },
    "region": "경기 김포시",
    "phone": "031-984-4805",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-006",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "indonesia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "할랄 인디안 레스토랑"
    },
    "address": {
      "ko": "김포시 통진읍 조강로 43"
    },
    "region": "경기 김포시",
    "phone": "031-997-2334",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-007",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "하스케밥"
    },
    "address": {
      "ko": "동두천시 평화로 2553"
    },
    "region": "경기 동두천시",
    "phone": "031-862-3869",
    "items": {
      "ko": "터키·중동 음식, 할랄",
      "en": "Turkish & Middle Eastern food, halal",
      "th": "อาหารตุรกีและตะวันออกกลาง ฮาลาล",
      "ja": "トルコ・中東料理、ハラル",
      "zh": "土耳其·中东菜、清真",
      "vi": "Món Thổ Nhĩ Kỳ và Trung Đông, halal",
      "es": "Comida turca y de Oriente Medio, halal"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-008",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "마살라인디안레스토랑"
    },
    "address": {
      "ko": "부천시 석천로 169번길 30"
    },
    "region": "경기 부천시",
    "phone": "032-326-2244",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-009",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "안나푸르나 레스토랑"
    },
    "address": {
      "ko": "부천시 부흥로 402번길 45"
    },
    "region": "경기 부천시",
    "phone": "032-662-5075",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-010",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "디왈리"
    },
    "address": {
      "ko": "성남시 수정구 성남대로 1334"
    },
    "region": "경기 성남시",
    "phone": "031-722-0782",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-011",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "인디안 커리"
    },
    "address": {
      "ko": "성남시 분당구 황새울로360번길 21"
    },
    "region": "경기 성남시",
    "phone": "031-781-2177",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-012",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "인디테이블"
    },
    "address": {
      "ko": "성남시 분당구 동판교로177번길 25"
    },
    "region": "경기 성남시",
    "phone": "031-708-7022",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-013",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "nepal",
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "그레이트 히말라야"
    },
    "address": {
      "ko": "수원시 팔달구 매산로 7-1"
    },
    "region": "경기 수원시",
    "phone": "031-243-1187",
    "items": {
      "ko": "인도·네팔 음식, 커리",
      "en": "Indian & Nepali food, curry",
      "th": "อาหารอินเดียและเนปาล แกงกะหรี่",
      "ja": "インド・ネパール料理、カレー",
      "zh": "印度·尼泊尔菜、咖喱",
      "vi": "Món Ấn Độ và Nepal, cà ri",
      "es": "Comida india y nepalí, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-014",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "난"
    },
    "address": {
      "ko": "수원시 팔달구 인계로166번길 45 2층"
    },
    "region": "경기 수원시",
    "phone": "031-237-1090",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-015",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "델리다바"
    },
    "address": {
      "ko": "수원시 팔달구 매산로 6-2"
    },
    "region": "경기 수원시",
    "phone": "031-248-1090",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-016",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "벨라튀니지"
    },
    "address": {
      "ko": "수원시 장안구 서부로2106번길 21"
    },
    "region": "경기 수원시",
    "phone": "031-296-8327",
    "items": {
      "ko": "지중해·중동 음식, 할랄",
      "en": "Mediterranean & Middle Eastern food, halal",
      "th": "อาหารเมดิเตอร์เรเนียนและตะวันออกกลาง ฮาลาล",
      "ja": "地中海・中東料理、ハラル",
      "zh": "地中海与中东菜、清真",
      "vi": "Món Địa Trung Hải & Trung Đông, halal",
      "es": "Comida mediterránea y de Oriente Medio, halal"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-017",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "수엠부 인도요리"
    },
    "address": {
      "ko": "수원시 팔달구 매산로20번길 9"
    },
    "region": "경기 수원시",
    "phone": "031-258-3305",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-018",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "아그라 스타필드 수원점"
    },
    "address": {
      "ko": "수원시 장안구 수성로 175 스타필드 수원점 7층"
    },
    "region": "경기 수원시",
    "phone": "0507-1413-1704",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-019",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "nepal",
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "히말라야 정원"
    },
    "address": {
      "ko": "수원시 팔달구 권광로180번길 19"
    },
    "region": "경기 수원시",
    "phone": "031-254-0977",
    "items": {
      "ko": "인도·네팔 음식, 커리",
      "en": "Indian & Nepali food, curry",
      "th": "อาหารอินเดียและเนปาล แกงกะหรี่",
      "ja": "インド・ネパール料理、カレー",
      "zh": "印度·尼泊尔菜、咖喱",
      "vi": "Món Ấn Độ và Nepal, cà ri",
      "es": "Comida india y nepalí, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-020",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "indonesia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "New bakso garuda"
    },
    "address": {
      "ko": "경기도 안산시 단원구 원곡동 787-17"
    },
    "region": "경기 안산시",
    "phone": "031-493-0605",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-021",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "긴자인도레스토랑"
    },
    "address": {
      "ko": "안산시 단원구 광덕대로151 304호"
    },
    "region": "경기 안산시",
    "phone": "031-405-3368",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-022",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "뉴타지마할"
    },
    "address": {
      "ko": "안산시 단원구 다문화1길 49"
    },
    "region": "경기 안산시",
    "phone": "031-492-7861",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-023",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "pakistan",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "아시아믹스"
    },
    "address": {
      "ko": "안산시 단원구 다문화2길 22"
    },
    "region": "경기 안산시",
    "phone": "031-494-7447",
    "items": {
      "ko": "인도·파키스탄 음식, 할랄",
      "en": "Indian & Pakistani food, halal",
      "th": "อาหารอินเดียและปากีสถาน ฮาลาล",
      "ja": "インド・パキスタン料理、ハラル",
      "zh": "印度与巴基斯坦菜、清真",
      "vi": "Món Ấn Độ & Pakistan, halal",
      "es": "Comida india y pakistaní, halal"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-024",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "indonesia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "린두알람"
    },
    "address": {
      "ko": "안산시 단원구 다문화길 18 2층"
    },
    "region": "경기 안산시",
    "phone": "031-894-7778",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-025",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "indonesia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "레아 인도네시아"
    },
    "address": {
      "ko": "안산시 단원구 중앙대로 453 2층"
    },
    "region": "경기 안산시",
    "phone": "031-508-6685",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-026",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "indonesia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "로얄레스토랑"
    },
    "address": {
      "ko": "안산시 단원구 원곡로23 2층"
    },
    "region": "경기 안산시",
    "phone": "031-5127-3674",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-027",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "indonesia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "바타비아"
    },
    "address": {
      "ko": "안산시 단원구 다문화길 4"
    },
    "region": "경기 안산시",
    "phone": "031-493-6626",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-028",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "후르셰다사마르칸트"
    },
    "address": {
      "ko": "안산시 단원구 다문화2길 3"
    },
    "region": "경기 안산시",
    "phone": "031-492-6984",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-029",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "indonesia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "임페리아"
    },
    "address": {
      "ko": "안산시 단원구 다문화2길 12"
    },
    "region": "경기 안산시",
    "phone": "031-494-5734",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-030",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "nepal",
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "솔티 인도네팔 레스토랑"
    },
    "address": {
      "ko": "안산시 단원구 중앙대로 453"
    },
    "region": "경기 안산시",
    "phone": "031-492-7723",
    "items": {
      "ko": "인도·네팔 음식, 커리",
      "en": "Indian & Nepali food, curry",
      "th": "อาหารอินเดียและเนปาล แกงกะหรี่",
      "ja": "インド・ネパール料理、カレー",
      "zh": "印度·尼泊尔菜、咖喱",
      "vi": "Món Ấn Độ và Nepal, cà ri",
      "es": "Comida india y nepalí, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-031",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "아시아나 레스토랑"
    },
    "address": {
      "ko": "안산시 단원구 다문화2길 51"
    },
    "region": "경기 안산시",
    "phone": "031-494-6167",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-032",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "RAYHON"
    },
    "address": {
      "ko": "안산시 상록구 학사1길 2"
    },
    "region": "경기 안산시",
    "phone": "031-406-1914",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-033",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "indonesia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "와룽키타"
    },
    "address": {
      "ko": "안산시 원곡본동 원본로 3"
    },
    "region": "경기 안산시",
    "phone": "031-508-1103",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-034",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "nepal",
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "칸티푸르"
    },
    "address": {
      "ko": "안산시 단원구 다문화2길 28"
    },
    "region": "경기 안산시",
    "phone": "031-493-9563",
    "items": {
      "ko": "인도·네팔 음식, 커리",
      "en": "Indian & Nepali food, curry",
      "th": "อาหารอินเดียและเนปาล แกงกะหรี่",
      "ja": "インド・ネパール料理、カレー",
      "zh": "印度·尼泊尔菜、咖喱",
      "vi": "Món Ấn Độ và Nepal, cà ri",
      "es": "Comida india y nepalí, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-035",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "indonesia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "카르티니"
    },
    "address": {
      "ko": "안산시 단원구 다문화1길 1 2층"
    },
    "region": "경기 안산시",
    "phone": "031-493-4471",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-036",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "아그라 스타필드안성점"
    },
    "address": {
      "ko": "안성시 공도읍 서동대로 3930-39 1층 1337호"
    },
    "region": "경기 안성시",
    "phone": "0507-1361-1695",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-037",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "긴자인도레스토랑"
    },
    "address": {
      "ko": "안양시 동안구 평촌대로217번길 19"
    },
    "region": "경기 안양시",
    "phone": "031-383-2223",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-038",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "이타지마할 인디안레스토랑"
    },
    "address": {
      "ko": "오산시 대원로 8-8"
    },
    "region": "경기 오산시",
    "phone": "031-374-0195",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-039",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "갠지스(보정점)"
    },
    "address": {
      "ko": "용인시 기흥구 죽전로15번길 7-15"
    },
    "region": "경기 용인시",
    "phone": "031-889-3434",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-040",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "nepal",
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "두르가(의정부점)"
    },
    "address": {
      "ko": "의정부시 태평로73번길 50"
    },
    "region": "경기 의정부시",
    "phone": "031-848-4785",
    "items": {
      "ko": "인도·네팔 음식, 커리",
      "en": "Indian & Nepali food, curry",
      "th": "อาหารอินเดียและเนปาล แกงกะหรี่",
      "ja": "インド・ネパール料理、カレー",
      "zh": "印度·尼泊尔菜、咖喱",
      "vi": "Món Ấn Độ và Nepal, cà ri",
      "es": "Comida india y nepalí, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-041",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "인도레스토랑 그레이"
    },
    "address": {
      "ko": "파주시 경의로 1114 10층"
    },
    "region": "경기 파주시",
    "phone": "031-949-9135",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-042",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "nepal",
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "더 히말라얀"
    },
    "address": {
      "ko": "파주시 새꽃로 194"
    },
    "region": "경기 파주시",
    "phone": "031-943-2256",
    "items": {
      "ko": "인도·네팔 음식, 커리",
      "en": "Indian & Nepali food, curry",
      "th": "อาหารอินเดียและเนปาล แกงกะหรี่",
      "ja": "インド・ネパール料理、カレー",
      "zh": "印度·尼泊尔菜、咖喱",
      "vi": "Món Ấn Độ và Nepal, cà ri",
      "es": "Comida india y nepalí, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-043",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "니자르케밥(평택점)"
    },
    "address": {
      "ko": "평택시 팽성읍 안정쇼핑로2 2층"
    },
    "region": "경기 평택시",
    "phone": "031-651-9951",
    "items": {
      "ko": "터키·중동 음식, 할랄",
      "en": "Turkish & Middle Eastern food, halal",
      "th": "อาหารตุรกีและตะวันออกกลาง ฮาลาล",
      "ja": "トルコ・中東料理、ハラル",
      "zh": "土耳其·中东菜、清真",
      "vi": "Món Thổ Nhĩ Kỳ và Trung Đông, halal",
      "es": "Comida turca y de Oriente Medio, halal"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-044",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "모티마할험프리점"
    },
    "address": {
      "ko": "평택시 평택1로9번길 8"
    },
    "region": "경기 평택시",
    "phone": "031-616-3358",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-045",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "스파이스빌리지"
    },
    "address": {
      "ko": "평택시 쇼핑로 17-1"
    },
    "region": "경기 평택시",
    "phone": "031-668-4444",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-046",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "에베레스트(스타필드 하남점)"
    },
    "address": {
      "ko": "하남시 미사대로 750"
    },
    "region": "경기 하남시",
    "phone": "031-8072-8289",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-047",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "갠지스(1동탄점)"
    },
    "address": {
      "ko": "화성시 동탄공원로2길 33-11"
    },
    "region": "경기 화성시",
    "phone": "031-613-9575",
    "items": {
      "ko": "인도 음식, 커리",
      "en": "Indian food, curry",
      "th": "อาหารอินเดีย แกงกะหรี่",
      "ja": "インド料理、カレー",
      "zh": "印度菜、咖喱",
      "vi": "Món ăn Ấn Độ, cà ri",
      "es": "Comida india, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-048",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "ZAMZAM"
    },
    "address": {
      "ko": "화성시 향남읍 3.1만세로 1130"
    },
    "region": "경기 화성시",
    "phone": "070-4255-1786",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-049",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "indonesia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "발안 인도네시아"
    },
    "address": {
      "ko": "화성시 향남읍 3.1만세로 1133"
    },
    "region": "경기 화성시",
    "phone": "070-8844-0340",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-050",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "nepal",
      "india",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "수엠부(동탄점)"
    },
    "address": {
      "ko": "화성시 노작로4길 18-15"
    },
    "region": "경기 화성시",
    "phone": "031-8015-2494",
    "items": {
      "ko": "인도·네팔 음식, 커리",
      "en": "Indian & Nepali food, curry",
      "th": "อาหารอินเดียและเนปาล แกงกะหรี่",
      "ja": "インド・ネパール料理、カレー",
      "zh": "印度·尼泊尔菜、咖喱",
      "vi": "Món Ấn Độ và Nepal, cà ri",
      "es": "Comida india y nepalí, curry"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-051",
    "source": "data.go.kr 경기관광공사 무슬림친화",
    "verified": false,
    "category": "halal",
    "nationalities": [
      "uzbekistan",
      "central-asia",
      "halal"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "파르투내레스토랑"
    },
    "address": {
      "ko": "화성시 남양읍 남양시장로 88"
    },
    "region": "경기 화성시",
    "phone": "031-356-9777",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15099378/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-052",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "구강춘"
    },
    "address": {
      "ko": "경상남도 김해시 진영읍 진영로 150"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-053",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "식이네쪽갈비"
    },
    "address": {
      "ko": "경상남도 김해시 번화1로114번길 7-14 (삼문동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-054",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "러시아 음식점 VIKTORIYA"
    },
    "address": {
      "ko": "경상남도 김해시 호계로499번길 8-11 (동상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-055",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "빈땅레스토 BINTANG RESTO"
    },
    "address": {
      "ko": "경상남도 김해시 분성로335번길 11 (서상동,외1필지 2층)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-056",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "myanmar"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "미바밋타"
    },
    "address": {
      "ko": "경상남도 김해시 가락로86번길 5-16 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "미얀마 음식",
      "en": "Myanmar food",
      "th": "อาหารพม่า",
      "ja": "ミャンマー料理",
      "zh": "缅甸菜",
      "vi": "Món ăn Myanmar",
      "es": "Comida de Myanmar"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-057",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "myanmar"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "유앤미(You and me)"
    },
    "address": {
      "ko": "경상남도 김해시 분성로 330-20 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "미얀마 음식",
      "en": "Myanmar food",
      "th": "อาหารพม่า",
      "ja": "ミャンマー料理",
      "zh": "缅甸菜",
      "vi": "Món ăn Myanmar",
      "es": "Comida de Myanmar"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-058",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "cambodia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "짜이링(JEE LEANG) 999"
    },
    "address": {
      "ko": "경상남도 김해시 가락로86번길 8-2 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "캄보디아 음식",
      "en": "Cambodian food",
      "th": "อาหารกัมพูชา",
      "ja": "カンボジア料理",
      "zh": "柬埔寨菜",
      "vi": "Món ăn Campuchia",
      "es": "Comida camboyana"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-059",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "thai"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "타이음식점"
    },
    "address": {
      "ko": "경상남도 김해시 분성로336번길 23-1 (부원동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "태국 음식",
      "en": "Thai food",
      "th": "อาหารไทย",
      "ja": "タイ料理",
      "zh": "泰国菜",
      "vi": "Món ăn Thái Lan",
      "es": "Comida tailandesa"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-060",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "예양꼬치"
    },
    "address": {
      "ko": "경상남도 김해시 분성로 327-14 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-061",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "브쿠스노프(BKYCHOFF)"
    },
    "address": {
      "ko": "경상남도 김해시 진영읍 장등로6번길 49"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-062",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "myanmar"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "따군"
    },
    "address": {
      "ko": "경상남도 김해시 분성로336번길 12, 2층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "미얀마 음식",
      "en": "Myanmar food",
      "th": "อาหารพม่า",
      "ja": "ミャンマー料理",
      "zh": "缅甸菜",
      "vi": "Món ăn Myanmar",
      "es": "Comida de Myanmar"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-063",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "인도네시아레스토랑"
    },
    "address": {
      "ko": "경상남도 김해시 분성로335번길 24, 2층 (동상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-064",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "사마르간드"
    },
    "address": {
      "ko": "경상남도 김해시 가락로94번길 4, 2층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중앙아시아 음식",
      "en": "Central Asian food",
      "th": "อาหารเอเชียกลาง",
      "ja": "中央アジア料理",
      "zh": "中亚菜",
      "vi": "Món ăn Trung Á",
      "es": "Comida de Asia Central"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-065",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "스카이(SKY BILLARDS CLUB)"
    },
    "address": {
      "ko": "경상남도 김해시 호계로499번길 15, 5층 (동상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "베트남 음식",
      "en": "Vietnamese food",
      "th": "อาหารเวียดนาม",
      "ja": "ベトナム料理",
      "zh": "越南菜",
      "vi": "Món ăn Việt Nam",
      "es": "Comida vietnamita"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-066",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "젤조아 달콤베이커리"
    },
    "address": {
      "ko": "경상남도 김해시 가락로49번길 9, 2층 (부원동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-067",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "루마마칸판투라(RUMAH MAKAN PANTURA)"
    },
    "address": {
      "ko": "경상남도 김해시 분성로 315, 2층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-068",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "양꼬치샤슬릭&빵"
    },
    "address": {
      "ko": "경상남도 김해시 진영읍 여래로 42"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중앙아시아 음식",
      "en": "Central Asian food",
      "th": "อาหารเอเชียกลาง",
      "ja": "中央アジア料理",
      "zh": "中亚菜",
      "vi": "Món ăn Trung Á",
      "es": "Comida de Asia Central"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-069",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "thai"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "크로아똔쿤"
    },
    "address": {
      "ko": "경상남도 김해시 가락로30번길 13, 104호 (부원동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "태국 음식",
      "en": "Thai food",
      "th": "อาหารไทย",
      "ja": "タイ料理",
      "zh": "泰国菜",
      "vi": "Món ăn Thái Lan",
      "es": "Comida tailandesa"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-070",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "밀라르트(MILLART)"
    },
    "address": {
      "ko": "경상남도 김해시 구지로136번길 15, 해비치빌 1층 (대성동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중앙아시아 음식",
      "en": "Central Asian food",
      "th": "อาหารเอเชียกลาง",
      "ja": "中央アジア料理",
      "zh": "中亚菜",
      "vi": "Món ăn Trung Á",
      "es": "Comida de Asia Central"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-071",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "라화쿵부 김해인제대점"
    },
    "address": {
      "ko": "경상남도 김해시 인제로 196, 나라타워프라자 301호 (어방동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-072",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "(주)딜샤드난바이 김해지점"
    },
    "address": {
      "ko": "경상남도 김해시 분성로335번길 12-1, 2층 (동상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "러시아 음식",
      "en": "Russian food",
      "th": "อาหารรัสเซีย",
      "ja": "ロシア料理",
      "zh": "俄罗斯菜",
      "vi": "Món ăn Nga",
      "es": "Comida rusa"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-073",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "타코"
    },
    "address": {
      "ko": "경상남도 김해시 진영읍 김해대로332번길 35, 1층"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "러시아 음식",
      "en": "Russian food",
      "th": "อาหารรัสเซีย",
      "ja": "ロシア料理",
      "zh": "俄罗斯菜",
      "vi": "Món ăn Nga",
      "es": "Comida rusa"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-074",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "nepal"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "주식회사 에베레스트 뷰 레스토랑 엔 바"
    },
    "address": {
      "ko": "경상남도 김해시 가락로94번길 5-5, 3층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "네팔 음식",
      "en": "Nepali food",
      "th": "อาหารเนปาล",
      "ja": "ネパール料理",
      "zh": "尼泊尔菜",
      "vi": "Món Nepal",
      "es": "Comida nepalí"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-075",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "주식회사 오타시트레이딩"
    },
    "address": {
      "ko": "경상남도 김해시 분성로 335, 1층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-076",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "오타시카섭밀리타옴"
    },
    "address": {
      "ko": "경상남도 김해시 분성로335번길 2, 1층 (동상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-077",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "디돌(DIYDOR)"
    },
    "address": {
      "ko": "경상남도 김해시 진영읍 김해대로407번길 40-18, 1층"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-078",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "indonesia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "바로카 패밀리 레스토랑"
    },
    "address": {
      "ko": "경상남도 김해시 가락로 99, 1층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "인도네시아 음식",
      "en": "Indonesian food",
      "th": "อาหารอินโดนีเซีย",
      "ja": "インドネシア料理",
      "zh": "印度尼西亚菜",
      "vi": "Món ăn Indonesia",
      "es": "Comida indonesia"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-079",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "thai"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "모지 타이푸드"
    },
    "address": {
      "ko": "경상남도 김해시 금관대로1190번길 55-8, 1층 (외동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "태국 음식",
      "en": "Thai food",
      "th": "อาหารไทย",
      "ja": "タイ料理",
      "zh": "泰国菜",
      "vi": "Món ăn Thái Lan",
      "es": "Comida tailandesa"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-080",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "취향마라 외동점"
    },
    "address": {
      "ko": "경상남도 김해시 함박로101번길 18, 한성B/D 204호 (외동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-081",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "향리원마라탕"
    },
    "address": {
      "ko": "경상남도 김해시 율하3로 31, 위너스빌딩 101호 (율하동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-082",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "초원양꼬치"
    },
    "address": {
      "ko": "경상남도 김해시 율하7로 13, 1층 (장유동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-083",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "6000냥 솥뚜껑 생삼겹살"
    },
    "address": {
      "ko": "경상남도 김해시 내외중앙로 53, 2층 203호 (내동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-084",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "향리원마라탕 김해삼계점"
    },
    "address": {
      "ko": "경상남도 김해시 삼계중앙로 38, 1층 102호 (삼계동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-085",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "향만원 중국쌀국수&튀김꼬치"
    },
    "address": {
      "ko": "경상남도 김해시 가락로86번길 5-30, 1층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-086",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "콴고두엔(Quan Co Duyen)"
    },
    "address": {
      "ko": "경상남도 김해시 분성로 328, 1층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "베트남 음식",
      "en": "Vietnamese food",
      "th": "อาหารเวียดนาม",
      "ja": "ベトナム料理",
      "zh": "越南菜",
      "vi": "Món ăn Việt Nam",
      "es": "Comida vietnamita"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-087",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "펠메쉬카(PELMESHKA)"
    },
    "address": {
      "ko": "경상남도 김해시 분성로 342, 2층 (동상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-088",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "bangladesh"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "방글라푸드(BANGLA FOOD)"
    },
    "address": {
      "ko": "경상남도 김해시 가락로86번길 5-5, 1층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "방글라데시 음식",
      "en": "Bangladeshi food",
      "th": "อาหารบังกลาเทศ",
      "ja": "バングラデシュ料理",
      "zh": "孟加拉国菜",
      "vi": "Món Bangladesh",
      "es": "Comida bangladesí"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-089",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "가르모니야 브쿠사(Garmoniya vkusa)"
    },
    "address": {
      "ko": "경상남도 김해시 가야로181번길 9-8, 1층 (삼계동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중앙아시아 음식",
      "en": "Central Asian food",
      "th": "อาหารเอเชียกลาง",
      "ja": "中央アジア料理",
      "zh": "中亚菜",
      "vi": "Món ăn Trung Á",
      "es": "Comida de Asia Central"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-090",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "thai"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "더 베스트"
    },
    "address": {
      "ko": "경상남도 김해시 진례면 진례로256번길 10, 2층"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "태국 음식",
      "en": "Thai food",
      "th": "อาหารไทย",
      "ja": "タイ料理",
      "zh": "泰国菜",
      "vi": "Món ăn Thái Lan",
      "es": "Comida tailandesa"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-091",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "케이엠푸드"
    },
    "address": {
      "ko": "경상남도 김해시 진례면 송현로 58, A동 1층"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-092",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "nepal"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "(주)더히말라야"
    },
    "address": {
      "ko": "경상남도 김해시 가락로 97, 2층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "네팔 음식",
      "en": "Nepali food",
      "th": "อาหารเนปาล",
      "ja": "ネパール料理",
      "zh": "尼泊尔菜",
      "vi": "Món Nepal",
      "es": "Comida nepalí"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-093",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "천라쿵푸마라탕(장유점)"
    },
    "address": {
      "ko": "경상남도 김해시 능동로149번길 8, 일진프라자 1층 101-1호 (부곡동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-094",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "russia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "아시아_플러스34(ASIA_PLUS34)"
    },
    "address": {
      "ko": "경상남도 김해시 호계로 498-1 (동상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "러시아 음식",
      "en": "Russian food",
      "th": "อาหารรัสเซีย",
      "ja": "ロシア料理",
      "zh": "俄罗斯菜",
      "vi": "Món ăn Nga",
      "es": "Comida rusa"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-095",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "탕화쿵푸마라탕 김해주촌점"
    },
    "address": {
      "ko": "경상남도 김해시 주촌면 천곡로 9, 1층 102호"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-096",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "엑스프레스(Express)"
    },
    "address": {
      "ko": "경상남도 김해시 진영읍 장등로 32, 1층"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-097",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "프엉뉴(PHUONG NHU)"
    },
    "address": {
      "ko": "경상남도 김해시 분성로 345-19, 1층 (동상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "베트남 음식",
      "en": "Vietnamese food",
      "th": "อาหารเวียดนาม",
      "ja": "ベトナム料理",
      "zh": "越南菜",
      "vi": "Món ăn Việt Nam",
      "es": "Comida vietnamita"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-098",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "범이네 붕어빵호떡"
    },
    "address": {
      "ko": "경상남도 김해시 진영읍 진산대로 65, 금선빌딩 1층"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-099",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "만두집옐레나"
    },
    "address": {
      "ko": "경상남도 김해시 호계로 493, 1층 (동상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-100",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "미소짬뽕"
    },
    "address": {
      "ko": "경상남도 김해시 내외중앙로 69, 1층 116,117호 (내동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "베트남 음식",
      "en": "Vietnamese food",
      "th": "อาหารเวียดนาม",
      "ja": "ベトナム料理",
      "zh": "越南菜",
      "vi": "Món ăn Việt Nam",
      "es": "Comida vietnamita"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-101",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "우골록(UGOLOK)"
    },
    "address": {
      "ko": "경상남도 김해시 호계로 498-1, 1층 (동상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-102",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "myanmar"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "미스터프레지던트(Mr.President)"
    },
    "address": {
      "ko": "경상남도 김해시 가락로 76-1, 2층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "미얀마 음식",
      "en": "Myanmar food",
      "th": "อาหารพม่า",
      "ja": "ミャンマー料理",
      "zh": "缅甸菜",
      "vi": "Món ăn Myanmar",
      "es": "Comida de Myanmar"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-103",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "라사천마라탕&공시우육면 홈플러스김해점"
    },
    "address": {
      "ko": "경상남도 김해시 김해대로 2078 (내동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-104",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "myanmar"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "버미스키친(BURMESE KITCHEN)"
    },
    "address": {
      "ko": "경상남도 김해시 분성로 329, 2층 일부호 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "미얀마 음식",
      "en": "Myanmar food",
      "th": "อาหารพม่า",
      "ja": "ミャンマー料理",
      "zh": "缅甸菜",
      "vi": "Món ăn Myanmar",
      "es": "Comida de Myanmar"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-105",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "창성양꼬치우육면 내동직영점"
    },
    "address": {
      "ko": "경상남도 김해시 경원로73번길 15, 경보 더:숨시티 118,119호 (내동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-106",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "bangladesh"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "다카 레스토랑(HD)"
    },
    "address": {
      "ko": "경상남도 김해시 가락로 102-1, 2층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "방글라데시 음식",
      "en": "Bangladeshi food",
      "th": "อาหารบังกลาเทศ",
      "ja": "バングラデシュ料理",
      "zh": "孟加拉国菜",
      "vi": "Món Bangladesh",
      "es": "Comida bangladesí"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-107",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "사마르칸드(SAMARKAND)"
    },
    "address": {
      "ko": "경상남도 김해시 분성로 334, 1층 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-108",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "NGO NHO 1991(노녀 1991)"
    },
    "address": {
      "ko": "경상남도 김해시 가락로94번길 8-1, 1층 일부호 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "베트남 음식",
      "en": "Vietnamese food",
      "th": "อาหารเวียดนาม",
      "ja": "ベトナム料理",
      "zh": "越南菜",
      "vi": "Món ăn Việt Nam",
      "es": "Comida vietnamita"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-109",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "china"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "춘리마라탕"
    },
    "address": {
      "ko": "경상남도 김해시 진영읍 김해대로361번길 16, 103호"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "중국 음식",
      "en": "Chinese food",
      "th": "อาหารจีน",
      "ja": "中華料理",
      "zh": "中国菜",
      "vi": "Món ăn Trung Quốc",
      "es": "Comida china"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-110",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "vietnam"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "베트남 반미(KHANH VY)"
    },
    "address": {
      "ko": "경상남도 김해시 가락로 84, 1층 일부호 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "베트남 음식",
      "en": "Vietnamese food",
      "th": "อาหารเวียดนาม",
      "ja": "ベトナム料理",
      "zh": "越南菜",
      "vi": "Món ăn Việt Nam",
      "es": "Comida vietnamita"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-111",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "restaurant",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🍽️",
    "name": {
      "ko": "무슬림"
    },
    "address": {
      "ko": "경상남도 김해시 분성로 334, 1층 일부호 (서상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식",
      "en": "Uzbek food",
      "th": "อาหารอุซเบก",
      "ja": "ウズベク料理",
      "zh": "乌兹别克菜",
      "vi": "Món ăn Uzbekistan",
      "es": "Comida uzbeka"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "high"
  },
  {
    "id": "gd-112",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "grocery",
    "nationalities": [
      "russia"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "호밀빵"
    },
    "address": {
      "ko": "경상남도 김해시 진영읍 장등로 26-1, 1층"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "러시아 음식, 베이커리",
      "en": "Russian food, bakery",
      "th": "อาหารรัสเซีย เบเกอรี่",
      "ja": "ロシア料理、ベーカリー",
      "zh": "俄罗斯菜、烘焙坊",
      "vi": "Món Nga, tiệm bánh",
      "es": "Comida rusa, panadería"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-113",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "grocery",
    "nationalities": [
      "uzbekistan",
      "central-asia"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "임페리아 푸드"
    },
    "address": {
      "ko": "경상남도 김해시 진영읍 장등로6번길 17, 1층"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "우즈베키스탄 음식, 베이커리",
      "en": "Uzbek food, bakery",
      "th": "อาหารอุซเบกิสถาน เบเกอรี่",
      "ja": "ウズベキスタン料理、ベーカリー",
      "zh": "乌兹别克斯坦菜、烘焙坊",
      "vi": "Món Uzbekistan, tiệm bánh",
      "es": "Comida uzbeka, panadería"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  },
  {
    "id": "gd-114",
    "source": "data.go.kr 김해시 외국인음식점",
    "verified": false,
    "category": "grocery",
    "nationalities": [
      "russia"
    ],
    "emoji": "🛒",
    "name": {
      "ko": "남 스토어(Nam Store)"
    },
    "address": {
      "ko": "경상남도 김해시 분성로 378-1, 1층 (동상동)"
    },
    "region": "경남 김해시",
    "phone": "",
    "items": {
      "ko": "러시아 음식, 베이커리",
      "en": "Russian food, bakery",
      "th": "อาหารรัสเซีย เบเกอรี่",
      "ja": "ロシア料理、ベーカリー",
      "zh": "俄罗斯菜、烘焙坊",
      "vi": "Món Nga, tiệm bánh",
      "es": "Comida rusa, panadería"
    },
    "sourceUrl": "https://www.data.go.kr/data/15092353/fileData.do",
    "confidence": "medium"
  }
];

