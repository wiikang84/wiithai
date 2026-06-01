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
