(async function () {
  let phrases = (window.THAI_PHRASES || []).map((item, index) => ({
    ...item,
    audioUrl: item.audioUrl || `./audio/phrases/${String(index + 1).padStart(3, "0")}.mp3`
  }));
  const state = {
    category: "전체",
    search: "",
    quiz: false,
    favorites: new Set(JSON.parse(localStorage.getItem("thaiPhraseFavorites") || "[]"))
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
  let categories = [];
  let currentMode = "phrases";
  let voiceMode = localStorage.getItem("wiithaiVoiceMode") || "female";
  let audienceMode = localStorage.getItem("wiithaiAudienceMode") || "ko";

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
        .orderBy("sortOrder", "asc")
        .get();

      return snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          c: data.category || "기타",
          ko: data.ko || "",
          th: data.th || "",
          ro: data.roman || data.ro || "",
          audioUrl: data.audioUrl || ""
        };
      }).filter((item) => item.ko && item.th);
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
      const id = `${item.c}-${item.ko}`;
      const card = template.content.firstElementChild.cloneNode(true);
      const star = card.querySelector(".starButton");
      const reveal = card.querySelector(".revealButton");

      card.querySelector(".tag").textContent = categoryLabel(item.c);
      const isThaiViewer = audienceMode === "th";
      card.querySelector(".korean").textContent = isThaiViewer ? item.th : item.ko;
      card.querySelector(".thai").textContent = isThaiViewer ? item.ko : item.th;
      card.querySelector(".roman").textContent = isThaiViewer ? "คำแปลภาษาไทย" : item.ro;
      card.querySelector(".speakButton").textContent = isThaiViewer ? "▶ 한국어" : "▶ 태국어";

      if (state.quiz) card.classList.add("hiddenThai");

      star.textContent = state.favorites.has(id) ? "★" : "☆";
      star.classList.toggle("on", state.favorites.has(id));
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
          speak(item.ko, getKoreanAudioUrl(index), "ko-KR");
          return;
        }
        speak(item.th, getPhraseAudioUrl(index), "th-TH");
      });
      reveal.addEventListener("click", () => {
        card.classList.toggle("hiddenThai");
        reveal.textContent = card.classList.contains("hiddenThai") ? "태국어 보기" : "가리기";
      });

      if (!state.quiz) reveal.textContent = "가리기";
      card.style.order = String(index);
      list.appendChild(card);
    });
  }

  function renderLetters() {
    const keyword = state.search.trim().toLowerCase();
    const sourceLetters = audienceMode === "th" ? window.KOREAN_LETTERS || [] : window.THAI_LETTERS || [];
    const letters = sourceLetters.map((item, index) => ({
      ...item,
      audioUrl: item.audioUrl || (audienceMode === "th" ? getKoreanLetterAudioUrl(index) : getLetterAudioUrl(index))
    }));
    letterList.innerHTML = "";
    const filtered = letters.filter((item) => {
      const text = `${item.type} ${item.char} ${item.name} ${item.sound} ${item.example}`.toLowerCase();
      return !keyword || text.includes(keyword);
    });
    totalCount.textContent = filtered.length;

    filtered.forEach((item) => {
      const card = letterTemplate.content.firstElementChild.cloneNode(true);
      card.querySelector(".letter").textContent = item.char;
      card.querySelector(".letterName").textContent = `${item.type} · ${item.name}`;
      card.querySelector(".letterSound").textContent = item.sound;
      card.querySelector(".letterExample").textContent = item.example;
      card.querySelector(".letterSpeakButton").addEventListener("click", () => {
        const text = `${item.char} ${item.name}`;
        const audioUrl = audienceMode === "th" ? getKoreanLetterAudioUrl(index) : getLetterAudioUrl(index);
        speak(text, audioUrl, audienceMode === "th" ? "ko-KR" : "th-TH");
      });
      letterList.appendChild(card);
    });
  }

  function getPhraseAudioUrl(index) {
    const folder = voiceMode === "male" ? "audio-male" : "audio";
    return `./${folder}/phrases/${String(index + 1).padStart(3, "0")}.mp3`;
  }

  function getLetterAudioUrl(index) {
    const folder = voiceMode === "male" ? "audio-male" : "audio";
    return `./${folder}/letters/${String(index + 1).padStart(3, "0")}.mp3`;
  }

  function getKoreanAudioUrl(index) {
    const folder = voiceMode === "male" ? "audio-ko-male" : "audio-ko";
    return `./${folder}/phrases/${String(index + 1).padStart(3, "0")}.mp3`;
  }

  function getKoreanLetterAudioUrl(index) {
    const folder = voiceMode === "male" ? "audio-ko-male" : "audio-ko";
    return `./${folder}/letters/${String(index + 1).padStart(3, "0")}.mp3`;
  }

  function setVoice(mode) {
    voiceMode = mode;
    localStorage.setItem("wiithaiVoiceMode", mode);
    femaleVoiceButton.classList.toggle("active", mode === "female");
    maleVoiceButton.classList.toggle("active", mode === "male");
  }

  function setAudience(mode) {
    audienceMode = mode;
    localStorage.setItem("wiithaiAudienceMode", mode);
    koreanLearnerButton.classList.toggle("active", mode === "ko");
    thaiViewerButton.classList.toggle("active", mode === "th");
    render();
  }

  function setMode(mode) {
    const isLetters = mode === "letters";
    currentMode = mode;
    phrasesModeButton.classList.toggle("active", !isLetters);
    lettersModeButton.classList.toggle("active", isLetters);
    list.hidden = isLetters;
    letterList.hidden = !isLetters;
    tabs.hidden = isLetters;
    quizToggle.parentElement.hidden = isLetters;
    koreanLearnerButton.parentElement.hidden = isLetters;
    femaleVoiceButton.parentElement.hidden = isLetters;
    searchInput.placeholder = isLetters ? "태국어 문자, 이름, 발음 검색" : "한국어, 태국어, 발음 검색";
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

  speechSynthesis.onvoiceschanged = () => getVoice("th-TH");
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
