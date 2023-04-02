import { useState } from "react";
import { Stack } from "@mui/joy";
import useGptMessage from "app/hooks/useGptMessage";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import SpeechBtn from "./tools/SpeechBtn";
import Answer from "./tools/Answer";
import Question from "./tools/Question";

import * as gptAPI from "../../app/api/gpt";

// 텍스트 읽어주는 기본 API
const talk = new SpeechSynthesisUtterance();
talk.rate = 0.93;

function SpeechComponent() {
  // Gpt 답변 Speak on
  useGptMessage();
  // STT 설정
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  // Gpt Message Store
  const { messages, setMessages } = useGptMessage();
  const [disabled, setDisabled] = useState();
  const [recentAnswer, setRecentAnswer] = useState();
  talk.onend = () => setDisabled(false);

  // Handlers
  const handlers = {
    onSpeechStart: () => {
      setRecentAnswer(null);
      SpeechRecognition.startListening({
        continuous: true,
        language: "ko",
      });
    },
    onSpeechEnd: async () => {
      // 비활성화 (GPT 답변 말하는 도중 누르지 못하게)
      setDisabled(true);

      // 중지
      SpeechRecognition.stopListening();

      // 메시지 리스트 저장 (기존 답변 목록 분석 후 새 답변 도출)
      const newMessages = [
        ...messages,
        {
          role: "user",
          content: transcript,
        },
      ];
      setMessages(newMessages);

      // Chat Gpt - Server 통신
      const {
        data: { choices },
      } = await gptAPI.getAnswer(newMessages);

      // 답변 상태 저장
      setRecentAnswer(choices[0].message.content);
      // 말하기 옵션
      talk.text = choices[0].message.content;
      window.speechSynthesis.speak(talk);

      // 질문 리셋
      resetTranscript();
    },
  };

  if (!browserSupportsSpeechRecognition) {
    return <>지원하지 않는 브라우저!</>;
  }

  return (
    <Stack spacing={1} alignItems="center">
      {/* 질문 */}

      <Question message={transcript} />
      {/* 답변 */}
      <Answer recentAnswer={recentAnswer} />
      {/* 질문 버튼 */}
      <SpeechBtn
        listening={listening}
        disabled={disabled}
        handlers={handlers}
      />
    </Stack>
  );
}

export default SpeechComponent;
