import { Stack, Typography } from "@mui/joy";
import React from "react";
import useTheme from "app/hooks/useTheme";
import { StyledSheet } from "./Share";
import { teal } from "@mui/material/colors";

function Question({ message }) {
  const { theme } = useTheme();

  return (
    <StyledSheet
      color={theme === "light" ? "primary" : "neutral"}
      variant="outlined"
      sx={{
        backgroundColor: teal["A400"] + "20",
        cursor: "default",
        userSelect: "none",
      }}
    >
      <Stack spacing={1} alignItems={message ? "flex-start" : "center"}>
        <Typography fontSize={21} color="success">
          {message ? message : "아래 버튼을 클릭하고 질문해주세요"}
        </Typography>
      </Stack>
    </StyledSheet>
  );
}

export default Question;
