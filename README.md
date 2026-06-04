# wiiInfo

다국어 회화 학습 + 한국생활 정보 앱입니다. (Info by Wii · Korea info by Wii)

- **서비스 URL**: https://wiiinfo.web.app
- **Firebase 프로젝트**: `wiigame-448c7` / Hosting target: `wiiinfo`
- 외국인이 한국 생활·여행·주거·부동산 정보를 모국어로 확인하고, 7개 언어(한국어·태국어·일본어·영어·중국어·베트남어·스페인어)를 서로 학습할 수 있습니다.

## 실행

순수 정적 사이트라 `index.html`을 브라우저로 열면 됩니다. (빌드 도구 없음)

## 현재 기능

- 7개 언어 상호 학습: 국가(기준 언어) 선택 → 학습 언어 선택
- 회화 100문장 (카테고리·검색·즐겨찾기·퀴즈 모드)
- 문자표 (태국 문자, 한글, 가나, 알파벳, 병음, 베트남 문자 등)
- 남성/여성 음성 전환 (태국어는 화면 문장도 ผม/ครับ ↔ ฉัน/ค่ะ 전환)
- 음성 재생: mp3 파일 우선, 없으면 브라우저 내장 음성(speechSynthesis) 자동 폴백
- Korea info 허브: 생활·여행·주거·부동산 가이드 + 상세 모달(갤러리·지도 링크)
- 브라우저 언어 자동 감지로 첫 프로필 선택 (저장된 선택이 없을 때, 폴백 en)

## 파일 구조

| 파일 | 역할 |
|---|---|
| `app.js` | 전체 UI 로직 |
| `phrases.js` | 원본 100문장 (ko/th/로마자) + 태국 문자·한글 표 |
| `multilingual-data.js` | 언어 정의, 프로필, UI 카피(7개 언어), 추가 번역(en/ja/zh/vi/es), Korea info 가이드, 문자표 |
| `audio*/` | 언어별×남/여 TTS mp3 (`audio`=태국어 여성, `audio-male`=태국어 남성, `audio-ko`, `audio-ja`, …) |
| `tools/` | Google Cloud TTS 음성 생성 스크립트 |

## TTS 음성 생성

Google Cloud Text-to-Speech API로 mp3를 생성합니다. (Standard 음성은 월 400만 자까지 무료)

```bash
gcloud services enable texttospeech.googleapis.com --project wiigame-448c7
node tools/generate-google-tts.js        # 단일 설정 생성
node tools/generate-voice-batch.js       # 언어×성별 일괄 생성
```

환경변수: `WIIINFO_TTS_VOICE`(음성 이름), `WIIINFO_AUDIO_ROOT`(출력 폴더), `WIIINFO_TTS_LANGUAGE`, `WIIINFO_PHRASE_FIELD`, `WIIINFO_LETTER_SOURCE`, `WIIINFO_TTS_OVERWRITE`

## 번호와 음성 파일 수정 규칙

화면의 `#001` 번호는 문장 데이터 순서와 음성 파일명을 맞추는 기준입니다.

- 문장 `#001`: `audio/phrases/001.mp3`, `audio-male/phrases/001.mp3`, `audio-ko/phrases/001.mp3`, …
- 문자 `#001`: `audio/letters/001.mp3`, `audio-male/letters/001.mp3`, …
- `phrases.js` 문장에 `n` 또는 `audioIndex`를 넣으면 그 번호가 우선 적용됩니다.
- `phrases.js`에서 문장 순서를 바꾸면 번호도 같이 바뀝니다.
- Firestore로 문장을 넣을 때는 `audioIndex`를 넣으면 해당 번호의 음성 파일을 고정해서 재생합니다.

## 태국어 화자 성별

여성형은 기본 `audio` 폴더(`audio/phrases/001.mp3`), 남성형은 `audio-male/phrases/001.mp3`를 사용합니다. Firestore 사용 시 `thMale`, `thFemale`, `roMale`, `roFemale`, `audioUrlMale` 필드를 넣을 수 있고, `thFemale`이 없으면 앱이 기본 규칙으로 여성형을 자동 생성합니다.

## Firestore (선택)

앱은 먼저 `wiiinfoPhrases` 컬렉션을 읽고, 데이터가 없으면 로컬 문장(`phrases.js` + `multilingual-data.js`)으로 동작합니다. 현재는 로컬 데이터로 운영 중입니다.

```json
{
  "category": "부동산",
  "ko": "보증금은 얼마입니까?",
  "th": "เงินมัดจำเท่าไหร่ครับ",
  "roman": "ngoen mat-jam thao-rai khrab",
  "audioIndex": 45,
  "audioUrl": "",
  "sortOrder": 45,
  "isActive": true
}
```

## 배포

```bash
firebase deploy --only hosting:wiiinfo
```

배포 시 버전 3곳을 같이 올립니다. (예: `20260604-06` → `20260604-07`)

1. `index.html`의 `?v=` (5곳)
2. `app.js`의 `ASSET_VERSION`
3. `sw.js`의 `SW_VERSION`

## PWA

- `manifest.webmanifest` + `sw.js`(서비스워커) + `icons/`로 홈화면 설치와 오프라인 동작을 지원합니다.
- 캐시 전략: html/js/css는 네트워크 우선(오프라인일 때만 캐시), mp3는 재생한 파일만 캐시(캐시 우선).
- ⚠️ 서비스워커에 `controllerchange` 자동 reload 코드를 추가하지 말 것 (무한 새로고침 사고 예방).
- 음성 mp3를 다시 생성했을 때는 `sw.js`의 `AUDIO_CACHE` 이름을 올려서(v1→v2) 기기에 저장된 옛 음성을 비웁니다.
- 아이콘 재생성: `tools/make-icons.ps1`
