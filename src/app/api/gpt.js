import { api } from "../hooks/useGptAxios";

export const getAnswer = (contents) => {
  return api({
    url: "/v1/chat/completions",
    method: "POST",
    data: {
      model: "gpt-3.5-turbo",
      messages: contents,
    },
  });
};
