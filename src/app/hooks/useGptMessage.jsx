import {
  setAnswers as setStoreAnswers,
  setMessages as setStoreMessages,
} from "app/store/gptSlice";
import { useDispatch, useSelector } from "react-redux";

/**
 * @title Gpt 대화 기록 저장 custom hook
 * @description GPT는 그동안의 대화 기록을 토대로 학습 효과를 낼수 잇음
 */
function useGptMessage(props) {
  const dispatch = useDispatch();
  // 메시지 리스트
  const messages = useSelector((state) => state?.gpt?.messages ?? []);
  // 메시지 리스트 SET
  const setMessages = (msgs) => {
    dispatch(setStoreMessages(msgs));
  };

  const answers = useSelector((state) => state?.gpt?.answers ?? []);
  const setAnswers = (ans) => {
    dispatch(setStoreAnswers(ans));
  };

  return { messages, setMessages, answers, setAnswers };
}

export default useGptMessage;
