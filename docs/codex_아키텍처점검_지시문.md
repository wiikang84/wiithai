# codex 아키텍처·코드 점검 지시문 (wiiInfo)

> 형님이 codex에 넘길 점검 요청. wiithai 폴더에서 실행한 codex에 아래를 붙여넣으세요.

---

```
wiiInfo (이 폴더, C:\Users\fathe\dy-openwork\wiithai) 코드 전체를 점검·리뷰해줘.
스택: 빌드 도구 없는 순수 Vanilla JS + Firebase compat SDK(auth/firestore/storage) + 카카오맵 + PWA(sw.js). 정적 데이터(places.js) + Firestore 하이브리드.

[점검 항목 — 심각도(High/Medium/Low) + 파일:라인 근거로]

1. 아키텍처
   - app.js가 ~2,000줄 단일 IIFE. 관심사 분리·유지보수성·확장성(역할/점주 추가로 비대) 문제와 개선안.
   - 거대 데이터 파일(multilingual-data.js 105KB, data/info-guide.js 215KB) 로딩 전략 — 초기 페이로드 영향.
   - 정적 places.js + Firestore stores 2원화 머지(loadFirebaseStores)의 정합성·회귀 위험.

2. 로딩 안정성 (형님이 "청크 오류" 우려 — 번들이 없어 청크 분할 오류는 구조상 없음을 확인하고, 대신 아래를 봐줘)
   - index.html 스크립트 로드 순서·동기/blocking, 의존성 누락 가능성.
   - Firebase SDK·firebase-config·데이터 스크립트 로드 실패 시 graceful degrade 여부.
   - sw.js 캐시 전략(network-first, mp3/이미지 cache-first)·버전 동기화(ASSET_VERSION/SW_VERSION/?v=) 누락 위험.

3. 잠재 버그·런타임 오류
   - 비동기 경합(auth onAuthStateChanged, loadFirebaseStores, mergeCloudFavorites).
   - 이벤트 리스너 누수(모달 반복 오픈, 카드 재렌더).
   - 널/언디파인드 접근, KST 타임존(영업시간·날짜).

4. 보안
   - CSP(firebase.json), storage.rules(사업자등록증=owner-docs, 본인 업로드/master 열람), firestore.rules(stores·ownerClaims·users 역할/owner 권한).
   - 권한 상승·소유권 탈취 가능성(ownerUid/ownerStatus, ownerClaims 승인 흐름).
   - master 이메일 화이트리스트 클라/룰 중복.

5. 역할/점주 시스템 논리
   - 회원/사장님(owner)/운영자(master) 판별(getRole), 가게 등록신청→서류첨부(Storage)→심사→소유권 연결→owner 편집 흐름의 허점.
   - 인증 owner가 자기 가게 운영필드만 수정 가능한지(onlyOwnerEditableFields) 실제 검증.

6. 성능
   - 초기 로딩 청크/스크립트, Firestore 읽기 비용(매 로드 stores 쿼리), SW TTL 캐시 권고.

[원칙]
- 읽기 전용 점검만. 코드 수정 금지.
- 각 발견사항: 심각도 + 파일:라인 + 무엇이 왜 문제인지 + 개선안.
- "청크/번들 오류" 우려에 대한 명확한 결론 포함.
- 마지막에 우선순위 Top 5 개선안.
```

---

## 참고
- codex 점검 결과가 나오면 저(Claude)에게 주세요 — 제 개발팀 회의 결과와 **교차 검증**해서 진짜 고칠 것만 추리겠습니다.
- 핵심 관심: ① app.js 거대 IIFE 분할 여부 ② 정적/Firestore 머지 안정성 ③ 권한(서류·소유권) 보안 ④ 초기 로딩 성능
