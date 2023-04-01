import { createSlice } from "@reduxjs/toolkit";

export const baseSlice = createSlice({
  name: "base",
  initialState: {
    theme: JSON.parse(sessionStorage.getItem("theme")) || "light",
  },
  reducers: {
    setTheme: (state, action) => {
      sessionStorage.setItem("theme", JSON.stringify(action.payload));
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = baseSlice.actions;

export default baseSlice.reducer;
