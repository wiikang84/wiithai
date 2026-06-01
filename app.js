(async function () {
  const ASSET_VERSION = "20260601-12";
  const LANGUAGES = window.WIITHAI_LANGUAGES || {};
  const PROFILES = window.WIITHAI_LEARNER_PROFILES || [];
  let phrases = (window.WIITHAI_MULTI_PHRASES || window.THAI_PHRASES || []).map((item, index) => ({
    ...item,
    audioIndex: Number(item.audioIndex || item.n || index + 1),
    audioUrl: item.audioUrl || `./audio/phrases/${String(index + 1).padStart(3, "0")}.mp3`
  }));

  const state = {
    category: "전체",
    search: "",
    quiz: false,
    favorites: new Set(readJson("thaiPhraseFavorites", []))
  };

  const list = document.getElementById("phraseList");
  const letterList = document.getElementById("letterList");
  const template = document.getElementById("phraseCardTemplate");
  const letterTemplate = document.getElementById("letterCardTemplate");
  const tabs = document.getElementById("categoryTabs");
  const searchInput = document.getElementById("searchInput");
  const quizToggle = document.getElementById("quizToggle");
  const totalCount = document.getElementById("totalCount");
  const favoriteCount = document.getElementById("favoriteCount");
  const homeButton = document.getElementById("homeButton");
  const backButton = document.getElementById("backButton");
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

  let categories = [];
  let currentMode = "phrases";
  let voiceMode = localStorage.getItem("wiiinfoVoiceMode") || localStorage.getItem("wiithaiVoiceMode") || "female";
  let profileId = localStorage.getItem("wiiinfoProfileId") || localStorage.getItem("wiithaiProfileId") || "ko";
  let activeProfile = getProfile(profileId);
  let sourceLang = activeProfile.source;
  let targetLang = localStorage.getItem("wiiinfoTargetLang") || localStorage.getItem("wiithaiTargetLang") || activeProfile.targets[0];
  if (!activeProfile.targets.includes(targetLang)) targetLang = activeProfile.targets[0];

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

  async function loadFirebasePhrases() {
    if (!window.firebase || !window.WIITHAI_FIREBASE_CONFIG) return [];
    try {
      if (!firebase.apps.length) firebase.initializeApp(window.WIITHAI_FIREBASE_CONFIG);
      const collection = window.WIITHAI_FIRESTORE_COLLECTION || "wiithaiPhrases";
      const snapshot = await firebase.firestore().collection(collection).where("isActive", "==", true).get();

      return snapshot.docs.map((doc, index) => {
        const data = doc.data();
        const audioIndex = Number(data.audioIndex || data.n || data.sortOrder || index + 1);
        const extra = window.WIITHAI_EXTRA_PHRASES?.[audioIndex - 1] || {};
        const baseThai = data.th || "";
        const baseRoman = data.roman || data.ro || "";
        return {
          id: doc.id,
          c: data.category || "기타",
          ko: data.ko || "",
          th: baseThai,
          thMale: data.thMale || baseThai,
          thFemale: data.thFemale || (window.WIITHAI_MAKE_FEMALE_THAI ? window.WIITHAI_MAKE_FEMALE_THAI(baseThai) : baseThai),
          ro: baseRoman,
          roMale: data.roMale || baseRoman,
          roFemale: data.roFemale || (window.WIITHAI_MAKE_FEMALE_ROMAN ? window.WIITHAI_MAKE_FEMALE_ROMAN(baseRoman) : baseRoman),
          en: data.en || extra.en || "",
          ja: data.ja || extra.ja || "",
          zh: data.zh || extra.zh || "",
          vi: data.vi || extra.vi || "",
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
    categories = ["전체", ...Array.from(new Set(phrases.map((item) => item.c)))];
  }

  function categoryLabel(category) {
    const thaiLabels = {
      "전체": "ทั้งหมด",
      "인사": "คำทักทาย",
      "자기소개": "แนะนำตัว",
      "기초응답": "คำตอบพื้นฐาน",
      "숫자/시간": "ตัวเลข/เวลา",
      "이동": "การเดินทาง",
      "식당": "ร้านอาหาร",
      "쇼핑": "ช้อปปิ้ง",
      "도움": "ขอความช่วยเหลือ",
      "일상": "ชีวิตประจำวัน",
      "한국생활": "ชีวิตในเกาหลี"
    };
    return sourceLang === "th" ? thaiLabels[category] || category : category;
  }

  function saveFavorites() {
    localStorage.setItem("thaiPhraseFavorites", JSON.stringify([...state.favorites]));
    favoriteCount.textContent = state.favorites.size;
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
    const thaiMode = sourceIsThai();
    const labels = {
      total: thaiMode ? "รายการ" : "현재 항목",
      favorites: thaiMode ? "บันทึก" : "즐겨찾기",
      audience: thaiMode ? "ภาษาหลัก" : "기준 언어",
      target: thaiMode ? "ภาษาเป้าหมาย" : "배울 언어",
      mode: thaiMode ? "รูปแบบ" : "학습 방식",
      voice: thaiMode ? "ผู้พูด/เสียง" : "화자/목소리",
      phrases: thaiMode ? "ประโยค" : "문장",
      letters: thaiMode ? "ตัวอักษร" : "문자 기초",
      female: thaiMode ? "ผู้หญิง" : "여성형",
      male: thaiMode ? "ผู้ชาย" : "남성형",
      quiz: thaiMode ? "ดูภาษาหลักก่อน" : "기준 언어 먼저 보기",
      searchPhrases: thaiMode ? "ค้นหาประโยคหรือเสียงอ่าน" : "문장, 뜻, 발음 검색",
      searchLetters: thaiMode ? "ค้นหาตัวอักษร" : "문자, 이름, 발음 검색",
      hide: thaiMode ? "ซ่อน" : "가리기"
    };
    return labels[key];
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
    return item[lang] || item.ko || "";
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
    return "";
  }

  function speak(text, audioUrl, lang) {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch(() => speak(text, "", lang));
      return;
    }
    if (!("speechSynthesis" in window)) {
      alert("이 브라우저는 음성 읽기를 지원하지 않습니다.");
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
    return phrases.filter((item) => {
      const inCategory = state.category === "전체" || item.c === state.category;
      const text = `${getText(item, sourceLang)} ${getText(item, targetLang)} ${getRoman(item, targetLang)} ${item.c}`.toLowerCase();
      return inCategory && (!keyword || text.includes(keyword));
    });
  }

  function renderProfileTabs() {
    profileTabs.innerHTML = "";
    PROFILES.forEach((profile) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = profile.id === profileId ? "active" : "";
      button.setAttribute("aria-pressed", String(profile.id === profileId));
      button.innerHTML = `<span class="flag">${profile.flag}</span><span>${profile.label}</span><small>${profile.native}</small>`;
      button.addEventListener("click", () => setProfile(profile.id));
      profileTabs.appendChild(button);
    });
  }

  function renderTargetTabs() {
    targetTabs.innerHTML = "";
    activeProfile.targets.forEach((lang) => {
      const language = LANGUAGES[lang] || { flag: "", label: lang };
      const button = document.createElement("button");
      button.type = "button";
      button.className = lang === targetLang ? "active" : "";
      button.setAttribute("aria-pressed", String(lang === targetLang));
      button.innerHTML = `<span class="flag">${language.flag}</span><span>${language.label}</span><small>${language.native || ""}</small>`;
      button.addEventListener("click", () => setTarget(lang));
      targetTabs.appendChild(button);
    });
  }

  function renderTabs() {
    tabs.innerHTML = "";
    categories.forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = categoryLabel(category);
      button.className = category === state.category ? "active" : "";
      button.addEventListener("click", () => {
        state.category = category;
        render();
      });
      tabs.appendChild(button);
    });
  }

  function render() {
    renderTabs();
    const items = filteredPhrases();
    list.innerHTML = "";
    totalCount.textContent = items.length;
    favoriteCount.textContent = state.favorites.size;

    items.forEach((item, index) => {
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
      card.querySelector(".speakButton").textContent = `▶ ${targetLanguage.label || "듣기"}`;

      if (state.quiz) card.classList.add("hiddenThai");

      star.textContent = state.favorites.has(id) ? "★" : "☆";
      star.classList.toggle("on", state.favorites.has(id));
      star.setAttribute("aria-label", state.favorites.has(id) ? "즐겨찾기 해제" : "즐겨찾기 추가");
      star.setAttribute("aria-pressed", String(state.favorites.has(id)));
      star.addEventListener("click", () => {
        if (state.favorites.has(id)) state.favorites.delete(id);
        else state.favorites.add(id);
        saveFavorites();
        render();
      });

      card.querySelector(".speakButton").addEventListener("click", () => {
        speak(targetText, getPhraseAudioUrl(item, targetLang), LANGUAGES[targetLang]?.speech || "ko-KR");
      });
      reveal.addEventListener("click", () => {
        card.classList.toggle("hiddenThai");
        reveal.textContent = card.classList.contains("hiddenThai") ? `${targetLanguage.label || "정답"} 보기` : uiText("hide");
      });

      if (!state.quiz) reveal.textContent = uiText("hide");
      card.style.order = String(index);
      list.appendChild(card);
    });
  }

  function getLetterSource() {
    const lang = targetLang === "ko" ? "ko" : targetLang;
    if (lang === "ko") return window.KOREAN_LETTERS || [];
    if (lang === "th") return window.THAI_LETTERS || [];
    if (lang === "ja") return window.JAPANESE_LETTERS || [];
    if (lang === "en") return window.ENGLISH_LETTERS || [];
    if (lang === "zh") return window.CHINESE_LETTERS || [];
    if (lang === "vi") return window.VIETNAMESE_LETTERS || [];
    return [];
  }

  function renderLetters() {
    const keyword = state.search.trim().toLowerCase();
    const sourceLetters = getLetterSource();
    const letters = sourceLetters.map((item, index) => ({ ...item, audioIndex: index + 1 }));
    letterList.innerHTML = "";
    const filtered = letters.filter((item) => {
      const text = `${item.type} ${item.char} ${item.name} ${item.sound} ${item.example}`.toLowerCase();
      return !keyword || text.includes(keyword);
    });
    totalCount.textContent = filtered.length;

    filtered.forEach((item) => {
      const card = letterTemplate.content.firstElementChild.cloneNode(true);
      const audioNumber = formatIndex(item.audioIndex);
      card.dataset.audioFile = audioNumber;
      card.querySelector(".letterNumber").textContent = `#${audioNumber}`;
      card.querySelector(".letter").textContent = item.char;
      card.querySelector(".letterName").textContent = `${item.type} · ${item.name}`;
      card.querySelector(".letterSound").textContent = item.sound;
      card.querySelector(".letterExample").textContent = item.example;
      card.querySelector(".letterSpeakButton").addEventListener("click", () => {
        const text = `${item.char} ${item.name}`;
        speak(text, getLetterAudioUrl(item.audioIndex, targetLang), LANGUAGES[targetLang]?.speech || "ko-KR");
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
    state.category = "전체";
    state.search = "";
    searchInput.value = "";
    updateStaticLabels();
    renderProfileTabs();
    renderTargetTabs();
    currentMode === "letters" ? renderLetters() : render();
  }

  function setTarget(lang) {
    targetLang = lang;
    localStorage.setItem("wiiinfoTargetLang", targetLang);
    state.category = "전체";
    state.search = "";
    searchInput.value = "";
    updateStaticLabels();
    renderTargetTabs();
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
    setMode("phrases");
  }

  function updateStaticLabels() {
    document.querySelector(".statCard.teal small").textContent = uiText("total");
    document.querySelector(".statCard.coral small").textContent = uiText("favorites");
    document.querySelector(".statCard.yellow small").textContent = sourceIsThai() ? "แนะนำ" : "추천 학습";
    audienceLabel.textContent = uiText("audience");
    targetLabel.textContent = uiText("target");
    modeLabel.textContent = uiText("mode");
    voiceLabel.textContent = uiText("voice");
    phrasesModeButton.textContent = uiText("phrases");
    lettersModeButton.textContent = uiText("letters");
    femaleVoiceButton.textContent = uiText("female");
    maleVoiceButton.textContent = uiText("male");
    quizLabel.textContent = uiText("quiz");
    searchInput.placeholder = currentMode === "letters" ? uiText("searchLetters") : uiText("searchPhrases");
  }

  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    letterList.hidden ? render() : renderLetters();
  });
  quizToggle.addEventListener("change", (event) => {
    state.quiz = event.target.checked;
    render();
  });
  phrasesModeButton.addEventListener("click", () => setMode("phrases"));
  lettersModeButton.addEventListener("click", () => setMode("letters"));
  femaleVoiceButton.addEventListener("click", () => setVoice("female"));
  maleVoiceButton.addEventListener("click", () => setVoice("male"));
  homeButton.addEventListener("click", goHome);
  backButton.addEventListener("click", () => {
    if (currentMode === "letters") setMode("phrases");
    else history.back();
  });

  if ("speechSynthesis" in window) speechSynthesis.onvoiceschanged = () => getVoice("th-TH");
  const firebasePhrases = await loadFirebasePhrases();
  if (firebasePhrases.length > 0) phrases = firebasePhrases;

  refreshCategories();
  saveFavorites();
  updateStaticLabels();
  renderProfileTabs();
  renderTargetTabs();
  setVoice(voiceMode);
  setMode("phrases");
})();
