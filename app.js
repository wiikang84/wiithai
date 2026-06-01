(async function () {
  const ASSET_VERSION = "20260601-7";
  let phrases = (window.THAI_PHRASES || []).map((item, index) => ({
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
  const koreanLearnerButton = document.getElementById("koreanLearnerButton");
  const thaiViewerButton = document.getElementById("thaiViewerButton");
  const femaleVoiceButton = document.getElementById("femaleVoiceButton");
  const maleVoiceButton = document.getElementById("maleVoiceButton");
  const audienceLabel = document.getElementById("audienceLabel");
  const modeLabel = document.getElementById("modeLabel");
  const voiceLabel = document.getElementById("voiceLabel");
  const quizLabel = document.getElementById("quizLabel");
  let categories = [];
  let currentMode = "phrases";
  let voiceMode = localStorage.getItem("wiithaiVoiceMode") || "female";
  let audienceMode = localStorage.getItem("wiithaiAudienceMode") || "ko";

  function readJson(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      localStorage.removeItem(key);
      return fallback;
    }
  }

  async function loadFirebasePhrases() {
    if (!window.firebase || !window.WIITHAI_FIREBASE_CONFIG) return [];
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(window.WIITHAI_FIREBASE_CONFIG);
      }
      const collection = window.WIITHAI_FIRESTORE_COLLECTION || "wiithaiPhrases";
      const snapshot = await firebase
        .firestore()
        .collection(collection)
        .where("isActive", "==", true)
        .get();

      return snapshot.docs.map((doc, index) => {
        const data = doc.data();
        return {
          c: data.category || "기타",
          ko: data.ko || "",
          th: data.th || "",
          thMale: data.thMale || data.th || "",
          thFemale: data.thFemale || (window.WIITHAI_MAKE_FEMALE_THAI ? window.WIITHAI_MAKE_FEMALE_THAI(data.th || "") : ""),
          ro: data.roman || data.ro || "",
          roMale: data.roMale || data.roman || data.ro || "",
          roFemale: data.roFemale || (window.WIITHAI_MAKE_FEMALE_ROMAN ? window.WIITHAI_MAKE_FEMALE_ROMAN(data.roman || data.ro || "") : ""),
          audioUrl: data.audioUrl || "",
          audioUrlMale: data.audioUrlMale || "",
          koAudioUrl: data.koAudioUrl || "",
          koAudioUrlMale: data.koAudioUrlMale || "",
          audioIndex: Number(data.audioIndex || data.n || data.sortOrder || index + 1),
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
    return audienceMode === "th" ? thaiLabels[category] || category : category;
  }

  function saveFavorites() {
    localStorage.setItem("thaiPhraseFavorites", JSON.stringify([...state.favorites]));
    favoriteCount.textContent = state.favorites.size;
  }

  function getVoice(lang) {
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

  function uiText(key) {
    const thaiMode = audienceMode === "th";
    const labels = {
      total: thaiMode ? "รายการ" : "현재 항목",
      favorites: thaiMode ? "บันทึก" : "즐겨찾기",
      today: thaiMode ? "วันนี้" : "오늘 학습",
      audience: thaiMode ? "ผู้เรียน" : "학습 대상",
      mode: thaiMode ? "รูปแบบ" : "학습 방식",
      voice: thaiMode ? "ผู้พูด/เสียง" : "화자/목소리",
      phrases: thaiMode ? "100 ประโยค" : "문장 100",
      letters: thaiMode ? "ตัวอักษร" : "문자 기초",
      female: thaiMode ? "ผู้หญิง" : "여성형",
      male: thaiMode ? "ผู้ชาย" : "남성형",
      quiz: thaiMode ? "ดูภาษาไทยก่อน" : "한국어 먼저 보기",
      searchPhrases: thaiMode ? "ค้นหาภาษาไทย เกาหลี หรือเสียงอ่าน" : "한국어, 태국어, 발음 검색",
      searchLetters: thaiMode ? "ค้นหาพยัญชนะ สระ หรือชื่ออักษรเกาหลี" : "태국어 문자, 이름, 발음 검색",
      listenThai: thaiMode ? "▶ ฟังภาษาไทย" : "▶ 태국어",
      listenKorean: thaiMode ? "▶ ฟังภาษาเกาหลี" : "▶ 한국어",
      showTarget: thaiMode ? "한국어 보기" : "태국어 보기",
      hide: thaiMode ? "ซ่อน" : "가리기"
    };
    return labels[key];
  }

  function versionedAudioUrl(url) {
    if (!url || /^(https?:|data:|blob:)/.test(url)) return url;
    return `${url}${url.includes("?") ? "&" : "?"}v=${ASSET_VERSION}`;
  }

  function getThaiAudioUrl(item) {
    const customUrl = voiceMode === "male" ? item.audioUrlMale : item.audioUrl;
    return customUrl ? versionedAudioUrl(customUrl) : getPhraseAudioUrl(item.audioIndex);
  }

  function getThaiText(item) {
    return voiceMode === "male" ? item.thMale || item.th : item.thFemale || item.th;
  }

  function getThaiRoman(item) {
    return voiceMode === "male" ? item.roMale || item.ro : item.roFemale || item.ro;
  }

  function getKoreanPhraseAudioUrl(item) {
    const customUrl = voiceMode === "male" ? item.koAudioUrlMale : item.koAudioUrl;
    return customUrl ? versionedAudioUrl(customUrl) : getKoreanAudioUrl(item.audioIndex);
  }

  function speak(text, audioUrl, lang = "th-TH") {
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
    utterance.rate = 0.78;
    const voice = getVoice(lang);
    if (voice) utterance.voice = voice;
    speechSynthesis.speak(utterance);
  }

  function filteredPhrases() {
    const keyword = state.search.trim().toLowerCase();
    return phrases.filter((item) => {
      const inCategory = state.category === "전체" || item.c === state.category;
      const text = `${item.ko} ${item.th} ${item.ro}`.toLowerCase();
      return inCategory && (!keyword || text.includes(keyword));
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

      card.dataset.audioFile = audioNumber;
      card.querySelector(".numberBadge").textContent = `#${audioNumber}`;
      card.querySelector(".tag").textContent = categoryLabel(item.c);
      const isThaiViewer = audienceMode === "th";
      const thaiText = getThaiText(item);
      card.querySelector(".korean").textContent = isThaiViewer ? thaiText : item.ko;
      card.querySelector(".thai").textContent = isThaiViewer ? item.ko : thaiText;
      card.querySelector(".roman").textContent = isThaiViewer ? `อ่านเกาหลี: ${romanizeKorean(item.ko)}` : getThaiRoman(item);
      card.querySelector(".speakButton").textContent = isThaiViewer ? uiText("listenKorean") : uiText("listenThai");

      if (state.quiz) card.classList.add("hiddenThai");

      star.textContent = state.favorites.has(id) ? "★" : "☆";
      star.classList.toggle("on", state.favorites.has(id));
      star.setAttribute("aria-label", state.favorites.has(id) ? "즐겨찾기 해제" : "즐겨찾기 추가");
      star.setAttribute("aria-pressed", String(state.favorites.has(id)));
      star.addEventListener("click", () => {
        if (state.favorites.has(id)) {
          state.favorites.delete(id);
        } else {
          state.favorites.add(id);
        }
        saveFavorites();
        render();
      });

      card.querySelector(".speakButton").addEventListener("click", () => {
        if (audienceMode === "th") {
          speak(item.ko, getKoreanPhraseAudioUrl(item), "ko-KR");
          return;
        }
        speak(getThaiText(item), getThaiAudioUrl(item), "th-TH");
      });
      reveal.addEventListener("click", () => {
        card.classList.toggle("hiddenThai");
        reveal.textContent = card.classList.contains("hiddenThai") ? uiText("showTarget") : uiText("hide");
      });

      if (!state.quiz) reveal.textContent = uiText("hide");
      card.style.order = String(index);
      list.appendChild(card);
    });
  }

  function renderLetters() {
    const keyword = state.search.trim().toLowerCase();
    const sourceLetters = audienceMode === "th" ? window.KOREAN_LETTERS || [] : window.THAI_LETTERS || [];
    const letters = sourceLetters.map((item, index) => ({
      ...item,
      audioIndex: index + 1,
      audioUrl: item.audioUrl || (audienceMode === "th" ? getKoreanLetterAudioUrl(index + 1) : getLetterAudioUrl(index + 1))
    }));
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
        const audioUrl = audienceMode === "th" ? getKoreanLetterAudioUrl(item.audioIndex) : getLetterAudioUrl(item.audioIndex);
        speak(text, audioUrl, audienceMode === "th" ? "ko-KR" : "th-TH");
      });
      letterList.appendChild(card);
    });
  }

  function getPhraseAudioUrl(audioIndex) {
    const folder = voiceMode === "male" ? "audio-male" : "audio";
    return versionedAudioUrl(`./${folder}/phrases/${formatIndex(audioIndex)}.mp3`);
  }

  function getLetterAudioUrl(audioIndex) {
    const folder = voiceMode === "male" ? "audio-male" : "audio";
    return versionedAudioUrl(`./${folder}/letters/${formatIndex(audioIndex)}.mp3`);
  }

  function getKoreanAudioUrl(audioIndex) {
    const folder = voiceMode === "male" ? "audio-ko-male" : "audio-ko";
    return versionedAudioUrl(`./${folder}/phrases/${formatIndex(audioIndex)}.mp3`);
  }

  function getKoreanLetterAudioUrl(audioIndex) {
    const folder = voiceMode === "male" ? "audio-ko-male" : "audio-ko";
    return versionedAudioUrl(`./${folder}/letters/${formatIndex(audioIndex)}.mp3`);
  }

  function setVoice(mode) {
    voiceMode = mode;
    localStorage.setItem("wiithaiVoiceMode", mode);
    femaleVoiceButton.classList.toggle("active", mode === "female");
    maleVoiceButton.classList.toggle("active", mode === "male");
    femaleVoiceButton.setAttribute("aria-pressed", String(mode === "female"));
    maleVoiceButton.setAttribute("aria-pressed", String(mode === "male"));
    femaleVoiceButton.textContent = uiText("female");
    maleVoiceButton.textContent = uiText("male");
    if (currentMode === "letters") {
      renderLetters();
    } else {
      render();
    }
  }

  function setAudience(mode) {
    audienceMode = mode;
    localStorage.setItem("wiithaiAudienceMode", mode);
    koreanLearnerButton.classList.toggle("active", mode === "ko");
    thaiViewerButton.classList.toggle("active", mode === "th");
    koreanLearnerButton.setAttribute("aria-pressed", String(mode === "ko"));
    thaiViewerButton.setAttribute("aria-pressed", String(mode === "th"));
    updateStaticLabels();
    if (currentMode === "letters") {
      renderLetters();
    } else {
      render();
    }
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
    if (isLetters) {
      renderLetters();
    } else {
      render();
    }
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
    document.querySelector(".statCard.yellow small").textContent = audienceMode === "th" ? "แนะนำ" : "추천 학습";
    audienceLabel.textContent = uiText("audience");
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
    if (letterList.hidden) {
      render();
    } else {
      renderLetters();
    }
  });

  quizToggle.addEventListener("change", (event) => {
    state.quiz = event.target.checked;
    render();
  });

  phrasesModeButton.addEventListener("click", () => setMode("phrases"));
  lettersModeButton.addEventListener("click", () => setMode("letters"));
  koreanLearnerButton.addEventListener("click", () => setAudience("ko"));
  thaiViewerButton.addEventListener("click", () => setAudience("th"));
  femaleVoiceButton.addEventListener("click", () => setVoice("female"));
  maleVoiceButton.addEventListener("click", () => setVoice("male"));
  homeButton.addEventListener("click", goHome);
  backButton.addEventListener("click", () => {
    if (currentMode === "letters") {
      setMode("phrases");
      return;
    }
    history.back();
  });

  if ("speechSynthesis" in window) {
    speechSynthesis.onvoiceschanged = () => getVoice("th-TH");
  }
  const firebasePhrases = await loadFirebasePhrases();
  if (firebasePhrases.length > 0) {
    phrases = firebasePhrases;
  }

  refreshCategories();
  saveFavorites();
  setVoice(voiceMode);
  setAudience(audienceMode);
  setMode("phrases");
})();
