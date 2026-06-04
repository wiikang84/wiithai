# wiiInfo

태국어 초급 학습용 테스트 앱입니다. 처음 버전은 API 비용 없이 브라우저 내장 음성 기능(`speechSynthesis`)으로 태국어 발음을 듣습니다.

## 실행

`index.html`을 브라우저로 열면 됩니다.

## TTS 음성 생성

Google Cloud Text-to-Speech API를 사용해 태국어 MP3 파일을 생성합니다.

```bash
gcloud services enable texttospeech.googleapis.com --project wiigame-448c7
node tools/generate-google-tts.js
```

기본 음성은 `th-TH-Standard-A`입니다. 다른 음성을 쓰려면 `WIIINFO_TTS_VOICE` 환경변수를 지정합니다.

## 현재 기능

- 태국어 100문장
- 한국어 / 태국어 / 영어식 발음 표기
- 문장/문자 카드 번호 표시
- 태국어 문장 남성형/여성형 화자 전환
- 카테고리 필터
- 검색
- 즐겨찾기 저장
- 한국어 먼저 보기 퀴즈 모드
- 태국어 문자 기초표
- 태국어 음성 듣기
  - `audioUrl`이 있으면 원어민 녹음 파일 재생
  - `audioUrl`이 없으면 API 비용 없는 브라우저 내장 태국어 음성 재생

## 태국어 화자 성별

여성형은 `audio/phrases/001.mp3`처럼 기본 `audio` 폴더를 사용하고, 남성형은 `audio-male/phrases/001.mp3`를 사용합니다. 화면 문장도 같은 번호에서 여성형 `ฉัน/ค่ะ/คะ`, 남성형 `ผม/ครับ`으로 같이 전환됩니다.

Firestore를 사용할 때는 필요하면 `thMale`, `thFemale`, `roMale`, `roFemale`, `audioUrlMale` 필드를 넣을 수 있습니다. `thFemale`이 없으면 앱이 기본 규칙으로 여성형을 자동 생성합니다.

## 번호와 음성 파일 수정 규칙

화면의 `#001` 번호는 문장 데이터 순서와 음성 파일명을 맞추는 기준입니다.

- 문장 `#001`: `audio/phrases/001.mp3`, `audio-male/phrases/001.mp3`, `audio-ko/phrases/001.mp3`, `audio-ko-male/phrases/001.mp3`
- 문자 `#001`: `audio/letters/001.mp3`, `audio-male/letters/001.mp3`, `audio-ko/letters/001.mp3`, `audio-ko-male/letters/001.mp3`
- `phrases.js` 문장에 `n` 또는 `audioIndex`를 넣으면 그 번호가 우선 적용됩니다.
- `phrases.js`에서 문장 순서를 바꾸면 번호도 같이 바뀝니다.
- Firestore로 문장을 넣을 때는 `audioIndex`를 넣으면 해당 번호의 음성 파일을 고정해서 재생합니다.

## Firebase 방향

현재 문장은 `phrases.js`에 들어 있습니다. 앱은 먼저 `wiigame-448c7` Firebase 프로젝트의 `wiiinfoPhrases` 컬렉션을 읽고, 데이터가 없으면 로컬 문장으로 동작합니다.

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

컬렉션명: `wiiinfoPhrases`
