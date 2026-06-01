# wiithai

태국어 초급 학습용 테스트 앱입니다. 처음 버전은 API 비용 없이 브라우저 내장 음성 기능(`speechSynthesis`)으로 태국어 발음을 듣습니다.

## 실행

`index.html`을 브라우저로 열면 됩니다.

## TTS 음성 생성

Google Cloud Text-to-Speech API를 사용해 태국어 MP3 파일을 생성합니다.

```bash
gcloud services enable texttospeech.googleapis.com --project wiigame-448c7
node tools/generate-google-tts.js
```

기본 음성은 `th-TH-Standard-A`입니다. 다른 음성을 쓰려면 `WIITHAI_TTS_VOICE` 환경변수를 지정합니다.

## 현재 기능

- 태국어 100문장
- 한국어 / 태국어 / 영어식 발음 표기
- 카테고리 필터
- 검색
- 즐겨찾기 저장
- 한국어 먼저 보기 퀴즈 모드
- 태국어 문자 기초표
- 태국어 음성 듣기
  - `audioUrl`이 있으면 원어민 녹음 파일 재생
  - `audioUrl`이 없으면 API 비용 없는 브라우저 내장 태국어 음성 재생

## Firebase 방향

현재 문장은 `phrases.js`에 들어 있습니다. 앱은 먼저 `wiigame-448c7` Firebase 프로젝트의 `wiithaiPhrases` 컬렉션을 읽고, 데이터가 없으면 로컬 문장으로 동작합니다.

```json
{
  "category": "부동산",
  "ko": "보증금은 얼마입니까?",
  "th": "เงินมัดจำเท่าไหร่ครับ",
  "roman": "ngoen mat-jam thao-rai khrab",
  "audioUrl": "",
  "sortOrder": 45,
  "isActive": true
}
```

컬렉션명: `wiithaiPhrases`
