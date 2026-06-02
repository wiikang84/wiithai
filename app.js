(async function () {
  const ASSET_VERSION = "20260602-09";
  const LANGUAGES = window.WIITHAI_LANGUAGES || {};
  const LANGUAGE_NAMES = window.WIIINFO_LANGUAGE_NAMES || {};
  const PROFILES = window.WIITHAI_LEARNER_PROFILES || [];
  const UI_COPY = window.WIIINFO_UI_COPY || {};
  const CATEGORY_LABELS = window.WIIINFO_CATEGORY_LABELS || {};
  const INFO_SECTIONS = window.WIIINFO_INFO_SECTIONS || {};
  const AUDIO_FOLDERS = {
    ja: { female: "audio-ja", male: "audio-ja-male" },
    en: { female: "audio-en", male: "audio-en-male" },
    zh: { female: "audio-zh", male: "audio-zh-male" },
    vi: { female: "audio-vi", male: "audio-vi-male" },
    es: { female: "audio-es", male: "audio-es-male" }
  };
  let phrases = (window.WIITHAI_MULTI_PHRASES || window.THAI_PHRASES || []).map((item, index) => ({
    ...item,
    audioIndex: Number(item.audioIndex || item.n || index + 1),
    audioUrl: item.audioUrl || `./audio/phrases/${String(index + 1).padStart(3, "0")}.mp3`
  }));

  const state = {
    category: "전체",
    search: "",
    quiz: false,
    info: "life",
    favorites: new Set(readJson("thaiPhraseFavorites", []))
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

  let categories = [];
  let currentMode = "phrases";
  let visibleLimit = 0;
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
    return UI_COPY[sourceLang]?.[key] || UI_COPY.ko?.[key] || key;
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
    return availablePhrases().filter((item) => {
      const inCategory = state.category === "전체" || item.c === state.category;
      const text = `${getText(item, sourceLang)} ${getText(item, targetLang)} ${getRoman(item, targetLang)} ${item.c}`.toLowerCase();
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
    const countryNames = {
      ko: "Korea",
      th: "Thailand",
      ja: "Japan",
      en: "USA",
      zh: "China",
      vi: "Vietnam",
      es: "Spain"
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
    const sections = INFO_SECTIONS[sourceLang] || INFO_SECTIONS.ko || [];
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
      item.setAttribute("aria-label", `${card.title} 상세 보기`);
      item.innerHTML = `<strong>${card.title}</strong><p>${card.text}</p>`;
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
    visual.innerHTML = images.map((image, index) => image.src
      ? `<figure class="${index === 0 ? "featured" : ""}" role="button" tabindex="0" data-card-index="${index}" aria-label="${image.label} 상세 보기"><img src="${image.src}" alt="${image.alt || image.label}" loading="lazy" /><figcaption>${image.label}</figcaption></figure>`
      : `<figure class="imageFallback ${index === 0 ? "featured" : ""}" role="button" tabindex="0" data-card-index="${index}" aria-label="${image.label} 상세 보기"><span>${image.label}</span></figure>`).join("");
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
        figure.innerHTML = `<span>${image.alt || ""}</span>`;
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
      ko: { address: "주소", directions: "가는 방법", hours: "운영/시간", map: "지도 보기", source: "자료 기준", copied: "복사됨" },
      en: { address: "Address", directions: "How to get there", hours: "Hours", map: "Open map", source: "Reference", copied: "Copied" },
      ja: { address: "住所", directions: "行き方", hours: "時間", map: "地図を見る", source: "参考", copied: "コピー済み" },
      th: { address: "ที่อยู่", directions: "วิธีเดินทาง", hours: "เวลา", map: "เปิดแผนที่", source: "แหล่งข้อมูล", copied: "คัดลอกแล้ว" },
      zh: { address: "地址", directions: "交通方式", hours: "时间", map: "查看地图", source: "参考", copied: "已复制" },
      vi: { address: "Địa chỉ", directions: "Cách đi", hours: "Thời gian", map: "Mở bản đồ", source: "Nguồn tham khảo", copied: "Đã sao chép" },
      es: { address: "Dirección", directions: "Cómo llegar", hours: "Horario", map: "Abrir mapa", source: "Referencia", copied: "Copiado" }
    };
    const lang = labels[sourceLang] ? sourceLang : "en";
    return labels[lang][key] || key;
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

  function fallbackDetail(card, section) {
    return {
      lead: card.text,
      images: [],
      meta: [],
      sections: [
        { title: section.title, items: [card.text] },
        { title: sourceLang === "ko" ? "체크 포인트" : "Checklist", items: [
          sourceLang === "ko" ? "계약·방문·신청 전에 필요한 서류와 비용을 먼저 확인합니다." : "Check required documents and costs before visiting, applying, or signing.",
          sourceLang === "ko" ? "이해가 안 되는 문장은 사진으로 저장하고 한국어 가능한 사람에게 확인받습니다." : "Save unclear Korean text and ask someone who can read Korean to review it.",
          sourceLang === "ko" ? "금액을 송금하거나 서명하기 전에는 이름, 주소, 날짜를 다시 확인합니다." : "Before sending money or signing, check names, addresses, and dates again."
        ] }
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

    gallery.innerHTML = images.map((image, index) => image.src
      ? `<figure class="${index === 0 ? "featured" : ""}"><img src="${image.src}" alt="${image.alt || card.title}" loading="lazy" /><figcaption>${image.alt || card.title}</figcaption></figure>`
      : `<figure class="imageFallback featured"><span>${card.title}</span></figure>`).join("");
    gallery.querySelectorAll("img").forEach((image) => {
      image.addEventListener("error", () => {
        const figure = image.closest("figure");
        if (!figure) return;
        figure.classList.add("imageFallback");
        figure.innerHTML = `<span>${image.alt || card.title}</span>`;
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
    meta.innerHTML = metaRows.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");
    if (detail.mapUrl) {
      meta.innerHTML += `<a class="mapLink" href="${detail.mapUrl}" target="_blank" rel="noopener">${detailLabel("map")}</a>`;
    }

    actions.innerHTML = (detail.actions || []).map((action, index) => {
      const label = escapeHtml(action.label);
      if (action.type === "copy") {
        return `<button type="button" class="detailAction copyAction" data-action-index="${index}">${label}</button>`;
      }
      const href = action.type === "tel" ? `tel:${action.value}` : action.href;
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

    sections.innerHTML = (detail.sections || []).map((group) => `
      <section>
        <h3>${group.title}</h3>
        <ul>${(group.items || []).map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
    `).join("");

    detailModal.hidden = false;
    document.body.classList.add("modalOpen");
    detailModal.querySelector(".infoDetailClose").focus();
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
    todayCount.textContent = "0";

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
      card.querySelector(".speakButton").textContent = `▶ ${languageName(targetLang) || targetLanguage.label || "듣기"}`;

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
        reveal.textContent = card.classList.contains("hiddenThai") ? `${languageName(targetLang) || targetLanguage.label || "정답"} 보기` : uiText("hide");
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
      const text = `${item.type} ${item.char} ${item.name} ${item.sound} ${item.example}`.toLowerCase();
      return !keyword || text.includes(keyword);
    });
    totalCount.textContent = filtered.length;
    todayCount.textContent = "0";

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
  phrasesModeButton.addEventListener("click", () => setMode("phrases"));
  lettersModeButton.addEventListener("click", () => setMode("letters"));
  femaleVoiceButton.addEventListener("click", () => setVoice("female"));
  maleVoiceButton.addEventListener("click", () => setVoice("male"));
  homeFlagButton.addEventListener("click", goHome);
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

  if ("speechSynthesis" in window) speechSynthesis.onvoiceschanged = () => getVoice("th-TH");
  const firebasePhrases = await loadFirebasePhrases();
  if (firebasePhrases.length > 0) phrases = firebasePhrases;

  refreshCategories();
  resetVisibleLimit();
  saveFavorites();
  updateStaticLabels();
  updateHeroFlag();
  renderProfileTabs();
  renderTargetTabs();
  renderInfoHub();
  setVoice(voiceMode);
  setMode("phrases");
})();
