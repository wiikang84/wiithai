(function () {
        const loginBtn = document.getElementById("loginBtn");
        const authMsg = document.getElementById("authMsg");
        const storesCard = document.getElementById("storesCard");
        const editCard = document.getElementById("editCard");
        const myStores = document.getElementById("myStores");
        let db = null, auth = null, currentUser = null, currentStoreId = null, currentStoreHours = {};

        try { firebase.initializeApp(window.WIIINFO_FIREBASE_CONFIG); auth = firebase.auth(); db = firebase.firestore(); }
        catch (e) { authMsg.textContent = "Firebase 초기화 실패: " + e.message; }

        function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

        loginBtn.addEventListener("click", () => {
          const p = new firebase.auth.GoogleAuthProvider();
          p.setCustomParameters({ prompt: "select_account" });
          auth.signInWithPopup(p).catch((err) => { authMsg.textContent = "로그인 실패: " + err.message; });
        });

        auth && auth.onAuthStateChanged((user) => {
          currentUser = user;
          if (!user) { authMsg.textContent = "사장님 계정으로 로그인하세요."; storesCard.classList.add("hidden"); editCard.classList.add("hidden"); loginBtn.classList.remove("hidden"); return; }
          authMsg.textContent = `${user.email} 로그인됨`;
          loginBtn.classList.add("hidden");
          loadMyStores();
        });

        function loadMyStores() {
          storesCard.classList.remove("hidden");
          editCard.classList.add("hidden");
          myStores.innerHTML = "<p class='notice'>불러오는 중...</p>";
          db.collection("stores").where("ownerUid", "==", currentUser.uid).where("ownerStatus", "==", "verified").get().then((snap) => {
            if (snap.empty) { myStores.innerHTML = "<p class='notice'>인증된 내 가게가 없습니다. 메인 앱 '내 정보 → 우리 가게 등록 신청'에서 신청하고 운영자 승인을 받으세요.</p>"; return; }
            myStores.innerHTML = snap.docs.map((doc) => {
              const d = doc.data();
              return `<div class="storeRow" data-edit="${esc(doc.id)}"><div><strong>${esc((d.name && d.name.ko) || "(이름없음)")}</strong><br><small>${esc((d.address && d.address.ko) || "")}</small></div><span class="ghostBtn">관리 ›</span></div>`;
            }).join("");
            myStores.querySelectorAll("[data-edit]").forEach((row) => row.addEventListener("click", () => openEdit(row.dataset.edit)));
          }).catch((err) => { myStores.innerHTML = `<p class='notice'>로드 실패: ${esc(err.message)}</p>`; });
        }

        function openEdit(storeId) {
          db.collection("stores").doc(storeId).get().then((doc) => {
            const d = doc.data();
            currentStoreId = storeId;
            currentStoreHours = d.hours || {}; // [2026-06-18 H1] 기존 다국어 hours 보존 (저장 시 ko만 갱신, 나머지 언어 유지)
            document.getElementById("editTitle").textContent = (d.name && d.name.ko) || "내 가게";
            document.getElementById("editAddr").textContent = "📍 " + ((d.address && d.address.ko) || "") + " (주소·상호 변경은 운영자에게)";
            document.getElementById("e_closed").checked = !!(d.holidayClosed && d.holidayClosed.active);
            document.getElementById("e_hours").value = (d.hours && d.hours.ko) || "";
            document.getElementById("e_photo").value = d.photo || "";
            document.getElementById("e_msg").textContent = "";
            storesCard.classList.add("hidden");
            editCard.classList.remove("hidden");
            window.scrollTo({ top: 0 });
          });
        }

        document.getElementById("backBtn").addEventListener("click", loadMyStores);

        document.getElementById("e_save").addEventListener("click", () => {
          if (!currentStoreId) return;
          const msg = document.getElementById("e_msg");
          msg.textContent = "저장 중...";
          const update = {
            holidayClosed: { active: document.getElementById("e_closed").checked },
            hours: Object.assign({}, currentStoreHours, { ko: document.getElementById("e_hours").value.trim() }),
            photo: document.getElementById("e_photo").value.trim() || null,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          };
          db.collection("stores").doc(currentStoreId).update(update)
            .then(() => { msg.textContent = "✓ 저장됐어요. 손님 화면에 곧 반영됩니다."; })
            .catch((err) => { msg.textContent = "저장 실패: " + err.message; });
        });
      })();