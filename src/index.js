import router from "app/route/router";
import { store } from "app/store";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "@fontsource/public-sans";
import { CssBaseline } from "@mui/joy";
import ThemeProvider from "views/theme/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <CssBaseline />
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </ReduxProvider>
);
