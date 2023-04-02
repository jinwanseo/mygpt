import { useCallback, useEffect, useState } from "react";
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
// 읽기 속도 0 ~ 1
talk.rate = 0.92;

/**
 * @title Speech 컴포넌트 (Chat GPT 와 통신)
 */
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
    // 질문 시작
    onSpeechStart: () => {
      setRecentAnswer(null);
      SpeechRecognition.startListening({
        continuous: true,
        language: "ko",
      });
    },

    // 질문 전송
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

  // 질문 취소
  const onSpeechCancel = useCallback(() => {
    // 비활성화 취소
    setDisabled(false);
    // 중지
    SpeechRecognition.stopListening();
    // 질문 리셋
    resetTranscript();
  }, [resetTranscript]);

  useEffect(() => {
    // "취소해줘" 말할시
    if (transcript?.includes("취소해줘")) onSpeechCancel();
  }, [transcript, onSpeechCancel]);

  // 브라우저 미지원시
  if (!browserSupportsSpeechRecognition) {
    return <>지원하지 않는 브라우저!</>;
  }

  return (
    <Stack spacing={1} alignItems="center">
      {/* 질문 */}
      <Question message={transcript} listening={listening} />

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
