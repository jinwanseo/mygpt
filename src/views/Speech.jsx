import { Mic } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { blueGrey, green } from "@mui/material/colors";
import useGptMessage from "app/hooks/useGptMessage";
import { getCompKey } from "app/utils/mixin";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import * as gptAPI from "../app/api/gpt";
// 텍스트 읽어주는 기본 API
const talk = new SpeechSynthesisUtterance();

function SpeechComponent() {
  useGptMessage();

  const { messages, setMessages, answers, setAnswers } = useGptMessage();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // Handlers
  const handlers = {
    onSpeechStart: () => {
      SpeechRecognition.startListening({
        continuous: true,
        language: "ko",
      });
    },
    onSpeechEnd: async () => {
      // 중지
      SpeechRecognition.stopListening();
      const newMessages = [
        ...messages,
        {
          role: "user",
          content: transcript,
        },
      ];
      setMessages(newMessages);

      // 업로드
      const {
        data: { choices },
      } = await gptAPI.getAnswer(newMessages);
      const newAnswers = [...answers, ...choices.map((c) => c.message.content)];
      setAnswers(newAnswers);
      talk.text = newAnswers[newAnswers.length - 1];
      window.speechSynthesis.speak(talk);
      // 리셋
      resetTranscript();
    },
  };

  if (!browserSupportsSpeechRecognition) {
    return <>지원하지 않는 브라우저!</>;
  }
  return (
    <Stack spacing={1} alignItems="center">
      <Stack spacing={1}>
        {messages?.map((message, idx) => (
          <Typography key={idx}>{message?.content}</Typography>
        ))}
      </Stack>

      <Stack direction={"row"} spacing={1}>
        <IconButton
          size="large"
          color={listening ? green["A200"] : blueGrey[400]}
          sx={{
            border: `2px solid ${listening ? green["A200"] : blueGrey[400]}`,
            ":hover": {
              scale: 1.1,
            },
          }}
          onClick={listening ? handlers.onSpeechEnd : handlers.onSpeechStart}
        >
          <Mic fontSize="large" />
        </IconButton>
      </Stack>

      <Stack spacing={1}>
        {answers?.map((answer) => (
          <Typography key={getCompKey()}>{answer}</Typography>
        ))}
      </Stack>
    </Stack>
  );
}

export default SpeechComponent;
