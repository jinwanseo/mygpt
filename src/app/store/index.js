import { configureStore } from "@reduxjs/toolkit";
import gptSlice from "./gptSlice";

export const store = configureStore({
  reducer: {
    gpt: gptSlice,
  },
});
