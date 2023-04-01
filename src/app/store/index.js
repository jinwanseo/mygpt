import { configureStore } from "@reduxjs/toolkit";
import baseSlice from "./baseSlice";
import gptSlice from "./gptSlice";

export const store = configureStore({
  reducer: {
    gpt: gptSlice,
    base: baseSlice,
  },
});
