import { Stack, Typography } from "@mui/joy";
import useTheme from "app/hooks/useTheme";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { StyledSheet } from "./Share";

function Answer({ recentAnswer }) {
  const { theme } = useTheme();

  return (
    <StyledSheet
      color={theme === "light" ? "primary" : "neutral"}
      variant="soft"
    >
      <Stack spacing={1} alignItems={recentAnswer ? "flex-start" : "center"}>
        {recentAnswer ? (
          <TypeAnimation
            sequence={[recentAnswer, 1000]}
            speed={29}
            style={{ fontSize: "1em" }}
            repeat={Infinity}
            color=""
          />
        ) : (
          <Typography fontSize={21} color="neutral">
            무엇을 도와드릴까요?
          </Typography>
        )}
      </Stack>
    </StyledSheet>
  );
}

export default Answer;
