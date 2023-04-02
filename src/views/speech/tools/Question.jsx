import React from "react";
import { Chip, Stack, Typography } from "@mui/joy";
import useTheme from "app/hooks/useTheme";
import { StyledSheet } from "./Share";

function Question({ message, listening }) {
  const { theme } = useTheme();

  return (
    <StyledSheet
      color={theme === "light" ? "primary" : "neutral"}
      variant="outlined"
      sx={{
        backgroundColor: "#1de9b620",
        cursor: "default",
        userSelect: "none",
      }}
    >
      <Stack spacing={2}>
        <Stack spacing={1} alignItems={message ? "flex-start" : "center"}>
          <Typography fontSize={21} color="neutral">
            {"무엇을 도와드릴까요?"}
          </Typography>
          <Typography fontSize={21} color="success">
            {message ? message : "아래 버튼을 클릭하고 질문해주세요"}
          </Typography>
        </Stack>
        {listening && (
          <Stack spacing={1} alignItems={"center"}>
            <Chip variant="outlined">
              <Stack spacing={1} alignItems="center" p={1}>
                듣고 있어요
                <Typography fontSize={13} color="neutral">
                  질문 취소시, "취소해줘" 라고 말씀해주세요
                </Typography>
              </Stack>
            </Chip>
          </Stack>
        )}
      </Stack>
    </StyledSheet>
  );
}

export default Question;
