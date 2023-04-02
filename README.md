# 내손안의 GPT

ChatGPT와 "채팅"이 아닌 "대화"로 질문과 답변을 주고 받는 프로젝트 입니다.

[Live DEMO](https://comforting-pothos-21fc93.netlify.app/speech).

## 프로젝트 시작

### `Open AI 인증 정보 발급`

- openai 웹사이트 접속하여 api key 발급 및 Organization ID 발급
- [API 키 발급](https://platform.openai.com/account/api-keys)
- [Organization ID 발급](https://platform.openai.com/account/org-settings)

### `프로젝트 설정`

- 프로젝트 폴더 내 .env 파일 생성
- .env 파일 내 REACT_APP_GPT_ORG={발급 받은 Organization ID 입력}
- .env 파일 내 REACT_APP_GPT_KEY={발급 받은 API 키 입력}
- .env 저장

### `npm install`

프로젝트 모듈 설치

### `npm start`

프로젝트 시작
http://localhost:3000 접속 시 확인 가능

### `npm run build`

빌드 파일 출력 (프로젝트 폴더 내 build 폴더 생성)

### `프로젝트 구조`

node_modules<br>
public<br>
├── favicon.ico <br/>
└── index.html <br/>
src<br>
├── app <br/>
├──├── api <br/>
├──├──└── gpt.js<br>
├──├── hooks <br/>
├──├──├── useAxios.jsx <br/>
├──├──├── useGptAxios.jsx <br/>
├──├──├── usePath.jsx <br/>
├──├──└── useTheme.jsx<br>
├──├── route <br/>
├──├──└── router.jsx<br>
├──├── store <br/>
├──├──├── baseSlice.jsx <br/>
├──├──├── gptSlice.jsx <br/>
├──├──└── index.jsx<br>
├──└── utils <br/>
├──├──└── index.jsx<br>
├──├── views <br/>
├──├──└── dashboard <br/>
├──├──├───├─── tools <br/>
├──├──├───├───├── Footer.jsx <br/>
├──├──├───├───├── Header.jsx <br/>
├──├──├───├───└── Share.jsx <br/>
├──├──├───├─── Main.jsx <br/>
├──├──├───├─── speech <br/>
├──├──├───├───├─ tools <br/>
├──├──├───├───├─├── Answer.jsx <br/>
├──├──├───├───├─├── Question.jsx <br/>
├──├──├───├───├─├── Share.jsx <br/>
├──├──├───├───├─└── SpeechBtn.jsx <br/>
├──├──├───├───└── Speech.jsx <br/>
├── index.js <br/>
├── Root.jsx <br/>
.env<br>
.gitignore<br>
jsonfig.json<br>
package-lock.json<br>
package.json<br>
README.md<br>
