import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    messages: JSON.parse(sessionStorage.getItem("messages")),
    answers: JSON.parse(sessionStorage.getItem("answers")),
  },
  reducers: {
    setMessages: (state, action) => {
      sessionStorage.setItem("messages", JSON.stringify(action.payload));
      state.messages = action.payload;
    },
    setAnswers: (state, action) => {
      sessionStorage.setItem("answers", JSON.stringify(action.payload));
      state.answers = action.payload;
    },
  },
});

export const { setMessages, setAnswers } = gptSlice.actions;

export default gptSlice.reducer;
