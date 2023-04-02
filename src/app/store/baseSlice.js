import { createSlice } from "@reduxjs/toolkit";

export const baseSlice = createSlice({
  name: "base",
  initialState: {
    theme: JSON.parse(sessionStorage.getItem("theme")) || "light",
    path: JSON.parse(sessionStorage.getItem("path")) || "home",
  },
  reducers: {
    setTheme: (state, action) => {
      sessionStorage.setItem("theme", JSON.stringify(action.payload));
      state.theme = action.payload;
    },
    setPath: (state, action) => {
      sessionStorage.setItem("path", JSON.stringify(action.payload));
      state.path = action.payload;
    },
  },
});

export const { setTheme, setPath } = baseSlice.actions;

export default baseSlice.reducer;
