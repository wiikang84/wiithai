# wiiInfo DB 저장·관리 설계 (2026-06-18)

## 0. 먼저: "운영자로 들어가도 아무것도 안 나온다" 진단

store-admin.html 코드는 정상 배포됨(심사탭·등록폼·MASTER_EMAILS 확인). 빈 화면 원인은 코드가 아니라 둘 중 하나:

1. **로그인을 안 함** — store-admin은 메인 앱과 **별도 페이지**라 거기서 다시 "Google 로그인" 버튼을 눌러야 함. 로그인 전엔 등록폼·심사탭이 숨겨져 있고 로그인 버튼만 보임. (메인 앱에서 로그인했어도 store-admin 첫 진입 시 onAuthStateChanged가 한 박자 늦게 잡힘 → 로그인 버튼이 잠깐 보일 수 있음)
2. **데이터가 아직 0건** — 점포 등록 0, 신청 0이면 "등록된 점포가 없습니다 / 대기 중인 신청이 없습니다" 문구만 뜸(빈 목록은 정상 동작).

→ **확인법**: store-admin에서 로그인 버튼 눌러 tmzkt2로 로그인 → 점포 등록 폼 + 심사 탭이 떠야 정상. 안 뜨면 F12 콘솔 빨간 에러 확인.
→ **신청이 들어와도 자동 알림(메일/푸시)은 없음** — 운영자가 store-admin에 들어가야 보임(아래 개선2).

---

## 1. 현재 데이터 아키텍처 — 정적 시드 + Firestore 동적 (2원화)

### A. 정적 시드 — `data/places.js`
- 앱 번들에 포함된 점포(운영자가 미리 코드에 넣은 시드). 빠르고 오프라인 가능.
- **단점**: 수정하려면 코드 수정 + 배포 필요(운영자가 못 고침).

### B. Firestore (프로젝트 `wiigame-448c7`) — 동적
| 컬렉션 | 용도 | 쓰기 권한 |
|---|---|---|
| `stores` | master가 등록한 점포 + owner 편집 | master 전체 / owner는 운영필드만 |
| `ownerClaims` | 사장님 등록 신청 | 본인 create(pending) / master 처리 |
| `users/{uid}` | 사용자 프로필(즐겨찾기·저장점포·언어) | 본인만 |
| `coupons` | 쿠폰 | read-only |
| `wiiinfoPhrases` | 학습 문장(현재 비활성) | read-only |

### 머지
앱 로드 시 `places.js`(정적) + `stores`(Firestore)를 합쳐 발견 화면에 표시. Firestore 실패/오프라인 시 정적만 사용(graceful degrade).

---

## 2. 컬렉션 스키마 (디테일)

### `stores/{storeId}`
```
name:        { ko, en, th, vi, zh, ja, es }   // 7개 언어(현재 ko·en 입력, 나머지 운영 보강)
category:    "grocery" | "restaurant" | "halal"
nationalities: ["vietnam","thai", ...]
address:     { ko }
lat, lng:    number                  // 지도 핀용
coordinateStatus: "verified" | "needs-field-check" | "area-only"
phone:       string
hours:       { ko }                  // 영업시간 (현재 자유텍스트 → 개선3에서 구조화)
items:       { ko }                  // 취급품목
photo:       string | null           // 대표 사진 URL
verified:    bool                    // 점포 정보 검수 여부(운영자가 현장 확인)
ownerUid:    string | null           // 점주 uid (승인 시 연결)
ownerStatus: "verified" | null       // 소유권 인증 상태
holidayClosed: { active: bool }      // 오늘 임시휴무(owner 토글 → 손님 '오늘 휴무' 배지)
source:      "master-form" | "field-seed"
createdBy, createdByEmail            // 등록 운영자
createdAt, updatedAt
```
⚠️ `verified`(점포 정보 검수)와 `ownerStatus`(소유권 인증)는 **다른 개념**. 혼동 금지.

### `ownerClaims/{claimId}`
```
uid:           string                // 신청자 uid
applicantEmail, applicantName, phone
storeName:     string                // 신청한 가게 이름(stores와 매칭)
status:        "pending" | "approved" | "rejected"
createdAt
```

---

## 3. 데이터 라이프사이클 (관리 흐름)

```
1. 점포 등록   master → store-admin → stores 생성(verified:false) → 발견 표시
2. 점포 검수   master 현장 확인 → verified:true
3. 사장님 신청 회원 → ownerClaims(pending)
4. 심사        master → 승인 → stores.ownerUid + ownerStatus:"verified"
5. owner 편집  owner.html → hours·photo·holidayClosed (운영필드만)
6. 손님 반영   발견 카드: 인증 배지 / 오늘 휴무 배지 / 사진
7. 폐업        master 삭제 또는 숨김(향후 status:"closed")
```

---

## 4. 개선 로드맵 (형님 "어떻게 저장·관리" 답)

### 개선1 ★ 점포 데이터 일원화 (가장 권장)
- **문제**: `places.js`(정적) + `stores`(Firestore) 2원화 → 헷갈리고, 시드 수정에 코드 배포 필요. **"운영자가 모든 점포를 한 곳에서 관리"가 안 됨**(정적 점포는 store-admin에 안 보임).
- **안**: `places.js` 시드를 Firestore `stores`로 **1회 마이그레이션** → 이후 모든 점포 = Firestore 단일 관리. `places.js`는 폐기(또는 "Firestore 비었을 때 폴백"으로만).
- **효과**: store-admin에서 모든 점포 보임/수정/삭제, 머지 로직 제거, 운영 일원화.
- **비용**: 매 로드 Firestore 읽기 → **SW 5~10분 캐시 + 1쿼리 일괄**로 무료한도 내(개발팀 확인).
- → 이게 형님이 "DB를 어떻게 관리"의 핵심 답: **흩어진 2원화를 Firestore 단일 소스로 모으는 것**.

### 개선2 신청 알림 (지금 "아무것도 안 나온다"의 진짜 불편)
- ownerClaims pending이 들어와도 운영자가 모름 →
- **간단(지금 가능)**: store-admin 심사 탭에 **"대기 N건" 배지** + 진입 시 자동 로드(이미 됨)
- **정석(향후)**: Cloud Function → 신청 시 운영자 이메일/푸시 자동 발송

### 개선3 영업시간 구조화
- 현재 `hours: { ko: "자유텍스트" }` → 요일별 `{ mon:[{open,close}], ... }` → **"지금 영업중" 자동 판정** (KST 기준)

### 개선4 Firestore 인덱스
- `stores`: category, (ownerUid + ownerStatus), category+nationalities
- `ownerClaims`: status

### 개선5 백업
- Firestore 자동 일일 백업(스케줄) 또는 주기적 export. (DY ON엔 scheduledFirestoreBackup 선례 있음)

---

## 5. 권한 요약 (firestore.rules, 배포됨)
- `stores`: read 공개 / create·delete = master / update = master 전체 or **인증 owner의 운영필드만**(hours·items·photo·holidayClosed)
- `ownerClaims`: 본인 create(pending)·read / master read·update·delete
- `users`: 본인만
- master 판별: 이메일 화이트리스트(`isMaster()`) → 정식은 Custom Claims

---

## 6. ★ 역할·신청 재설계 (서류 첨부) — 형님 지적 반영 (2026-06-18)

### 문제 (현재 허술한 점, 솔직히)
- 누구나 Google 로그인 가능 → **"이 사람이 가게 사장인지 손님인지 알 수 없음."**
- 현재 신청은 이름·연락처 **텍스트만** → **아무나 "내가 이 가게 사장"이라 자칭 가능**(증명 0).
- master가 승인할 **근거(서류)가 없음.**

### 역할 3종 (명확화)
| 역할 | 정의 | 증명 | 권한 |
|---|---|---|---|
| **일반 회원** | Google 로그인 누구나. 가게 사장인지 손님인지 **모름**(기본 가정) | 없음 | 즐겨찾기·저장·발견 |
| **사장님(owner)** | 가게 등록 신청 + **서류 제출** → master 승인된 사람 | 사업자등록증 등 | 본인 가게 운영필드 편집 |
| **마스터(운영자)** | 이메일 화이트리스트 | - | 전체 등록·심사·관리 |

원칙: **일반 ≠ 사장. 서류로 증명되기 전까지는 모두 일반 회원.** 자칭 사장 차단.

### 사장님 등록 신청 — 서류 첨부 (재설계)
신청 폼 제출 항목:
1. 가게 선택/이름, 사장님 성함, 연락처
2. **첨부 서류** (Firebase Storage 업로드, 여러 개):
   - ★ **사업자등록증** (필수) — "이 가게의 정식 사업자"임을 증명
   - 가게 외관/간판 사진 (권장) — 실재 확인
   - 기타 증빙(영업신고증 등, 선택)
→ `ownerClaims.documents: [{ type, url, fileName, uploadedAt }]`
→ master가 심사 탭에서 **서류 열람 후** 승인/반려

### 본인 확인 수준 (형님 "본인여부까지는 아니어도")
- 사업자등록증 = **사업자 증명**(이 가게가 정식 등록 업소). 신청자==사업자 본인인지까지는 데모에서 미검증.
- master가 **서류 + 현장 영업 경험**으로 종합 판단(형님이 그 가게 가봤으니 가장 정확).
- 향후 확장: 전화/문자 인증, 국세청 사업자번호 진위확인 API.

### 기술 구조 (Firebase Storage)
- 버킷: `wiigame-448c7.firebasestorage.app` (firebase-config에 이미 있음)
- 경로: `owner-docs/{uid}/{claimId}/{fileName}`
- `storage.rules`: 본인만 업로드(write), master만 읽기(read), **일반 사용자 읽기 금지**(사업자등록증=개인정보 보호)
- 파일 제한: 이미지/PDF, 5MB 이하, 신청당 최대 5개
- ⚠️ **Firebase Storage 활성화 필요** — Console에서 1회 활성화(코드로 불가). 활성화 후 rules·업로드·심사 전부 코드로 구현.

### ownerClaims 스키마 (서류 반영, 업데이트)
```
uid, applicantEmail, applicantName, phone
storeName: string
storeId: string | null            // 기존 stores와 매칭되면 연결
documents: [                      // 첨부 서류 (신규)
  { type: "business-license"|"storefront"|"other", url, fileName, uploadedAt }
]
status: "pending" | "approved" | "rejected"
reviewNote: string | null         // master 심사 메모(반려 사유 등)
createdAt, reviewedAt
```

---

## 결론 (한 줄)
지금 DB는 **정적 places.js + Firestore stores 2원화**라 "운영자가 한 곳에서 다 관리"가 안 되고, **신청에 서류가 없어 누가 진짜 사장인지 증명 불가**한 게 핵심 결함입니다. **(A) Firestore 단일화 + (B) 사장님 신청 서류 첨부(사업자등록증) + (C) 신청 대기 알림** 이 우선 과제이며, (B)는 Firebase Storage 활성화가 선행 조건입니다.
