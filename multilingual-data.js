window.WIITHAI_LANGUAGES = {
  ko: { label: "한국어", native: "한국어", flag: "🇰🇷", speech: "ko-KR" },
  th: { label: "태국어", native: "ไทย", flag: "🇹🇭", speech: "th-TH" },
  ja: { label: "일본어", native: "日本語", flag: "🇯🇵", speech: "ja-JP" },
  en: { label: "영어", native: "English", flag: "🇺🇸", speech: "en-US" },
  zh: { label: "중국어", native: "中文", flag: "🇨🇳", speech: "zh-CN" },
  vi: { label: "베트남어", native: "Tiếng Việt", flag: "🇻🇳", speech: "vi-VN" }
};

window.WIITHAI_LEARNER_PROFILES = [
  { id: "ko", label: "한국인이 배워요", native: "한국어 기준", flag: "🇰🇷", source: "ko", targets: ["th", "ja", "en", "zh", "vi"] },
  { id: "th", label: "คนไทยเรียน", native: "태국어 기준", flag: "🇹🇭", source: "th", targets: ["ko", "ja", "en", "zh", "vi"] },
  { id: "ja", label: "日本人が学ぶ", native: "일본어 기준", flag: "🇯🇵", source: "ja", targets: ["ko", "th", "en", "zh", "vi"] },
  { id: "en", label: "English speaker", native: "영어 기준", flag: "🇺🇸", source: "en", targets: ["ko", "th", "ja", "zh", "vi"] },
  { id: "zh", label: "中文使用者学习", native: "중국어 기준", flag: "🇨🇳", source: "zh", targets: ["ko", "th", "ja", "en", "vi"] },
  { id: "vi", label: "Người Việt học", native: "베트남어 기준", flag: "🇻🇳", source: "vi", targets: ["ko", "th", "ja", "en", "zh"] }
];

window.WIITHAI_EXTRA_PHRASES = [
  { en: "Hello.", ja: "こんにちは。", zh: "你好。", vi: "Xin chào.", ro: { en: "hello", ja: "konnichiwa", zh: "ni hao", vi: "sin chao" } },
  { en: "Hello. Nice to meet you.", ja: "こんにちは。お会いできてうれしいです。", zh: "你好。很高兴认识你。", vi: "Xin chào. Rất vui được gặp bạn.", ro: { en: "hello, nice to meet you", ja: "konnichiwa, o-ai dekite ureshii desu", zh: "ni hao, hen gao xing ren shi ni", vi: "sin chao, rat vui duoc gap ban" } },
  { en: "Thank you.", ja: "ありがとうございます。", zh: "谢谢。", vi: "Cảm ơn.", ro: { en: "thank you", ja: "arigatou gozaimasu", zh: "xie xie", vi: "kam un" } },
  { en: "Thank you very much.", ja: "本当にありがとうございます。", zh: "非常感谢。", vi: "Cảm ơn rất nhiều.", ro: { en: "thank you very much", ja: "hontou ni arigatou gozaimasu", zh: "fei chang gan xie", vi: "kam un rat nhieu" } },
  { en: "I'm sorry.", ja: "すみません。", zh: "对不起。", vi: "Xin lỗi.", ro: { en: "sorry", ja: "sumimasen", zh: "dui bu qi", vi: "sin loi" } },
  { en: "It's okay.", ja: "大丈夫です。", zh: "没关系。", vi: "Không sao.", ro: { en: "it's okay", ja: "daijoubu desu", zh: "mei guan xi", vi: "khong sao" } },
  { en: "How are you?", ja: "お元気ですか。", zh: "你好吗？", vi: "Bạn khỏe không?", ro: { en: "how are you", ja: "o-genki desu ka", zh: "ni hao ma", vi: "ban khoe khong" } },
  { en: "I'm doing well.", ja: "元気です。", zh: "我很好。", vi: "Tôi khỏe.", ro: { en: "I'm doing well", ja: "genki desu", zh: "wo hen hao", vi: "toi khoe" } },
  { en: "See you again.", ja: "また会いましょう。", zh: "下次见。", vi: "Hẹn gặp lại.", ro: { en: "see you again", ja: "mata aimashou", zh: "xia ci jian", vi: "hen gap lai" } },
  { en: "Goodbye.", ja: "さようなら。", zh: "再见。", vi: "Tạm biệt.", ro: { en: "goodbye", ja: "sayounara", zh: "zai jian", vi: "tam biet" } },
  { en: "I am Korean.", ja: "私は韓国人です。", zh: "我是韩国人。", vi: "Tôi là người Hàn Quốc.", ro: { en: "I am Korean", ja: "watashi wa kankokujin desu", zh: "wo shi han guo ren", vi: "toi la nguoi han quoc" } },
  { en: "I am from Korea.", ja: "韓国から来ました。", zh: "我来自韩国。", vi: "Tôi đến từ Hàn Quốc.", ro: { en: "I am from Korea", ja: "kankoku kara kimashita", zh: "wo lai zi han guo", vi: "toi den tu han quoc" } },
  { en: "My name is ___.", ja: "私の名前は___です。", zh: "我的名字是___。", vi: "Tên tôi là ___.", ro: { en: "my name is", ja: "watashi no namae wa ___ desu", zh: "wo de ming zi shi ___", vi: "ten toi la ___" } },
  { en: "What is your name?", ja: "お名前は何ですか。", zh: "你叫什么名字？", vi: "Bạn tên là gì?", ro: { en: "what is your name", ja: "o-namae wa nan desu ka", zh: "ni jiao shen me ming zi", vi: "ban ten la gi" } },
  { en: "I am learning Thai.", ja: "私はタイ語を勉強しています。", zh: "我正在学习泰语。", vi: "Tôi đang học tiếng Thái.", ro: { en: "I am learning Thai", ja: "watashi wa taigo o benkyou shiteimasu", zh: "wo zai xue xi tai yu", vi: "toi dang hoc tieng thai" } },
  { en: "I can speak a little Thai.", ja: "タイ語を少し話せます。", zh: "我会说一点泰语。", vi: "Tôi nói được một chút tiếng Thái.", ro: { en: "I can speak a little Thai", ja: "taigo o sukoshi hanasemasu", zh: "wo hui shuo yi dian tai yu", vi: "toi noi duoc mot chut tieng thai" } },
  { en: "I can speak a little English.", ja: "英語を少し話せます。", zh: "我会说一点英语。", vi: "Tôi nói được một chút tiếng Anh.", ro: { en: "I can speak a little English", ja: "eigo o sukoshi hanasemasu", zh: "wo hui shuo yi dian ying yu", vi: "toi noi duoc mot chut tieng anh" } },
  { en: "I understand.", ja: "分かりました。", zh: "我明白了。", vi: "Tôi hiểu rồi.", ro: { en: "I understand", ja: "wakarimashita", zh: "wo ming bai le", vi: "toi hieu roi" } },
  { en: "I don't understand.", ja: "分かりません。", zh: "我不明白。", vi: "Tôi không hiểu.", ro: { en: "I don't understand", ja: "wakarimasen", zh: "wo bu ming bai", vi: "toi khong hieu" } },
  { en: "Please speak slowly.", ja: "ゆっくり話してください。", zh: "请慢一点说。", vi: "Vui lòng nói chậm thôi.", ro: { en: "please speak slowly", ja: "yukkuri hanashite kudasai", zh: "qing man yi dian shuo", vi: "vui long noi cham thoi" } }
];

window.WIITHAI_MULTI_PHRASES = (window.THAI_PHRASES || []).map((phrase, index) => {
  const extra = window.WIITHAI_EXTRA_PHRASES[index] || {};
  return {
    ...phrase,
    en: extra.en || phrase.ko,
    ja: extra.ja || phrase.ko,
    zh: extra.zh || phrase.ko,
    vi: extra.vi || phrase.ko,
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
