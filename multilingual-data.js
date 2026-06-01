window.WIITHAI_LANGUAGES = {
  ko: { label: "한국어", native: "한국어", flag: "🇰🇷", speech: "ko-KR" },
  th: { label: "태국어", native: "ไทย", flag: "🇹🇭", speech: "th-TH" },
  ja: { label: "일본어", native: "日本語", flag: "🇯🇵", speech: "ja-JP" },
  en: { label: "영어", native: "English", flag: "🇺🇸", speech: "en-US" },
  zh: { label: "중국어", native: "中文", flag: "🇨🇳", speech: "zh-CN" },
  vi: { label: "베트남어", native: "Tiếng Việt", flag: "🇻🇳", speech: "vi-VN" },
  es: { label: "스페인어", native: "Español", flag: "🇪🇸", speech: "es-ES" }
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
    infoEyebrow: "Korea info by Wii"
  },
  th: {
    total: "รายการเรียน", favorites: "บันทึก", today: "เรียนวันนี้", audience: "Choose your country",
    countryQuestion: "คุณมาจากประเทศอะไร?", target: "เรียน", mode: "โหมด", voice: "เสียง",
    phrases: "ประโยค", letters: "ตัวอักษร", female: "หญิง", male: "ชาย", quiz: "ดูภาษาของฉันก่อน",
    searchPhrases: "ค้นหาประโยค ความหมาย หรือเสียงอ่าน", searchLetters: "ค้นหาตัวอักษรหรือเสียง", hide: "ซ่อน",
    infoEyebrow: "ข้อมูลเกาหลี by Wii"
  },
  ja: {
    total: "学習項目", favorites: "お気に入り", today: "今日の学習", audience: "Choose your country",
    countryQuestion: "あなたはどこの国の人ですか？", target: "学ぶ", mode: "モード", voice: "音声",
    phrases: "文章", letters: "文字", female: "女性", male: "男性", quiz: "自分の言語を先に見る",
    searchPhrases: "文章・意味・発音を検索", searchLetters: "文字・名前・発音を検索", hide: "隠す",
    infoEyebrow: "Korea info by Wii"
  },
  en: {
    total: "Items", favorites: "Saved", today: "Today", audience: "Choose your country",
    countryQuestion: "Which country are you from?", target: "Learn", mode: "Mode", voice: "Voice",
    phrases: "Phrases", letters: "Letters", female: "Female", male: "Male", quiz: "Show my language first",
    searchPhrases: "Search phrase, meaning, or pronunciation", searchLetters: "Search letters or sounds", hide: "Hide",
    infoEyebrow: "Korea info by Wii"
  },
  zh: {
    total: "学习项目", favorites: "收藏", today: "今日学习", audience: "Choose your country",
    countryQuestion: "你来自哪个国家？", target: "学习", mode: "模式", voice: "声音",
    phrases: "句子", letters: "文字", female: "女声", male: "男声", quiz: "先看我的语言",
    searchPhrases: "搜索句子、意思或发音", searchLetters: "搜索文字或发音", hide: "隐藏",
    infoEyebrow: "韩国信息 by Wii"
  },
  vi: {
    total: "Bài học", favorites: "Đã lưu", today: "Hôm nay", audience: "Choose your country",
    countryQuestion: "Bạn là người nước nào?", target: "Học", mode: "Chế độ", voice: "Giọng",
    phrases: "Câu", letters: "Chữ cái", female: "Nữ", male: "Nam", quiz: "Xem ngôn ngữ của tôi trước",
    searchPhrases: "Tìm câu, nghĩa hoặc phát âm", searchLetters: "Tìm chữ cái hoặc âm", hide: "Ẩn",
    infoEyebrow: "Thông tin Hàn Quốc by Wii"
  },
  es: {
    total: "Lecciones", favorites: "Guardado", today: "Hoy", audience: "Choose your country",
    countryQuestion: "¿De qué país eres?", target: "Aprender", mode: "Modo", voice: "Voz",
    phrases: "Frases", letters: "Letras", female: "Mujer", male: "Hombre", quiz: "Ver mi idioma primero",
    searchPhrases: "Buscar frase, significado o pronunciación", searchLetters: "Buscar letras o sonidos", hide: "Ocultar",
    infoEyebrow: "Información de Corea by Wii"
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
  { en: "Please speak slowly.", ja: "ゆっくり話してください。", zh: "请慢一点说。", vi: "Vui lòng nói chậm thôi.", es: "Por favor, habla despacio.", ro: { en: "please speak slowly", ja: "yukkuri hanashite kudasai", zh: "qing man yi dian shuo", vi: "vui long noi cham thoi", es: "por fa-vor, a-bla des-pa-syo" } }
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
