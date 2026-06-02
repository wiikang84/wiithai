window.WIITHAI_LANGUAGES = {
  ko: { label: "한국어", native: "한국어", flag: "🇰🇷", speech: "ko-KR" },
  th: { label: "태국어", native: "ไทย", flag: "🇹🇭", speech: "th-TH" },
  ja: { label: "일본어", native: "日本語", flag: "🇯🇵", speech: "ja-JP" },
  en: { label: "영어", native: "English", flag: "🇺🇸", speech: "en-US" },
  zh: { label: "중국어", native: "中文", flag: "🇨🇳", speech: "zh-CN" },
  vi: { label: "베트남어", native: "Tiếng Việt", flag: "🇻🇳", speech: "vi-VN" },
  es: { label: "스페인어", native: "Español", flag: "🇪🇸", speech: "es-ES" }
};

window.WIIINFO_LANGUAGE_NAMES = {
  ko: { ko: "한국어", th: "태국어", ja: "일본어", en: "영어", zh: "중국어", vi: "베트남어", es: "스페인어" },
  th: { ko: "ภาษาเกาหลี", th: "ภาษาไทย", ja: "ภาษาญี่ปุ่น", en: "ภาษาอังกฤษ", zh: "ภาษาจีน", vi: "ภาษาเวียดนาม", es: "ภาษาสเปน" },
  ja: { ko: "韓国語", th: "タイ語", ja: "日本語", en: "英語", zh: "中国語", vi: "ベトナム語", es: "スペイン語" },
  en: { ko: "Korean", th: "Thai", ja: "Japanese", en: "English", zh: "Chinese", vi: "Vietnamese", es: "Spanish" },
  zh: { ko: "韩语", th: "泰语", ja: "日语", en: "英语", zh: "中文", vi: "越南语", es: "西班牙语" },
  vi: { ko: "Tiếng Hàn", th: "Tiếng Thái", ja: "Tiếng Nhật", en: "Tiếng Anh", zh: "Tiếng Trung", vi: "Tiếng Việt", es: "Tiếng Tây Ban Nha" },
  es: { ko: "Coreano", th: "Tailandés", ja: "Japonés", en: "Inglés", zh: "Chino", vi: "Vietnamita", es: "Español" }
};

window.WIITHAI_LEARNER_PROFILES = [
  { id: "ko", label: "한국인이 배워요", native: "한국어 기준", flag: "🇰🇷", source: "ko", targets: ["th", "ja", "en", "zh", "vi", "es"] },
  { id: "th", label: "คนไทยเรียน", native: "태국어 기준", flag: "🇹🇭", source: "th", targets: ["ko", "ja", "en", "zh", "vi", "es"] },
  { id: "ja", label: "日本人が学ぶ", native: "일본어 기준", flag: "🇯🇵", source: "ja", targets: ["ko", "th", "en", "zh", "vi", "es"] },
  { id: "en", label: "English speaker", native: "영어 기준", flag: "🇺🇸", source: "en", targets: ["ko", "th", "ja", "zh", "vi", "es"] },
  { id: "zh", label: "中文使用者学习", native: "중국어 기준", flag: "🇨🇳", source: "zh", targets: ["ko", "th", "ja", "en", "vi", "es"] },
  { id: "vi", label: "Người Việt học", native: "베트남어 기준", flag: "🇻🇳", source: "vi", targets: ["ko", "th", "ja", "en", "zh", "es"] },
  { id: "es", label: "Hablante español", native: "스페인 기준", flag: "🇪🇸", source: "es", targets: ["ko", "th", "ja", "en", "zh", "vi"] }
];

window.WIIINFO_UI_COPY = {
  ko: {
    total: "학습 항목", favorites: "즐겨찾기", today: "오늘 학습", audience: "Choose your country",
    countryQuestion: "당신은 어느 나라 사람입니까?", target: "Learn", mode: "Mode", voice: "Voice",
    phrases: "문장", letters: "문자", female: "여성", male: "남성", quiz: "기준 언어 먼저 보기",
    searchPhrases: "문장, 뜻, 발음 검색", searchLetters: "문자, 이름, 발음 검색", hide: "가리기",
    infoEyebrow: "Korea info by Wii", phraseListLabel: "문장 목록", letterListLabel: "문자 목록",
    showMore: "{count}개 더보기", showingCount: "{visible}/{total}개 표시 중"
  },
  th: {
    total: "รายการเรียน", favorites: "บันทึก", today: "เรียนวันนี้", audience: "Choose your country",
    countryQuestion: "คุณมาจากประเทศอะไร?", target: "เรียน", mode: "โหมด", voice: "เสียง",
    phrases: "ประโยค", letters: "ตัวอักษร", female: "หญิง", male: "ชาย", quiz: "ดูภาษาของฉันก่อน",
    searchPhrases: "ค้นหาประโยค ความหมาย หรือเสียงอ่าน", searchLetters: "ค้นหาตัวอักษรหรือเสียง", hide: "ซ่อน",
    infoEyebrow: "ข้อมูลเกาหลี by Wii", phraseListLabel: "รายการประโยค", letterListLabel: "รายการตัวอักษร",
    showMore: "ดูเพิ่ม {count} รายการ", showingCount: "แสดง {visible}/{total} รายการ"
  },
  ja: {
    total: "学習項目", favorites: "お気に入り", today: "今日の学習", audience: "Choose your country",
    countryQuestion: "あなたはどこの国の人ですか？", target: "学ぶ", mode: "モード", voice: "音声",
    phrases: "文章", letters: "文字", female: "女性", male: "男性", quiz: "自分の言語を先に見る",
    searchPhrases: "文章・意味・発音を検索", searchLetters: "文字・名前・発音を検索", hide: "隠す",
    infoEyebrow: "Korea info by Wii", phraseListLabel: "文章リスト", letterListLabel: "文字リスト",
    showMore: "{count}件もっと見る", showingCount: "{visible}/{total}件を表示中"
  },
  en: {
    total: "Items", favorites: "Saved", today: "Today", audience: "Choose your country",
    countryQuestion: "Which country are you from?", target: "Learn", mode: "Mode", voice: "Voice",
    phrases: "Phrases", letters: "Letters", female: "Female", male: "Male", quiz: "Show my language first",
    searchPhrases: "Search phrase, meaning, or pronunciation", searchLetters: "Search letters or sounds", hide: "Hide",
    infoEyebrow: "Korea info by Wii", phraseListLabel: "Phrase list", letterListLabel: "Letter list",
    showMore: "Show {count} more", showingCount: "Showing {visible}/{total}"
  },
  zh: {
    total: "学习项目", favorites: "收藏", today: "今日学习", audience: "Choose your country",
    countryQuestion: "你来自哪个国家？", target: "学习", mode: "模式", voice: "声音",
    phrases: "句子", letters: "文字", female: "女声", male: "男声", quiz: "先看我的语言",
    searchPhrases: "搜索句子、意思或发音", searchLetters: "搜索文字或发音", hide: "隐藏",
    infoEyebrow: "韩国信息 by Wii", phraseListLabel: "句子列表", letterListLabel: "文字列表",
    showMore: "再看 {count} 个", showingCount: "正在显示 {visible}/{total}"
  },
  vi: {
    total: "Bài học", favorites: "Đã lưu", today: "Hôm nay", audience: "Choose your country",
    countryQuestion: "Bạn là người nước nào?", target: "Học", mode: "Chế độ", voice: "Giọng",
    phrases: "Câu", letters: "Chữ cái", female: "Nữ", male: "Nam", quiz: "Xem ngôn ngữ của tôi trước",
    searchPhrases: "Tìm câu, nghĩa hoặc phát âm", searchLetters: "Tìm chữ cái hoặc âm", hide: "Ẩn",
    infoEyebrow: "Thông tin Hàn Quốc by Wii", phraseListLabel: "Danh sách câu", letterListLabel: "Danh sách chữ cái",
    showMore: "Xem thêm {count}", showingCount: "Đang hiển thị {visible}/{total}"
  },
  es: {
    total: "Lecciones", favorites: "Guardado", today: "Hoy", audience: "Choose your country",
    countryQuestion: "¿De qué país eres?", target: "Aprender", mode: "Modo", voice: "Voz",
    phrases: "Frases", letters: "Letras", female: "Mujer", male: "Hombre", quiz: "Ver mi idioma primero",
    searchPhrases: "Buscar frase, significado o pronunciación", searchLetters: "Buscar letras o sonidos", hide: "Ocultar",
    infoEyebrow: "Información de Corea by Wii", phraseListLabel: "Lista de frases", letterListLabel: "Lista de letras",
    showMore: "Ver {count} más", showingCount: "Mostrando {visible}/{total}"
  }
};

window.WIIINFO_CATEGORY_LABELS = {
  ko: { "전체": "전체", "인사": "인사", "자기소개": "자기소개", "기초응답": "기초응답", "숫자/시간": "숫자/시간", "이동": "이동", "식당": "식당", "쇼핑": "쇼핑", "도움": "도움", "일상": "일상", "한국생활": "한국생활" },
  th: { "전체": "ทั้งหมด", "인사": "คำทักทาย", "자기소개": "แนะนำตัว", "기초응답": "คำตอบพื้นฐาน", "숫자/시간": "ตัวเลข/เวลา", "이동": "การเดินทาง", "식당": "ร้านอาหาร", "쇼핑": "ช้อปปิ้ง", "도움": "ขอความช่วยเหลือ", "일상": "ชีวิตประจำวัน", "한국생활": "ชีวิตในเกาหลี" },
  ja: { "전체": "すべて", "인사": "あいさつ", "자기소개": "自己紹介", "기초응답": "基本応答", "숫자/시간": "数字/時間", "이동": "移動", "식당": "食堂", "쇼핑": "買い物", "도움": "助け", "일상": "日常", "한국생활": "韓国生活" },
  en: { "전체": "All", "인사": "Greetings", "자기소개": "Intro", "기초응답": "Basic replies", "숫자/시간": "Numbers/Time", "이동": "Transport", "식당": "Food", "쇼핑": "Shopping", "도움": "Help", "일상": "Daily life", "한국생활": "Life in Korea" },
  zh: { "전체": "全部", "인사": "问候", "자기소개": "自我介绍", "기초응답": "基础回答", "숫자/시간": "数字/时间", "이동": "交通", "식당": "餐厅", "쇼핑": "购物", "도움": "帮助", "일상": "日常", "한국생활": "韩国生活" },
  vi: { "전체": "Tất cả", "인사": "Chào hỏi", "자기소개": "Giới thiệu", "기초응답": "Trả lời cơ bản", "숫자/시간": "Số/Giờ", "이동": "Di chuyển", "식당": "Ăn uống", "쇼핑": "Mua sắm", "도움": "Trợ giúp", "일상": "Hằng ngày", "한국생활": "Sống ở Hàn" },
  es: { "전체": "Todo", "인사": "Saludos", "자기소개": "Presentación", "기초응답": "Respuestas básicas", "숫자/시간": "Números/Hora", "이동": "Transporte", "식당": "Comida", "쇼핑": "Compras", "도움": "Ayuda", "일상": "Vida diaria", "한국생활": "Vida en Corea" }
};

window.WIIINFO_INFO_SECTIONS = {
  ko: [
    { id: "life", icon: "🏠", tab: "한국에서 생활하기", title: "한국에서 생활하기", summary: "외국인이 한국에서 매일 부딪히는 생활 정보를 쉽게 확인합니다.", cards: [
      { title: "외국인등록", text: "체류기간, 외국인등록증, 주소 변경처럼 먼저 챙길 일을 정리합니다." },
      { title: "휴대폰·인터넷", text: "유심, 알뜰폰, 인터넷 설치, 본인인증 흐름을 확인합니다." }
    ] },
    { id: "travel", icon: "🧭", tab: "여행지 보기", title: "한국 여행지 보기", summary: "처음 한국을 방문한 사람이 바로 이해할 수 있는 여행 정보를 모읍니다.", cards: [
      { title: "서울 기본 코스", text: "공항, 지하철, 명동, 경복궁, 한강 같은 첫 여행 코스를 안내합니다." },
      { title: "지역 여행", text: "부산, 제주, 강릉 등 지역별 이동과 볼거리를 정리합니다." }
    ] },
    { id: "housing", icon: "🛏", tab: "살 곳 얻기", title: "살 곳 얻기", summary: "월세, 보증금, 계약 전 확인사항을 쉽게 설명합니다.", cards: [
      { title: "방 종류", text: "원룸, 오피스텔, 빌라, 아파트의 차이를 설명합니다." },
      { title: "계약 전 체크", text: "보증금, 관리비, 등기부, 전입신고 확인 흐름을 정리합니다." }
    ] },
    { id: "realty", icon: "📄", tab: "부동산 정보", title: "부동산 정보", summary: "외국인이 한국 부동산 사무소에서 헷갈리는 표현을 정리합니다.", cards: [
      { title: "계약 용어", text: "보증금, 월세, 중개보수, 특약 같은 기본 용어를 설명합니다." },
      { title: "상담 준비", text: "예산, 지역, 체류자격, 입주일을 미리 정리하도록 돕습니다." }
    ] }
  ],
  en: [
    { id: "life", icon: "🏠", tab: "Life in Korea", title: "Life in Korea", summary: "Practical information for daily life in Korea.", cards: [
      { title: "Alien registration", text: "Check registration card, stay period, and address change basics." },
      { title: "Phone and internet", text: "Understand SIM cards, mobile plans, internet setup, and identity verification." }
    ] },
    { id: "travel", icon: "🧭", tab: "Travel spots", title: "Travel spots in Korea", summary: "Simple travel information for first-time visitors.", cards: [
      { title: "Seoul first route", text: "Airport, subway, Myeongdong, Gyeongbokgung, and Han River basics." },
      { title: "Regional trips", text: "Busan, Jeju, Gangneung, and other regional travel ideas." }
    ] },
    { id: "housing", icon: "🛏", tab: "Find a home", title: "Find a place to live", summary: "Basic housing terms before renting in Korea.", cards: [
      { title: "Room types", text: "One-room, officetel, villa, and apartment differences." },
      { title: "Before contract", text: "Deposit, maintenance fee, registry, and move-in report checks." }
    ] },
    { id: "realty", icon: "📄", tab: "Real estate", title: "Real estate basics", summary: "Words and checks used at Korean real estate offices.", cards: [
      { title: "Contract words", text: "Deposit, monthly rent, brokerage fee, and special terms." },
      { title: "Prepare 상담", text: "Budget, area, visa status, and move-in date." }
    ] }
  ],
  th: [
    { id: "life", icon: "🏠", tab: "ใช้ชีวิตในเกาหลี", title: "ใช้ชีวิตในเกาหลี", summary: "ข้อมูลจำเป็นสำหรับการใช้ชีวิตประจำวันในเกาหลี", cards: [
      { title: "บัตรต่างชาติ", text: "เช็กเรื่องบัตรคนต่างชาติ ระยะพำนัก และการเปลี่ยนที่อยู่" },
      { title: "มือถือและอินเทอร์เน็ต", text: "ซิม โทรศัพท์ อินเทอร์เน็ต และการยืนยันตัวตน" }
    ] },
    { id: "travel", icon: "🧭", tab: "ที่เที่ยว", title: "เที่ยวเกาหลี", summary: "ข้อมูลท่องเที่ยวเกาหลีแบบเข้าใจง่าย", cards: [
      { title: "เส้นทางโซล", text: "สนามบิน รถไฟใต้ดิน เมียงดง คยองบกกุง และแม่น้ำฮัน" },
      { title: "เที่ยวต่างจังหวัด", text: "ปูซาน เชจู คังนึง และเมืองน่าเที่ยวอื่น ๆ" }
    ] },
    { id: "housing", icon: "🛏", tab: "หาที่อยู่", title: "หาที่อยู่ในเกาหลี", summary: "ข้อมูลพื้นฐานก่อนเช่าบ้านในเกาหลี", cards: [
      { title: "ประเภทห้อง", text: "วันรูม ออฟฟิศเทล วิลล่า และอพาร์ตเมนต์ต่างกันอย่างไร" },
      { title: "ก่อนเซ็นสัญญา", text: "เงินมัดจำ ค่าส่วนกลาง เอกสารทะเบียน และการแจ้งย้ายเข้า" }
    ] },
    { id: "realty", icon: "📄", tab: "อสังหา", title: "ข้อมูลอสังหาริมทรัพย์", summary: "คำศัพท์ที่ใช้ในสำนักงานนายหน้าเกาหลี", cards: [
      { title: "คำในสัญญา", text: "เงินมัดจำ ค่าเช่า ค่านายหน้า และเงื่อนไขพิเศษ" },
      { title: "เตรียม 상담", text: "งบประมาณ พื้นที่ วีซ่า และวันที่เข้าอยู่" }
    ] }
  ]
};

window.WIIINFO_INFO_SECTIONS.es = [
  { id: "life", icon: "🏠", tab: "Vivir en Corea", title: "Vivir en Corea", summary: "Información básica para la vida diaria de extranjeros en Corea.", cards: [
    { title: "Registro extranjero", text: "Tarjeta de registro, periodo de estancia y cambio de dirección." },
    { title: "Teléfono e internet", text: "SIM, planes móviles, instalación de internet y verificación de identidad." }
  ] },
  { id: "travel", icon: "🧭", tab: "Viajar", title: "Lugares para visitar en Corea", summary: "Información sencilla para quienes visitan Corea por primera vez.", cards: [
    { title: "Ruta básica en Seúl", text: "Aeropuerto, metro, Myeongdong, Gyeongbokgung y río Han." },
    { title: "Viajes regionales", text: "Busan, Jeju, Gangneung y otras zonas populares." }
  ] },
  { id: "housing", icon: "🛏", tab: "Buscar casa", title: "Buscar vivienda en Corea", summary: "Conceptos básicos antes de alquilar una vivienda en Corea.", cards: [
    { title: "Tipos de vivienda", text: "One-room, officetel, villa y apartamento." },
    { title: "Antes de firmar", text: "Depósito, gastos de mantenimiento, registro y aviso de mudanza." }
  ] },
  { id: "realty", icon: "📄", tab: "Inmobiliaria", title: "Información inmobiliaria", summary: "Palabras y puntos importantes en una agencia inmobiliaria coreana.", cards: [
    { title: "Términos del contrato", text: "Depósito, renta mensual, comisión y cláusulas especiales." },
    { title: "Preparar consulta", text: "Presupuesto, zona, visa y fecha de mudanza." }
  ] }
];

["ja", "zh", "vi"].forEach((lang) => {
  window.WIIINFO_INFO_SECTIONS[lang] = window.WIIINFO_INFO_SECTIONS.en;
});

const WIIINFO_KOREA_INFO_KO = [
  { id: "life", icon: "🏠", tab: "생활 TOP10", title: "한국 생활 필수 TOP10", summary: "처음 한국에 온 외국인이 바로 챙기면 좋은 생활 체크리스트입니다.", cards: [
    { title: "01. 외국인등록증", text: "장기 체류자는 외국인등록증과 체류기간, 주소 변경 신고 일정을 먼저 확인합니다." },
    { title: "02. 휴대폰 개통", text: "여권, 외국인등록증, 한국 계좌 여부에 따라 선불 유심이나 알뜰폰을 고릅니다." },
    { title: "03. 한국 계좌", text: "월세, 보증금, 급여, 자동이체에 필요하므로 은행 방문 전 필요 서류를 확인합니다." },
    { title: "04. 교통카드", text: "T-money나 후불 교통카드를 준비하면 지하철, 버스, 택시 이용이 편합니다." },
    { title: "05. 카카오맵·네이버지도", text: "한국은 길 찾기와 대중교통 정보가 국내 지도 앱에서 더 정확한 경우가 많습니다." },
    { title: "06. 쓰레기 배출", text: "종량제 봉투, 음식물 쓰레기, 재활용 요일이 지역마다 다르니 거주지 기준으로 확인합니다." },
    { title: "07. 병원·약국", text: "가까운 내과, 약국, 야간 진료 병원을 미리 저장해 두면 응급 상황에 유용합니다." },
    { title: "08. 본인인증", text: "휴대폰 본인인증이 안 되면 예약, 쇼핑, 배달 앱 사용이 제한될 수 있습니다." },
    { title: "09. 공공기관 예약", text: "출입국, 구청, 운전면허, 건강보험 업무는 예약이 필요한지 먼저 확인합니다." },
    { title: "10. 긴급 연락처", text: "112 경찰, 119 소방·응급, 1330 관광안내, 1345 외국인종합안내센터를 기억합니다." }
  ] },
  { id: "travel", icon: "🧭", tab: "명소 TOP10", title: "외국인이 좋아할 만한 한국 명소 TOP10", summary: "처음 한국을 여행하는 사람에게 추천하기 쉬운 대표 코스입니다.", cards: [
    { title: "01. 경복궁·북촌", text: "한복, 궁궐, 한옥길을 한 번에 볼 수 있어 한국 첫 여행 코스로 좋습니다." },
    { title: "02. 명동·N서울타워", text: "쇼핑, 길거리 음식, 야경을 짧은 시간에 즐길 수 있는 서울 대표 코스입니다." },
    { title: "03. 홍대·연남동", text: "카페, 버스킹, 편집숍, 젊은 거리 분위기를 좋아하는 외국인에게 인기가 많습니다." },
    { title: "04. 한강공원", text: "자전거, 치킨, 라면, 야경처럼 한국 일상 문화를 편하게 경험할 수 있습니다." },
    { title: "05. 롯데월드·석촌호수", text: "실내 놀이공원, 쇼핑몰, 호수 산책을 한 코스로 묶기 좋습니다." },
    { title: "06. 남이섬", text: "사진 찍기 좋은 숲길과 드라마 이미지가 강해 가족·커플 여행객에게 잘 맞습니다." },
    { title: "07. 부산 해운대·광안리", text: "바다, 야경, 해산물, 카페 거리까지 외국인이 이해하기 쉬운 부산 대표 코스입니다." },
    { title: "08. 제주 성산·올레길", text: "자연 풍경, 해안 산책, 사진 명소를 좋아하는 여행객에게 추천하기 좋습니다." },
    { title: "09. 경주 불국사·대릉원", text: "한국 역사와 조용한 도시 분위기를 함께 느낄 수 있는 대표 문화 여행지입니다." },
    { title: "10. 전주 한옥마을", text: "한옥, 한복, 길거리 음식, 전통 분위기를 하루 코스로 즐기기 좋습니다." }
  ] },
  { id: "housing", icon: "🛏", tab: "집 구하기 TOP10", title: "한국에서 집 구하기 TOP10", summary: "원룸, 오피스텔, 월세 계약 전에 순서대로 확인하면 좋은 항목입니다.", cards: [
    { title: "01. 예산 정하기", text: "보증금, 월세, 관리비, 중개보수, 이사비를 따로 계산합니다." },
    { title: "02. 지역 고르기", text: "직장·학교와의 거리, 지하철, 버스, 밤길 분위기, 주변 편의시설을 봅니다." },
    { title: "03. 집 종류 이해", text: "원룸, 오피스텔, 빌라, 아파트, 쉐어하우스는 관리비와 생활 방식이 다릅니다." },
    { title: "04. 관리비 확인", text: "수도, 전기, 가스, 인터넷, 청소비가 포함인지 별도인지 확인합니다." },
    { title: "05. 실제 방문", text: "사진만 믿지 말고 채광, 냄새, 소음, 곰팡이, 수압, 난방을 직접 봅니다." },
    { title: "06. 옵션 목록", text: "침대, 냉장고, 세탁기, 에어컨, 책상 등 포함 물품을 계약서나 사진으로 남깁니다." },
    { title: "07. 계약 기간", text: "입주일, 만기일, 중도 퇴실 조건, 연장 조건을 계약 전에 확인합니다." },
    { title: "08. 보증금 송금", text: "계약서의 임대인 명의 계좌로 보내고 현금 지급은 피합니다." },
    { title: "09. 입주 신고", text: "입주 후 전입신고와 확정일자가 가능한지 미리 확인합니다." },
    { title: "10. 퇴실 준비", text: "청소, 원상복구, 보증금 반환일, 공과금 정산 기준을 미리 정합니다." }
  ] },
  { id: "realty", icon: "📄", tab: "부동산 주의 TOP10", title: "부동산 계약 시 주의할 점 TOP10", summary: "외국인이 보증금과 계약 문제를 줄이기 위해 계약 전 확인해야 할 핵심입니다.", cards: [
    { title: "01. 등기부등본 확인", text: "소유자, 근저당, 압류, 가압류 등 권리관계를 계약 당일 기준으로 확인합니다." },
    { title: "02. 소유자 명의 확인", text: "계약서 임대인, 등기부 소유자, 신분증, 입금 계좌 명의가 일치하는지 봅니다." },
    { title: "03. 공인중개사 확인", text: "등록된 공인중개사인지 확인하고 중개사무소 정보와 연락처를 보관합니다." },
    { title: "04. 주소·호수 확인", text: "계약서 주소, 실제 방문한 집, 등기부 주소, 건물 호수가 정확히 같은지 확인합니다." },
    { title: "05. 보증금 먼저 송금 금지", text: "계약서와 소유자 확인 전에는 큰 금액을 보내지 않는 것이 안전합니다." },
    { title: "06. 관리비 세부 항목", text: "월세 외 관리비에 무엇이 포함되는지, 별도 공과금은 무엇인지 확인합니다." },
    { title: "07. 특약 꼼꼼히 보기", text: "수리 책임, 중도 해지, 반려동물, 흡연, 옵션 고장 조건을 특약으로 남깁니다." },
    { title: "08. 확정일자·전입신고", text: "보증금 보호를 위해 입주 후 가능한 빨리 전입신고와 확정일자를 확인합니다." },
    { title: "09. 중개보수 영수증", text: "법정 중개보수 범위와 부가세 포함 여부를 확인하고 영수증을 받습니다." },
    { title: "10. 한국어 계약서 기준", text: "번역본은 이해를 돕는 용도이므로 한국어 계약서 내용을 반드시 확인합니다." }
  ] }
];

const WIIINFO_KOREA_INFO_EN = [
  { id: "life", icon: "🏠", tab: "Life TOP10", title: "Life in Korea TOP10", summary: "A practical checklist for foreign residents who are new to Korea.", cards: [
    { title: "01. Alien registration", text: "Check your registration card, stay period, and address-change duties first." },
    { title: "02. Mobile phone", text: "Choose prepaid SIM, budget carrier, or regular plan based on your documents." },
    { title: "03. Korean bank account", text: "Useful for rent, deposit transfer, salary, and automatic payments." },
    { title: "04. Transport card", text: "T-money or a postpaid transit card makes subway, bus, and taxi use easier." },
    { title: "05. Local map apps", text: "KakaoMap and Naver Map are often better for Korean transit and walking routes." },
    { title: "06. Trash rules", text: "Food waste, recycling, and standard trash bags differ by district." },
    { title: "07. Clinics and pharmacies", text: "Save a nearby clinic, pharmacy, and late-night hospital before you need them." },
    { title: "08. Phone verification", text: "Many Korean apps require mobile identity verification for booking and shopping." },
    { title: "09. Public-office booking", text: "Immigration, district office, driving license, and insurance visits may need reservations." },
    { title: "10. Emergency numbers", text: "Remember 112 police, 119 emergency, 1330 travel help, and 1345 immigration help." }
  ] },
  { id: "travel", icon: "🧭", tab: "Spots TOP10", title: "Korea Spots Foreigners Usually Like TOP10", summary: "Easy recommendations for first-time visitors to Korea.", cards: [
    { title: "01. Gyeongbokgung and Bukchon", text: "Palaces, hanbok photos, and hanok alleys in one classic Seoul route." },
    { title: "02. Myeongdong and N Seoul Tower", text: "Shopping, street food, and night views are easy to enjoy in a short visit." },
    { title: "03. Hongdae and Yeonnam", text: "Good for cafes, street music, design shops, and a young city mood." },
    { title: "04. Hangang Parks", text: "A relaxed way to experience bikes, picnic food, instant ramen, and night views." },
    { title: "05. Lotte World and Seokchon Lake", text: "Theme park, shopping, and a lake walk in one convenient area." },
    { title: "06. Nami Island", text: "Tree-lined photo spots and drama memories make it popular with couples and families." },
    { title: "07. Busan Haeundae and Gwangalli", text: "Beaches, seafood, cafes, and bridge night views make Busan easy to love." },
    { title: "08. Jeju Seongsan and Olle Trails", text: "Coastal walks and volcanic scenery are strong choices for nature lovers." },
    { title: "09. Gyeongju Bulguksa and Daereungwon", text: "A calm historic city route for Korean heritage and old-capital atmosphere." },
    { title: "10. Jeonju Hanok Village", text: "Hanok streets, hanbok, snacks, and traditional mood work well for a day trip." }
  ] },
  { id: "housing", icon: "🛏", tab: "Housing TOP10", title: "Finding a Home in Korea TOP10", summary: "Steps to check before renting a studio, officetel, villa, or apartment.", cards: [
    { title: "01. Set your budget", text: "Separate deposit, monthly rent, maintenance fee, broker fee, and moving cost." },
    { title: "02. Choose the area", text: "Check commute, subway, buses, night safety, and nearby stores." },
    { title: "03. Know housing types", text: "One-room, officetel, villa, apartment, and share-house have different costs." },
    { title: "04. Check maintenance fees", text: "Ask what is included and what utilities are charged separately." },
    { title: "05. Visit in person", text: "Check sunlight, smell, noise, mold, water pressure, and heating." },
    { title: "06. List included items", text: "Record furniture and appliances in the contract or with photos." },
    { title: "07. Confirm the lease period", text: "Check move-in date, end date, early exit rules, and renewal terms." },
    { title: "08. Transfer deposit safely", text: "Use the landlord account shown in the contract and avoid cash." },
    { title: "09. Move-in report", text: "Ask whether address registration and fixed-date stamp are possible." },
    { title: "10. Plan move-out", text: "Clarify cleaning, restoration, deposit return date, and utility settlement." }
  ] },
  { id: "realty", icon: "📄", tab: "Realty Cautions TOP10", title: "Real Estate Contract Cautions TOP10", summary: "A practical checklist to reduce deposit and contract risk.", cards: [
    { title: "01. Check the registry", text: "Review owner, mortgages, seizures, and other rights on the contract day." },
    { title: "02. Match the owner", text: "Landlord, registry owner, ID, and bank account should match." },
    { title: "03. Verify the broker", text: "Use a licensed real estate agent and keep the office details." },
    { title: "04. Match address and unit", text: "Contract address, visited room, registry, and unit number must match." },
    { title: "05. Do not pay too early", text: "Avoid sending a large deposit before contract and ownership checks." },
    { title: "06. Detail maintenance fees", text: "Confirm what the fee includes and which utilities are separate." },
    { title: "07. Read special terms", text: "Repairs, early exit, pets, smoking, and appliance issues should be written." },
    { title: "08. Fixed date and report", text: "After moving in, check address registration and fixed-date stamp quickly." },
    { title: "09. Broker-fee receipt", text: "Confirm the legal fee range, VAT, and get a receipt." },
    { title: "10. Korean contract matters", text: "Translations help understanding, but the Korean contract text is critical." }
  ] }
];

function makeWiiInfoSections(t) {
  return [
    { id: "life", icon: "🏠", tab: t.lifeTab, title: t.lifeTitle, summary: t.lifeSummary, cards: t.life },
    { id: "travel", icon: "🧭", tab: t.travelTab, title: t.travelTitle, summary: t.travelSummary, cards: t.travel },
    { id: "housing", icon: "🛏", tab: t.housingTab, title: t.housingTitle, summary: t.housingSummary, cards: t.housing },
    { id: "realty", icon: "📄", tab: t.realtyTab, title: t.realtyTitle, summary: t.realtySummary, cards: t.realty }
  ];
}

const WIIINFO_LOCALIZED_INFO = {
  ja: makeWiiInfoSections({
    lifeTab: "生活 TOP10", lifeTitle: "韓国生活 必須TOP10", lifeSummary: "韓国に来た外国人が最初に確認するとよい生活チェックリストです。",
    travelTab: "名所 TOP10", travelTitle: "外国人に人気の韓国名所TOP10", travelSummary: "初めて韓国を旅行する人に勧めやすい代表コースです。",
    housingTab: "住まい TOP10", housingTitle: "韓国で部屋を探すTOP10", housingSummary: "ワンルーム、オフィステル、月貸し契約前に確認したい項目です。",
    realtyTab: "不動産注意 TOP10", realtyTitle: "不動産契約で注意することTOP10", realtySummary: "保証金と契約トラブルを減らすため、契約前に確認すべき内容です。",
    life: [
      { title: "01. 外国人登録証", text: "長期滞在者は登録証、滞在期間、住所変更申告の日程を先に確認します。" },
      { title: "02. 携帯電話の開通", text: "パスポート、外国人登録証、韓国の口座の有無によりプリペイドSIMや格安スマホを選びます。" },
      { title: "03. 韓国の銀行口座", text: "家賃、保証金、給与、自動引き落としに必要なので、銀行訪問前に必要書類を確認します。" },
      { title: "04. 交通カード", text: "T-moneyや後払い交通カードがあると地下鉄、バス、タクシー利用が便利です。" },
      { title: "05. 地図アプリ", text: "韓国ではKakaoMapやNaver Mapのほうが交通や徒歩ルートが正確な場合があります。" },
      { title: "06. ごみ出しルール", text: "指定ごみ袋、生ごみ、リサイクル曜日は地域ごとに違うため住む場所で確認します。" },
      { title: "07. 病院と薬局", text: "近くの内科、薬局、夜間診療病院を先に保存しておくと緊急時に役立ちます。" },
      { title: "08. 本人認証", text: "携帯電話の本人認証ができないと予約、買い物、配達アプリの利用が制限されます。" },
      { title: "09. 公共機関の予約", text: "出入国、区役所、運転免許、健康保険の手続きは予約が必要か先に確認します。" },
      { title: "10. 緊急連絡先", text: "112警察、119救急・消防、1330観光案内、1345外国人総合案内を覚えておきます。" }
    ],
    travel: [
      { title: "01. 景福宮・北村", text: "韓服、宮殿、韓屋の路地を一度に楽しめるソウル定番コースです。" },
      { title: "02. 明洞・Nソウルタワー", text: "ショッピング、屋台フード、夜景を短時間で楽しめるソウル代表コースです。" },
      { title: "03. 弘大・延南洞", text: "カフェ、路上ライブ、セレクトショップ、若い街の雰囲気が好きな人に人気です。" },
      { title: "04. 漢江公園", text: "自転車、チキン、ラーメン、夜景など韓国の日常文化を気軽に体験できます。" },
      { title: "05. ロッテワールド・石村湖", text: "室内遊園地、ショッピングモール、湖の散歩を一つのコースにできます。" },
      { title: "06. 南怡島", text: "写真映えする並木道とドラマのイメージがあり、家族やカップルに合います。" },
      { title: "07. 釜山 海雲台・広安里", text: "海、夜景、海鮮、カフェ通りまで分かりやすい釜山代表コースです。" },
      { title: "08. 済州 城山・オルレ道", text: "自然風景、海岸散歩、写真スポットが好きな旅行者におすすめです。" },
      { title: "09. 慶州 仏国寺・大陵苑", text: "韓国の歴史と静かな古都の雰囲気を感じられる文化旅行地です。" },
      { title: "10. 全州 韓屋村", text: "韓屋、韓服、屋台フード、伝統的な雰囲気を日帰りで楽しめます。" }
    ],
    housing: [
      { title: "01. 予算を決める", text: "保証金、月家賃、管理費、仲介手数料、引っ越し費用を分けて計算します。" },
      { title: "02. 地域を選ぶ", text: "職場や学校との距離、地下鉄、バス、夜道、周辺施設を確認します。" },
      { title: "03. 住居タイプを理解", text: "ワンルーム、オフィステル、ヴィラ、アパート、シェアハウスは費用と生活方式が違います。" },
      { title: "04. 管理費を確認", text: "水道、電気、ガス、インターネット、清掃費が含まれるか別料金か確認します。" },
      { title: "05. 実際に訪問", text: "写真だけを信じず、日当たり、におい、騒音、カビ、水圧、暖房を直接見ます。" },
      { title: "06. オプション一覧", text: "ベッド、冷蔵庫、洗濯機、エアコン、机など含まれる物を契約書や写真で残します。" },
      { title: "07. 契約期間", text: "入居日、満了日、中途退去条件、延長条件を契約前に確認します。" },
      { title: "08. 保証金送金", text: "契約書の貸主名義口座へ送り、現金払いは避けます。" },
      { title: "09. 入居申告", text: "入居後に転入申告と確定日付が可能か事前に確認します。" },
      { title: "10. 退去準備", text: "掃除、原状回復、保証金返還日、公共料金精算の基準を先に決めます。" }
    ],
    realty: [
      { title: "01. 登記簿を確認", text: "所有者、抵当権、差押え、仮差押えなど権利関係を契約当日基準で確認します。" },
      { title: "02. 所有者名義を確認", text: "契約書の貸主、登記簿の所有者、身分証、入金口座名義が一致するか見ます。" },
      { title: "03. 公認仲介士を確認", text: "登録された仲介士か確認し、事務所情報と連絡先を保管します。" },
      { title: "04. 住所と部屋番号", text: "契約書住所、実際に見た部屋、登記簿住所、部屋番号が同じか確認します。" },
      { title: "05. 先に大金を送らない", text: "契約書と所有者確認前に大きな金額を送らないほうが安全です。" },
      { title: "06. 管理費の内訳", text: "月家賃以外の管理費に何が含まれ、別途公共料金は何か確認します。" },
      { title: "07. 特約をよく読む", text: "修理責任、中途解約、ペット、喫煙、設備故障条件を特約に残します。" },
      { title: "08. 確定日付・転入申告", text: "保証金保護のため、入居後できるだけ早く転入申告と確定日付を確認します。" },
      { title: "09. 仲介手数料の領収書", text: "法定仲介手数料の範囲と付加税の有無を確認し領収書を受け取ります。" },
      { title: "10. 韓国語契約書が基準", text: "翻訳文は理解補助用なので、韓国語契約書の内容を必ず確認します。" }
    ]
  }),
  zh: makeWiiInfoSections({
    lifeTab: "生活 TOP10", lifeTitle: "韩国生活必备TOP10", lifeSummary: "外国人刚到韩国时应优先确认的生活清单。",
    travelTab: "景点 TOP10", travelTitle: "外国人喜欢的韩国景点TOP10", travelSummary: "适合第一次来韩国旅行的人参考的代表路线。",
    housingTab: "租房 TOP10", housingTitle: "在韩国找房TOP10", housingSummary: "签订单间、办公住宅、月租房合同前应确认的事项。",
    realtyTab: "房地产注意TOP10", realtyTitle: "房地产签约注意事项TOP10", realtySummary: "为了减少保证金和合同风险，签约前应确认的重点。",
    life: [
      { title: "01. 外国人登录证", text: "长期停留者应先确认登录证、停留期限和地址变更申报时间。" },
      { title: "02. 开通手机", text: "根据护照、外国人登录证和韩国账户情况选择预付SIM或手机套餐。" },
      { title: "03. 韩国银行账户", text: "支付房租、保证金、工资和自动扣款都可能需要银行账户。" },
      { title: "04. 交通卡", text: "T-money或后付交通卡能让地铁、公交和出租车使用更方便。" },
      { title: "05. 地图应用", text: "在韩国，KakaoMap和Naver Map的公交、步行路线通常更准确。" },
      { title: "06. 垃圾分类", text: "标准垃圾袋、厨余垃圾和回收日期因地区不同，需按住址确认。" },
      { title: "07. 医院和药店", text: "提前保存附近内科、药店和夜间医院，紧急时会很有用。" },
      { title: "08. 本人认证", text: "手机本人认证失败时，预约、购物、外卖应用可能受限。" },
      { title: "09. 公共机关预约", text: "出入境、区厅、驾照、健康保险业务可能需要提前预约。" },
      { title: "10. 紧急联系方式", text: "记住112警察、119急救消防、1330旅游咨询、1345外国人综合咨询。" }
    ],
    travel: [
      { title: "01. 景福宫·北村", text: "可同时体验韩服、宫殿和韩屋巷子的首尔经典路线。" },
      { title: "02. 明洞·N首尔塔", text: "短时间内可享受购物、小吃和夜景的首尔代表路线。" },
      { title: "03. 弘大·延南洞", text: "喜欢咖啡馆、街头表演、买手店和年轻氛围的游客很喜欢。" },
      { title: "04. 汉江公园", text: "可轻松体验骑车、炸鸡、泡面和夜景等韩国日常文化。" },
      { title: "05. 乐天世界·石村湖", text: "室内游乐园、购物中心和湖边散步可以安排在同一路线。" },
      { title: "06. 南怡岛", text: "林荫路和韩剧形象明显，适合家庭和情侣游客。" },
      { title: "07. 釜山海云台·广安里", text: "大海、夜景、海鲜和咖啡街构成容易理解的釜山代表路线。" },
      { title: "08. 济州城山·偶来小路", text: "适合喜欢自然风景、海岸散步和拍照景点的旅行者。" },
      { title: "09. 庆州佛国寺·大陵苑", text: "可以感受韩国历史和安静古都氛围的文化旅行地。" },
      { title: "10. 全州韩屋村", text: "韩屋、韩服、小吃和传统氛围适合一日游。" }
    ],
    housing: [
      { title: "01. 确定预算", text: "把保证金、月租、管理费、中介费和搬家费分开计算。" },
      { title: "02. 选择地区", text: "确认到公司或学校的距离、地铁、公交、夜路和周边设施。" },
      { title: "03. 理解房型", text: "单间、办公住宅、别墅、公寓、合租房的费用和生活方式不同。" },
      { title: "04. 确认管理费", text: "确认水、电、燃气、网络、清洁费是否包含或另付。" },
      { title: "05. 实地看房", text: "不要只看照片，要直接确认采光、气味、噪音、霉菌、水压和供暖。" },
      { title: "06. 家具电器清单", text: "床、冰箱、洗衣机、空调、桌子等包含物品要写入合同或拍照保存。" },
      { title: "07. 合同期限", text: "签约前确认入住日、到期日、提前退租条件和续租条件。" },
      { title: "08. 转账保证金", text: "转到合同上的房东名义账户，尽量避免现金支付。" },
      { title: "09. 入住申报", text: "提前确认入住后是否可以办理迁入申报和确定日期。" },
      { title: "10. 退房准备", text: "提前确认清扫、恢复原状、保证金返还日和公共费用结算标准。" }
    ],
    realty: [
      { title: "01. 查看登记簿", text: "以签约当天为准确认所有者、抵押、扣押、临时扣押等权利关系。" },
      { title: "02. 确认所有者名义", text: "确认合同房东、登记簿所有者、身份证和收款账户名义是否一致。" },
      { title: "03. 确认持证中介", text: "确认是否为登记的房地产中介，并保存中介事务所信息和联系方式。" },
      { title: "04. 确认地址和房号", text: "合同地址、实际看过的房间、登记簿地址和房号必须一致。" },
      { title: "05. 不要过早付款", text: "合同和所有者确认前，不要先转大额保证金。" },
      { title: "06. 管理费明细", text: "确认管理费包含哪些项目，哪些公共费用另付。" },
      { title: "07. 仔细看特约", text: "维修责任、提前解约、宠物、吸烟、设备故障条件应写入特约。" },
      { title: "08. 确定日期和迁入申报", text: "为保护保证金，入住后尽快确认迁入申报和确定日期。" },
      { title: "09. 中介费收据", text: "确认法定中介费范围和是否含税，并索取收据。" },
      { title: "10. 韩国语合同为准", text: "翻译件只帮助理解，必须确认韩国语合同内容。" }
    ]
  }),
  th: makeWiiInfoSections({
    lifeTab: "ชีวิต TOP10", lifeTitle: "เช็กลิสต์ชีวิตในเกาหลี TOP10", lifeSummary: "สิ่งที่ชาวต่างชาติควรเช็กก่อนเริ่มใช้ชีวิตในเกาหลี",
    travelTab: "สถานที่ TOP10", travelTitle: "สถานที่ในเกาหลีที่ชาวต่างชาติชอบ TOP10", travelSummary: "เส้นทางแนะนำสำหรับคนที่มาเที่ยวเกาหลีครั้งแรก",
    housingTab: "หาบ้าน TOP10", housingTitle: "หาที่อยู่ในเกาหลี TOP10", housingSummary: "สิ่งที่ควรเช็กก่อนเช่าห้อง วันรูม ออฟฟิศเทล หรืออพาร์ตเมนต์",
    realtyTab: "อสังหา ระวัง TOP10", realtyTitle: "ข้อควรระวังตอนทำสัญญาอสังหา TOP10", realtySummary: "เช็กลิสต์สำคัญเพื่อลดความเสี่ยงเรื่องเงินมัดจำและสัญญา",
    life: [
      { title: "01. บัตรลงทะเบียนคนต่างชาติ", text: "ผู้พำนักระยะยาวควรเช็กบัตร ระยะเวลาพำนัก และกำหนดแจ้งเปลี่ยนที่อยู่ก่อน" },
      { title: "02. เปิดเบอร์มือถือ", text: "เลือกซิมเติมเงินหรือแพ็กเกจมือถือจากเอกสารที่มี เช่น พาสปอร์ต บัตรต่างชาติ และบัญชีเกาหลี" },
      { title: "03. บัญชีธนาคารเกาหลี", text: "จำเป็นสำหรับค่าเช่า เงินมัดจำ เงินเดือน และการหักเงินอัตโนมัติ" },
      { title: "04. บัตรโดยสาร", text: "T-money หรือบัตรเดินทางแบบรายเดือนช่วยให้ใช้รถไฟใต้ดิน รถบัส และแท็กซี่สะดวกขึ้น" },
      { title: "05. แอปแผนที่เกาหลี", text: "KakaoMap หรือ Naver Map มักแม่นกว่าในเส้นทางขนส่งและทางเดินในเกาหลี" },
      { title: "06. การทิ้งขยะ", text: "ถุงขยะ อาหารเหลือ และวันรีไซเคิลต่างกันตามพื้นที่ ต้องเช็กตามที่อยู่จริง" },
      { title: "07. โรงพยาบาลและร้านยา", text: "บันทึกคลินิก ร้านยา และโรงพยาบาลกลางคืนใกล้บ้านไว้ก่อนเกิดเหตุฉุกเฉิน" },
      { title: "08. ยืนยันตัวตนมือถือ", text: "ถ้ายืนยันตัวตนด้วยมือถือไม่ได้ การจอง ซื้อของ และใช้แอปเดลิเวอรีอาจติดขัด" },
      { title: "09. นัดหมายหน่วยงานรัฐ", text: "งานตรวจคนเข้าเมือง เขต ใบขับขี่ และประกันสุขภาพอาจต้องจองล่วงหน้า" },
      { title: "10. เบอร์ฉุกเฉิน", text: "จำ 112 ตำรวจ, 119 ฉุกเฉิน, 1330 ท่องเที่ยว, 1345 ศูนย์ต่างชาติ" }
    ],
    travel: [
      { title: "01. พระราชวังคยองบกกุง·บุกชน", text: "เส้นทางคลาสสิกที่รวมฮันบก พระราชวัง และตรอกบ้านฮันอก" },
      { title: "02. เมียงดง·N Seoul Tower", text: "ช้อปปิ้ง อาหารริมทาง และวิวกลางคืนในเวลาสั้น ๆ" },
      { title: "03. ฮงแด·ยอนนัมดง", text: "เหมาะกับคนที่ชอบคาเฟ่ ดนตรีริมถนน ร้านดีไซน์ และบรรยากาศวัยรุ่น" },
      { title: "04. สวนริมแม่น้ำฮัน", text: "สัมผัสจักรยาน ไก่ทอด รามยอน และวิวกลางคืนแบบชีวิตประจำวันเกาหลี" },
      { title: "05. Lotte World·Seokchon Lake", text: "สวนสนุกในร่ม ห้าง และเดินเล่นริมทะเลสาบในพื้นที่เดียว" },
      { title: "06. เกาะนามิ", text: "ถนนต้นไม้และภาพจำจากซีรีส์ เหมาะกับครอบครัวและคู่รัก" },
      { title: "07. ปูซาน แฮอุนแด·ควังอัลลี", text: "ทะเล วิวกลางคืน อาหารทะเล และคาเฟ่ในเส้นทางปูซานยอดนิยม" },
      { title: "08. เชจู ซองซาน·Olle Trail", text: "เหมาะกับคนที่ชอบธรรมชาติ เดินริมทะเล และถ่ายรูป" },
      { title: "09. คยองจู พุลกุกซา·แดรึงวอน", text: "เมืองประวัติศาสตร์ที่เงียบและสัมผัสมรดกเกาหลีได้ดี" },
      { title: "10. หมู่บ้านฮันอกจอนจู", text: "ฮันอก ฮันบก อาหารริมทาง และบรรยากาศดั้งเดิมในทริปหนึ่งวัน" }
    ],
    housing: [
      { title: "01. ตั้งงบประมาณ", text: "แยกเงินมัดจำ ค่าเช่า ค่าส่วนกลาง ค่านายหน้า และค่าขนย้าย" },
      { title: "02. เลือกพื้นที่", text: "ดูระยะไปที่ทำงานหรือโรงเรียน รถไฟใต้ดิน รถบัส ความปลอดภัยตอนกลางคืน และร้านใกล้บ้าน" },
      { title: "03. เข้าใจประเภทบ้าน", text: "วันรูม ออฟฟิศเทล วิลล่า อพาร์ตเมนต์ และแชร์เฮาส์มีค่าใช้จ่ายต่างกัน" },
      { title: "04. เช็กค่าส่วนกลาง", text: "ถามว่าน้ำ ไฟ แก๊ส อินเทอร์เน็ต และค่าทำความสะอาดรวมอยู่หรือแยกจ่าย" },
      { title: "05. ไปดูห้องจริง", text: "อย่าเชื่อรูปอย่างเดียว ให้ดูแสง กลิ่น เสียง เชื้อรา แรงดันน้ำ และระบบทำความร้อน" },
      { title: "06. รายการของในห้อง", text: "เตียง ตู้เย็น เครื่องซักผ้า แอร์ โต๊ะ ควรถ่ายรูปหรือเขียนไว้ในสัญญา" },
      { title: "07. ระยะสัญญา", text: "เช็กวันเข้าอยู่ วันหมดสัญญา เงื่อนไขย้ายออกก่อน และการต่อสัญญา" },
      { title: "08. โอนเงินมัดจำ", text: "โอนไปยังบัญชีชื่อเจ้าของบ้านตามสัญญา และหลีกเลี่ยงการจ่ายเงินสด" },
      { title: "09. แจ้งย้ายเข้า", text: "เช็กว่าสามารถแจ้งย้ายเข้าและรับวันที่รับรองสัญญาได้หรือไม่" },
      { title: "10. เตรียมย้ายออก", text: "ตกลงเรื่องทำความสะอาด ซ่อมคืนสภาพ วันคืนเงินมัดจำ และค่าสาธารณูปโภค" }
    ],
    realty: [
      { title: "01. ตรวจเอกสารทะเบียน", text: "ดูเจ้าของ สิทธิ์จำนอง การอายัด และสิทธิ์อื่น ๆ ตามวันที่ทำสัญญา" },
      { title: "02. เช็กชื่อเจ้าของ", text: "ชื่อเจ้าของในสัญญา ทะเบียน บัตร และบัญชีรับเงินควรตรงกัน" },
      { title: "03. ตรวจนายหน้า", text: "ใช้สำนักงานนายหน้าที่จดทะเบียนและเก็บข้อมูลติดต่อไว้" },
      { title: "04. เช็กที่อยู่และเลขห้อง", text: "ที่อยู่ในสัญญา ห้องที่ดูจริง เอกสารทะเบียน และเลขห้องต้องตรงกัน" },
      { title: "05. อย่าโอนเงินเร็วเกินไป", text: "ก่อนตรวจสัญญาและเจ้าของ ไม่ควรโอนเงินก้อนใหญ่" },
      { title: "06. รายละเอียดค่าส่วนกลาง", text: "ดูว่าค่าส่วนกลางรวมอะไร และค่าน้ำไฟแก๊สแยกจ่ายอย่างไร" },
      { title: "07. อ่านเงื่อนไขพิเศษ", text: "เรื่องซ่อม ยกเลิกก่อนกำหนด สัตว์เลี้ยง สูบบุหรี่ และเครื่องใช้เสียควรเขียนไว้" },
      { title: "08. วันที่รับรองและแจ้งย้าย", text: "เพื่อคุ้มครองเงินมัดจำ ควรทำขั้นตอนหลังเข้าอยู่ให้เร็ว" },
      { title: "09. ใบเสร็จค่านายหน้า", text: "ตรวจช่วงค่านายหน้าตามกฎหมาย ภาษี และขอใบเสร็จ" },
      { title: "10. สัญญาภาษาเกาหลีเป็นหลัก", text: "ฉบับแปลช่วยให้เข้าใจ แต่ต้องตรวจเนื้อหาภาษาเกาหลีเสมอ" }
    ]
  }),
  vi: makeWiiInfoSections({
    lifeTab: "Đời sống TOP10", lifeTitle: "TOP10 cần biết khi sống ở Hàn", lifeSummary: "Checklist thực tế cho người nước ngoài mới đến Hàn Quốc.",
    travelTab: "Điểm đến TOP10", travelTitle: "TOP10 điểm ở Hàn người nước ngoài thường thích", travelSummary: "Các tuyến dễ giới thiệu cho người lần đầu du lịch Hàn Quốc.",
    housingTab: "Nhà ở TOP10", housingTitle: "TOP10 khi tìm nhà ở Hàn", housingSummary: "Những điều cần kiểm tra trước khi thuê one-room, officetel hoặc căn hộ.",
    realtyTab: "BĐS chú ý TOP10", realtyTitle: "TOP10 lưu ý khi ký hợp đồng nhà đất", realtySummary: "Checklist giảm rủi ro về tiền cọc và hợp đồng.",
    life: [
      { title: "01. Thẻ đăng ký người nước ngoài", text: "Người ở dài hạn cần kiểm tra thẻ, thời hạn lưu trú và lịch báo đổi địa chỉ." },
      { title: "02. Mở số điện thoại", text: "Chọn SIM trả trước hoặc gói di động tùy theo hộ chiếu, thẻ người nước ngoài và tài khoản Hàn." },
      { title: "03. Tài khoản ngân hàng Hàn", text: "Cần cho tiền thuê, tiền cọc, lương và thanh toán tự động." },
      { title: "04. Thẻ giao thông", text: "T-money hoặc thẻ giao thông trả sau giúp đi tàu điện, xe buýt, taxi tiện hơn." },
      { title: "05. Ứng dụng bản đồ", text: "KakaoMap và Naver Map thường chính xác hơn cho giao thông và đường đi bộ ở Hàn." },
      { title: "06. Quy định rác", text: "Túi rác, rác thực phẩm và ngày tái chế khác nhau theo khu vực." },
      { title: "07. Bệnh viện và nhà thuốc", text: "Lưu sẵn phòng khám, nhà thuốc và bệnh viện đêm gần nhà trước khi cần." },
      { title: "08. Xác minh điện thoại", text: "Nếu không xác minh được bằng điện thoại, đặt lịch, mua sắm và giao đồ ăn có thể bị hạn chế." },
      { title: "09. Đặt lịch cơ quan công", text: "Xuất nhập cảnh, văn phòng quận, bằng lái và bảo hiểm có thể cần đặt lịch trước." },
      { title: "10. Số khẩn cấp", text: "Ghi nhớ 112 cảnh sát, 119 cấp cứu, 1330 du lịch, 1345 hỗ trợ người nước ngoài." }
    ],
    travel: [
      { title: "01. Gyeongbokgung·Bukchon", text: "Tuyến Seoul cổ điển để xem cung điện, mặc hanbok và đi phố hanok." },
      { title: "02. Myeongdong·N Seoul Tower", text: "Mua sắm, ăn vặt đường phố và ngắm đêm Seoul trong thời gian ngắn." },
      { title: "03. Hongdae·Yeonnam", text: "Phù hợp với người thích cafe, biểu diễn đường phố, shop thiết kế và không khí trẻ." },
      { title: "04. Công viên sông Hàn", text: "Trải nghiệm văn hóa thường ngày như xe đạp, gà rán, mì ramen và cảnh đêm." },
      { title: "05. Lotte World·Hồ Seokchon", text: "Công viên trong nhà, trung tâm mua sắm và đi dạo quanh hồ trong một khu vực." },
      { title: "06. Đảo Nami", text: "Đường cây đẹp và hình ảnh phim Hàn, hợp với gia đình và cặp đôi." },
      { title: "07. Busan Haeundae·Gwangalli", text: "Biển, cảnh đêm, hải sản và phố cafe của tuyến Busan tiêu biểu." },
      { title: "08. Jeju Seongsan·Olle Trail", text: "Hợp với người thích thiên nhiên, đi bộ ven biển và chụp ảnh." },
      { title: "09. Gyeongju Bulguksa·Daereungwon", text: "Điểm văn hóa để cảm nhận lịch sử Hàn Quốc và không khí cố đô yên tĩnh." },
      { title: "10. Làng Hanok Jeonju", text: "Hanok, hanbok, đồ ăn đường phố và không khí truyền thống cho chuyến đi một ngày." }
    ],
    housing: [
      { title: "01. Đặt ngân sách", text: "Tính riêng tiền cọc, tiền thuê tháng, phí quản lý, phí môi giới và phí chuyển nhà." },
      { title: "02. Chọn khu vực", text: "Xem khoảng cách đến trường hoặc công ty, tàu điện, xe buýt, đường ban đêm và tiện ích." },
      { title: "03. Hiểu loại nhà", text: "One-room, officetel, villa, apartment và share-house có chi phí và cách sống khác nhau." },
      { title: "04. Kiểm tra phí quản lý", text: "Hỏi nước, điện, gas, internet, vệ sinh đã gồm hay tính riêng." },
      { title: "05. Đi xem trực tiếp", text: "Không chỉ tin ảnh; kiểm tra ánh sáng, mùi, tiếng ồn, mốc, nước và sưởi." },
      { title: "06. Danh sách đồ có sẵn", text: "Giường, tủ lạnh, máy giặt, điều hòa, bàn nên ghi trong hợp đồng hoặc chụp ảnh." },
      { title: "07. Thời hạn hợp đồng", text: "Kiểm tra ngày vào, ngày hết hạn, điều kiện ra sớm và gia hạn." },
      { title: "08. Chuyển tiền cọc", text: "Chuyển vào tài khoản tên chủ nhà trên hợp đồng và tránh trả tiền mặt." },
      { title: "09. Khai báo chuyển vào", text: "Hỏi trước có thể khai báo địa chỉ và lấy ngày xác nhận hợp đồng không." },
      { title: "10. Chuẩn bị chuyển ra", text: "Rõ ràng về dọn dẹp, khôi phục hiện trạng, ngày trả cọc và quyết toán chi phí." }
    ],
    realty: [
      { title: "01. Kiểm tra đăng ký nhà", text: "Xem chủ sở hữu, thế chấp, kê biên và quyền liên quan theo ngày ký hợp đồng." },
      { title: "02. Khớp tên chủ sở hữu", text: "Tên chủ nhà, chủ trên giấy đăng ký, giấy tờ tùy thân và tài khoản nhận tiền nên trùng nhau." },
      { title: "03. Kiểm tra môi giới", text: "Dùng môi giới đã đăng ký và lưu thông tin văn phòng." },
      { title: "04. Khớp địa chỉ và số phòng", text: "Địa chỉ hợp đồng, phòng đã xem, giấy đăng ký và số phòng phải giống nhau." },
      { title: "05. Đừng trả tiền quá sớm", text: "Không chuyển khoản lớn trước khi kiểm tra hợp đồng và chủ sở hữu." },
      { title: "06. Chi tiết phí quản lý", text: "Xác nhận phí quản lý gồm gì và tiện ích nào trả riêng." },
      { title: "07. Đọc điều khoản đặc biệt", text: "Sửa chữa, ra sớm, thú cưng, hút thuốc và đồ hỏng nên được ghi rõ." },
      { title: "08. Ngày xác nhận và khai báo", text: "Để bảo vệ tiền cọc, làm khai báo địa chỉ và ngày xác nhận sớm sau khi vào ở." },
      { title: "09. Biên lai phí môi giới", text: "Kiểm tra mức phí hợp pháp, VAT và nhận biên lai." },
      { title: "10. Hợp đồng tiếng Hàn là chính", text: "Bản dịch giúp hiểu, nhưng nội dung tiếng Hàn là phần cần kiểm tra kỹ." }
    ]
  }),
  es: makeWiiInfoSections({
    lifeTab: "Vida TOP10", lifeTitle: "TOP10 básico para vivir en Corea", lifeSummary: "Checklist práctico para extranjeros que empiezan a vivir en Corea.",
    travelTab: "Lugares TOP10", travelTitle: "TOP10 lugares de Corea que suelen gustar a extranjeros", travelSummary: "Rutas fáciles de recomendar para una primera visita a Corea.",
    housingTab: "Vivienda TOP10", housingTitle: "TOP10 para buscar vivienda en Corea", housingSummary: "Puntos para revisar antes de alquilar one-room, officetel o apartamento.",
    realtyTab: "Inmobiliaria TOP10", realtyTitle: "TOP10 cuidados al firmar contrato inmobiliario", realtySummary: "Checklist para reducir riesgos de depósito y contrato.",
    life: [
      { title: "01. Tarjeta de registro extranjero", text: "Los residentes de larga estancia deben revisar tarjeta, periodo de estancia y cambio de dirección." },
      { title: "02. Abrir línea móvil", text: "Elige SIM prepago o plan móvil según pasaporte, tarjeta extranjera y cuenta coreana." },
      { title: "03. Cuenta bancaria coreana", text: "Sirve para renta, depósito, salario y pagos automáticos." },
      { title: "04. Tarjeta de transporte", text: "T-money o tarjeta pospago facilita metro, bus y taxi." },
      { title: "05. Apps de mapa", text: "KakaoMap y Naver Map suelen ser más precisos para rutas y transporte en Corea." },
      { title: "06. Reglas de basura", text: "Bolsas oficiales, comida y reciclaje cambian según el distrito." },
      { title: "07. Clínicas y farmacias", text: "Guarda clínica, farmacia y hospital nocturno cercano antes de necesitarlos." },
      { title: "08. Verificación móvil", text: "Sin verificación por teléfono, reservas, compras y delivery pueden limitarse." },
      { title: "09. Citas públicas", text: "Migración, oficina distrital, licencia y seguro pueden requerir reserva previa." },
      { title: "10. Contactos de emergencia", text: "Recuerda 112 policía, 119 emergencia, 1330 turismo y 1345 ayuda a extranjeros." }
    ],
    travel: [
      { title: "01. Gyeongbokgung y Bukchon", text: "Ruta clásica de Seúl para palacio, hanbok y callejones hanok." },
      { title: "02. Myeongdong y N Seoul Tower", text: "Compras, comida callejera y vistas nocturnas en poco tiempo." },
      { title: "03. Hongdae y Yeonnam", text: "Popular para cafés, música callejera, tiendas de diseño y ambiente joven." },
      { title: "04. Parques del río Han", text: "Bicicleta, pollo, ramen y vistas nocturnas como vida diaria coreana." },
      { title: "05. Lotte World y lago Seokchon", text: "Parque temático cubierto, centro comercial y paseo junto al lago." },
      { title: "06. Isla Nami", text: "Caminos de árboles y recuerdo de dramas, ideal para familias y parejas." },
      { title: "07. Busan Haeundae y Gwangalli", text: "Mar, noche, mariscos y cafés en una ruta representativa de Busan." },
      { title: "08. Jeju Seongsan y Olle Trails", text: "Para quienes disfrutan naturaleza, costa y fotos." },
      { title: "09. Gyeongju Bulguksa y Daereungwon", text: "Viaje cultural para sentir historia coreana y ambiente de antigua capital." },
      { title: "10. Aldea Hanok de Jeonju", text: "Hanok, hanbok, comida callejera y ambiente tradicional en una ruta de día." }
    ],
    housing: [
      { title: "01. Definir presupuesto", text: "Separa depósito, renta mensual, mantenimiento, comisión y mudanza." },
      { title: "02. Elegir zona", text: "Revisa distancia a escuela o trabajo, metro, bus, seguridad nocturna y servicios." },
      { title: "03. Entender tipos de vivienda", text: "One-room, officetel, villa, apartamento y share-house tienen costos distintos." },
      { title: "04. Revisar mantenimiento", text: "Pregunta si agua, luz, gas, internet y limpieza están incluidos o aparte." },
      { title: "05. Visitar en persona", text: "No confíes solo en fotos; revisa luz, olor, ruido, moho, presión de agua y calefacción." },
      { title: "06. Lista de opciones", text: "Cama, refrigerador, lavadora, aire y escritorio deben quedar en contrato o fotos." },
      { title: "07. Periodo de contrato", text: "Confirma fecha de entrada, vencimiento, salida anticipada y renovación." },
      { title: "08. Transferir depósito", text: "Envía a la cuenta del propietario indicada en contrato y evita efectivo." },
      { title: "09. Reporte de mudanza", text: "Pregunta si puedes registrar dirección y obtener fecha fija del contrato." },
      { title: "10. Preparar salida", text: "Aclara limpieza, restauración, fecha de devolución del depósito y gastos." }
    ],
    realty: [
      { title: "01. Revisar registro", text: "Confirma propietario, hipotecas, embargos y derechos el día del contrato." },
      { title: "02. Coincidir propietario", text: "Arrendador, registro, identificación y cuenta bancaria deben coincidir." },
      { title: "03. Verificar agente", text: "Usa agente inmobiliario registrado y guarda datos de la oficina." },
      { title: "04. Dirección y unidad", text: "Contrato, habitación visitada, registro y número de unidad deben coincidir." },
      { title: "05. No pagar demasiado pronto", text: "Evita enviar mucho dinero antes de revisar contrato y propietario." },
      { title: "06. Detalle de mantenimiento", text: "Confirma qué incluye y qué servicios se pagan aparte." },
      { title: "07. Leer cláusulas especiales", text: "Reparaciones, salida anticipada, mascotas, fumar y fallas deben quedar por escrito." },
      { title: "08. Fecha fija y registro", text: "Para proteger el depósito, haz registro de dirección y fecha fija pronto." },
      { title: "09. Recibo de comisión", text: "Verifica rango legal, IVA y pide recibo." },
      { title: "10. Contrato coreano manda", text: "La traducción ayuda, pero el texto coreano debe revisarse con cuidado." }
    ]
  })
};

window.WIIINFO_INFO_SECTIONS.ko = WIIINFO_KOREA_INFO_KO;
window.WIIINFO_INFO_SECTIONS.en = WIIINFO_KOREA_INFO_EN;
window.WIIINFO_INFO_SECTIONS.th = WIIINFO_LOCALIZED_INFO.th;
window.WIIINFO_INFO_SECTIONS.ja = WIIINFO_LOCALIZED_INFO.ja;
window.WIIINFO_INFO_SECTIONS.zh = WIIINFO_LOCALIZED_INFO.zh;
window.WIIINFO_INFO_SECTIONS.vi = WIIINFO_LOCALIZED_INFO.vi;
window.WIIINFO_INFO_SECTIONS.es = WIIINFO_LOCALIZED_INFO.es;

function wiiInfoImage(file, width = 900) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;
}

const WIIINFO_VISUAL_SETS = {
  palace: [
    { src: wiiInfoImage("Gyeongbokgung Palace.jpg"), alt: "Gyeongbokgung Palace" },
    { src: wiiInfoImage("Gyeongbokgung Palace, Seoul (48733400797).jpg"), alt: "Gyeongbokgung courtyard" },
    { src: wiiInfoImage("Gyeongbokgung - Seoul, South Korea (50605778961).jpg"), alt: "Gyeongbokgung architecture" }
  ],
  tower: [
    { src: wiiInfoImage("Seoul and N Seoul Tower.jpg"), alt: "N Seoul Tower from Seoul" },
    { src: wiiInfoImage("N Seoul Tower (6).jpg"), alt: "N Seoul Tower close view" },
    { src: wiiInfoImage("East View from N-Seoul Tower.jpg"), alt: "View from N Seoul Tower" }
  ],
  hongdae: [
    { src: wiiInfoImage("Myeong-dong street by night.JPG"), alt: "Seoul night street" },
    { src: wiiInfoImage("Busy street, Seoul.jpg"), alt: "Busy Seoul street" },
    { src: wiiInfoImage("Seoul Street.jpg"), alt: "Seoul city street" }
  ],
  hangang: [
    { src: wiiInfoImage("Han River, Seoul, South Korea.jpg"), alt: "Han River Seoul" },
    { src: wiiInfoImage("Han River (4906629011).jpg"), alt: "Han River park view" },
    { src: wiiInfoImage("Han River, Seoul (49531954802).jpg"), alt: "Han River skyline" }
  ],
  lotte: [
    { src: wiiInfoImage("View of Seokchon Lake.jpg"), alt: "Seokchon Lake and Lotte World" },
    { src: wiiInfoImage("Lotte World seen from Lotte World Tower.jpg"), alt: "Lotte World and Seokchon Lake" },
    { src: wiiInfoImage("Lotte World Adventure (5587583207).jpg"), alt: "Lotte World Adventure" }
  ],
  nami: [
    { src: wiiInfoImage("Nami Island Banner.jpg"), alt: "Nami Island tree road" },
    { src: wiiInfoImage("View of Nami Island.JPG"), alt: "Nami Island view" },
    { src: wiiInfoImage("Winter Sonata Nami Island.jpg"), alt: "Nami Island photo spot" }
  ],
  busan: [
    { src: wiiInfoImage("Haeundae Beach in Busan.jpg"), alt: "Haeundae Beach" },
    { src: wiiInfoImage("Gwangalli Beach Busan (31877282438).jpg"), alt: "Gwangalli Beach" },
    { src: wiiInfoImage("Haeundae Beach 20200522 017.jpg"), alt: "Busan beach" }
  ],
  jeju: [
    { src: wiiInfoImage("성산일출봉 천연보호구역 2019년 촬영(출처 문화재청 대변인실).jpg"), alt: "Seongsan Ilchulbong" },
    { src: wiiInfoImage("Jeju Olle.JPG"), alt: "Jeju Olle trail marker" },
    { src: wiiInfoImage("Jeju olle trail marker.jpg"), alt: "Jeju Olle trail" }
  ],
  gyeongju: [
    { src: wiiInfoImage("Bulguksa Temple (6222044051).jpg"), alt: "Bulguksa Temple" },
    { src: wiiInfoImage("Bulguksa temple main building.jpg"), alt: "Bulguksa main building" },
    { src: wiiInfoImage("Seokgatap pagoda (Bulguksa).jpg"), alt: "Seokgatap pagoda" }
  ],
  jeonju: [
    { src: wiiInfoImage("20240727 Jeonju Hanok Village 001.jpg"), alt: "Jeonju Hanok Village" },
    { src: wiiInfoImage("Jeonju Hanok Village 20220701 002.jpg"), alt: "Jeonju hanok street" },
    { src: wiiInfoImage("Jeonju Hanok Village - July 2018 (15).jpg"), alt: "Jeonju traditional houses" }
  ],
  civic: [
    { src: wiiInfoImage("Skyline view from Seoul City (South Korea).jpg"), alt: "Seoul skyline" },
    { src: wiiInfoImage("Gwangjang Market, Seoul 02.jpg"), alt: "Gwangjang Market in Seoul" },
    { src: wiiInfoImage("Han River, Seoul (49531954927).jpg"), alt: "Han River and Seoul daily life" }
  ],
  transit: [
    { src: wiiInfoImage("Han River, Seoul (49531954927).jpg"), alt: "Seoul riverside life" },
    { src: wiiInfoImage("Gwangjang Market, Seoul 02.jpg"), alt: "Korean market life" },
    { src: wiiInfoImage("Skyline view from Seoul City (South Korea).jpg"), alt: "Seoul daily skyline" }
  ],
  market: [
    { src: wiiInfoImage("Gwangjang Market, Seoul 02.jpg"), alt: "Gwangjang Market" },
    { src: wiiInfoImage("Korea-Seoul-Dongdaemun Market-01.jpg"), alt: "Dongdaemun Market" },
    { src: wiiInfoImage("Gwangjang Market, Seoul 2020-02-01.jpg"), alt: "Korean market food" }
  ],
  skyline: [
    { src: wiiInfoImage("Skyline view from Seoul City (South Korea).jpg"), alt: "Seoul skyline" },
    { src: wiiInfoImage("Seoul Skyline Night 2018.jpg"), alt: "Seoul night skyline" },
    { src: wiiInfoImage("Han River, Seoul (49531954927).jpg"), alt: "Han River skyline" }
  ],
  hanokLife: [
    { src: wiiInfoImage("20240727 Jeonju Hanok Village 001.jpg"), alt: "Hanok village" },
    { src: wiiInfoImage("Gyeongbokgung Palace.jpg"), alt: "Korean palace" },
    { src: wiiInfoImage("Gyeongbokgung Palace, Seoul (48733400797).jpg"), alt: "Korean traditional architecture" }
  ],
  housing: [
    { src: wiiInfoImage("Nowon-gu Apartment buildings with Lotte World Tower.jpg"), alt: "Apartment buildings in Seoul" },
    { src: wiiInfoImage("Cityscape of Yeouido skyscrapers and Hangang Railway Bridge 20240501113854.jpg"), alt: "Seoul residential cityscape" },
    { src: wiiInfoImage("Hangang Railway Bridge and Yeouido.jpg"), alt: "Yeouido and Hangang in Seoul" }
  ],
  realty: [
    { src: wiiInfoImage("Nowon-gu Apartment buildings with Lotte World Tower.jpg"), alt: "Seoul apartment buildings" },
    { src: wiiInfoImage("Cityscape of Yeouido skyscrapers and Hangang Railway Bridge 20240501113854.jpg"), alt: "Seoul buildings and Hangang" },
    { src: wiiInfoImage("Seoul Skyline Night 2018.jpg"), alt: "Seoul night skyline" }
  ]
};

const WIIINFO_SECTION_IMAGE_ROTATION = {
  life: ["civic", "market", "hanokLife", "transit", "skyline", "market", "civic", "hanokLife", "transit", "skyline"],
  safety: ["skyline", "transit", "civic", "market", "hanokLife", "skyline", "transit", "civic", "market", "hanokLife"],
  housing: ["housing", "skyline", "hanokLife", "realty", "housing", "skyline", "realty", "hanokLife", "housing", "market"],
  realty: ["realty", "housing", "skyline", "market", "realty", "housing", "hanokLife", "skyline", "realty", "civic"]
};

const WIIINFO_SAFETY_LABELS = {
  ko: {
    tab: "안전 TOP10", title: "한국 긴급·안전 TOP10", summary: "위급하거나 막혔을 때 바로 전화하고 설명할 수 있는 실전 연락처입니다.",
    when: "언제 쓰나", say: "바로 말할 문장", caution: "주의사항", call: "전화하기", copy: "한국어 문장 복사", official: "공식 안내"
  },
  en: {
    tab: "Safety TOP10", title: "Korea Safety and Emergency TOP10", summary: "Practical numbers and phrases to use when something goes wrong in Korea.",
    when: "When to use it", say: "Phrase to say", caution: "Caution", call: "Call now", copy: "Copy Korean phrase", official: "Official guide"
  },
  ja: {
    tab: "安全 TOP10", title: "韓国の緊急・安全TOP10", summary: "困った時にすぐ電話し、状況を説明するための実用連絡先です。",
    when: "使う場面", say: "すぐ伝える文", caution: "注意事項", call: "電話する", copy: "韓国語をコピー", official: "公式案内"
  },
  th: {
    tab: "ความปลอดภัย TOP10", title: "เบอร์ฉุกเฉินและความปลอดภัยในเกาหลี TOP10", summary: "เบอร์และประโยคที่ใช้ได้ทันทีเมื่อเกิดปัญหาในเกาหลี",
    when: "ใช้เมื่อไร", say: "ประโยคที่พูดได้ทันที", caution: "ข้อควรระวัง", call: "โทรเลย", copy: "คัดลอกประโยคเกาหลี", official: "ข้อมูลทางการ"
  },
  zh: {
    tab: "安全 TOP10", title: "韩国紧急与安全 TOP10", summary: "在韩国遇到紧急情况或困难时可立即使用的电话和表达。",
    when: "什么时候使用", say: "可直接说的话", caution: "注意事项", call: "立即拨打", copy: "复制韩语句子", official: "官方指南"
  },
  vi: {
    tab: "An toàn TOP10", title: "Khẩn cấp và an toàn ở Hàn Quốc TOP10", summary: "Số điện thoại và câu nói thực tế khi gặp sự cố ở Hàn Quốc.",
    when: "Khi nào dùng", say: "Câu có thể nói ngay", caution: "Lưu ý", call: "Gọi ngay", copy: "Sao chép câu tiếng Hàn", official: "Hướng dẫn chính thức"
  },
  es: {
    tab: "Seguridad TOP10", title: "Emergencias y seguridad en Corea TOP10", summary: "Números y frases útiles cuando algo sale mal en Corea.",
    when: "Cuándo usarlo", say: "Frase para decir", caution: "Cuidado", call: "Llamar", copy: "Copiar frase coreana", official: "Guía oficial"
  }
};

const WIIINFO_SAFETY_ITEMS = {
  ko: [
    { title: "01. 112 경찰 신고", text: "범죄, 폭행, 스토킹, 교통사고처럼 경찰 도움이 필요하면 112로 전화합니다.", phone: "112", copy: "저는 외국인입니다. 경찰 도움이 필요합니다. 제 위치는 여기입니다.", use: "위협, 범죄, 사고, 분실물 관련 현장 도움이 필요할 때 사용합니다.", caution: "긴급하지 않은 생활 상담은 112가 아니라 1330, 1345, 120 같은 상담 창구를 먼저 확인합니다." },
    { title: "02. 119 구급차·화재", text: "응급환자, 화재, 구조, 큰 부상은 119로 전화합니다.", phone: "119", copy: "구급차가 필요합니다. 환자가 아픕니다. 제 위치는 여기입니다.", use: "갑자기 쓰러짐, 심한 통증, 사고 부상, 화재, 구조 상황에 사용합니다.", caution: "병원 위치를 모르면 증상과 현재 위치를 먼저 말하고 안내를 받습니다." },
    { title: "03. 1330 관광통역", text: "여행 중 길, 통역, 관광 불편, 기본 안내가 필요하면 1330을 이용합니다.", phone: "1330", link: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140632", copy: "통역 도움이 필요합니다. 한국어를 잘 못합니다.", use: "여행 중 통역, 길 안내, 관광 정보, 불편 신고가 필요할 때 유용합니다.", caution: "생명·범죄 관련 긴급 상황은 1330보다 112 또는 119가 우선입니다." },
    { title: "04. 1345 출입국 상담", text: "비자, 체류기간, 외국인등록, 주소 변경은 1345에 문의합니다.", phone: "1345", link: "https://www.immigration.go.kr/immigration_eng/1862/subview.do", copy: "비자와 체류 관련 상담이 필요합니다.", use: "외국인등록, 체류기간 연장, 체류지 변경, 출입국 업무를 확인할 때 사용합니다.", caution: "기한이 있는 업무는 전화 상담만 믿지 말고 HiKorea 예약과 공식 안내를 함께 확인합니다." },
    { title: "05. 병원·응급실", text: "응급이면 119, 일반 진료는 가까운 병원이나 의원을 확인합니다.", phone: "119", copy: "응급실에 가야 하나요? 영어가 가능한 병원이 있나요?", use: "심한 통증, 고열, 사고 부상은 119를 먼저 이용하고 일반 증상은 가까운 의원부터 확인합니다.", caution: "여권, 외국인등록증, 보험 정보, 결제수단을 챙기는 것이 좋습니다." },
    { title: "06. 약국·야간약국", text: "가벼운 증상은 약국에서 상담하고, 밤에는 운영 중인 약국을 확인합니다.", copy: "이 증상에 맞는 약이 필요합니다. 저는 이 약에 알레르기가 있습니다.", use: "감기, 소화불량, 가벼운 통증처럼 처방전 없이 상담 가능한 상황에 사용합니다.", caution: "심한 호흡곤란, 흉통, 의식 저하는 약국보다 119가 우선입니다." },
    { title: "07. 여권 분실", text: "여권을 잃어버리면 경찰 신고와 자국 대사관·영사관 연락이 필요합니다.", copy: "여권을 잃어버렸습니다. 분실 신고서가 필요합니다.", use: "여권, 체류카드, 중요한 신분증을 잃어버렸을 때 사용합니다.", caution: "항공권 일정이 있으면 대사관 긴급여권 가능 여부를 바로 확인합니다." },
    { title: "08. 카드·휴대폰 분실", text: "카드사와 통신사에 즉시 정지 요청하고, 도난이면 112에 신고합니다.", copy: "카드와 휴대폰을 잃어버렸습니다. 사용 정지를 하고 싶습니다.", use: "결제카드, 휴대폰, 지갑을 잃어버렸거나 도난이 의심될 때 사용합니다.", caution: "은행 앱, 간편결제, 유심 재발급까지 함께 확인해야 추가 피해를 줄일 수 있습니다." },
    { title: "09. 분실물 찾기", text: "지하철, 택시, 버스에서 잃어버린 물건은 이동수단과 시간 기록이 중요합니다.", copy: "이 물건을 잃어버렸습니다. 시간과 장소는 여기입니다.", use: "대중교통, 택시, 식당, 숙소에서 물건을 두고 왔을 때 사용합니다.", caution: "택시 영수증, 카드 결제 내역, 승하차 시간, 사진을 저장해 두면 찾기 쉽습니다." },
    { title: "10. 대사관·영사관", text: "여권, 체포, 큰 사고, 가족 연락 문제는 자국 대사관이나 영사관을 확인합니다.", copy: "제 나라 대사관에 연락해야 합니다. 도움을 받을 수 있나요?", use: "여권 재발급, 법적 문제, 큰 사고, 가족 연락이 필요한 상황에 사용합니다.", caution: "대사관은 한국의 병원비·벌금·개인 계약 문제를 대신 해결해주지는 않습니다." }
  ],
  en: [
    { title: "01. 112 Police", text: "Call 112 for crime, assault, stalking, traffic accidents, or urgent police help.", phone: "112", copy: "I am a foreigner. I need police help. My location is here.", use: "Use it for threats, crime, accidents, theft, or when police help is needed on site.", caution: "For non-urgent life questions, use a help center such as 1330, 1345, or 120 first." },
    { title: "02. 119 Ambulance and fire", text: "Call 119 for medical emergencies, fire, rescue, or serious injuries.", phone: "119", copy: "I need an ambulance. The patient is sick. My location is here.", use: "Use it for collapse, severe pain, accident injury, fire, or rescue situations.", caution: "If you do not know a hospital, explain symptoms and location first." },
    { title: "03. 1330 Travel helpline", text: "Use 1330 for travel help, interpretation, directions, and tourism complaints.", phone: "1330", link: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140632", copy: "I need interpretation help. I do not speak Korean well.", use: "Useful for travel interpretation, directions, tourist information, and travel complaints.", caution: "For life-threatening or crime situations, call 112 or 119 first." },
    { title: "04. 1345 Immigration", text: "Call 1345 for visa, stay period, alien registration, and address-change questions.", phone: "1345", link: "https://www.immigration.go.kr/immigration_eng/1862/subview.do", copy: "I need help with visa and immigration status.", use: "Use it for alien registration, stay extension, address changes, and immigration procedures.", caution: "For deadline-based work, also check HiKorea reservations and official notices." },
    { title: "05. Hospital and ER", text: "For emergencies call 119; for ordinary symptoms, check a nearby clinic first.", phone: "119", copy: "Do I need the emergency room? Is there an English-speaking hospital?", use: "For serious pain, fever, or accident injury, call 119; for minor symptoms, start with a clinic.", caution: "Bring passport, alien registration card, insurance information, and a payment method if possible." },
    { title: "06. Pharmacy and night pharmacy", text: "For mild symptoms, ask a pharmacy; at night, check which pharmacy is open.", copy: "I need medicine for these symptoms. I have an allergy to this medicine.", use: "Use it for colds, indigestion, mild pain, and non-prescription consultation.", caution: "For breathing trouble, chest pain, or loss of consciousness, call 119 first." },
    { title: "07. Lost passport", text: "If you lose your passport, report it and contact your embassy or consulate.", copy: "I lost my passport. I need a loss report.", use: "Use it when you lose your passport, residence card, or important ID.", caution: "If you have a flight soon, ask your embassy about emergency passport options immediately." },
    { title: "08. Lost card or phone", text: "Ask your card company and carrier to suspend service immediately; call 112 if stolen.", copy: "I lost my card and phone. I want to suspend them.", use: "Use it when a card, phone, or wallet is lost or theft is suspected.", caution: "Also check banking apps, mobile payments, and SIM reissue to reduce further damage." },
    { title: "09. Lost property", text: "For items lost in subway, taxi, or bus, time and route records matter.", copy: "I lost this item. The time and place are here.", use: "Use it when you left something on public transport, in a taxi, restaurant, or hotel.", caution: "Taxi receipts, card payment records, ride time, and photos make recovery easier." },
    { title: "10. Embassy or consulate", text: "Contact your embassy for passport, detention, major accidents, or family contact issues.", copy: "I need to contact my embassy. Can you help me?", use: "Use it for emergency travel documents, legal trouble, major accidents, or family contact.", caution: "Embassies usually cannot pay hospital bills, fines, or private contract costs for you." }
  ],
  ja: [
    { title: "01. 112 警察", text: "犯罪、暴行、ストーカー、交通事故など警察の助けが必要な時は112に電話します。", phone: "112", copy: "私は外国人です。警察の助けが必要です。私の場所はここです。", use: "脅威、犯罪、事故、盗難など現場で警察の助けが必要な時に使います。", caution: "緊急ではない生活相談は112ではなく、1330、1345、120などを先に確認します。" },
    { title: "02. 119 救急・火災", text: "急病、火災、救助、大きなけがは119に電話します。", phone: "119", copy: "救急車が必要です。患者が具合悪いです。私の場所はここです。", use: "倒れた時、強い痛み、事故のけが、火災、救助が必要な時に使います。", caution: "病院が分からない時は、症状と現在地を先に伝えます。" },
    { title: "03. 1330 観光通訳", text: "旅行中の道案内、通訳、観光案内、不便申告には1330を利用します。", phone: "1330", link: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140632", copy: "通訳の助けが必要です。韓国語がよく分かりません。", use: "旅行中の通訳、道案内、観光情報、不便申告に便利です。", caution: "命に関わる緊急事態や犯罪は112または119が優先です。" },
    { title: "04. 1345 出入国相談", text: "ビザ、滞在期間、外国人登録、住所変更は1345に問い合わせます。", phone: "1345", link: "https://www.immigration.go.kr/immigration_eng/1862/subview.do", copy: "ビザと滞在資格について相談が必要です。", use: "外国人登録、滞在延長、住所変更、出入国手続きの確認に使います。", caution: "期限がある手続きは電話だけでなくHiKorea予約と公式案内も確認します。" },
    { title: "05. 病院・救急室", text: "緊急なら119、一般診療は近くの病院や医院を確認します。", phone: "119", copy: "救急室に行く必要がありますか。英語対応の病院はありますか。", use: "強い痛み、高熱、事故のけがは119、軽い症状は医院から確認します。", caution: "パスポート、外国人登録証、保険情報、支払い手段を持って行くと安心です。" },
    { title: "06. 薬局・夜間薬局", text: "軽い症状は薬局で相談し、夜は営業中の薬局を確認します。", copy: "この症状に合う薬が必要です。この薬にアレルギーがあります。", use: "風邪、消化不良、軽い痛みなど処方箋なしで相談できる時に使います。", caution: "呼吸困難、胸痛、意識低下は薬局より119が優先です。" },
    { title: "07. パスポート紛失", text: "パスポートをなくしたら警察への申告と自国大使館・領事館への連絡が必要です。", copy: "パスポートをなくしました。紛失届が必要です。", use: "パスポート、在留カード、重要な身分証をなくした時に使います。", caution: "航空券の予定がある場合は緊急旅券の可否をすぐ確認します。" },
    { title: "08. カード・携帯紛失", text: "カード会社と通信会社にすぐ停止を依頼し、盗難なら112に申告します。", copy: "カードと携帯をなくしました。利用停止したいです。", use: "カード、携帯、財布をなくした時や盗難が疑われる時に使います。", caution: "銀行アプリ、簡単決済、SIM再発行も確認して追加被害を防ぎます。" },
    { title: "09. 忘れ物を探す", text: "地下鉄、タクシー、バスでなくした物は時間と経路の記録が重要です。", copy: "この物をなくしました。時間と場所はここです。", use: "交通機関、タクシー、店、宿泊先に物を置き忘れた時に使います。", caution: "タクシー領収書、カード決済履歴、乗車時間、写真があると探しやすいです。" },
    { title: "10. 大使館・領事館", text: "旅券、拘束、大きな事故、家族連絡は自国大使館や領事館を確認します。", copy: "自国の大使館に連絡する必要があります。手伝ってもらえますか。", use: "緊急旅券、法的問題、大きな事故、家族連絡が必要な時に使います。", caution: "大使館は病院費、罰金、個人契約問題を代わりに解決する機関ではありません。" }
  ],
  th: [
    { title: "01. 112 ตำรวจ", text: "โทร 112 เมื่อมีอาชญากรรม ถูกทำร้าย ถูกคุกคาม หรืออุบัติเหตุที่ต้องให้ตำรวจช่วย", phone: "112", copy: "ฉันเป็นชาวต่างชาติ ต้องการความช่วยเหลือจากตำรวจ ตำแหน่งของฉันอยู่ที่นี่", use: "ใช้เมื่อมีภัยคุกคาม อาชญากรรม อุบัติเหตุ ของหาย หรือจำเป็นต้องให้ตำรวจมาที่จุดเกิดเหตุ", caution: "ถ้าไม่ใช่เรื่องฉุกเฉิน ให้ลองติดต่อ 1330, 1345 หรือ 120 ก่อน" },
    { title: "02. 119 รถพยาบาลและไฟไหม้", text: "โทร 119 เมื่อมีเหตุฉุกเฉินทางการแพทย์ ไฟไหม้ กู้ภัย หรือบาดเจ็บรุนแรง", phone: "119", copy: "ต้องการรถพยาบาล ผู้ป่วยไม่สบาย ตำแหน่งของฉันอยู่ที่นี่", use: "ใช้เมื่อหมดสติ เจ็บรุนแรง บาดเจ็บจากอุบัติเหตุ ไฟไหม้ หรือเหตุที่ต้องกู้ภัย", caution: "ถ้าไม่รู้โรงพยาบาล ให้บอกอาการและตำแหน่งปัจจุบันก่อน" },
    { title: "03. 1330 สายช่วยเหลือนักท่องเที่ยว", text: "ใช้ 1330 สำหรับการท่องเที่ยว ล่าม เส้นทาง และเรื่องร้องเรียนการท่องเที่ยว", phone: "1330", link: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140632", copy: "ต้องการความช่วยเหลือด้านล่าม ฉันพูดภาษาเกาหลีไม่เก่ง", use: "เหมาะกับล่ามระหว่างเที่ยว ถามทาง ข้อมูลท่องเที่ยว และปัญหาในการเดินทาง", caution: "ถ้าเป็นอันตรายถึงชีวิตหรืออาชญากรรม ให้โทร 112 หรือ 119 ก่อน" },
    { title: "04. 1345 ตรวจคนเข้าเมือง", text: "โทร 1345 เรื่องวีซ่า ระยะพำนัก บัตรต่างชาติ และการเปลี่ยนที่อยู่", phone: "1345", link: "https://www.immigration.go.kr/immigration_eng/1862/subview.do", copy: "ต้องการปรึกษาเรื่องวีซ่าและสถานะพำนัก", use: "ใช้ตรวจเรื่องบัตรต่างชาติ ต่อวีซ่า เปลี่ยนที่อยู่ และขั้นตอนตรวจคนเข้าเมือง", caution: "งานที่มีวันครบกำหนดควรเช็กการจอง HiKorea และประกาศทางการด้วย" },
    { title: "05. โรงพยาบาลและห้องฉุกเฉิน", text: "กรณีฉุกเฉินโทร 119; อาการทั่วไปให้เริ่มจากคลินิกใกล้บ้าน", phone: "119", copy: "ฉันต้องไปห้องฉุกเฉินไหม มีโรงพยาบาลที่พูดอังกฤษได้ไหม", use: "อาการปวดรุนแรง ไข้สูง หรือบาดเจ็บจากอุบัติเหตุให้โทร 119; อาการเบาให้เริ่มจากคลินิก", caution: "ควรพกพาสปอร์ต บัตรต่างชาติ ข้อมูลประกัน และวิธีจ่ายเงิน" },
    { title: "06. ร้านยาและร้านยากลางคืน", text: "อาการไม่รุนแรงให้ถามร้านยา และตอนกลางคืนให้เช็กร้านยาที่เปิดอยู่", copy: "ต้องการยาสำหรับอาการนี้ ฉันแพ้ยานี้", use: "ใช้กับหวัด อาหารไม่ย่อย ปวดเล็กน้อย และการปรึกษายาที่ไม่ต้องใช้ใบสั่งแพทย์", caution: "หายใจลำบาก เจ็บหน้าอก หรือหมดสติ ให้โทร 119 ก่อน" },
    { title: "07. พาสปอร์ตหาย", text: "ถ้าพาสปอร์ตหาย ให้แจ้งความและติดต่อสถานทูตหรือกงสุลของประเทศตนเอง", copy: "พาสปอร์ตของฉันหาย ต้องการใบแจ้งความของหาย", use: "ใช้เมื่อพาสปอร์ต บัตรพำนัก หรือเอกสารสำคัญหาย", caution: "ถ้ามีเที่ยวบินใกล้ ๆ ให้ถามสถานทูตเรื่องพาสปอร์ตฉุกเฉินทันที" },
    { title: "08. บัตรหรือมือถือหาย", text: "ให้บริษัทบัตรและเครือข่ายมือถือระงับทันที ถ้าถูกขโมยให้โทร 112", copy: "บัตรและมือถือของฉันหาย ต้องการระงับการใช้งาน", use: "ใช้เมื่อบัตร มือถือ หรือกระเป๋าหาย หรือสงสัยว่าถูกขโมย", caution: "ตรวจแอปธนาคาร การจ่ายเงินมือถือ และการออกซิมใหม่ด้วย" },
    { title: "09. ของหาย", text: "ถ้าของหายในรถไฟใต้ดิน แท็กซี่ หรือบัส เวลาและเส้นทางสำคัญมาก", copy: "ฉันทำของชิ้นนี้หาย เวลาและสถานที่อยู่ที่นี่", use: "ใช้เมื่อทิ้งของไว้ในขนส่งสาธารณะ แท็กซี่ ร้านอาหาร หรือที่พัก", caution: "ใบเสร็จแท็กซี่ รายการจ่ายบัตร เวลาเดินทาง และรูปช่วยให้หาของง่ายขึ้น" },
    { title: "10. สถานทูตหรือกงสุล", text: "ติดต่อสถานทูตเมื่อมีเรื่องพาสปอร์ต ถูกจับ อุบัติเหตุใหญ่ หรือการติดต่อครอบครัว", copy: "ฉันต้องติดต่อสถานทูตของประเทศฉัน ช่วยได้ไหม", use: "ใช้เมื่อจำเป็นต้องมีเอกสารเดินทางฉุกเฉิน ปัญหากฎหมาย อุบัติเหตุใหญ่ หรือครอบครัว", caution: "สถานทูตมักไม่สามารถจ่ายค่ารักษา ค่าปรับ หรือค่าใช้จ่ายสัญญาส่วนตัวแทนคุณได้" }
  ],
  zh: [
    { title: "01. 112 警察", text: "遇到犯罪、暴力、跟踪、交通事故等需要警察帮助时拨打112。", phone: "112", copy: "我是外国人。我需要警察帮助。我的位置在这里。", use: "有威胁、犯罪、事故、盗窃或需要警察到现场时使用。", caution: "非紧急生活咨询请先使用1330、1345或120等咨询窗口。" },
    { title: "02. 119 救护车和火灾", text: "急病、火灾、救援或严重受伤时拨打119。", phone: "119", copy: "我需要救护车。病人不舒服。我的位置在这里。", use: "昏倒、剧痛、事故受伤、火灾或救援情况时使用。", caution: "不知道去哪个医院时，先说明症状和当前位置。" },
    { title: "03. 1330 旅游翻译", text: "旅行中需要问路、翻译、旅游信息或投诉时使用1330。", phone: "1330", link: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140632", copy: "我需要翻译帮助。我韩语说得不好。", use: "适合旅行翻译、路线咨询、旅游信息和旅游不便投诉。", caution: "生命危险或犯罪情况请优先拨打112或119。" },
    { title: "04. 1345 出入境咨询", text: "签证、停留期限、外国人登录和地址变更可咨询1345。", phone: "1345", link: "https://www.immigration.go.kr/immigration_eng/1862/subview.do", copy: "我需要签证和停留资格咨询。", use: "确认外国人登录、停留延期、地址变更和出入境手续时使用。", caution: "有期限的业务不要只依赖电话，也要确认HiKorea预约和官方公告。" },
    { title: "05. 医院和急诊室", text: "紧急情况拨打119；普通症状先确认附近诊所。", phone: "119", copy: "我需要去急诊室吗？有能说英语的医院吗？", use: "剧痛、高烧、事故受伤时先拨119；轻微症状可从诊所开始。", caution: "建议携带护照、外国人登录证、保险信息和付款方式。" },
    { title: "06. 药店和夜间药店", text: "轻微症状可在药店咨询，夜间需确认营业药店。", copy: "我需要适合这些症状的药。我对这种药过敏。", use: "感冒、消化不良、轻微疼痛等无需处方咨询时使用。", caution: "呼吸困难、胸痛、意识下降时应优先拨打119。" },
    { title: "07. 护照丢失", text: "护照丢失时需要报警并联系本国大使馆或领事馆。", copy: "我的护照丢了。我需要遗失证明。", use: "护照、居留卡或重要身份证件丢失时使用。", caution: "如果近期有航班，马上向大使馆确认紧急旅行证件。" },
    { title: "08. 银行卡或手机丢失", text: "立即联系发卡公司和通信公司停用；如被盗请拨打112。", copy: "我的卡和手机丢了。我想停用。", use: "银行卡、手机或钱包丢失，或怀疑被盗时使用。", caution: "还要确认银行App、移动支付和SIM补办，减少进一步损失。" },
    { title: "09. 寻找遗失物", text: "在地铁、出租车或公交上遗失物品时，时间和路线记录很重要。", copy: "我丢了这个东西。时间和地点在这里。", use: "在公共交通、出租车、餐厅或住宿处遗落物品时使用。", caution: "出租车收据、刷卡记录、乘车时间和照片会帮助找回。" },
    { title: "10. 大使馆或领事馆", text: "护照、拘留、重大事故或联系家人问题请联系本国大使馆。", copy: "我需要联系我国大使馆。可以帮我吗？", use: "需要紧急旅行证件、法律问题、重大事故或联系家人时使用。", caution: "大使馆通常不能代付医疗费、罚款或私人合同费用。" }
  ],
  vi: [
    { title: "01. 112 Cảnh sát", text: "Gọi 112 khi có tội phạm, bị hành hung, theo dõi, tai nạn giao thông hoặc cần cảnh sát.", phone: "112", copy: "Tôi là người nước ngoài. Tôi cần cảnh sát giúp. Vị trí của tôi ở đây.", use: "Dùng khi có đe dọa, tội phạm, tai nạn, mất cắp hoặc cần cảnh sát tại hiện trường.", caution: "Nếu không khẩn cấp, hãy thử 1330, 1345 hoặc 120 trước." },
    { title: "02. 119 Cấp cứu và cứu hỏa", text: "Gọi 119 khi cấp cứu y tế, cháy, cứu hộ hoặc bị thương nặng.", phone: "119", copy: "Tôi cần xe cấp cứu. Bệnh nhân đang đau. Vị trí của tôi ở đây.", use: "Dùng khi ngất, đau nặng, bị thương do tai nạn, cháy hoặc cần cứu hộ.", caution: "Nếu không biết bệnh viện, hãy nói triệu chứng và vị trí hiện tại trước." },
    { title: "03. 1330 Hỗ trợ du lịch", text: "Dùng 1330 để hỏi đường, phiên dịch, thông tin du lịch và khiếu nại du lịch.", phone: "1330", link: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140632", copy: "Tôi cần hỗ trợ phiên dịch. Tôi không nói tiếng Hàn tốt.", use: "Hữu ích cho phiên dịch khi du lịch, hỏi đường, thông tin du lịch và phàn nàn.", caution: "Nếu nguy hiểm tính mạng hoặc tội phạm, gọi 112 hoặc 119 trước." },
    { title: "04. 1345 Xuất nhập cảnh", text: "Gọi 1345 về visa, thời hạn lưu trú, thẻ người nước ngoài và đổi địa chỉ.", phone: "1345", link: "https://www.immigration.go.kr/immigration_eng/1862/subview.do", copy: "Tôi cần tư vấn về visa và tình trạng lưu trú.", use: "Dùng để hỏi về đăng ký người nước ngoài, gia hạn lưu trú, đổi địa chỉ và thủ tục xuất nhập cảnh.", caution: "Với việc có hạn chót, hãy kiểm tra cả đặt lịch HiKorea và thông báo chính thức." },
    { title: "05. Bệnh viện và cấp cứu", text: "Khẩn cấp gọi 119; triệu chứng thông thường nên kiểm tra phòng khám gần nhất.", phone: "119", copy: "Tôi có cần đến phòng cấp cứu không? Có bệnh viện nói tiếng Anh không?", use: "Đau nặng, sốt cao, chấn thương do tai nạn thì gọi 119; triệu chứng nhẹ bắt đầu từ phòng khám.", caution: "Nên mang hộ chiếu, thẻ người nước ngoài, thông tin bảo hiểm và phương thức thanh toán." },
    { title: "06. Nhà thuốc và nhà thuốc đêm", text: "Triệu chứng nhẹ có thể hỏi nhà thuốc; ban đêm kiểm tra nhà thuốc đang mở.", copy: "Tôi cần thuốc cho triệu chứng này. Tôi bị dị ứng với thuốc này.", use: "Dùng cho cảm lạnh, khó tiêu, đau nhẹ và tư vấn thuốc không cần đơn.", caution: "Khó thở, đau ngực hoặc mất ý thức thì gọi 119 trước." },
    { title: "07. Mất hộ chiếu", text: "Khi mất hộ chiếu, cần báo mất và liên hệ đại sứ quán hoặc lãnh sự quán của bạn.", copy: "Tôi bị mất hộ chiếu. Tôi cần giấy báo mất.", use: "Dùng khi mất hộ chiếu, thẻ cư trú hoặc giấy tờ tùy thân quan trọng.", caution: "Nếu sắp bay, hãy hỏi đại sứ quán ngay về giấy thông hành khẩn cấp." },
    { title: "08. Mất thẻ hoặc điện thoại", text: "Yêu cầu công ty thẻ và nhà mạng khóa ngay; nếu bị trộm, gọi 112.", copy: "Tôi bị mất thẻ và điện thoại. Tôi muốn khóa chúng.", use: "Dùng khi mất thẻ, điện thoại, ví hoặc nghi bị trộm.", caution: "Kiểm tra cả app ngân hàng, thanh toán di động và cấp lại SIM để giảm thiệt hại." },
    { title: "09. Tìm đồ thất lạc", text: "Nếu mất đồ trên tàu điện, taxi hoặc xe buýt, thời gian và tuyến đường rất quan trọng.", copy: "Tôi làm mất món đồ này. Thời gian và địa điểm ở đây.", use: "Dùng khi để quên đồ trên phương tiện công cộng, taxi, nhà hàng hoặc nơi ở.", caution: "Hóa đơn taxi, lịch sử thanh toán thẻ, giờ đi và ảnh giúp tìm lại dễ hơn." },
    { title: "10. Đại sứ quán hoặc lãnh sự", text: "Liên hệ đại sứ quán về hộ chiếu, bị giữ, tai nạn lớn hoặc liên lạc gia đình.", copy: "Tôi cần liên hệ đại sứ quán của nước tôi. Bạn có thể giúp không?", use: "Dùng khi cần giấy tờ du lịch khẩn cấp, vấn đề pháp lý, tai nạn lớn hoặc liên hệ gia đình.", caution: "Đại sứ quán thường không trả viện phí, tiền phạt hoặc chi phí hợp đồng cá nhân thay bạn." }
  ],
  es: [
    { title: "01. 112 Policía", text: "Llama al 112 por crimen, agresión, acoso, accidente de tráfico o ayuda policial urgente.", phone: "112", copy: "Soy extranjero. Necesito ayuda de la policía. Mi ubicación está aquí.", use: "Úsalo para amenazas, delitos, accidentes, robos o cuando necesitas policía en el lugar.", caution: "Para consultas no urgentes, prueba primero 1330, 1345 o 120." },
    { title: "02. 119 Ambulancia e incendio", text: "Llama al 119 por emergencia médica, incendio, rescate o lesión grave.", phone: "119", copy: "Necesito una ambulancia. El paciente está enfermo. Mi ubicación está aquí.", use: "Úsalo por desmayo, dolor fuerte, lesión por accidente, incendio o rescate.", caution: "Si no sabes qué hospital usar, explica primero los síntomas y tu ubicación." },
    { title: "03. 1330 Ayuda turística", text: "Usa 1330 para ayuda de viaje, interpretación, direcciones y quejas turísticas.", phone: "1330", link: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140632", copy: "Necesito ayuda de interpretación. No hablo bien coreano.", use: "Útil para interpretación, direcciones, información turística y quejas durante el viaje.", caution: "Para peligro de vida o crimen, llama primero a 112 o 119." },
    { title: "04. 1345 Inmigración", text: "Llama al 1345 por visa, periodo de estancia, registro extranjero y cambio de dirección.", phone: "1345", link: "https://www.immigration.go.kr/immigration_eng/1862/subview.do", copy: "Necesito ayuda con visa y estatus de estancia.", use: "Úsalo para registro extranjero, extensión, cambio de dirección y trámites migratorios.", caution: "Si hay fecha límite, revisa también reservas de HiKorea y avisos oficiales." },
    { title: "05. Hospital y urgencias", text: "En emergencia llama al 119; para síntomas comunes, revisa una clínica cercana.", phone: "119", copy: "¿Necesito ir a urgencias? ¿Hay hospital que hable inglés?", use: "Dolor fuerte, fiebre alta o lesión por accidente: llama al 119; síntomas leves: clínica.", caution: "Lleva pasaporte, tarjeta extranjera, seguro y medio de pago si es posible." },
    { title: "06. Farmacia y farmacia nocturna", text: "Para síntomas leves pregunta en farmacia; de noche, confirma cuál está abierta.", copy: "Necesito medicina para estos síntomas. Soy alérgico a esta medicina.", use: "Úsalo para resfriado, indigestión, dolor leve y consulta sin receta.", caution: "Dificultad para respirar, dolor en pecho o pérdida de conciencia: llama al 119 primero." },
    { title: "07. Pasaporte perdido", text: "Si pierdes el pasaporte, haz reporte y contacta tu embajada o consulado.", copy: "Perdí mi pasaporte. Necesito un reporte de pérdida.", use: "Úsalo cuando pierdes pasaporte, tarjeta de residencia o identificación importante.", caution: "Si tienes vuelo pronto, pregunta de inmediato por pasaporte de emergencia." },
    { title: "08. Tarjeta o teléfono perdido", text: "Pide bloqueo inmediato a la tarjeta y operadora; si fue robo, llama al 112.", copy: "Perdí mi tarjeta y teléfono. Quiero bloquearlos.", use: "Úsalo cuando pierdes tarjeta, teléfono o cartera, o sospechas robo.", caution: "Revisa apps bancarias, pagos móviles y reemisión de SIM para reducir daños." },
    { title: "09. Objetos perdidos", text: "Si perdiste algo en metro, taxi o bus, importan hora y ruta.", copy: "Perdí este objeto. La hora y el lugar están aquí.", use: "Úsalo si dejaste algo en transporte público, taxi, restaurante u hotel.", caution: "Recibo de taxi, pago con tarjeta, hora del viaje y fotos ayudan a recuperarlo." },
    { title: "10. Embajada o consulado", text: "Contacta tu embajada por pasaporte, detención, accidente grave o contacto familiar.", copy: "Necesito contactar a mi embajada. ¿Puede ayudarme?", use: "Úsalo para documentos de viaje urgentes, problemas legales, accidentes grandes o familia.", caution: "La embajada normalmente no paga hospital, multas ni contratos privados por ti." }
  ]
};

const WIIINFO_KOREAN_COPY = {
  safety: WIIINFO_SAFETY_ITEMS.ko.map((item) => item.copy)
};

function buildWiiInfoSafetySection(lang) {
  const labels = WIIINFO_SAFETY_LABELS[lang] || WIIINFO_SAFETY_LABELS.en;
  const items = WIIINFO_SAFETY_ITEMS[lang] || WIIINFO_SAFETY_ITEMS.en;
  return {
    id: "safety",
    icon: "🚨",
    tab: labels.tab,
    title: labels.title,
    summary: labels.summary,
    cards: items.map((item) => {
      const index = items.indexOf(item);
      const koreanCopy = WIIINFO_KOREAN_COPY.safety[index] || item.copy;
      return {
      title: item.title,
      text: item.text,
      detail: {
        images: WIIINFO_VISUAL_SETS[WIIINFO_SECTION_IMAGE_ROTATION.safety[index]] || WIIINFO_VISUAL_SETS.civic,
        lead: item.text,
        actions: [
          item.phone ? { type: "tel", label: `${labels.call} ${item.phone}`, value: item.phone } : null,
          item.copy ? { type: "copy", label: labels.copy, value: koreanCopy } : null,
          item.link ? { type: "link", label: labels.official, href: item.link } : null
        ].filter(Boolean),
        sections: [
          { title: labels.when, items: [item.use, item.text] },
          { title: labels.say, items: [koreanCopy, lang === "ko" ? null : item.copy].filter(Boolean) },
          { title: labels.caution, items: [item.caution] }
        ]
      }
    };
    })
  };
}

["ko", "en", "ja", "th", "zh", "vi", "es"].forEach((lang) => {
  const sections = window.WIIINFO_INFO_SECTIONS[lang];
  if (sections && !sections.some((section) => section.id === "safety")) {
    sections.splice(1, 0, buildWiiInfoSafetySection(lang));
  }
});

const WIIINFO_FIRST_DAYS_LABELS = {
  ko: {
    tab: "첫 7일 TOP10", title: "한국 도착 첫 7일 TOP10", summary: "한국에 도착한 뒤 먼저 처리하면 생활이 막히지 않는 순서형 체크리스트입니다.",
    when: "언제 처리하나", prepare: "준비할 것", avoid: "실수 방지", phrase: "바로 말할 문장", copy: "한국어 문장 복사", official: "공식 안내", call: "상담 전화",
    step: "도착 후 우선순위", prepareItems: ["여권, 외국인등록증 또는 신청 예정 서류", "한국 전화번호, 거주지 주소, 계약서나 안내문 사진", "예약이 필요한 업무는 방문 전 온라인 예약 확인"],
    avoidItems: ["이름, 생년월일, 주소 표기가 서류마다 다르면 절차가 지연될 수 있습니다.", "기한이 있는 신고는 전화 상담만 믿지 말고 공식 사이트와 방문 예약을 함께 확인합니다."],
    phrases: ["외국인등록을 하려면 무엇을 준비해야 하나요?", "선불 유심이나 휴대폰 개통을 하고 싶습니다.", "외국인이 계좌를 만들려면 어떤 서류가 필요합니까?", "교통카드를 어디에서 살 수 있나요?", "이 주소까지 가는 길을 알려주세요.", "이 지역의 쓰레기 배출 요일은 언제인가요?", "근처 병원이나 약국을 찾고 있습니다.", "휴대폰 본인인증이 되지 않습니다.", "방문 예약이 필요한가요?", "긴급 상황이면 어디로 전화해야 하나요?"]
  },
  en: {
    tab: "First 7 Days", title: "First 7 Days in Korea TOP10", summary: "A step-by-step checklist to avoid getting stuck during your first week in Korea.",
    when: "When to handle it", prepare: "Prepare", avoid: "Avoid mistakes", phrase: "Phrase to say", copy: "Copy Korean phrase", official: "Official guide", call: "Call help",
    step: "Arrival priority", prepareItems: ["Passport, alien registration card, or documents you will use to apply", "Korean phone number, address, and photos of contracts or notices", "For office visits, check whether online reservation is required"],
    avoidItems: ["Different name, birth date, or address formats across documents can delay the process.", "For deadline-based duties, check official websites and reservations, not only phone advice."],
    phrases: ["What do I need to prepare for alien registration?", "I want to open a prepaid SIM or mobile phone plan.", "What documents does a foreigner need to open a bank account?", "Where can I buy a transport card?", "Please tell me how to get to this address.", "What day should I take out trash in this area?", "I am looking for a nearby clinic or pharmacy.", "Mobile identity verification is not working.", "Do I need to make a reservation before visiting?", "Where should I call in an emergency?"]
  },
  ja: {
    tab: "最初の7日 TOP10", title: "韓国到着後 最初の7日TOP10", summary: "韓国到着後に先に処理すると生活が詰まりにくい順序型チェックリストです。",
    when: "いつ処理するか", prepare: "準備するもの", avoid: "ミス防止", phrase: "すぐ伝える文", copy: "韓国語をコピー", official: "公式案内", call: "相談電話",
    step: "到着後の優先順位", prepareItems: ["パスポート、外国人登録証または申請予定書類", "韓国の電話番号、住所、契約書や案内文の写真", "訪問業務はオンライン予約が必要か事前確認"],
    avoidItems: ["書類ごとに名前、生年月日、住所の表記が違うと手続きが遅れることがあります。", "期限がある手続きは電話相談だけでなく公式サイトと予約も確認します。"],
    phrases: ["外国人登録には何を準備すればいいですか。", "プリペイドSIMまたは携帯電話を開通したいです。", "外国人が口座を作るにはどんな書類が必要ですか。", "交通カードはどこで買えますか。", "この住所までの行き方を教えてください。", "この地域のごみ出し日はいつですか。", "近くの病院か薬局を探しています。", "携帯電話の本人認証ができません。", "訪問予約が必要ですか。", "緊急時はどこに電話すればいいですか。"]
  },
  th: {
    tab: "7 วันแรก TOP10", title: "7 วันแรกหลังมาถึงเกาหลี TOP10", summary: "เช็กลิสต์ตามลำดับเพื่อไม่ให้ติดขัดในสัปดาห์แรกที่เกาหลี",
    when: "ควรทำเมื่อไร", prepare: "สิ่งที่ต้องเตรียม", avoid: "กันความผิดพลาด", phrase: "ประโยคที่พูดได้ทันที", copy: "คัดลอกประโยคเกาหลี", official: "ข้อมูลทางการ", call: "โทรปรึกษา",
    step: "ลำดับความสำคัญหลังมาถึง", prepareItems: ["พาสปอร์ต บัตรต่างชาติ หรือเอกสารที่จะใช้สมัคร", "เบอร์เกาหลี ที่อยู่ และรูปสัญญาหรือเอกสารแจ้ง", "งานที่ต้องไปสำนักงานให้เช็กการจองออนไลน์ก่อน"],
    avoidItems: ["ถ้าชื่อ วันเกิด หรือที่อยู่ในเอกสารไม่ตรงกัน ขั้นตอนอาจล่าช้า", "งานที่มีวันครบกำหนดควรเช็กเว็บไซต์ทางการและการจอง ไม่ใช่แค่โทรถาม"],
    phrases: ["ต้องเตรียมอะไรบ้างสำหรับการลงทะเบียนคนต่างชาติ", "ต้องการเปิดซิมเติมเงินหรือเบอร์มือถือ", "ชาวต่างชาติต้องใช้เอกสารอะไรในการเปิดบัญชี", "ซื้อบัตรโดยสารได้ที่ไหน", "ช่วยบอกทางไปที่อยู่นี้ได้ไหม", "พื้นที่นี้ทิ้งขยะวันไหน", "กำลังหาร้านยาหรือคลินิกใกล้ ๆ", "ยืนยันตัวตนด้วยมือถือไม่ได้", "ต้องจองก่อนเข้าไปไหม", "ถ้าฉุกเฉินต้องโทรเบอร์ไหน"]
  },
  zh: {
    tab: "最初7天 TOP10", title: "到韩国最初7天 TOP10", summary: "到韩国后先处理这些事项，生活流程会更顺畅。",
    when: "什么时候处理", prepare: "需要准备", avoid: "避免失误", phrase: "可直接说的话", copy: "复制韩语句子", official: "官方指南", call: "咨询电话",
    step: "到达后优先顺序", prepareItems: ["护照、外国人登录证或申请所需文件", "韩国电话号码、住址、合同或通知照片", "访问机关前确认是否需要线上预约"],
    avoidItems: ["文件上的姓名、出生日期、地址格式不同，手续可能会延迟。", "有期限的事项不要只听电话咨询，也要确认官网和预约。"],
    phrases: ["办理外国人登录需要准备什么？", "我想办理预付SIM卡或手机号码。", "外国人开银行账户需要哪些文件？", "在哪里可以买交通卡？", "请告诉我去这个地址的方法。", "这个地区哪天倒垃圾？", "我在找附近的医院或药店。", "手机本人认证无法通过。", "访问前需要预约吗？", "紧急情况应该打哪个电话？"]
  },
  vi: {
    tab: "7 ngày đầu TOP10", title: "7 ngày đầu ở Hàn Quốc TOP10", summary: "Checklist theo thứ tự để tuần đầu ở Hàn không bị vướng thủ tục.",
    when: "Khi nào xử lý", prepare: "Cần chuẩn bị", avoid: "Tránh sai sót", phrase: "Câu có thể nói ngay", copy: "Sao chép câu tiếng Hàn", official: "Hướng dẫn chính thức", call: "Gọi tư vấn",
    step: "Ưu tiên sau khi đến", prepareItems: ["Hộ chiếu, thẻ người nước ngoài hoặc giấy tờ để đăng ký", "Số điện thoại Hàn, địa chỉ, ảnh hợp đồng hoặc thông báo", "Nếu cần đến văn phòng, kiểm tra đặt lịch online trước"],
    avoidItems: ["Tên, ngày sinh hoặc địa chỉ không thống nhất giữa giấy tờ có thể làm chậm thủ tục.", "Việc có hạn chót cần kiểm tra website chính thức và đặt lịch, không chỉ nghe tư vấn qua điện thoại."],
    phrases: ["Tôi cần chuẩn bị gì để đăng ký người nước ngoài?", "Tôi muốn mở SIM trả trước hoặc số điện thoại.", "Người nước ngoài cần giấy tờ gì để mở tài khoản?", "Tôi có thể mua thẻ giao thông ở đâu?", "Xin chỉ đường đến địa chỉ này.", "Khu vực này đổ rác vào ngày nào?", "Tôi đang tìm phòng khám hoặc nhà thuốc gần đây.", "Xác minh danh tính bằng điện thoại không hoạt động.", "Tôi có cần đặt lịch trước khi đến không?", "Khi khẩn cấp tôi nên gọi số nào?"]
  },
  es: {
    tab: "Primeros 7 días", title: "Primeros 7 días en Corea TOP10", summary: "Checklist en orden para no quedarte bloqueado durante tu primera semana en Corea.",
    when: "Cuándo hacerlo", prepare: "Preparar", avoid: "Evitar errores", phrase: "Frase para decir", copy: "Copiar frase coreana", official: "Guía oficial", call: "Llamar ayuda",
    step: "Prioridad al llegar", prepareItems: ["Pasaporte, tarjeta extranjera o documentos para solicitarla", "Número coreano, dirección y fotos de contratos o avisos", "Antes de visitar una oficina, revisa si necesitas reserva online"],
    avoidItems: ["Si nombre, fecha de nacimiento o dirección no coinciden entre documentos, el trámite puede retrasarse.", "Para trámites con fecha límite, revisa web oficial y reserva, no solo una llamada."],
    phrases: ["¿Qué necesito preparar para el registro extranjero?", "Quiero abrir una SIM prepago o plan móvil.", "¿Qué documentos necesita un extranjero para abrir cuenta bancaria?", "¿Dónde puedo comprar una tarjeta de transporte?", "Por favor dime cómo llegar a esta dirección.", "¿Qué día se saca la basura en esta zona?", "Busco una clínica o farmacia cercana.", "La verificación móvil no funciona.", "¿Necesito reservar antes de visitar?", "¿A qué número debo llamar en una emergencia?"]
  }
};

WIIINFO_KOREAN_COPY.firstDays = WIIINFO_FIRST_DAYS_LABELS.ko.phrases;

function applyFirstDaysSection(lang) {
  const sections = window.WIIINFO_INFO_SECTIONS[lang];
  const section = sections?.find((item) => item.id === "life");
  if (!section) return;
  const labels = WIIINFO_FIRST_DAYS_LABELS[lang] || WIIINFO_FIRST_DAYS_LABELS.en;
  section.icon = "✅";
  section.tab = labels.tab;
  section.title = labels.title;
  section.summary = labels.summary;
  section.cards.forEach((card, index) => {
    const koreanCopy = WIIINFO_KOREAN_COPY.firstDays[index] || WIIINFO_KOREAN_COPY.firstDays[0];
    const actions = [
      { type: "copy", label: labels.copy, value: koreanCopy },
      index === 0 || index === 8 ? { type: "tel", label: `${labels.call} 1345`, value: "1345" } : null,
      index === 0 || index === 8 ? { type: "link", label: labels.official, href: "https://www.hikorea.go.kr" } : null
    ].filter(Boolean);
    card.detail = {
      images: WIIINFO_VISUAL_SETS[WIIINFO_SECTION_IMAGE_ROTATION.life[index]] || WIIINFO_VISUAL_SETS.civic,
      lead: card.text,
      actions,
      sections: [
        { title: labels.when, items: [`${labels.step} ${String(index + 1).padStart(2, "0")}`, card.text] },
        { title: labels.prepare, items: labels.prepareItems },
        { title: labels.phrase, items: [koreanCopy, lang === "ko" ? null : labels.phrases[index] || labels.phrases[0]].filter(Boolean) },
        { title: labels.avoid, items: labels.avoidItems }
      ]
    };
  });
}

["ko", "en", "ja", "th", "zh", "vi", "es"].forEach(applyFirstDaysSection);

const WIIINFO_WARNING_PACKS = {
  ko: {
    tab: "주의 TOP10", title: "한국 생활 사기·위험 주의 TOP10", summary: "외국인이 한국에서 돈, 계약, 비자 문제를 피하기 위해 먼저 확인할 위험 신호입니다.",
    risk: "위험 신호", action: "바로 할 일", phrase: "거절·확인 문장", avoid: "피해야 할 행동", copy: "한국어 문장 복사", call: "상담 전화",
    actionItems: ["이름, 계좌, 주소, 날짜, 금액을 사진이나 문자로 남깁니다.", "이해가 안 되면 바로 송금하거나 서명하지 말고 확인을 요청합니다."],
    avoidItems: ["급하게 결정하라는 압박을 받으면 잠시 멈춥니다.", "한국어 문장을 이해하지 못한 상태로 계약하거나 개인정보를 보내지 않습니다."],
    cards: [
      ["01. 보증금 사기", "시세보다 싸거나 보증금이 큰 집은 소유자와 권리관계를 먼저 확인합니다.", "보증금이 너무 높거나 집주인 확인을 피하면 위험합니다.", "계약 전 등기부등본과 임대인 계좌 명의를 확인하고 싶습니다."],
      ["02. 계약금 선송금", "집, 중고거래, 예약에서 확인 전 송금을 요구하면 멈추고 확인합니다.", "계약서·신분 확인 전 빠른 송금을 요구하면 위험합니다.", "확인 후에 송금하겠습니다. 먼저 계약서와 신분 확인이 필요합니다."],
      ["03. 등기부 미확인", "부동산 계약 전 소유자, 근저당, 압류를 확인하지 않으면 보증금 위험이 커집니다.", "등기부 확인을 귀찮아하거나 보여주지 않으면 위험합니다.", "등기부등본을 계약 당일 기준으로 확인하고 싶습니다."],
      ["04. 중고거래 사기", "택배 선입금, 가짜 안전결제 링크, 시세보다 싼 물건을 조심합니다.", "외부 링크 결제나 선입금을 강하게 요구하면 위험합니다.", "직거래나 안전한 결제 방법으로만 거래하고 싶습니다."],
      ["05. 택시 바가지", "미터기 없이 요금을 정하거나 돌아가는 길을 제안하면 주의합니다.", "미터기를 켜지 않거나 현금만 요구하면 위험합니다.", "미터기를 켜 주세요. 이 주소로 가 주세요."],
      ["06. 불법 알바", "비자에서 허용하지 않는 일을 하면 벌금, 출국, 체류 문제로 이어질 수 있습니다.", "비자 확인 없이 바로 일하라고 하면 위험합니다.", "제 비자로 이 일을 할 수 있는지 먼저 확인하겠습니다."],
      ["07. 비자 위반", "체류기간, 근무 조건, 주소 신고 기한을 놓치면 문제가 생길 수 있습니다.", "기한이 지난 뒤 처리해도 괜찮다고 말하면 위험합니다.", "체류기간과 신고 기한을 공식 안내로 확인하고 싶습니다."],
      ["08. 개인정보 요구", "여권, 외국인등록증, 계좌, 인증번호 사진을 쉽게 보내지 않습니다.", "인증번호나 신분증 사진을 메신저로 요구하면 위험합니다.", "개인정보는 공식 절차에서만 제출하겠습니다."],
      ["09. 보이스피싱", "검찰, 경찰, 은행을 사칭하며 계좌 이체나 앱 설치를 요구하면 의심합니다.", "수사, 벌금, 계좌 보호를 이유로 송금을 요구하면 위험합니다.", "전화로 송금하지 않겠습니다. 공식 번호로 다시 확인하겠습니다."],
      ["10. 한국어 계약서 미확인", "번역본만 믿지 말고 실제 효력이 있는 한국어 계약서를 확인합니다.", "한국어 원문을 보여주지 않거나 설명을 피하면 위험합니다.", "한국어 계약서를 충분히 확인한 뒤 서명하겠습니다."]
    ]
  },
  en: {
    tab: "Warnings TOP10", title: "Korea Scam and Risk Warnings TOP10", summary: "Risk signals foreigners should check before sending money, signing contracts, or breaking visa rules.",
    risk: "Risk signal", action: "What to do now", phrase: "Phrase to refuse or check", avoid: "Avoid this", copy: "Copy Korean phrase", call: "Call help",
    actionItems: ["Keep names, accounts, addresses, dates, and amounts in photos or text messages.", "If you do not understand, do not send money or sign until someone checks it."],
    avoidItems: ["Pause when someone pressures you to decide quickly.", "Do not sign Korean text or send personal data before you understand the request."],
    cards: [
      ["01. Deposit scam", "If housing is too cheap or the deposit is large, check owner and registry first.", "A high deposit with weak owner verification is dangerous.", "I want to check the registry and landlord account before signing."],
      ["02. Advance payment pressure", "Stop when someone asks for money before contract, ID, or item verification.", "Fast payment before written proof is a risk signal.", "I will pay after checking the contract and identity first."],
      ["03. No registry check", "Skipping registry checks before housing contracts increases deposit risk.", "Avoiding or delaying registry review is dangerous.", "I want to check the registry on the contract day."],
      ["04. Used-goods scam", "Watch for delivery prepayment, fake safe-payment links, and unusually cheap items.", "External payment links or strong prepayment pressure are risky.", "I want to trade only in person or through a safe payment method."],
      ["05. Taxi overcharge", "Be careful if a taxi does not use the meter or suggests a strange route.", "No meter or cash-only pressure can be a risk signal.", "Please turn on the meter and go to this address."],
      ["06. Illegal part-time work", "Work not allowed by your visa can lead to fines, departure, or stay problems.", "Working immediately without visa check is risky.", "I will check first whether my visa allows this work."],
      ["07. Visa violation", "Missing stay period, work limits, or address-report deadlines can create problems.", "Being told a deadline does not matter is risky.", "I want to confirm my stay period and reporting deadline officially."],
      ["08. Personal data request", "Do not casually send passport, ARC, bank, or verification-code photos.", "Requests for codes or ID photos by messenger are risky.", "I will submit personal data only through an official process."],
      ["09. Voice phishing", "Be suspicious if someone claiming to be police, prosecutor, or bank asks for transfer or app install.", "Money transfer for investigation, fines, or account protection is a major risk.", "I will not send money by phone. I will call the official number again."],
      ["10. Korean contract unchecked", "Do not rely only on translation; check the Korean contract that has legal effect.", "Avoiding the Korean original or explanation is dangerous.", "I will sign after carefully checking the Korean contract."]
    ]
  },
  ja: {
    tab: "注意 TOP10", title: "韓国生活 詐欺・危険注意TOP10", summary: "送金、契約、ビザ違反を避けるために外国人が先に確認すべき危険信号です。",
    risk: "危険信号", action: "すぐすること", phrase: "断る・確認する文", avoid: "避ける行動", copy: "韓国語をコピー", call: "相談電話",
    actionItems: ["名前、口座、住所、日付、金額を写真やメッセージで残します。", "理解できない場合は送金や署名をせず、確認を依頼します。"],
    avoidItems: ["急いで決めろと言われたら一度止まります。", "韓国語を理解しないまま契約したり個人情報を送ったりしません。"],
    cards: [
      ["01. 保証金詐欺", "相場より安い家や保証金が大きい家は所有者と登記を先に確認します。", "保証金が高く、所有者確認を避ける場合は危険です。", "契約前に登記簿と貸主の口座名義を確認したいです。"],
      ["02. 先払い要求", "契約、身分、品物を確認する前に送金を求められたら止まります。", "書面確認前の急な送金要求は危険です。", "契約書と身分確認後に送金します。"],
      ["03. 登記簿未確認", "不動産契約前に所有者、抵当、差押えを確認しないと保証金リスクが高まります。", "登記確認を避ける場合は危険です。", "契約当日基準で登記簿を確認したいです。"],
      ["04. 中古取引詐欺", "配送先払い、偽安全決済リンク、安すぎる商品に注意します。", "外部リンク決済や先払いの強要は危険です。", "対面取引または安全な決済方法で取引したいです。"],
      ["05. タクシーぼったくり", "メーターなしの料金提示や遠回り提案に注意します。", "メーターを使わない、現金だけ要求する場合は危険です。", "メーターをつけて、この住所へ行ってください。"],
      ["06. 違法アルバイト", "ビザで許可されていない仕事は罰金、出国、滞在問題につながります。", "ビザ確認なしですぐ働けと言われるのは危険です。", "この仕事が私のビザで可能か先に確認します。"],
      ["07. ビザ違反", "滞在期間、勤務条件、住所申告期限を逃すと問題になります。", "期限後でも大丈夫と言われたら危険です。", "滞在期間と申告期限を公式案内で確認したいです。"],
      ["08. 個人情報要求", "旅券、登録証、口座、認証番号の写真を簡単に送らないでください。", "メッセンジャーで認証番号や身分証写真を求めるのは危険です。", "個人情報は公式手続きでのみ提出します。"],
      ["09. ボイスフィッシング", "警察、検察、銀行を名乗り送金やアプリ設置を求めたら疑います。", "捜査、罰金、口座保護を理由に送金要求するのは危険です。", "電話では送金しません。公式番号で再確認します。"],
      ["10. 韓国語契約書未確認", "翻訳だけに頼らず、効力のある韓国語契約書を確認します。", "韓国語原文を見せない、説明を避ける場合は危険です。", "韓国語契約書を十分確認してから署名します。"]
    ]
  },
  th: {
    tab: "คำเตือน TOP10", title: "คำเตือนเรื่องหลอกลวงและความเสี่ยงในเกาหลี TOP10", summary: "สัญญาณเสี่ยงที่ชาวต่างชาติควรเช็กก่อนโอนเงิน เซ็นสัญญา หรือทำผิดเงื่อนไขวีซ่า",
    risk: "สัญญาณเสี่ยง", action: "สิ่งที่ควรทำทันที", phrase: "ประโยคปฏิเสธหรือขอตรวจสอบ", avoid: "สิ่งที่ควรเลี่ยง", copy: "คัดลอกประโยคเกาหลี", call: "โทรปรึกษา",
    actionItems: ["เก็บชื่อ บัญชี ที่อยู่ วันที่ และจำนวนเงินเป็นรูปหรือข้อความ", "ถ้าไม่เข้าใจ อย่าเพิ่งโอนเงินหรือเซ็น ให้ขอตรวจสอบก่อน"],
    avoidItems: ["ถ้าถูกเร่งให้ตัดสินใจเร็ว ให้หยุดก่อน", "อย่าเซ็นภาษาเกาหลีหรือส่งข้อมูลส่วนตัวก่อนเข้าใจ"],
    cards: [
      ["01. หลอกเงินมัดจำ", "บ้านที่ถูกเกินไปหรือมัดจำสูงต้องเช็กเจ้าของและทะเบียนก่อน", "มัดจำสูงแต่ไม่ให้ตรวจเจ้าของคือสัญญาณเสี่ยง", "ขอตรวจทะเบียนและชื่อบัญชีเจ้าของก่อนเซ็น"],
      ["02. เร่งให้โอนก่อน", "หยุดทันทีถ้าถูกขอโอนเงินก่อนเช็กสัญญา ตัวตน หรือของ", "เร่งให้จ่ายก่อนมีหลักฐานเป็นความเสี่ยง", "จะโอนหลังตรวจสัญญาและตัวตนก่อน"],
      ["03. ไม่ตรวจทะเบียนบ้าน", "ไม่ตรวจทะเบียนก่อนสัญญาเช่าทำให้เงินมัดจำเสี่ยง", "ถ้าเลี่ยงการตรวจทะเบียนถือว่าเสี่ยง", "ต้องการตรวจทะเบียนในวันที่ทำสัญญา"],
      ["04. โกงของมือสอง", "ระวังโอนก่อน ส่งของปลอม ลิงก์จ่ายเงินปลอม และของถูกผิดปกติ", "ลิงก์จ่ายเงินภายนอกหรือบังคับโอนก่อนคือความเสี่ยง", "ต้องการซื้อขายต่อหน้าหรือใช้วิธีจ่ายเงินที่ปลอดภัย"],
      ["05. แท็กซี่คิดเงินเกิน", "ระวังแท็กซี่ไม่เปิดมิเตอร์หรือพาอ้อม", "ไม่เปิดมิเตอร์หรือบังคับเงินสดอาจเสี่ยง", "กรุณาเปิดมิเตอร์และไปที่อยู่นี้"],
      ["06. งานพาร์ตไทม์ผิดกฎหมาย", "งานที่วีซ่าไม่อนุญาตอาจทำให้ถูกปรับหรือมีปัญหาการพำนัก", "ให้เริ่มงานโดยไม่เช็กวีซ่าคือความเสี่ยง", "ขอเช็กก่อนว่าวีซ่าของฉันทำงานนี้ได้ไหม"],
      ["07. ผิดเงื่อนไขวีซ่า", "พลาดวันหมดอายุ เงื่อนไขงาน หรือแจ้งที่อยู่ อาจเกิดปัญหา", "บอกว่าเลยกำหนดก็ไม่เป็นไรคือความเสี่ยง", "ต้องการเช็กระยะพำนักและกำหนดแจ้งจากข้อมูลทางการ"],
      ["08. ขอข้อมูลส่วนตัว", "อย่าส่งรูปพาสปอร์ต บัตรต่างชาติ บัญชี หรือรหัสยืนยันง่าย ๆ", "ขอรหัสหรือรูปบัตรทางแชตคือความเสี่ยง", "จะส่งข้อมูลส่วนตัวผ่านขั้นตอนทางการเท่านั้น"],
      ["09. มิจฉาชีพทางโทรศัพท์", "สงสัยทันทีถ้าอ้างเป็นตำรวจ อัยการ หรือธนาคารแล้วให้โอนเงินหรือติดตั้งแอป", "ขอเงินเพื่อสืบสวน ค่าปรับ หรือปกป้องบัญชีคือความเสี่ยงสูง", "จะไม่โอนเงินทางโทรศัพท์ จะโทรกลับเบอร์ทางการ"],
      ["10. ไม่ตรวจสัญญาเกาหลี", "อย่าเชื่อแค่คำแปล ต้องตรวจสัญญาภาษาเกาหลีที่มีผลจริง", "ไม่ให้ดูต้นฉบับเกาหลีหรือเลี่ยงอธิบายคือความเสี่ยง", "จะเซ็นหลังตรวจสัญญาภาษาเกาหลีให้ดี"]
    ]
  },
  zh: {
    tab: "注意 TOP10", title: "韩国生活诈骗与风险注意 TOP10", summary: "外国人在汇款、签约或违反签证规则前应确认的风险信号。",
    risk: "风险信号", action: "马上要做", phrase: "拒绝或确认用语", avoid: "避免行为", copy: "复制韩语句子", call: "咨询电话",
    actionItems: ["把姓名、账户、地址、日期、金额用照片或文字留下。", "不理解时不要马上汇款或签字，先要求确认。"],
    avoidItems: ["被催促马上决定时先暂停。", "不要在不理解韩语内容时签约或发送个人信息。"],
    cards: [
      ["01. 保证金诈骗", "房子过便宜或保证金很高时，先确认房东和登记信息。", "保证金高但回避房东确认很危险。", "签约前我想确认登记簿和房东账户名义。"],
      ["02. 先付款压力", "在确认合同、身份或物品前要求汇款时先停止。", "书面确认前催促付款是风险信号。", "我会在确认合同和身份后付款。"],
      ["03. 未确认登记簿", "租房前不查所有人、抵押和查封会增加保证金风险。", "不让查看登记簿或拖延查看很危险。", "我想在签约当天确认登记簿。"],
      ["04. 二手交易诈骗", "注意先付款、假安全支付链接和价格异常低的物品。", "外部支付链接或强迫先付款有风险。", "我只想当面交易或使用安全支付方式。"],
      ["05. 出租车乱收费", "不打表或建议奇怪路线时要小心。", "不打表或只收现金可能是风险信号。", "请打开计价器，去这个地址。"],
      ["06. 非法兼职", "签证不允许的工作可能导致罚款、出境或滞留问题。", "不确认签证就让你马上工作很危险。", "我要先确认我的签证是否允许这份工作。"],
      ["07. 签证违规", "错过停留期限、工作条件或地址申报期限会产生问题。", "说过期后处理也没关系是风险信号。", "我想通过官方信息确认停留期限和申报期限。"],
      ["08. 要求个人信息", "不要轻易发送护照、外国人登录证、账户或验证码照片。", "通过聊天软件要求验证码或证件照片很危险。", "我只会通过官方程序提交个人信息。"],
      ["09. 电话诈骗", "自称警察、检察官或银行并要求转账或安装App时要怀疑。", "以调查、罚款、账户保护为由要求转账是重大风险。", "我不会通过电话转账，会拨打官方号码确认。"],
      ["10. 未确认韩文合同", "不要只相信翻译，要确认具有法律效力的韩文合同。", "不出示韩文原文或回避解释很危险。", "我会充分确认韩文合同后再签字。"]
    ]
  },
  vi: {
    tab: "Cảnh báo TOP10", title: "Cảnh báo lừa đảo và rủi ro ở Hàn Quốc TOP10", summary: "Tín hiệu rủi ro người nước ngoài nên kiểm tra trước khi chuyển tiền, ký hợp đồng hoặc vi phạm visa.",
    risk: "Tín hiệu rủi ro", action: "Việc cần làm ngay", phrase: "Câu từ chối hoặc kiểm tra", avoid: "Cần tránh", copy: "Sao chép câu tiếng Hàn", call: "Gọi tư vấn",
    actionItems: ["Lưu tên, tài khoản, địa chỉ, ngày và số tiền bằng ảnh hoặc tin nhắn.", "Nếu chưa hiểu, đừng chuyển tiền hoặc ký trước khi kiểm tra."],
    avoidItems: ["Nếu bị ép quyết định nhanh, hãy dừng lại.", "Không ký tiếng Hàn hoặc gửi dữ liệu cá nhân khi chưa hiểu yêu cầu."],
    cards: [
      ["01. Lừa đảo tiền cọc", "Nhà quá rẻ hoặc cọc lớn cần kiểm tra chủ nhà và đăng ký trước.", "Cọc cao nhưng né kiểm tra chủ sở hữu là nguy hiểm.", "Tôi muốn kiểm tra đăng ký và tài khoản chủ nhà trước khi ký."],
      ["02. Ép chuyển tiền trước", "Dừng lại khi bị yêu cầu trả tiền trước khi kiểm tra hợp đồng, danh tính hoặc món hàng.", "Trả tiền nhanh trước khi có bằng chứng viết là rủi ro.", "Tôi sẽ trả sau khi kiểm tra hợp đồng và danh tính."],
      ["03. Không kiểm tra đăng ký", "Không kiểm tra đăng ký nhà trước hợp đồng làm tăng rủi ro tiền cọc.", "Né hoặc trì hoãn kiểm tra đăng ký là nguy hiểm.", "Tôi muốn kiểm tra đăng ký vào ngày ký hợp đồng."],
      ["04. Lừa đảo đồ cũ", "Cẩn thận chuyển khoản trước, link thanh toán giả và hàng rẻ bất thường.", "Link ngoài hoặc ép trả trước là rủi ro.", "Tôi chỉ muốn giao dịch trực tiếp hoặc qua cách thanh toán an toàn."],
      ["05. Taxi tính quá tiền", "Cẩn thận nếu taxi không bật đồng hồ hoặc đi đường lạ.", "Không bật đồng hồ hoặc chỉ nhận tiền mặt có thể là rủi ro.", "Vui lòng bật đồng hồ và đi đến địa chỉ này."],
      ["06. Làm thêm bất hợp pháp", "Việc visa không cho phép có thể gây phạt, xuất cảnh hoặc vấn đề lưu trú.", "Bắt đầu làm ngay mà không kiểm tra visa là rủi ro.", "Tôi sẽ kiểm tra trước visa của tôi có cho phép công việc này không."],
      ["07. Vi phạm visa", "Bỏ lỡ thời hạn lưu trú, điều kiện làm việc hoặc khai báo địa chỉ có thể gây vấn đề.", "Nói rằng quá hạn vẫn không sao là rủi ro.", "Tôi muốn xác nhận thời hạn lưu trú và hạn khai báo bằng thông tin chính thức."],
      ["08. Yêu cầu thông tin cá nhân", "Đừng dễ dàng gửi ảnh hộ chiếu, thẻ người nước ngoài, tài khoản hoặc mã xác minh.", "Yêu cầu mã hoặc ảnh giấy tờ qua chat là rủi ro.", "Tôi sẽ chỉ nộp thông tin cá nhân qua quy trình chính thức."],
      ["09. Lừa đảo qua điện thoại", "Nghi ngờ nếu tự xưng cảnh sát, công tố hoặc ngân hàng rồi yêu cầu chuyển tiền hoặc cài app.", "Yêu cầu chuyển tiền vì điều tra, phạt hoặc bảo vệ tài khoản là rủi ro lớn.", "Tôi sẽ không chuyển tiền qua điện thoại. Tôi sẽ gọi lại số chính thức."],
      ["10. Chưa kiểm tra hợp đồng Hàn", "Đừng chỉ tin bản dịch; hãy kiểm tra hợp đồng tiếng Hàn có hiệu lực.", "Không cho xem bản Hàn hoặc né giải thích là nguy hiểm.", "Tôi sẽ ký sau khi kiểm tra kỹ hợp đồng tiếng Hàn."]
    ]
  },
  es: {
    tab: "Advertencias TOP10", title: "Estafas y riesgos en Corea TOP10", summary: "Señales de riesgo que extranjeros deben revisar antes de pagar, firmar o romper reglas de visa.",
    risk: "Señal de riesgo", action: "Qué hacer ahora", phrase: "Frase para rechazar o revisar", avoid: "Evitar esto", copy: "Copiar frase coreana", call: "Llamar ayuda",
    actionItems: ["Guarda nombres, cuentas, direcciones, fechas y montos en fotos o mensajes.", "Si no entiendes, no envíes dinero ni firmes hasta revisarlo."],
    avoidItems: ["Pausa cuando alguien te presiona para decidir rápido.", "No firmes coreano ni envíes datos personales antes de entender la solicitud."],
    cards: [
      ["01. Estafa de depósito", "Si la vivienda es muy barata o el depósito es grande, revisa dueño y registro primero.", "Depósito alto con poca verificación del dueño es peligroso.", "Quiero revisar el registro y la cuenta del dueño antes de firmar."],
      ["02. Presión de pago previo", "Detente si piden dinero antes de verificar contrato, identidad o producto.", "Pago rápido antes de prueba escrita es señal de riesgo.", "Pagaré después de revisar contrato e identidad."],
      ["03. Sin revisar registro", "No revisar el registro antes de alquilar aumenta el riesgo del depósito.", "Evitar o retrasar la revisión del registro es peligroso.", "Quiero revisar el registro el día del contrato."],
      ["04. Estafa de segunda mano", "Cuidado con prepago por envío, links falsos de pago seguro y precios demasiado bajos.", "Links externos o presión de prepago son riesgosos.", "Quiero comprar solo en persona o con pago seguro."],
      ["05. Taxi con sobrecargo", "Cuidado si el taxi no usa taxímetro o propone una ruta extraña.", "Sin taxímetro o solo efectivo puede ser señal de riesgo.", "Por favor encienda el taxímetro y vaya a esta dirección."],
      ["06. Trabajo ilegal", "Trabajo no permitido por tu visa puede causar multa, salida o problemas de estancia.", "Trabajar sin revisar visa es riesgoso.", "Primero revisaré si mi visa permite este trabajo."],
      ["07. Violación de visa", "Perder periodo de estancia, límites de trabajo o plazo de dirección puede causar problemas.", "Decir que la fecha límite no importa es riesgoso.", "Quiero confirmar oficialmente mi periodo y fecha límite."],
      ["08. Solicitud de datos personales", "No envíes fácilmente fotos de pasaporte, tarjeta extranjera, cuenta o código.", "Pedir códigos o ID por chat es riesgoso.", "Enviaré datos personales solo por proceso oficial."],
      ["09. Phishing telefónico", "Sospecha si supuesta policía, fiscalía o banco pide transferencia o instalar app.", "Transferir por investigación, multa o protección de cuenta es gran riesgo.", "No enviaré dinero por teléfono. Llamaré al número oficial."],
      ["10. Contrato coreano sin revisar", "No confíes solo en traducción; revisa el contrato coreano con efecto legal.", "Evitar mostrar o explicar el original coreano es peligroso.", "Firmaré después de revisar bien el contrato coreano."]
    ]
  }
};

WIIINFO_KOREAN_COPY.warnings = WIIINFO_WARNING_PACKS.ko.cards.map((card) => card[3]);

function applyWarningsSection(lang) {
  const sections = window.WIIINFO_INFO_SECTIONS[lang];
  const section = sections?.find((item) => item.id === "realty");
  const pack = WIIINFO_WARNING_PACKS[lang] || WIIINFO_WARNING_PACKS.en;
  if (!section) return;
  section.icon = "⚠️";
  section.tab = pack.tab;
  section.title = pack.title;
  section.summary = pack.summary;
  section.cards = pack.cards.map(([title, text, risk, phrase], index) => ({
    title,
    text,
    detail: {
      images: WIIINFO_VISUAL_SETS[WIIINFO_SECTION_IMAGE_ROTATION.realty[index]] || WIIINFO_VISUAL_SETS.realty,
      lead: text,
      actions: [
        { type: "copy", label: pack.copy, value: WIIINFO_KOREAN_COPY.warnings[index] || phrase },
        [0, 1, 3, 7, 8].includes(index) ? { type: "tel", label: `${pack.call} 112`, value: "112" } : null,
        [5, 6].includes(index) ? { type: "tel", label: `${pack.call} 1345`, value: "1345" } : null
      ].filter(Boolean),
      sections: [
        { title: pack.risk, items: [risk, text] },
        { title: pack.action, items: pack.actionItems },
        { title: pack.phrase, items: [WIIINFO_KOREAN_COPY.warnings[index] || phrase, lang === "ko" ? null : phrase].filter(Boolean) },
        { title: pack.avoid, items: pack.avoidItems }
      ]
    }
  }));
}

["ko", "en", "ja", "th", "zh", "vi", "es"].forEach(applyWarningsSection);

const WIIINFO_TRAVEL_DETAILS_KO = {
  "01. 경복궁·북촌": {
    images: WIIINFO_VISUAL_SETS.palace,
    lead: "한국 전통 건축과 한복 사진, 북촌 한옥길을 한 번에 연결하기 좋은 서울 대표 코스입니다.",
    address: "서울특별시 종로구 사직로 161",
    directions: "지하철 3호선 경복궁역 5번 출구 또는 안국역에서 북촌 방향 도보 이동",
    hours: "경복궁은 보통 화요일 휴무, 계절별 운영시간은 공식 사이트 확인",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gyeongbokgung+Palace",
    sections: [
      { title: "추천 동선", items: ["경복궁 입장", "근정전과 경회루 사진", "국립민속박물관 또는 국립고궁박물관", "북촌 한옥마을 산책", "삼청동 카페"] },
      { title: "외국인에게 좋은 포인트", items: ["한복 대여 후 사진을 찍기 좋습니다.", "궁궐 해설 프로그램을 이용하면 역사 이해가 쉽습니다.", "북촌은 실제 거주지라 조용히 이동해야 합니다."] },
      { title: "주의사항", items: ["경복궁 휴무일을 확인합니다.", "북촌 일부 골목은 방문 시간이 제한될 수 있습니다.", "여름에는 그늘이 적어 물을 준비하는 것이 좋습니다."] }
    ]
  },
  "02. 명동·N서울타워": {
    images: WIIINFO_VISUAL_SETS.tower,
    lead: "쇼핑, 길거리 음식, 서울 야경을 짧은 시간에 보여주기 좋은 첫 서울 코스입니다.",
    address: "서울특별시 용산구 남산공원길 105",
    directions: "명동역에서 남산 케이블카 또는 순환버스 이용",
    hours: "전망대와 케이블카 운영시간은 계절·요일별 확인",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=N+Seoul+Tower",
    sections: [
      { title: "추천 동선", items: ["명동 쇼핑 거리", "길거리 음식", "남산 케이블카", "N서울타워 전망대", "야경 감상"] },
      { title: "사진 포인트", items: ["케이블카 탑승 전 남산 풍경", "전망대 야경", "사랑의 자물쇠 구역"] },
      { title: "주의사항", items: ["주말 저녁은 대기 시간이 길 수 있습니다.", "겨울 야간은 바람이 강해 겉옷이 필요합니다.", "명동 환전소 이용 시 환율을 비교합니다."] }
    ]
  },
  "03. 홍대·연남동": {
    images: WIIINFO_VISUAL_SETS.hongdae,
    lead: "카페, 거리 공연, 편집숍, 젊은 서울 분위기를 느끼기 좋은 코스입니다.",
    address: "서울특별시 마포구 홍대입구역·연남동 일대",
    directions: "지하철 2호선·공항철도 홍대입구역 이용",
    hours: "상점별 상이, 카페와 술집은 오후·저녁 방문 추천",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hongdae+Yeonnam-dong+Seoul",
    sections: [
      { title: "추천 동선", items: ["홍대입구역", "거리 공연 구역", "연남동 경의선숲길", "카페·소품샵", "저녁 식사"] },
      { title: "외국인에게 좋은 포인트", items: ["한국 젊은 세대 문화를 느끼기 쉽습니다.", "사진 찍기 좋은 카페와 골목이 많습니다.", "공항철도 연결이 좋아 이동이 편합니다."] },
      { title: "주의사항", items: ["금·토요일 밤은 매우 붐빕니다.", "골목마다 차량 통행이 있어 보행에 주의합니다.", "클럽·술집 이용 시 신분증을 지참합니다."] }
    ]
  },
  "04. 한강공원": {
    images: WIIINFO_VISUAL_SETS.hangang,
    lead: "자전거, 피크닉, 치킨, 라면, 야경까지 한국 일상 문화를 편하게 보여주는 장소입니다.",
    address: "서울 여의도·반포·뚝섬 등 한강공원 일대",
    directions: "여의나루역, 반포한강공원, 뚝섬유원지역 등 목적지별 지하철 이용",
    hours: "공원은 상시 이용, 편의시설은 지점별 상이",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hangang+Park+Seoul",
    sections: [
      { title: "추천 동선", items: ["여의나루역 하차", "돗자리 대여", "편의점 라면 또는 치킨", "자전거 대여", "야경 감상"] },
      { title: "사진 포인트", items: ["해 질 무렵 강변", "반포대교 달빛무지개분수", "여의도 skyline"] },
      { title: "주의사항", items: ["돗자리·배달 가능 구역을 확인합니다.", "자전거 도로에서는 보행에 주의합니다.", "비 오는 날은 강변 바람이 강할 수 있습니다."] }
    ]
  },
  "05. 롯데월드·석촌호수": {
    images: WIIINFO_VISUAL_SETS.lotte,
    lead: "놀이공원, 쇼핑몰, 호수 산책, 전망대를 한 지역에서 묶을 수 있는 편한 코스입니다.",
    address: "서울특별시 송파구 올림픽로 240 일대",
    directions: "지하철 2호선·8호선 잠실역 이용",
    hours: "롯데월드·전망대는 시설별 운영시간 확인",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lotte+World+Seokchon+Lake",
    sections: [
      { title: "추천 동선", items: ["잠실역", "롯데월드 또는 롯데월드몰", "석촌호수 산책", "카페", "야간 사진"] },
      { title: "외국인에게 좋은 포인트", items: ["비 오는 날에도 실내 동선이 좋습니다.", "쇼핑과 식사를 한 번에 해결하기 쉽습니다.", "석촌호수는 계절별 풍경이 좋습니다."] },
      { title: "주의사항", items: ["주말 놀이기구 대기 시간이 깁니다.", "전망대 티켓은 사전 예약이 유리합니다.", "봄 벚꽃 시즌은 호수 주변이 매우 붐빕니다."] }
    ]
  },
  "06. 남이섬": {
    images: WIIINFO_VISUAL_SETS.nami,
    lead: "나무길, 드라마 이미지, 계절 풍경이 강해 가족·커플 여행객에게 추천하기 좋은 교외 명소입니다.",
    address: "강원특별자치도 춘천시 남산면 남이섬길 1",
    directions: "가평역 또는 가평터미널에서 남이섬 선착장 이동 후 배 탑승",
    hours: "선박 운항시간과 입장권은 공식 사이트 확인",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Nami+Island",
    sections: [
      { title: "추천 동선", items: ["가평 도착", "선착장", "남이섬 입장", "메타세쿼이아길", "자전거 또는 산책"] },
      { title: "사진 포인트", items: ["나무길 중앙 구도", "강변 산책로", "겨울연가 관련 포토존"] },
      { title: "주의사항", items: ["배 탑승 대기 시간을 고려합니다.", "겨울에는 바람이 차갑습니다.", "당일치기는 아침 출발이 좋습니다."] }
    ]
  },
  "07. 부산 해운대·광안리": {
    images: WIIINFO_VISUAL_SETS.busan,
    lead: "바다, 카페, 야경, 해산물을 한 번에 보여주는 부산 대표 코스입니다.",
    address: "부산광역시 해운대구 해운대해변로 / 수영구 광안해변로 219 일대",
    directions: "해운대역 또는 광안역에서 도보 이동",
    hours: "해변은 상시 이용, 시설과 축제 일정은 계절별 확인",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Haeundae+Gwangalli+Beach+Busan",
    sections: [
      { title: "추천 동선", items: ["해운대 해변", "해리단길 또는 블루라인파크", "저녁 식사", "광안리 야경", "광안대교 사진"] },
      { title: "외국인에게 좋은 포인트", items: ["서울과 다른 해안 도시 분위기를 느낄 수 있습니다.", "광안리 야경은 사진 만족도가 높습니다.", "카페와 음식 선택지가 많습니다."] },
      { title: "주의사항", items: ["여름 성수기 숙소 가격이 오릅니다.", "해변 축제 기간은 교통이 복잡합니다.", "수영 가능 기간과 안전 구역을 확인합니다."] }
    ]
  },
  "08. 제주 성산·올레길": {
    images: WIIINFO_VISUAL_SETS.jeju,
    lead: "화산 지형, 해안 산책, 일출 풍경을 좋아하는 여행객에게 좋은 자연 코스입니다.",
    address: "제주특별자치도 서귀포시 성산읍 일출로 284-12",
    directions: "제주공항에서 동부권 버스, 렌터카, 택시 이동",
    hours: "성산일출봉 탐방 시간은 계절별 확인",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Seongsan+Ilchulbong",
    sections: [
      { title: "추천 동선", items: ["성산일출봉", "광치기해변", "해안 카페", "올레길 일부 구간", "우도 선택"] },
      { title: "사진 포인트", items: ["정상 전망", "광치기해변에서 보는 성산", "해안 산책길"] },
      { title: "주의사항", items: ["바람이 강한 날이 많습니다.", "비가 오면 탐방로가 미끄럽습니다.", "렌터카 이용 시 주차 시간을 고려합니다."] }
    ]
  },
  "09. 경주 불국사·대릉원": {
    images: WIIINFO_VISUAL_SETS.gyeongju,
    lead: "한국 역사와 조용한 옛 수도 분위기를 느끼기 좋은 문화 여행 코스입니다.",
    address: "경상북도 경주시 불국로 385 / 계림로 9 일대",
    directions: "KTX 신경주역에서 버스 또는 택시로 주요 관광지 이동",
    hours: "문화재·관광지별 운영시간 확인",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gyeongju+Bulguksa+Daereungwon",
    sections: [
      { title: "추천 동선", items: ["불국사", "대릉원", "첨성대", "황리단길", "동궁과 월지 야경"] },
      { title: "외국인에게 좋은 포인트", items: ["서울과 다른 고도 분위기가 강합니다.", "도보와 택시를 섞으면 하루 코스로 좋습니다.", "전통과 카페 거리를 함께 경험할 수 있습니다."] },
      { title: "주의사항", items: ["관광지 간 거리가 있어 동선을 미리 짭니다.", "여름 낮에는 매우 덥습니다.", "문화재 구역에서는 출입 제한선을 지킵니다."] }
    ]
  },
  "10. 전주 한옥마을": {
    images: WIIINFO_VISUAL_SETS.jeonju,
    lead: "한옥, 한복, 전통 음식, 골목 사진을 하루 코스로 즐기기 좋은 대표 여행지입니다.",
    address: "전북특별자치도 전주시 완산구 기린대로 99 일대",
    directions: "전주역 또는 전주고속버스터미널에서 버스·택시 이동",
    hours: "마을은 상시 이용, 상점은 점포별 상이",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Jeonju+Hanok+Village",
    sections: [
      { title: "추천 동선", items: ["한옥마을 입구", "한복 대여", "경기전", "전동성당", "비빔밥·길거리 음식"] },
      { title: "사진 포인트", items: ["한복과 한옥 골목", "전동성당 앞", "오목대 전망"] },
      { title: "주의사항", items: ["주말에는 골목이 붐빕니다.", "한복 대여 반납 시간을 확인합니다.", "먹거리 가격과 대기 줄을 비교합니다."] }
    ]
  }
};

const WIIINFO_TRAVEL_DETAILS_EN = {
  "01. Gyeongbokgung and Bukchon": {
    ...WIIINFO_TRAVEL_DETAILS_KO["01. 경복궁·북촌"],
    lead: "A classic Seoul route for palace architecture, hanbok photos, and hanok alleys.",
    sections: [
      { title: "Suggested route", items: ["Enter Gyeongbokgung", "Take photos around Geunjeongjeon and Gyeonghoeru", "Visit a nearby museum", "Walk to Bukchon Hanok Village", "Finish at a Samcheong-dong cafe"] },
      { title: "Why foreigners like it", items: ["It is easy to understand as a first Korea experience.", "Hanbok photos work well here.", "The palace and hanok village connect naturally on foot."] },
      { title: "Cautions", items: ["Check the palace closing day.", "Bukchon is a real residential area, so keep noise low.", "Bring water in summer because shade is limited."] }
    ]
  },
  "02. Myeongdong and N Seoul Tower": {
    ...WIIINFO_TRAVEL_DETAILS_KO["02. 명동·N서울타워"],
    lead: "A compact Seoul route for shopping, street food, and night views.",
    sections: [
      { title: "Suggested route", items: ["Myeongdong shopping street", "Street food", "Namsan cable car or bus", "N Seoul Tower observatory", "Night view"] },
      { title: "Photo points", items: ["Cable car route", "City view from the tower", "Locks area"] },
      { title: "Cautions", items: ["Weekend evenings can have long waits.", "Bring a jacket on winter nights.", "Compare exchange rates in Myeongdong."] }
    ]
  },
  "03. Hongdae and Yeonnam": {
    ...WIIINFO_TRAVEL_DETAILS_KO["03. 홍대·연남동"],
    lead: "A lively route for cafes, street performances, select shops, and Seoul's young city mood.",
    sections: [
      { title: "Suggested route", items: ["Hongik Univ. Station", "Street performance area", "Gyeongui Line Forest Park in Yeonnam", "Cafes and small shops", "Dinner or dessert"] },
      { title: "Why foreigners like it", items: ["It shows a casual young side of Seoul.", "There are many photo-friendly cafes and alleys.", "The Airport Railroad connection makes it easy to reach."] },
      { title: "Cautions", items: ["Friday and Saturday nights are very crowded.", "Watch for cars in narrow alleys.", "Bring ID if you plan to enter clubs or bars."] }
    ]
  },
  "04. Hangang Parks": {
    ...WIIINFO_TRAVEL_DETAILS_KO["04. 한강공원"],
    lead: "A relaxed place to experience bikes, picnic food, instant ramen, and Seoul night views.",
    sections: [
      { title: "Suggested route", items: ["Get off at Yeouinaru or another riverside station", "Rent a mat", "Try convenience-store ramen or chicken", "Rent a bike", "Stay for the night view"] },
      { title: "Photo points", items: ["Riverside at sunset", "Banpo Bridge fountain area", "Yeouido skyline"] },
      { title: "Cautions", items: ["Check where mats and food delivery are allowed.", "Be careful around bike lanes.", "The riverside can be windy on rainy days."] }
    ]
  },
  "05. Lotte World and Seokchon Lake": {
    ...WIIINFO_TRAVEL_DETAILS_KO["05. 롯데월드·석촌호수"],
    lead: "A convenient route that combines a theme park, shopping mall, lake walk, and observatory.",
    sections: [
      { title: "Suggested route", items: ["Jamsil Station", "Lotte World or Lotte World Mall", "Seokchon Lake walk", "Cafe break", "Night photos"] },
      { title: "Why foreigners like it", items: ["Indoor routes work well on rainy days.", "Shopping and food are easy in one area.", "Seokchon Lake has strong seasonal scenery."] },
      { title: "Cautions", items: ["Ride queues are long on weekends.", "Reserve observatory tickets if possible.", "The cherry-blossom season around the lake is extremely crowded."] }
    ]
  },
  "06. Nami Island": {
    ...WIIINFO_TRAVEL_DETAILS_KO["06. 남이섬"],
    lead: "A popular day-trip spot for tree roads, seasonal views, and drama-style photo memories.",
    sections: [
      { title: "Suggested route", items: ["Arrive near Gapyeong", "Move to the ferry dock", "Enter Nami Island", "Walk the metasequoia road", "Bike or stroll around the island"] },
      { title: "Photo points", items: ["Tree-lined central roads", "Riverside paths", "Drama-themed photo zones"] },
      { title: "Cautions", items: ["Allow time for ferry queues.", "Winter winds can be cold.", "Start early if you plan a same-day trip from Seoul."] }
    ]
  },
  "07. Busan Haeundae and Gwangalli": {
    ...WIIINFO_TRAVEL_DETAILS_KO["07. 부산 해운대·광안리"],
    lead: "Busan's classic route for beaches, cafes, seafood, and bridge night views.",
    sections: [
      { title: "Suggested route", items: ["Haeundae Beach", "Haeundae cafe street or Blue Line Park", "Dinner", "Gwangalli night view", "Gwangandaegyo Bridge photos"] },
      { title: "Why foreigners like it", items: ["It feels very different from Seoul.", "Gwangalli night views are easy to photograph.", "There are many cafe and food choices."] },
      { title: "Cautions", items: ["Hotels get expensive in summer high season.", "Traffic gets heavy during beach events.", "Check swimming season and safe swimming zones."] }
    ]
  },
  "08. Jeju Seongsan and Olle Trails": {
    ...WIIINFO_TRAVEL_DETAILS_KO["08. 제주 성산·올레길"],
    lead: "A nature-focused Jeju route for volcanic scenery, coastal walks, and sunrise views.",
    sections: [
      { title: "Suggested route", items: ["Seongsan Ilchulbong", "Gwangchigi Beach", "Coastal cafe", "Part of an Olle trail", "Optional Udo Island trip"] },
      { title: "Photo points", items: ["View from the peak", "Seongsan seen from Gwangchigi Beach", "Coastal walking trails"] },
      { title: "Cautions", items: ["Jeju can be very windy.", "Trails may be slippery after rain.", "If renting a car, allow time for parking."] }
    ]
  },
  "09. Gyeongju Bulguksa and Daereungwon": {
    ...WIIINFO_TRAVEL_DETAILS_KO["09. 경주 불국사·대릉원"],
    lead: "A calm historic-city route for Korean heritage and old-capital atmosphere.",
    sections: [
      { title: "Suggested route", items: ["Bulguksa Temple", "Daereungwon Tomb Complex", "Cheomseongdae", "Hwangnidan-gil", "Donggung and Wolji night view"] },
      { title: "Why foreigners like it", items: ["It has a very different mood from Seoul.", "A mix of walking and taxis works well for a day route.", "You can combine heritage sites with cafes and local food."] },
      { title: "Cautions", items: ["Sites are spread out, so plan the route first.", "Summer afternoons can be very hot.", "Respect restricted lines around heritage sites."] }
    ]
  },
  "10. Jeonju Hanok Village": {
    ...WIIINFO_TRAVEL_DETAILS_KO["10. 전주 한옥마을"],
    lead: "A strong day-trip route for hanok streets, hanbok photos, traditional food, and old-town scenery.",
    sections: [
      { title: "Suggested route", items: ["Hanok Village entrance", "Hanbok rental", "Gyeonggijeon Shrine", "Jeondong Cathedral", "Bibimbap and street snacks"] },
      { title: "Photo points", items: ["Hanbok with hanok streets", "In front of Jeondong Cathedral", "View from Omokdae"] },
      { title: "Cautions", items: ["Weekends are crowded.", "Check hanbok rental return time.", "Compare food prices and waiting lines."] }
    ]
  }
};

function localizeTravelDetail(base, card, labels) {
  return {
    images: base.images,
    lead: card.text,
    address: labels.addresses?.[card.index] || base.address,
    directions: labels.directions?.[card.index] || labels.defaultDirections || base.directions,
    hours: labels.hours?.[card.index] || labels.defaultHours || base.hours,
    mapUrl: base.mapUrl,
    sections: [
      { title: labels.routeTitle, items: labels.routes?.[card.index] || [card.text] },
      { title: labels.goodTitle, items: labels.good?.[card.index] || [labels.goodDefault] },
      { title: labels.cautionTitle, items: labels.cautions?.[card.index] || [labels.cautionDefault] }
    ]
  };
}

const WIIINFO_DETAIL_LABELS = {
  ko: {
    routeTitle: "추천 동선", goodTitle: "외국인에게 좋은 포인트", cautionTitle: "주의사항",
    goodDefault: "처음 방문하는 사람도 이해하기 쉬운 대표 코스입니다.", cautionDefault: "운영시간, 교통, 혼잡도를 미리 확인합니다.",
    defaultHours: "운영시간은 장소별 공식 안내를 확인하세요."
  },
  en: {
    routeTitle: "Suggested route", goodTitle: "Why foreigners like it", cautionTitle: "Cautions",
    goodDefault: "This is an easy first-visit route for foreigners.", cautionDefault: "Check opening hours, transport, and crowd level before visiting.",
    defaultDirections: "Use subway, bus, or taxi depending on the destination.",
    defaultHours: "Check official opening hours for each place."
  },
  ja: {
    routeTitle: "おすすめ動線", goodTitle: "外国人におすすめの理由", cautionTitle: "注意事項",
    goodDefault: "初めて訪れる人にも分かりやすい代表コースです。", cautionDefault: "営業時間、交通、混雑状況を事前に確認します。",
    defaultDirections: "地下鉄、バス、タクシーを目的地に合わせて利用します。", defaultHours: "営業時間は各施設の公式案内を確認してください。"
  },
  th: {
    routeTitle: "เส้นทางแนะนำ", goodTitle: "ทำไมชาวต่างชาติชอบ", cautionTitle: "ข้อควรระวัง",
    goodDefault: "เป็นเส้นทางที่เข้าใจง่ายสำหรับการเที่ยวครั้งแรก", cautionDefault: "เช็กเวลาเปิด การเดินทาง และความหนาแน่นก่อนเดินทาง",
    defaultDirections: "ใช้รถไฟใต้ดิน รถบัส หรือแท็กซี่ตามจุดหมาย", defaultHours: "ตรวจเวลาเปิดจากประกาศทางการของแต่ละสถานที่"
  },
  zh: {
    routeTitle: "推荐路线", goodTitle: "适合外国人的理由", cautionTitle: "注意事项",
    goodDefault: "这是第一次来访也容易理解的代表路线。", cautionDefault: "出发前确认营业时间、交通和拥挤程度。",
    defaultDirections: "根据目的地使用地铁、公交或出租车。", defaultHours: "请查看各景点官方营业时间。"
  },
  vi: {
    routeTitle: "Lộ trình gợi ý", goodTitle: "Vì sao người nước ngoài thích", cautionTitle: "Lưu ý",
    goodDefault: "Đây là tuyến dễ hiểu cho người lần đầu đến.", cautionDefault: "Kiểm tra giờ mở cửa, giao thông và mức đông trước khi đi.",
    defaultDirections: "Dùng tàu điện, xe buýt hoặc taxi tùy điểm đến.", defaultHours: "Hãy kiểm tra giờ mở cửa chính thức của từng nơi."
  },
  es: {
    routeTitle: "Ruta sugerida", goodTitle: "Por qué gusta a extranjeros", cautionTitle: "Cuidados",
    goodDefault: "Es una ruta fácil de entender para una primera visita.", cautionDefault: "Revisa horario, transporte y nivel de gente antes de ir.",
    defaultDirections: "Usa metro, bus o taxi según el destino.", defaultHours: "Consulta el horario oficial de cada lugar."
  }
};

const WIIINFO_ADDRESS_ROMAN = [
  "161 Sajik-ro, Jongno-gu, Seoul",
  "105 Namsangongwon-gil, Yongsan-gu, Seoul",
  "Hongik Univ. Station and Yeonnam-dong, Mapo-gu, Seoul",
  "Hangang Parks, Yeouido, Banpo, Ttukseom and other Seoul riverside areas",
  "240 Olympic-ro, Songpa-gu, Seoul",
  "1 Namiseom-gil, Namsan-myeon, Chuncheon-si, Gangwon-do",
  "Haeundae Beach-ro, Haeundae-gu / Gwangalli Beach-ro, Suyeong-gu, Busan",
  "284-12 Ilchul-ro, Seongsan-eup, Seogwipo-si, Jeju",
  "385 Bulguk-ro and Gyerim-ro area, Gyeongju-si, Gyeongsangbuk-do",
  "99 Girin-daero area, Wansan-gu, Jeonju-si, Jeonbuk"
];

function enrichWiiInfoDetails(sections, lang) {
  const isKo = lang === "ko";
  const isEn = lang === "en";
  const travelDetails = isKo ? WIIINFO_TRAVEL_DETAILS_KO : WIIINFO_TRAVEL_DETAILS_EN;
  const labels = WIIINFO_DETAIL_LABELS[lang] || WIIINFO_DETAIL_LABELS.en;
  if (lang !== "ko") labels.addresses = WIIINFO_ADDRESS_ROMAN;
  const fallbackImages = {
    life: WIIINFO_VISUAL_SETS.civic,
    safety: WIIINFO_VISUAL_SETS.civic,
    housing: WIIINFO_VISUAL_SETS.housing,
    realty: WIIINFO_VISUAL_SETS.realty
  };
  sections.forEach((section) => {
    section.cards.forEach((card, index) => {
      card.index = index;
      if (card.detail) return;
      if (section.id === "travel") {
        const koBase = WIIINFO_TRAVEL_DETAILS_KO[WIIINFO_KOREA_INFO_KO[1].cards[index]?.title];
        if (isKo) {
          card.detail = koBase || {
            images: WIIINFO_VISUAL_SETS.palace,
            lead: card.text,
            sections: [{ title: labels.routeTitle, items: [card.text] }]
          };
          return;
        }
        if (isEn && travelDetails[card.title]) {
          card.detail = travelDetails[card.title];
          card.detail.address = WIIINFO_ADDRESS_ROMAN[index] || card.detail.address;
          card.detail.directions = WIIINFO_DETAIL_LABELS.en.defaultDirections || "Use subway, bus, or taxi depending on the destination.";
          card.detail.hours = WIIINFO_DETAIL_LABELS.en.defaultHours;
          return;
        }
        card.detail = koBase ? localizeTravelDetail(koBase, card, labels) : {
          images: WIIINFO_VISUAL_SETS.palace,
          lead: card.text,
          sections: [{ title: labels.routeTitle, items: [card.text] }]
        };
        return;
      }
      card.detail = {
        images: WIIINFO_VISUAL_SETS[WIIINFO_SECTION_IMAGE_ROTATION[section.id]?.[index]] || fallbackImages[section.id] || WIIINFO_VISUAL_SETS.civic,
        lead: card.text,
        sections: [
          { title: isKo ? "왜 중요한가" : lang === "ja" ? "なぜ重要か" : lang === "th" ? "ทำไมสำคัญ" : lang === "zh" ? "为什么重要" : lang === "vi" ? "Vì sao quan trọng" : lang === "es" ? "Por qué importa" : "Why it matters", items: [
            card.text,
            isKo ? "한국에서는 서류, 주소, 이름, 날짜가 정확해야 다음 절차가 막히지 않습니다." :
              lang === "ja" ? "韓国では書類、住所、名前、日付が正確でないと次の手続きで問題になることがあります。" :
              lang === "th" ? "ในเกาหลี เอกสาร ที่อยู่ ชื่อ และวันที่ต้องถูกต้องเพื่อไม่ให้ขั้นตอนต่อไปติดขัด" :
              lang === "zh" ? "在韩国，文件、地址、姓名和日期必须准确，否则后续手续可能受影响。" :
              lang === "vi" ? "Ở Hàn, giấy tờ, địa chỉ, tên và ngày tháng cần chính xác để tránh vướng thủ tục." :
              lang === "es" ? "En Corea, documentos, dirección, nombres y fechas deben ser exactos para evitar problemas." :
              "In Korea, documents, address, names, and dates must be accurate to avoid problems."
          ] },
          { title: isKo ? "준비할 것" : lang === "ja" ? "準備するもの" : lang === "th" ? "สิ่งที่ต้องเตรียม" : lang === "zh" ? "需要准备" : lang === "vi" ? "Cần chuẩn bị" : lang === "es" ? "Preparar" : "Prepare", items: [
            isKo ? "여권, 외국인등록증, 한국 전화번호, 계약서나 안내문 사진을 준비합니다." :
              lang === "ja" ? "パスポート、外国人登録証、韓国の電話番号、契約書や案内文の写真を準備します。" :
              lang === "th" ? "เตรียมพาสปอร์ต บัตรต่างชาติ เบอร์เกาหลี และรูปสัญญาหรือประกาศ" :
              lang === "zh" ? "准备护照、外国人登录证、韩国电话号码以及合同或通知照片。" :
              lang === "vi" ? "Chuẩn bị hộ chiếu, thẻ người nước ngoài, số điện thoại Hàn và ảnh hợp đồng hoặc thông báo." :
              lang === "es" ? "Prepara pasaporte, tarjeta extranjera, número coreano y fotos de contrato o aviso." :
              "Prepare passport, alien registration card, Korean phone number, and photos of contracts or notices.",
            isKo ? "금액이 있는 경우 계좌 명의와 송금 기록을 남깁니다." :
              lang === "ja" ? "お金が関係する場合は口座名義と送金記録を残します。" :
              lang === "th" ? "ถ้ามีเงินเกี่ยวข้อง ให้เก็บชื่อบัญชีและหลักฐานโอน" :
              lang === "zh" ? "涉及金额时，保存账户名义和转账记录。" :
              lang === "vi" ? "Nếu có tiền, giữ tên tài khoản và lịch sử chuyển khoản." :
              lang === "es" ? "Si hay dinero, guarda nombre de cuenta y comprobantes de transferencia." :
              "If money is involved, keep bank account names and transfer records.",
            isKo ? "이해가 안 되는 한국어 문장은 바로 서명하지 말고 확인합니다." :
              lang === "ja" ? "理解できない韓国語にはすぐ署名せず、必ず確認します。" :
              lang === "th" ? "ข้อความภาษาเกาหลีที่ไม่เข้าใจ อย่าเพิ่งเซ็น ให้ตรวจสอบก่อน" :
              lang === "zh" ? "不理解的韩语内容不要马上签字，先确认。" :
              lang === "vi" ? "Không ký ngay nội dung tiếng Hàn chưa hiểu; hãy kiểm tra trước." :
              lang === "es" ? "No firmes texto coreano que no entiendas sin revisarlo." :
              "Do not sign Korean text you do not understand before checking it."
          ] },
          { title: isKo ? "실수 방지" : lang === "ja" ? "ミス防止" : lang === "th" ? "กันความผิดพลาด" : lang === "zh" ? "避免失误" : lang === "vi" ? "Tránh sai sót" : lang === "es" ? "Evitar errores" : "Avoid mistakes", items: [
            isKo ? "말로만 약속하지 말고 문자, 사진, 계약서에 남깁니다." :
              lang === "ja" ? "口約束だけにせず、メッセージ、写真、契約書に残します。" :
              lang === "th" ? "อย่าเชื่อคำพูดอย่างเดียว ให้เก็บข้อความ รูป หรือเอกสาร" :
              lang === "zh" ? "不要只靠口头约定，要留下文字、照片或合同。" :
              lang === "vi" ? "Đừng chỉ tin lời nói; hãy lưu tin nhắn, ảnh hoặc điều khoản viết." :
              lang === "es" ? "No confíes solo en promesas verbales; guarda texto, fotos o contrato." :
              "Do not rely only on verbal promises; keep text, photos, or written terms.",
            isKo ? "신청·계약·송금 전 이름, 주소, 날짜, 금액을 다시 봅니다." :
              lang === "ja" ? "申請、契約、送金前に名前、住所、日付、金額をもう一度確認します。" :
              lang === "th" ? "ก่อนสมัคร ทำสัญญา หรือโอนเงิน ให้เช็กชื่อ ที่อยู่ วันที่ และจำนวนเงินอีกครั้ง" :
              lang === "zh" ? "申请、签约、转账前再次确认姓名、地址、日期和金额。" :
              lang === "vi" ? "Trước khi đăng ký, ký hoặc chuyển tiền, kiểm tra lại tên, địa chỉ, ngày và số tiền." :
              lang === "es" ? "Antes de solicitar, firmar o pagar, revisa nombre, dirección, fecha y monto." :
              "Before applying, signing, or paying, check name, address, date, and amount again.",
            isKo ? "문제가 생기면 1345, 구청, 공인중개사, 학교·회사 담당자에게 빨리 문의합니다." :
              lang === "ja" ? "問題があれば1345、区役所、仲介士、学校や会社の担当者に早めに相談します。" :
              lang === "th" ? "หากมีปัญหา ให้ติดต่อ 1345 เขต นายหน้า โรงเรียน หรือบริษัทอย่างรวดเร็ว" :
              lang === "zh" ? "有问题时，尽快联系1345、区厅、中介、学校或公司负责人。" :
              lang === "vi" ? "Nếu có vấn đề, liên hệ 1345, văn phòng quận, môi giới, trường hoặc công ty sớm." :
              lang === "es" ? "Si hay problema, contacta pronto a 1345, oficina local, agente, escuela o empresa." :
              "If a problem appears, contact 1345, local office, broker, school, or employer quickly."
          ] }
        ]
      };
    });
  });
}

enrichWiiInfoDetails(window.WIIINFO_INFO_SECTIONS.ko, "ko");
enrichWiiInfoDetails(window.WIIINFO_INFO_SECTIONS.en, "en");
["th", "ja", "zh", "vi", "es"].forEach((lang) => enrichWiiInfoDetails(window.WIIINFO_INFO_SECTIONS[lang], lang));

window.WIITHAI_EXTRA_PHRASES = [
  { en: "Hello.", ja: "こんにちは。", zh: "你好。", vi: "Xin chào.", es: "Hola.", ro: { en: "hello", ja: "konnichiwa", zh: "ni hao", vi: "sin chao", es: "ola" } },
  { en: "Hello. Nice to meet you.", ja: "こんにちは。お会いできてうれしいです。", zh: "你好。很高兴认识你。", vi: "Xin chào. Rất vui được gặp bạn.", es: "Hola. Encantado de conocerte.", ro: { en: "hello, nice to meet you", ja: "konnichiwa, o-ai dekite ureshii desu", zh: "ni hao, hen gao xing ren shi ni", vi: "sin chao, rat vui duoc gap ban", es: "ola, en-kan-ta-do de ko-no-ser-te" } },
  { en: "Thank you.", ja: "ありがとうございます。", zh: "谢谢。", vi: "Cảm ơn.", es: "Gracias.", ro: { en: "thank you", ja: "arigatou gozaimasu", zh: "xie xie", vi: "kam un", es: "gra-syas" } },
  { en: "Thank you very much.", ja: "本当にありがとうございます。", zh: "非常感谢。", vi: "Cảm ơn rất nhiều.", es: "Muchas gracias.", ro: { en: "thank you very much", ja: "hontou ni arigatou gozaimasu", zh: "fei chang gan xie", vi: "kam un rat nhieu", es: "mu-chas gra-syas" } },
  { en: "I'm sorry.", ja: "すみません。", zh: "对不起。", vi: "Xin lỗi.", es: "Lo siento.", ro: { en: "sorry", ja: "sumimasen", zh: "dui bu qi", vi: "sin loi", es: "lo syen-to" } },
  { en: "It's okay.", ja: "大丈夫です。", zh: "没关系。", vi: "Không sao.", es: "Está bien.", ro: { en: "it's okay", ja: "daijoubu desu", zh: "mei guan xi", vi: "khong sao", es: "es-ta byen" } },
  { en: "How are you?", ja: "お元気ですか。", zh: "你好吗？", vi: "Bạn khỏe không?", es: "¿Cómo estás?", ro: { en: "how are you", ja: "o-genki desu ka", zh: "ni hao ma", vi: "ban khoe khong", es: "ko-mo es-tas" } },
  { en: "I'm doing well.", ja: "元気です。", zh: "我很好。", vi: "Tôi khỏe.", es: "Estoy bien.", ro: { en: "I'm doing well", ja: "genki desu", zh: "wo hen hao", vi: "toi khoe", es: "es-toy byen" } },
  { en: "See you again.", ja: "また会いましょう。", zh: "下次见。", vi: "Hẹn gặp lại.", es: "Hasta luego.", ro: { en: "see you again", ja: "mata aimashou", zh: "xia ci jian", vi: "hen gap lai", es: "as-ta lwe-go" } },
  { en: "Goodbye.", ja: "さようなら。", zh: "再见。", vi: "Tạm biệt.", es: "Adiós.", ro: { en: "goodbye", ja: "sayounara", zh: "zai jian", vi: "tam biet", es: "a-dyos" } },
  { en: "I am Korean.", ja: "私は韓国人です。", zh: "我是韩国人。", vi: "Tôi là người Hàn Quốc.", es: "Soy coreano.", ro: { en: "I am Korean", ja: "watashi wa kankokujin desu", zh: "wo shi han guo ren", vi: "toi la nguoi han quoc", es: "soy ko-re-a-no" } },
  { en: "I am from Korea.", ja: "韓国から来ました。", zh: "我来自韩国。", vi: "Tôi đến từ Hàn Quốc.", es: "Soy de Corea.", ro: { en: "I am from Korea", ja: "kankoku kara kimashita", zh: "wo lai zi han guo", vi: "toi den tu han quoc", es: "soy de ko-re-a" } },
  { en: "My name is ___.", ja: "私の名前は___です。", zh: "我的名字是___。", vi: "Tên tôi là ___.", es: "Me llamo ___.", ro: { en: "my name is", ja: "watashi no namae wa ___ desu", zh: "wo de ming zi shi ___", vi: "ten toi la ___", es: "me ya-mo ___" } },
  { en: "What is your name?", ja: "お名前は何ですか。", zh: "你叫什么名字？", vi: "Bạn tên là gì?", es: "¿Cómo te llamas?", ro: { en: "what is your name", ja: "o-namae wa nan desu ka", zh: "ni jiao shen me ming zi", vi: "ban ten la gi", es: "ko-mo te ya-mas" } },
  { en: "I am learning Thai.", ja: "私はタイ語を勉強しています。", zh: "我正在学习泰语。", vi: "Tôi đang học tiếng Thái.", es: "Estoy aprendiendo tailandés.", ro: { en: "I am learning Thai", ja: "watashi wa taigo o benkyou shiteimasu", zh: "wo zai xue xi tai yu", vi: "toi dang hoc tieng thai", es: "es-toy a-pren-dyen-do tai-lan-des" } },
  { en: "I can speak a little Thai.", ja: "タイ語を少し話せます。", zh: "我会说一点泰语。", vi: "Tôi nói được một chút tiếng Thái.", es: "Hablo un poco de tailandés.", ro: { en: "I can speak a little Thai", ja: "taigo o sukoshi hanasemasu", zh: "wo hui shuo yi dian tai yu", vi: "toi noi duoc mot chut tieng thai", es: "a-blo un po-ko de tai-lan-des" } },
  { en: "I can speak a little English.", ja: "英語を少し話せます。", zh: "我会说一点英语。", vi: "Tôi nói được một chút tiếng Anh.", es: "Hablo un poco de inglés.", ro: { en: "I can speak a little English", ja: "eigo o sukoshi hanasemasu", zh: "wo hui shuo yi dian ying yu", vi: "toi noi duoc mot chut tieng anh", es: "a-blo un po-ko de in-gles" } },
  { en: "I understand.", ja: "分かりました。", zh: "我明白了。", vi: "Tôi hiểu rồi.", es: "Entiendo.", ro: { en: "I understand", ja: "wakarimashita", zh: "wo ming bai le", vi: "toi hieu roi", es: "en-tyen-do" } },
  { en: "I don't understand.", ja: "分かりません。", zh: "我不明白。", vi: "Tôi không hiểu.", es: "No entiendo.", ro: { en: "I don't understand", ja: "wakarimasen", zh: "wo bu ming bai", vi: "toi khong hieu", es: "no en-tyen-do" } },
  { en: "Please speak slowly.", ja: "ゆっくり話してください。", zh: "请慢一点说。", vi: "Vui lòng nói chậm thôi.", es: "Por favor, habla despacio.", ro: { en: "please speak slowly", ja: "yukkuri hanashite kudasai", zh: "qing man yi dian shuo", vi: "vui long noi cham thoi", es: "por fa-vor, a-bla des-pa-syo" } },
  { en: "Yes.", ja: "はい。", zh: "是的。", vi: "Vâng.", es: "Sí.", ro: { en: "yes", ja: "hai", zh: "shi de", vi: "vang", es: "si" } },
  { en: "No.", ja: "いいえ。", zh: "不是。", vi: "Không.", es: "No.", ro: { en: "no", ja: "iie", zh: "bu shi", vi: "khong", es: "no" } },
  { en: "That's right.", ja: "その通りです。", zh: "对的。", vi: "Đúng rồi.", es: "Correcto.", ro: { en: "that's right", ja: "sono toori desu", zh: "dui de", vi: "dung roi", es: "ko-rek-to" } },
  { en: "That's not right.", ja: "違います。", zh: "不对。", vi: "Không đúng.", es: "No es correcto.", ro: { en: "that's not right", ja: "chigaimasu", zh: "bu dui", vi: "khong dung", es: "no es ko-rek-to" } },
  { en: "Good.", ja: "いいです。", zh: "很好。", vi: "Tốt.", es: "Está bien.", ro: { en: "good", ja: "ii desu", zh: "hen hao", vi: "tot", es: "es-ta byen" } },
  { en: "Not good.", ja: "よくありません。", zh: "不好。", vi: "Không tốt.", es: "No está bien.", ro: { en: "not good", ja: "yoku arimasen", zh: "bu hao", vi: "khong tot", es: "no es-ta byen" } },
  { en: "Are you okay?", ja: "大丈夫ですか。", zh: "你还好吗？", vi: "Bạn ổn không?", es: "¿Estás bien?", ro: { en: "are you okay", ja: "daijoubu desu ka", zh: "ni hai hao ma", vi: "ban on khong", es: "es-tas byen" } },
  { en: "I'm okay.", ja: "大丈夫です。", zh: "我没事。", vi: "Tôi ổn.", es: "Estoy bien.", ro: { en: "I'm okay", ja: "daijoubu desu", zh: "wo mei shi", vi: "toi on", es: "es-toy byen" } },
  { en: "No problem.", ja: "問題ありません。", zh: "没问题。", vi: "Không có vấn đề gì.", es: "No hay problema.", ro: { en: "no problem", ja: "mondai arimasen", zh: "mei wen ti", vi: "khong co van de gi", es: "no ai pro-ble-ma" } },
  { en: "Please say it again.", ja: "もう一度言ってください。", zh: "请再说一遍。", vi: "Vui lòng nói lại.", es: "Por favor, dilo otra vez.", ro: { en: "please say it again", ja: "mou ichido itte kudasai", zh: "qing zai shuo yi bian", vi: "vui long noi lai", es: "por fa-vor di-lo o-tra ves" } },
  { en: "How much is this?", ja: "これはいくらですか。", zh: "这个多少钱？", vi: "Cái này bao nhiêu tiền?", es: "¿Cuánto cuesta esto?", ro: { en: "how much is this", ja: "kore wa ikura desu ka", zh: "zhe ge duo shao qian", vi: "cai nay bao nhieu tien", es: "kwan-to kwes-ta es-to" } },
  { en: "It's too expensive.", ja: "高すぎます。", zh: "太贵了。", vi: "Đắt quá.", es: "Es demasiado caro.", ro: { en: "it's too expensive", ja: "takasugimasu", zh: "tai gui le", vi: "dat qua", es: "es de-ma-sya-do ka-ro" } },
  { en: "Please give me a discount.", ja: "少し安くしてください。", zh: "请便宜一点。", vi: "Vui lòng giảm giá một chút.", es: "Por favor, hazme un descuento.", ro: { en: "please give me a discount", ja: "sukoshi yasuku shite kudasai", zh: "qing pian yi yi dian", vi: "vui long giam gia mot chut", es: "por fa-vor as-me un des-kwen-to" } },
  { en: "What time is it?", ja: "何時ですか。", zh: "现在几点？", vi: "Mấy giờ rồi?", es: "¿Qué hora es?", ro: { en: "what time is it", ja: "nanji desu ka", zh: "xian zai ji dian", vi: "may gio roi", es: "ke o-ra es" } },
  { en: "It's today.", ja: "今日です。", zh: "是今天。", vi: "Là hôm nay.", es: "Es hoy.", ro: { en: "it's today", ja: "kyou desu", zh: "shi jin tian", vi: "la hom nay", es: "es oy" } },
  { en: "It's tomorrow.", ja: "明日です。", zh: "是明天。", vi: "Là ngày mai.", es: "Es mañana.", ro: { en: "it's tomorrow", ja: "ashita desu", zh: "shi ming tian", vi: "la ngay mai", es: "es ma-nya-na" } },
  { en: "It was yesterday.", ja: "昨日です。", zh: "是昨天。", vi: "Là hôm qua.", es: "Fue ayer.", ro: { en: "it was yesterday", ja: "kinou desu", zh: "shi zuo tian", vi: "la hom qua", es: "fwe a-yer" } },
  { en: "I'll go now.", ja: "今行きます。", zh: "我现在去。", vi: "Tôi sẽ đi ngay bây giờ.", es: "Voy ahora.", ro: { en: "I'll go now", ja: "ima ikimasu", zh: "wo xian zai qu", vi: "toi se di ngay bay gio", es: "voy a-o-ra" } },
  { en: "Please wait a moment.", ja: "少々お待ちください。", zh: "请稍等。", vi: "Vui lòng đợi một chút.", es: "Espera un momento, por favor.", ro: { en: "please wait a moment", ja: "shoushou omachi kudasai", zh: "qing shao deng", vi: "vui long doi mot chut", es: "es-pe-ra un mo-men-to por fa-vor" } },
  { en: "It takes about ten minutes.", ja: "10分くらいかかります。", zh: "大约需要十分钟。", vi: "Mất khoảng mười phút.", es: "Tarda unos diez minutos.", ro: { en: "it takes about ten minutes", ja: "juppun kurai kakarimasu", zh: "da yue xu yao shi fen zhong", vi: "mat khoang muoi phut", es: "tar-da u-nos dyes mi-nu-tos" } },
  { en: "Where is this place?", ja: "ここはどこですか。", zh: "这里是哪里？", vi: "Đây là đâu?", es: "¿Dónde es este lugar?", ro: { en: "where is this place", ja: "koko wa doko desu ka", zh: "zhe li shi na li", vi: "day la dau", es: "don-de es es-te lu-gar" } },
  { en: "Where is the restroom?", ja: "トイレはどこですか。", zh: "洗手间在哪里？", vi: "Nhà vệ sinh ở đâu?", es: "¿Dónde está el baño?", ro: { en: "where is the restroom", ja: "toire wa doko desu ka", zh: "xi shou jian zai na li", vi: "nha ve sinh o dau", es: "don-de es-ta el ba-nyo" } },
  { en: "Where is the subway station?", ja: "地下鉄の駅はどこですか。", zh: "地铁站在哪里？", vi: "Ga tàu điện ngầm ở đâu?", es: "¿Dónde está la estación de metro?", ro: { en: "where is the subway station", ja: "chikatetsu no eki wa doko desu ka", zh: "di tie zhan zai na li", vi: "ga tau dien ngam o dau", es: "don-de es-ta la es-ta-syon de me-tro" } },
  { en: "Please come this way.", ja: "こちらへ来てください。", zh: "请往这边来。", vi: "Vui lòng đi lối này.", es: "Por favor, ven por aquí.", ro: { en: "please come this way", ja: "kochira e kite kudasai", zh: "qing wang zhe bian lai", vi: "vui long di loi nay", es: "por fa-vor ven por a-ki" } },
  { en: "Please go that way.", ja: "あちらへ行ってください。", zh: "请往那边走。", vi: "Vui lòng đi lối kia.", es: "Por favor, ve por allí.", ro: { en: "please go that way", ja: "achira e itte kudasai", zh: "qing wang na bian zou", vi: "vui long di loi kia", es: "por fa-vor ve por a-yi" } },
  { en: "Please go to the right.", ja: "右へ行ってください。", zh: "请往右走。", vi: "Vui lòng rẽ phải.", es: "Por favor, ve a la derecha.", ro: { en: "please go to the right", ja: "migi e itte kudasai", zh: "qing wang you zou", vi: "vui long re phai", es: "por fa-vor ve a la de-re-cha" } },
  { en: "Please go to the left.", ja: "左へ行ってください。", zh: "请往左走。", vi: "Vui lòng rẽ trái.", es: "Por favor, ve a la izquierda.", ro: { en: "please go to the left", ja: "hidari e itte kudasai", zh: "qing wang zuo zou", vi: "vui long re trai", es: "por fa-vor ve a la is-kier-da" } },
  { en: "Please go straight.", ja: "まっすぐ行ってください。", zh: "请一直走。", vi: "Vui lòng đi thẳng.", es: "Por favor, sigue recto.", ro: { en: "please go straight", ja: "massugu itte kudasai", zh: "qing yi zhi zou", vi: "vui long di thang", es: "por fa-vor si-ge rek-to" } },
  { en: "I want to take a taxi.", ja: "タクシーに乗りたいです。", zh: "我想坐出租车。", vi: "Tôi muốn đi taxi.", es: "Quiero tomar un taxi.", ro: { en: "I want to take a taxi", ja: "takushii ni noritai desu", zh: "wo xiang zuo chu zu che", vi: "toi muon di taxi", es: "kye-ro to-mar un tak-si" } },
  { en: "Please let me off here.", ja: "ここで降ろしてください。", zh: "请在这里停车。", vi: "Vui lòng cho tôi xuống ở đây.", es: "Déjame aquí, por favor.", ro: { en: "please let me off here", ja: "koko de oroshite kudasai", zh: "qing zai zhe li ting che", vi: "vui long cho toi xuong o day", es: "de-ha-me a-ki por fa-vor" } },
  { en: "Please give me the menu.", ja: "メニューをください。", zh: "请给我菜单。", vi: "Cho tôi xem thực đơn.", es: "Dame el menú, por favor.", ro: { en: "please give me the menu", ja: "menyuu o kudasai", zh: "qing gei wo cai dan", vi: "cho toi xem thuc don", es: "da-me el me-nu por fa-vor" } },
  { en: "Please give me this.", ja: "これをください。", zh: "请给我这个。", vi: "Cho tôi cái này.", es: "Dame esto, por favor.", ro: { en: "please give me this", ja: "kore o kudasai", zh: "qing gei wo zhe ge", vi: "cho toi cai nay", es: "da-me es-to por fa-vor" } },
  { en: "Please give me water.", ja: "水をください。", zh: "请给我水。", vi: "Cho tôi nước.", es: "Dame agua, por favor.", ro: { en: "please give me water", ja: "mizu o kudasai", zh: "qing gei wo shui", vi: "cho toi nuoc", es: "da-me a-gwa por fa-vor" } },
  { en: "Please make it not spicy.", ja: "辛くしないでください。", zh: "请不要辣。", vi: "Vui lòng đừng làm cay.", es: "Por favor, que no sea picante.", ro: { en: "please make it not spicy", ja: "karaku shinaide kudasai", zh: "qing bu yao la", vi: "vui long dung lam cay", es: "por fa-vor ke no se-a pi-kan-te" } },
  { en: "Please make it a little spicy.", ja: "少し辛くしてください。", zh: "请稍微辣一点。", vi: "Vui lòng làm hơi cay.", es: "Un poco picante, por favor.", ro: { en: "please make it a little spicy", ja: "sukoshi karaku shite kudasai", zh: "qing shao wei la yi dian", vi: "vui long lam hoi cay", es: "un po-ko pi-kan-te por fa-vor" } },
  { en: "It's delicious.", ja: "おいしいです。", zh: "很好吃。", vi: "Ngon lắm.", es: "Está delicioso.", ro: { en: "it's delicious", ja: "oishii desu", zh: "hen hao chi", vi: "ngon lam", es: "es-ta de-li-syo-so" } },
  { en: "Please bring the bill.", ja: "お会計をお願いします。", zh: "请结账。", vi: "Tính tiền giúp tôi.", es: "La cuenta, por favor.", ro: { en: "please bring the bill", ja: "okaikei o onegaishimasu", zh: "qing jie zhang", vi: "tinh tien giup toi", es: "la kwen-ta por fa-vor" } },
  { en: "Please pack it to go.", ja: "持ち帰りにしてください。", zh: "请打包。", vi: "Vui lòng gói mang về.", es: "Para llevar, por favor.", ro: { en: "please pack it to go", ja: "mochikaeri ni shite kudasai", zh: "qing da bao", vi: "vui long goi mang ve", es: "pa-ra ye-var por fa-vor" } },
  { en: "I have a food allergy.", ja: "食物アレルギーがあります。", zh: "我有食物过敏。", vi: "Tôi bị dị ứng thức ăn.", es: "Tengo alergia alimentaria.", ro: { en: "I have a food allergy", ja: "shokumotsu arerugii ga arimasu", zh: "wo you shi wu guo min", vi: "toi bi di ung thuc an", es: "ten-go a-ler-hya a-li-men-ta-rya" } },
  { en: "I don't eat meat.", ja: "肉は食べません。", zh: "我不吃肉。", vi: "Tôi không ăn thịt.", es: "No como carne.", ro: { en: "I don't eat meat", ja: "niku wa tabemasen", zh: "wo bu chi rou", vi: "toi khong an thit", es: "no ko-mo kar-ne" } },
  { en: "I want to buy this.", ja: "これを買いたいです。", zh: "我想买这个。", vi: "Tôi muốn mua cái này.", es: "Quiero comprar esto.", ro: { en: "I want to buy this", ja: "kore o kaitai desu", zh: "wo xiang mai zhe ge", vi: "toi muon mua cai nay", es: "kye-ro kom-prar es-to" } },
  { en: "Do you have another color?", ja: "他の色はありますか。", zh: "有别的颜色吗？", vi: "Có màu khác không?", es: "¿Tienes otro color?", ro: { en: "do you have another color", ja: "hoka no iro wa arimasu ka", zh: "you bie de yan se ma", vi: "co mau khac khong", es: "tye-nes o-tro ko-lor" } },
  { en: "Do you have another size?", ja: "他のサイズはありますか。", zh: "有别的尺码吗？", vi: "Có size khác không?", es: "¿Tienes otra talla?", ro: { en: "do you have another size", ja: "hoka no saizu wa arimasu ka", zh: "you bie de chi ma ma", vi: "co size khac khong", es: "tye-nes o-tra ta-ya" } },
  { en: "Can I try it on?", ja: "試着してもいいですか。", zh: "可以试穿吗？", vi: "Tôi thử được không?", es: "¿Puedo probármelo?", ro: { en: "can I try it on", ja: "shichaku shite mo ii desu ka", zh: "ke yi shi chuan ma", vi: "toi thu duoc khong", es: "pwe-do pro-bar-me-lo" } },
  { en: "Can I pay by card?", ja: "カードで払えますか。", zh: "可以刷卡吗？", vi: "Tôi thanh toán bằng thẻ được không?", es: "¿Puedo pagar con tarjeta?", ro: { en: "can I pay by card", ja: "kaado de haraemasu ka", zh: "ke yi shua ka ma", vi: "toi thanh toan bang the duoc khong", es: "pwe-do pa-gar kon tar-he-ta" } },
  { en: "I'll pay in cash.", ja: "現金で払います。", zh: "我用现金支付。", vi: "Tôi sẽ trả bằng tiền mặt.", es: "Pagaré en efectivo.", ro: { en: "I'll pay in cash", ja: "genkin de haraimasu", zh: "wo yong xian jin zhi fu", vi: "toi se tra bang tien mat", es: "pa-ga-re en e-fek-ti-vo" } },
  { en: "Please give me a receipt.", ja: "レシートをください。", zh: "请给我收据。", vi: "Cho tôi hóa đơn.", es: "Dame un recibo, por favor.", ro: { en: "please give me a receipt", ja: "reshiito o kudasai", zh: "qing gei wo shou ju", vi: "cho toi hoa don", es: "da-me un re-si-bo por fa-vor" } },
  { en: "Please give me a bag.", ja: "袋をください。", zh: "请给我袋子。", vi: "Cho tôi túi.", es: "Dame una bolsa, por favor.", ro: { en: "please give me a bag", ja: "fukuro o kudasai", zh: "qing gei wo dai zi", vi: "cho toi tui", es: "da-me u-na bol-sa por fa-vor" } },
  { en: "I'm just looking.", ja: "見ているだけです。", zh: "我只是看看。", vi: "Tôi chỉ xem thôi.", es: "Solo estoy mirando.", ro: { en: "I'm just looking", ja: "mite iru dake desu", zh: "wo zhi shi kan kan", vi: "toi chi xem thoi", es: "so-lo es-toy mi-ran-do" } },
  { en: "I like this.", ja: "これが気に入りました。", zh: "我喜欢这个。", vi: "Tôi thích cái này.", es: "Me gusta esto.", ro: { en: "I like this", ja: "kore ga kiniirimashita", zh: "wo xi huan zhe ge", vi: "toi thich cai nay", es: "me gus-ta es-to" } },
  { en: "Please help me.", ja: "助けてください。", zh: "请帮帮我。", vi: "Xin hãy giúp tôi.", es: "Ayúdame, por favor.", ro: { en: "please help me", ja: "tasukete kudasai", zh: "qing bang bang wo", vi: "xin hay giup toi", es: "a-yu-da-me por fa-vor" } },
  { en: "I'm lost.", ja: "道に迷いました。", zh: "我迷路了。", vi: "Tôi bị lạc đường.", es: "Estoy perdido.", ro: { en: "I'm lost", ja: "michi ni mayoimashita", zh: "wo mi lu le", vi: "toi bi lac duong", es: "es-toy per-di-do" } },
  { en: "I lost my phone.", ja: "携帯電話をなくしました。", zh: "我丢了手机。", vi: "Tôi bị mất điện thoại.", es: "Perdí mi teléfono.", ro: { en: "I lost my phone", ja: "keitai denwa o nakushimashita", zh: "wo diu le shou ji", vi: "toi bi mat dien thoai", es: "per-di mi te-le-fo-no" } },
  { en: "I lost my wallet.", ja: "財布をなくしました。", zh: "我丢了钱包。", vi: "Tôi bị mất ví.", es: "Perdí mi cartera.", ro: { en: "I lost my wallet", ja: "saifu o nakushimashita", zh: "wo diu le qian bao", vi: "toi bi mat vi", es: "per-di mi kar-te-ra" } },
  { en: "It hurts.", ja: "痛いです。", zh: "我疼。", vi: "Tôi bị đau.", es: "Me duele.", ro: { en: "it hurts", ja: "itai desu", zh: "wo teng", vi: "toi bi dau", es: "me dwe-le" } },
  { en: "I need to go to the hospital.", ja: "病院に行かなければなりません。", zh: "我需要去医院。", vi: "Tôi cần đến bệnh viện.", es: "Necesito ir al hospital.", ro: { en: "I need to go to the hospital", ja: "byouin ni ikanakereba narimasen", zh: "wo xu yao qu yi yuan", vi: "toi can den benh vien", es: "ne-se-si-to ir al os-pi-tal" } },
  { en: "Please call the police.", ja: "警察を呼んでください。", zh: "请叫警察。", vi: "Vui lòng gọi cảnh sát.", es: "Llama a la policía, por favor.", ro: { en: "please call the police", ja: "keisatsu o yonde kudasai", zh: "qing jiao jing cha", vi: "vui long goi canh sat", es: "ya-ma a la po-li-si-a por fa-vor" } },
  { en: "Can you speak Korean?", ja: "韓国語を話せますか。", zh: "你会说韩语吗？", vi: "Bạn nói được tiếng Hàn không?", es: "¿Puedes hablar coreano?", ro: { en: "can you speak Korean", ja: "kankokugo o hanasemasu ka", zh: "ni hui shuo han yu ma", vi: "ban noi duoc tieng han khong", es: "pwe-des a-blar ko-re-a-no" } },
  { en: "Can you speak English?", ja: "英語を話せますか。", zh: "你会说英语吗？", vi: "Bạn nói được tiếng Anh không?", es: "¿Puedes hablar inglés?", ro: { en: "can you speak English", ja: "eigo o hanasemasu ka", zh: "ni hui shuo ying yu ma", vi: "ban noi duoc tieng anh khong", es: "pwe-des a-blar in-gles" } },
  { en: "Can you take a photo for me?", ja: "写真を撮ってもらえますか。", zh: "可以帮我拍照吗？", vi: "Bạn chụp ảnh giúp tôi được không?", es: "¿Puedes tomarme una foto?", ro: { en: "can you take a photo for me", ja: "shashin o totte moraemasu ka", zh: "ke yi bang wo pai zhao ma", vi: "ban chup anh giup toi duoc khong", es: "pwe-des to-mar-me u-na fo-to" } },
  { en: "The weather is nice today.", ja: "今日は天気がいいです。", zh: "今天天气很好。", vi: "Hôm nay thời tiết đẹp.", es: "Hoy hace buen tiempo.", ro: { en: "the weather is nice today", ja: "kyou wa tenki ga ii desu", zh: "jin tian tian qi hen hao", vi: "hom nay thoi tiet dep", es: "oy a-se bwen tyem-po" } },
  { en: "It's cold today.", ja: "今日は寒いです。", zh: "今天很冷。", vi: "Hôm nay lạnh.", es: "Hoy hace frío.", ro: { en: "it's cold today", ja: "kyou wa samui desu", zh: "jin tian hen leng", vi: "hom nay lanh", es: "oy a-se fri-o" } },
  { en: "It's hot today.", ja: "今日は暑いです。", zh: "今天很热。", vi: "Hôm nay nóng.", es: "Hoy hace calor.", ro: { en: "it's hot today", ja: "kyou wa atsui desu", zh: "jin tian hen re", vi: "hom nay nong", es: "oy a-se ka-lor" } },
  { en: "It's raining.", ja: "雨が降っています。", zh: "下雨了。", vi: "Trời đang mưa.", es: "Está lloviendo.", ro: { en: "it's raining", ja: "ame ga futte imasu", zh: "xia yu le", vi: "troi dang mua", es: "es-ta yo-vyen-do" } },
  { en: "I'm tired.", ja: "疲れました。", zh: "我累了。", vi: "Tôi mệt.", es: "Estoy cansado.", ro: { en: "I'm tired", ja: "tsukaremashita", zh: "wo lei le", vi: "toi met", es: "es-toy kan-sa-do" } },
  { en: "I'm hungry.", ja: "お腹がすきました。", zh: "我饿了。", vi: "Tôi đói.", es: "Tengo hambre.", ro: { en: "I'm hungry", ja: "onaka ga sukimashita", zh: "wo e le", vi: "toi doi", es: "ten-go am-bre" } },
  { en: "I'm thirsty.", ja: "喉が渇きました。", zh: "我渴了。", vi: "Tôi khát.", es: "Tengo sed.", ro: { en: "I'm thirsty", ja: "nodo ga kawakimashita", zh: "wo ke le", vi: "toi khat", es: "ten-go sed" } },
  { en: "Are you okay?", ja: "大丈夫ですか。", zh: "你没事吧？", vi: "Bạn ổn chứ?", es: "¿Estás bien?", ro: { en: "are you okay", ja: "daijoubu desu ka", zh: "ni mei shi ba", vi: "ban on chu", es: "es-tas byen" } },
  { en: "Have a good day.", ja: "良い一日を。", zh: "祝你今天愉快。", vi: "Chúc bạn một ngày tốt lành.", es: "Que tengas un buen día.", ro: { en: "have a good day", ja: "yoi ichinichi o", zh: "zhu ni jin tian yu kuai", vi: "chuc ban mot ngay tot lanh", es: "ke ten-gas un bwen di-a" } },
  { en: "I'll contact you next time.", ja: "次回連絡します。", zh: "下次我会联系你。", vi: "Lần sau tôi sẽ liên lạc.", es: "Te contactaré la próxima vez.", ro: { en: "I'll contact you next time", ja: "jikai renraku shimasu", zh: "xia ci wo hui lian xi ni", vi: "lan sau toi se lien lac", es: "te kon-tak-ta-re la prok-si-ma ves" } },
  { en: "Please tell me the address.", ja: "住所を教えてください。", zh: "请告诉我地址。", vi: "Vui lòng cho tôi biết địa chỉ.", es: "Dime la dirección, por favor.", ro: { en: "please tell me the address", ja: "juusho o oshiete kudasai", zh: "qing gao su wo di zhi", vi: "vui long cho toi biet dia chi", es: "di-me la di-rek-syon por fa-vor" } },
  { en: "Please tell me the phone number.", ja: "電話番号を教えてください。", zh: "请告诉我电话号码。", vi: "Vui lòng cho tôi biết số điện thoại.", es: "Dime el número de teléfono, por favor.", ro: { en: "please tell me the phone number", ja: "denwa bangou o oshiete kudasai", zh: "qing gao su wo dian hua hao ma", vi: "vui long cho toi biet so dien thoai", es: "di-me el nu-me-ro de te-le-fo-no por fa-vor" } },
  { en: "Do you use KakaoTalk?", ja: "カカオトークを使いますか。", zh: "你用KakaoTalk吗？", vi: "Bạn có dùng KakaoTalk không?", es: "¿Usas KakaoTalk?", ro: { en: "do you use KakaoTalk", ja: "kakao tooku o tsukaimasu ka", zh: "ni yong KakaoTalk ma", vi: "ban co dung KakaoTalk khong", es: "u-sas KakaoTalk" } },
  { en: "I'll send you the map link.", ja: "地図リンクを送ります。", zh: "我会发送地图链接。", vi: "Tôi sẽ gửi link bản đồ.", es: "Te enviaré el enlace del mapa.", ro: { en: "I'll send you the map link", ja: "chizu rinku o okurimasu", zh: "wo hui fa song di tu lian jie", vi: "toi se gui link ban do", es: "te en-vya-re el en-la-se del ma-pa" } },
  { en: "An alien registration card is required.", ja: "外国人登録証が必要です。", zh: "需要外国人登录证。", vi: "Cần thẻ đăng ký người nước ngoài.", es: "Se necesita la tarjeta de registro de extranjero.", ro: { en: "alien registration card is required", ja: "gaikokujin tourokushou ga hitsuyou desu", zh: "xu yao wai guo ren deng lu zheng", vi: "can the dang ky nguoi nuoc ngoai", es: "se ne-se-si-ta la tar-he-ta de re-his-tro de eks-tran-he-ro" } },
  { en: "A passport is required.", ja: "パスポートが必要です。", zh: "需要护照。", vi: "Cần hộ chiếu.", es: "Se necesita el pasaporte.", ro: { en: "passport is required", ja: "pasupooto ga hitsuyou desu", zh: "xu yao hu zhao", vi: "can ho chieu", es: "se ne-se-si-ta el pa-sa-por-te" } },
  { en: "A reservation is required.", ja: "予約が必要です。", zh: "需要预约。", vi: "Cần đặt lịch trước.", es: "Se necesita una reserva.", ro: { en: "reservation is required", ja: "yoyaku ga hitsuyou desu", zh: "xu yao yu yue", vi: "can dat lich truoc", es: "se ne-se-si-ta u-na re-ser-va" } },
  { en: "Trash must be thrown away on the designated day.", ja: "ごみは決められた日に出します。", zh: "垃圾要在指定日期丢。", vi: "Rác phải bỏ đúng ngày quy định.", es: "La basura se tira en el día designado.", ro: { en: "trash must be thrown away on the designated day", ja: "gomi wa kimerareta hi ni dashimasu", zh: "la ji yao zai zhi ding ri qi diu", vi: "rac phai bo dung ngay quy dinh", es: "la ba-su-ra se ti-ra en el di-a de-sig-na-do" } },
  { en: "I need internet.", ja: "インターネットが必要です。", zh: "我需要网络。", vi: "Tôi cần internet.", es: "Necesito internet.", ro: { en: "I need internet", ja: "intaanetto ga hitsuyou desu", zh: "wo xu yao wang luo", vi: "toi can internet", es: "ne-se-si-to in-ter-net" } },
  { en: "I'll check it.", ja: "確認してみます。", zh: "我会确认一下。", vi: "Tôi sẽ kiểm tra.", es: "Lo revisaré.", ro: { en: "I'll check it", ja: "kakunin shite mimasu", zh: "wo hui que ren yi xia", vi: "toi se kiem tra", es: "lo re-vi-sa-re" } }
];

window.WIITHAI_MULTI_PHRASES = (window.THAI_PHRASES || []).map((phrase, index) => {
  const extra = window.WIITHAI_EXTRA_PHRASES[index] || {};
  return {
    ...phrase,
    en: extra.en || "",
    ja: extra.ja || "",
    zh: extra.zh || "",
    vi: extra.vi || "",
    es: extra.es || "",
    roByLang: extra.ro || {}
  };
});

window.JAPANESE_LETTERS = [
  { type: "히라가나", char: "あ", name: "a", sound: "a · 아", example: "あい(ai) 사랑" },
  { type: "히라가나", char: "か", name: "ka", sound: "ka · 카", example: "かさ(kasa) 우산" },
  { type: "히라가나", char: "さ", name: "sa", sound: "sa · 사", example: "さけ(sake) 술" },
  { type: "히라가나", char: "た", name: "ta", sound: "ta · 타", example: "たび(tabi) 여행" },
  { type: "히라가나", char: "な", name: "na", sound: "na · 나", example: "なまえ(namae) 이름" },
  { type: "히라가나", char: "ま", name: "ma", sound: "ma · 마", example: "まち(machi) 거리" },
  { type: "가타카나", char: "ア", name: "a", sound: "a · 아", example: "アジア(ajia) 아시아" },
  { type: "가타카나", char: "カ", name: "ka", sound: "ka · 카", example: "カード(kaado) 카드" }
];

window.ENGLISH_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((char, index) => ({
  type: "알파벳",
  char,
  name: char.toLowerCase(),
  sound: `${char.toLowerCase()} · 영어 알파벳 ${index + 1}`,
  example: `${char} word`
}));

window.CHINESE_LETTERS = [
  { type: "병음", char: "ā", name: "1성", sound: "높고 평평한 소리", example: "mā 엄마" },
  { type: "병음", char: "á", name: "2성", sound: "올라가는 소리", example: "má 삼" },
  { type: "병음", char: "ǎ", name: "3성", sound: "낮아졌다 올라가는 소리", example: "mǎ 말" },
  { type: "병음", char: "à", name: "4성", sound: "강하게 내려가는 소리", example: "mà 꾸짖다" },
  { type: "한자", char: "你", name: "nǐ", sound: "너/당신", example: "你好 안녕하세요" },
  { type: "한자", char: "我", name: "wǒ", sound: "나", example: "我是 한국어 저는" }
];

window.VIETNAMESE_LETTERS = [
  { type: "알파벳", char: "ă", name: "a breve", sound: "짧은 아 계열", example: "ăn 먹다" },
  { type: "알파벳", char: "â", name: "a circumflex", sound: "어/으 계열", example: "ân 은혜" },
  { type: "알파벳", char: "đ", name: "d stroke", sound: "ㄷ/d 소리", example: "đi 가다" },
  { type: "성조", char: "á", name: "sắc", sound: "올라가는 성조", example: "má 엄마" },
  { type: "성조", char: "à", name: "huyền", sound: "내려가는 성조", example: "bà 할머니" },
  { type: "성조", char: "ã", name: "ngã", sound: "꺾이는 성조", example: "ngã 넘어지다" }
];

window.SPANISH_LETTERS = [
  { type: "알파벳", char: "A", name: "a", sound: "아 계열", example: "amigo 친구" },
  { type: "알파벳", char: "E", name: "e", sound: "에 계열", example: "España 스페인" },
  { type: "알파벳", char: "I", name: "i", sound: "이 계열", example: "iglesia 교회" },
  { type: "알파벳", char: "O", name: "o", sound: "오 계열", example: "hola 안녕하세요" },
  { type: "알파벳", char: "U", name: "u", sound: "우 계열", example: "uno 하나" },
  { type: "알파벳", char: "Ñ", name: "eñe", sound: "니에 가까운 소리", example: "España 스페인" }
];
