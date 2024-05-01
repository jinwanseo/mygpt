import { api } from "../hooks/useAxios";

export const getAnswer_deprecated = (contents) => {
  return api({
    url: "/v1/chat/completions",
    method: "POST",
    data: {
      model: "gpt-3.5-turbo",
      messages: contents,
    },
  });
};

export const getAnswer = (question) => {
  return api({
    url: "/chat",
    method: "POST",
    data: {
      question : question
    },
    headers: {
      "Content-Type" : "application/x-www-form-urlencoded"
    }
  });
}