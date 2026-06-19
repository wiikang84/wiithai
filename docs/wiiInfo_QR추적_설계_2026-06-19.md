# wiiInfo QR 유입 추적(Attribution) 설계 (2026-06-19)

> 형님 아이디어: QR마다 고유 번호 → 어느 업체에 배치했는지 오프라인 메모 → 누가 누구의 소개로 들어와 **설치·가입까지 했는지** 추적.

## 목표
QR별 전환 퍼널을 측정한다: **유입 → 설치 → 가입**. QR 없이 들어온 직접 유입(direct)과 비교한다.

```
q001 (안산 와룽키타 카운터, 6/19 부착)
  유입(visit) 30 → 설치(install) 5 → 가입(signup) 3
direct (QR 없이 URL/검색 유입)
  유입 120 → 설치 8 → 가입 2
```

## URL 규약
- QR 콘텐츠: `https://wiiinfo.web.app/?place=<storeId>&r=<code>`
  - 도착지 = **해당 가게 상세** (형님 결정 2026-06-19). 그 가게 손님이 자기 가게를 자국어로 보고 자연스럽게 앱 인지.
  - `r` = 추적번호(q001…). 가게와 분리 → 같은 가게라도 배치 위치별로 다른 코드 가능(예: 카운터용/입구용).
- ref 없는 진입 = `direct`.

## 데이터 모델 (Firestore)
- `qrcodes/{code}` — 운영자 관리
  - `code`(q001), `label`(배치 메모: "안산 와룽키타 카운터"), `placeId`(연결 가게, 선택), `createdAt`, `createdByEmail`
  - 집계 카운터(선택): `visits`, `installs`, `signups`
- `users/{uid}` — 가입 귀속
  - `signupRef`(q001 또는 "direct"), `signupAt` — 가입 순간 1회 기록, 이후 불변

## 추적 흐름 (앱 app.js)
1. **유입 캡처**: 진입 시 `?r=` 파싱 →
   - localStorage `wiiinfoRef`가 비어 있을 때만 `{code, ts, landingPlace}` 저장(첫 유입 고정, 덮어쓰기 금지)
   - Analytics 이벤트 `qr_visit`(param: ref) 전송
   - `?place=` 있으면 해당 가게 상세로 라우팅(기존 urlPlace 로직 재사용)
2. **설치 캡처**: `appinstalled` 이벤트 → Analytics `app_install`(param: ref = 저장된 코드 or direct)
3. **가입 캡처**: 최초 로그인(신규 user 문서 생성) 시 `users/{uid}.signupRef = 저장된 코드 or "direct"`
4. **direct**: localStorage ref 없으면 모든 단계에서 ref="direct"

## 집계 (store-admin → 신설 탭 또는 qr-admin)
- 1차: `users` where signupRef == code → 가입 수. qrcodes 목록 + 배치메모.
- 2차: visits/installs는 Analytics 대시보드(무료) 또는 qrcodes 카운터(Firestore).
- QR 이미지: 코드별 인쇄용 QR 생성(가게 모국어 안내 문구 포함) — 포스터 생성기와 통합.

## 단계별 구현
- **1단계(지금)**: app.js — `?r=` 캡처 + localStorage 첫유입 저장 + `?place=` 라우팅 + Analytics qr_visit. (추적 데이터 쌓기 시작)
- **2단계**: 가입 귀속(signupRef) + appinstalled 이벤트.
- **3단계**: qr-admin — 코드 발급(번호 자동)·배치메모·가게연결, QR 이미지 생성(인쇄).
- **4단계**: 집계 대시보드(번호별 유입→설치→가입), direct 비교.

## 비용/보안
- Analytics는 무료. 가입 귀속은 기존 user 문서 쓰기에 필드 1개 추가(추가 비용 0).
- qrcodes는 master만 생성/수정(rules), read 공개(앱이 도착지 라우팅 시 참조 가능).
- 익명 카운터 증가는 어뷰징 여지 → 1차는 Analytics 집계로 회피, 필요 시 Cloud Function.
