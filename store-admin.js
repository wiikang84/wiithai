(function () {
        // [2026-06-18] master 점포 등록 데모. master 판별은 이메일 화이트리스트(데모). 정식은 Custom Claims 예정.
        const MASTER_EMAILS = window.WIIINFO_MASTER_EMAILS || ["dy17715@naver.com", "tmzkt2@gmail.com", "ironyjk@gmail.com", "dylab177151@gmail.com"];
        const loginBtn = document.getElementById("loginBtn");
        const authMsg = document.getElementById("authMsg");
        const formCard = document.getElementById("formCard");
        const listCard = document.getElementById("listCard");
        const saveBtn = document.getElementById("saveBtn");
        const saveMsg = document.getElementById("saveMsg");
        const storeList = document.getElementById("storeList");
        const claimCard = document.getElementById("claimCard");
        const claimList = document.getElementById("claimList");
        // [2026-06-19] 일괄 등록(bulk import) DOM
        const bulkCard = document.getElementById("bulkCard");
        const bulkInput = document.getElementById("bulkInput");
        const bulkFile = document.getElementById("bulkFile");
        const bulkPreviewBtn = document.getElementById("bulkPreviewBtn");
        const bulkImportBtn = document.getElementById("bulkImportBtn");
        const bulkMsg = document.getElementById("bulkMsg");
        const bulkReport = document.getElementById("bulkReport");
        let bulkPending = []; // 미리보기 통과한 신규 점포(정규화 완료) 대기열
        let db = null, auth = null, currentUser = null;

        try {
          firebase.initializeApp(window.WIIINFO_FIREBASE_CONFIG);
          auth = firebase.auth();
          db = firebase.firestore();
        } catch (e) { authMsg.textContent = "Firebase 초기화 실패: " + e.message; }

        function isMaster(user) { return user && MASTER_EMAILS.includes((user.email || "").toLowerCase()); }
        function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
        function langObj(ko, en) { const o = { ko: ko || "" }; if (en) o.en = en; return o; }
        // [2026-06-19] 7개 언어 보존용 — 일괄 등록 시 번역된 다국어 객체(ko/en/th/ja/zh/vi/es)를 그대로 적재
        const I18N_LANGS = ["ko", "en", "th", "ja", "zh", "vi", "es"];
        function langObjFull(src, fallbackKo) {
          const o = {};
          if (src && typeof src === "object") {
            I18N_LANGS.forEach((l) => { if (typeof src[l] === "string" && src[l].trim()) o[l] = src[l].trim(); });
          } else if (typeof src === "string" && src.trim()) {
            o.ko = src.trim();
          }
          if (!o.ko && fallbackKo) o.ko = fallbackKo;
          return o;
        }

        loginBtn.addEventListener("click", () => {
          if (!auth) { authMsg.textContent = "인증 초기화에 실패했습니다. 페이지를 새로고침 해주세요."; return; }
          authMsg.textContent = "로그인 창을 여는 중...";
          const provider = new firebase.auth.GoogleAuthProvider();
          provider.setCustomParameters({ prompt: "select_account" });
          auth.signInWithPopup(provider).catch((err) => {
            const code = (err && err.code) || "";
            // [2026-06-19] 팝업 차단/미지원 환경이면 페이지 이동(redirect) 방식으로 폴백
            if (["auth/popup-blocked", "auth/popup-closed-by-user", "auth/cancelled-popup-request", "auth/operation-not-supported-in-this-environment"].includes(code)) {
              authMsg.textContent = "팝업이 막혀 페이지 이동 방식으로 로그인합니다...";
              auth.signInWithRedirect(provider).catch((e2) => { authMsg.textContent = "로그인 실패: " + ((e2 && e2.code) || e2.message); });
            } else {
              authMsg.textContent = "로그인 실패: " + (code || err.message);
            }
          });
        });

        auth && auth.onAuthStateChanged((user) => {
          currentUser = user;
          if (!user) { authMsg.textContent = "운영자 계정으로 로그인하세요."; formCard.classList.add("hidden"); listCard.classList.add("hidden"); claimCard.classList.add("hidden"); bulkCard.classList.add("hidden"); loginBtn.classList.remove("hidden"); return; }
          if (!isMaster(user)) { authMsg.textContent = `${user.email} 은(는) 운영자 권한이 없습니다.`; formCard.classList.add("hidden"); listCard.classList.add("hidden"); claimCard.classList.add("hidden"); bulkCard.classList.add("hidden"); return; }
          authMsg.textContent = `${user.email} (운영자) 로그인됨`;
          loginBtn.classList.add("hidden");
          formCard.classList.remove("hidden");
          listCard.classList.remove("hidden");
          claimCard.classList.remove("hidden");
          bulkCard.classList.remove("hidden");
          loadStores();
          loadClaims();
        });

        function loadStores() {
          storeList.innerHTML = "<p class='notice'>불러오는 중...</p>";
          // [2026-06-19] 최신 등록(일괄 import 포함)이 위로. 미검증 검수용으로 100개까지 표시.
          db.collection("stores").orderBy("createdAt", "desc").limit(100).get().then((snap) => {
            if (snap.empty) { storeList.innerHTML = "<p class='notice'>아직 등록된 점포가 없습니다.</p>"; return; }
            // 미검증 개수 요약(검수 진행상황)
            let unver = 0;
            snap.docs.forEach((doc) => { if (!doc.data().verified) unver++; });
            const summary = `<p class='notice' style='margin-bottom:8px;'>총 ${snap.size}개 · <strong style='color:#b15c00;'>미검증 ${unver}개</strong> (검증✓ 누르면 손님 화면 상위 노출)</p>`;
            storeList.innerHTML = summary + snap.docs.map((doc) => {
              const d = doc.data();
              const id = esc(doc.id);
              const verified = !!d.verified;
              // [2026-06-19] 검증 배지: 검증완료(초록)/미검증(주황). 검색팀 수집데이터는 기본 미검증.
              const vBadge = verified
                ? `<span class="pill" style="background:#e6f7ec;color:#1a7f37;">✓ 검증</span>`
                : `<span class="pill" style="background:#fff3e0;color:#b15c00;">미검증</span>`;
              const meta = [d.category, (d.address && d.address.ko)].filter(Boolean).map(esc).join(" · ");
              const extra = [];
              if (d.confidence) extra.push("신뢰도 " + esc(d.confidence));
              if (d.source) extra.push(esc(d.source));
              if (d.sourceUrl) extra.push(`<a href="${esc(d.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8602c;">출처</a>`);
              const extraLine = extra.length ? `<br><small style="color:var(--muted)">${extra.join(" · ")}</small>` : "";
              return `<div class="storeRow"><div><strong>${esc((d.name && d.name.ko) || "(이름없음)")}</strong> ${vBadge}<br><small>${meta}</small>${extraLine}</div><div style="display:flex;gap:6px;flex-shrink:0;"><button class="ghostBtn" data-verify="${id}" data-cur="${verified ? "1" : "0"}">${verified ? "검증취소" : "검증✓"}</button><button class="ghostBtn" data-del="${id}">삭제</button></div></div>`;
            }).join("");
            storeList.querySelectorAll("[data-verify]").forEach((b) => b.addEventListener("click", () => {
              const next = b.dataset.cur !== "1";
              b.disabled = true;
              db.collection("stores").doc(b.dataset.verify).update({ verified: next }).then(loadStores)
                .catch((e) => { alert("검증 상태 변경 실패: " + e.message); b.disabled = false; });
            }));
            storeList.querySelectorAll("[data-del]").forEach((b) => b.addEventListener("click", () => {
              if (!confirm("이 점포를 삭제할까요?")) return;
              db.collection("stores").doc(b.dataset.del).delete().then(loadStores);
            }));
          }).catch((err) => { storeList.innerHTML = `<p class='notice'>목록 로드 실패: ${esc(err.message)}</p>`; });
        }

        function loadClaims() {
          claimList.innerHTML = "<p class='notice'>불러오는 중...</p>";
          db.collection("ownerClaims").where("status", "==", "pending").limit(50).get().then((snap) => {
            // [2026-06-19] 대기 건수 배지 — 신청 들어오면 운영자가 바로 인지
            const cc = document.getElementById("claimCount");
            if (cc) cc.textContent = snap.empty ? "심사" : (snap.size + "건 대기");
            if (snap.empty) { claimList.innerHTML = "<p class='notice'>대기 중인 신청이 없습니다.</p>"; return; }
            claimList.innerHTML = snap.docs.map((doc) => {
              const c = doc.data();
              const docs = (c.documents || []).map((dd) => `<a href="${esc(dd.url)}" target="_blank" rel="noopener" style="display:inline-block;margin-top:5px;margin-right:8px;font-size:12px;color:#e8602c;text-decoration:underline;">📎 ${esc(dd.type === "business-license" ? "사업자등록증" : "서류")}</a>`).join("");
              return `<div class="storeRow"><div><strong>${esc(c.storeName || "(가게명 없음)")}</strong><br><small>${esc(c.applicantName || "")} · ${esc(c.phone || "")} · ${esc(c.applicantEmail || "")}</small><br>${docs || "<small style='color:#c0392b;'>⚠ 첨부 서류 없음</small>"}</div><div style="display:flex;gap:6px;"><button class="primaryBtn" style="min-height:38px;padding:0 14px;width:auto;" data-approve="${esc(doc.id)}">승인</button><button class="ghostBtn" data-reject="${esc(doc.id)}">반려</button></div></div>`;
            }).join("");
            claimList.querySelectorAll("[data-approve]").forEach((b) => b.addEventListener("click", () => approveClaim(b.dataset.approve)));
            claimList.querySelectorAll("[data-reject]").forEach((b) => b.addEventListener("click", () => rejectClaim(b.dataset.reject)));
          }).catch((err) => { claimList.innerHTML = `<p class='notice'>신청 로드 실패: ${esc(err.message)}</p>`; });
        }

        async function approveClaim(claimId) {
          try {
            const claimDoc = await db.collection("ownerClaims").doc(claimId).get();
            const c = claimDoc.data();
            // 가게명이 등록 점포와 일치하면 ownerUid 자동 연결 + ownerStatus verified
            // [2026-06-18 M5] 동명 가게 오연결 방지: 정확히 1곳일 때만 자동연결
            const matched = await db.collection("stores").where("name.ko", "==", c.storeName).get();
            if (matched.size === 1) {
              await matched.docs[0].ref.update({ ownerUid: c.uid, ownerStatus: "verified" });
              await db.collection("ownerClaims").doc(claimId).update({ status: "approved" });
              alert("승인 + 가게 소유권 연결 완료. 신청자가 사장님으로 관리할 수 있습니다.");
            } else if (matched.size === 0) {
              await db.collection("ownerClaims").doc(claimId).update({ status: "approved" });
              alert("승인했습니다. 단 '" + c.storeName + "'와 일치하는 등록 점포가 없어 소유권 자동연결은 안 됐습니다. 점포를 먼저 등록한 뒤 다시 연결하세요.");
            } else {
              alert("⚠ '" + c.storeName + "' 동명 점포가 " + matched.size + "곳이라 오연결 방지를 위해 자동연결을 막았습니다. 정확한 가게 확인 후 수동 연결이 필요합니다. (승인 보류)");
              return;
            }
            loadClaims();
          } catch (err) { alert("승인 실패: " + err.message); }
        }

        async function rejectClaim(claimId) {
          if (!confirm("이 신청을 반려할까요?")) return;
          try { await db.collection("ownerClaims").doc(claimId).update({ status: "rejected" }); loadClaims(); }
          catch (err) { alert("반려 실패: " + err.message); }
        }

        saveBtn.addEventListener("click", () => {
          const nameKo = document.getElementById("f_name_ko").value.trim();
          const address = document.getElementById("f_address").value.trim();
          if (!nameKo || !address) { saveMsg.textContent = "상호와 주소는 필수입니다."; return; }
          saveBtn.disabled = true; saveMsg.textContent = "저장 중...";
          const nat = document.getElementById("f_nat").value.split(",").map((s) => s.trim()).filter(Boolean).slice(0, 6);
          const data = {
            name: langObj(nameKo, document.getElementById("f_name_en").value.trim()),
            category: document.getElementById("f_category").value,
            nationalities: nat,
            address: langObj(address),
            phone: document.getElementById("f_phone").value.trim(),
            hours: langObj(document.getElementById("f_hours").value.trim()),
            items: langObj(document.getElementById("f_items").value.trim()),
            ownerNote: document.getElementById("f_owner").value.trim(),
            photo: document.getElementById("f_photo").value.trim() || null,
            verified: false,
            source: "master-form",
            createdBy: currentUser.uid,
            createdByEmail: currentUser.email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          };
          db.collection("stores").add(data).then(() => {
            saveMsg.textContent = "✓ 등록 완료";
            ["f_name_ko", "f_name_en", "f_nat", "f_address", "f_phone", "f_hours", "f_items", "f_owner", "f_photo"].forEach((id) => { document.getElementById(id).value = ""; });
            saveBtn.disabled = false;
            loadStores();
          }).catch((err) => { saveMsg.textContent = "저장 실패: " + err.message; saveBtn.disabled = false; });
        });

        // ===== [2026-06-19] JSON 일괄 등록(bulk import) =====
        // 검색팀 수집 스키마(name/address/region/items/source/sourceUrl/confidence ...)를 stores 스키마로 정규화.
        const dupKey = (nameKo, addrKo) => (String(nameKo).trim().toLowerCase() + "@@" + String(addrKo).trim().toLowerCase());

        function pickKo(v) {
          if (v && typeof v === "object" && typeof v.ko === "string") return v.ko.trim();
          if (typeof v === "string") return v.trim();
          return "";
        }
        function pickEn(v) {
          if (v && typeof v === "object" && typeof v.en === "string") return v.en.trim();
          return "";
        }

        function normalizeStore(raw) {
          if (!raw || typeof raw !== "object") return { ok: false, reason: "객체 아님" };
          const nameKo = pickKo(raw.name);
          const addrKo = pickKo(raw.address);
          if (!nameKo) return { ok: false, reason: "상호(name.ko) 없음" };
          if (!addrKo) return { ok: false, reason: "주소(address.ko) 없음" };
          const cat = ["grocery", "restaurant", "halal"].includes(raw.category) ? raw.category : "grocery";
          const nat = Array.isArray(raw.nationalities)
            ? raw.nationalities.map((s) => String(s).trim()).filter(Boolean).slice(0, 6)
            : (typeof raw.nationalities === "string" ? raw.nationalities.split(",").map((s) => s.trim()).filter(Boolean).slice(0, 6) : []);
          const data = {
            // [2026-06-19] 다국어 객체(ko/en/th/ja/zh/vi/es) 전체 보존. 번역 없으면 ko만 들어가고 앱이 ko로 fallback.
            name: langObjFull(raw.name, nameKo),
            category: cat,
            nationalities: nat,
            address: langObjFull(raw.address, addrKo),
            phone: String(raw.phone || "").trim(),
            hours: langObjFull(raw.hours),
            items: langObjFull(raw.items),
            ownerNote: String(raw.region || raw.ownerNote || "").trim(), // region을 메모로 보존
            photo: raw.photo ? String(raw.photo).trim() : null,
            verified: false,
            source: String(raw.source || "web-research").trim(),
            sourceUrl: raw.sourceUrl ? String(raw.sourceUrl).trim() : null,
            confidence: ["high", "medium", "low"].includes(raw.confidence) ? raw.confidence : null
          };
          return { ok: true, nameKo, addrKo, data };
        }

        async function bulkPreview() {
          bulkPending = [];
          bulkImportBtn.disabled = true;
          bulkReport.innerHTML = "";
          let parsed;
          try {
            parsed = JSON.parse(bulkInput.value.trim());
          } catch (e) { bulkMsg.textContent = "❌ JSON 파싱 실패: " + e.message; return; }
          if (!Array.isArray(parsed)) { bulkMsg.textContent = "❌ 최상위가 배열([])이어야 합니다."; return; }
          if (!parsed.length) { bulkMsg.textContent = "비어 있는 배열입니다."; return; }

          bulkMsg.textContent = "기존 점포와 대조 중...";
          // 기존 stores 전체 로드해 중복(상호+주소) 키 집합 구성
          let existing = new Set();
          try {
            const snap = await db.collection("stores").get();
            snap.forEach((doc) => { const d = doc.data(); existing.add(dupKey((d.name && d.name.ko) || "", (d.address && d.address.ko) || "")); });
          } catch (e) { bulkMsg.textContent = "❌ 기존 점포 로드 실패: " + e.message; return; }

          const seenInBatch = new Set();
          const news = [], dups = [], errs = [];
          parsed.forEach((raw, i) => {
            const n = normalizeStore(raw);
            if (!n.ok) { errs.push({ i, reason: n.reason }); return; }
            const k = dupKey(n.nameKo, n.addrKo);
            if (existing.has(k)) { dups.push(n.nameKo); return; }
            if (seenInBatch.has(k)) { dups.push(n.nameKo + " (입력 내 중복)"); return; }
            seenInBatch.add(k);
            news.push(n);
          });
          bulkPending = news;

          bulkMsg.textContent = `검증 완료 — 신규 ${news.length} · 중복 ${dups.length} · 오류 ${errs.length}`;
          let html = "";
          if (news.length) html += `<div style="margin-top:8px;"><strong style="color:var(--accent-ink);">✓ 신규 등록 예정 ${news.length}건</strong><br>` + news.map((n) => `· ${esc(n.nameKo)} <small>(${esc(n.data.category)} / ${esc(n.addrKo)})</small>`).join("<br>") + "</div>";
          if (dups.length) html += `<div style="margin-top:8px;color:var(--muted);"><strong>↷ 건너뜀(중복) ${dups.length}건</strong><br>` + dups.map((d) => "· " + esc(d)).join("<br>") + "</div>";
          if (errs.length) html += `<div style="margin-top:8px;color:#c0392b;"><strong>⚠ 오류 ${errs.length}건</strong><br>` + errs.map((e) => `· #${e.i}: ${esc(e.reason)}`).join("<br>") + "</div>";
          bulkReport.innerHTML = html;
          bulkImportBtn.disabled = news.length === 0;
        }

        async function bulkImport() {
          if (!bulkPending.length) { bulkMsg.textContent = "먼저 미리보기로 검증하세요."; return; }
          bulkImportBtn.disabled = true; bulkPreviewBtn.disabled = true;
          const total = bulkPending.length;
          let done = 0, failed = 0;
          // Firestore batch 최대 500 → 안전하게 400개씩 청크
          const CHUNK = 400;
          try {
            for (let off = 0; off < bulkPending.length; off += CHUNK) {
              const slice = bulkPending.slice(off, off + CHUNK);
              const batch = db.batch();
              slice.forEach((n) => {
                const ref = db.collection("stores").doc();
                batch.set(ref, Object.assign({}, n.data, {
                  createdBy: currentUser.uid,
                  createdByEmail: currentUser.email,
                  createdAt: firebase.firestore.FieldValue.serverTimestamp()
                }));
              });
              try { await batch.commit(); done += slice.length; }
              catch (e) { failed += slice.length; bulkReport.innerHTML += `<br><span style="color:#c0392b;">청크 ${off}~ 실패: ${esc(e.message)}</span>`; }
              bulkMsg.textContent = `등록 중... ${done}/${total}`;
            }
            bulkMsg.textContent = `✓ 일괄 등록 완료 — 성공 ${done}건${failed ? " / 실패 " + failed + "건" : ""}`;
            bulkPending = [];
            bulkInput.value = "";
            loadStores();
          } catch (e) { bulkMsg.textContent = "일괄 등록 실패: " + e.message; }
          finally { bulkPreviewBtn.disabled = false; }
        }

        bulkPreviewBtn.addEventListener("click", bulkPreview);
        bulkImportBtn.addEventListener("click", bulkImport);
        // [2026-06-19] JSON 파일 업로드 → textarea 채우고 자동 미리보기 (92개+ 수동 복사 방지)
        if (bulkFile) bulkFile.addEventListener("change", () => {
          const f = bulkFile.files && bulkFile.files[0];
          if (!f) return;
          const reader = new FileReader();
          reader.onload = () => { bulkInput.value = String(reader.result || ""); bulkPreview(); };
          reader.onerror = () => { bulkMsg.textContent = "파일 읽기 실패"; };
          reader.readAsText(f);
        });
      })();