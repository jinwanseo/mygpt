import { Stack } from "@mui/joy";
import useTheme from "app/hooks/useTheme";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { StyledSheet } from "./Share";

function Answer({ recentAnswer }) {
  const { theme } = useTheme();

  if (!recentAnswer) return null;
  return (
    <StyledSheet
      color={theme === "light" ? "primary" : "neutral"}
      variant="soft"
    >
      <Stack spacing={1} alignItems={recentAnswer ? "flex-start" : "center"}>
        <TypeAnimation
          sequence={[recentAnswer, 1000]}
          speed={29}
          style={{ fontSize: "1em" }}
          repeat={Infinity}
          color=""
        />
      </Stack>
    </StyledSheet>
  );
}

export default Answer;
