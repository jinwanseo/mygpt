import React from "react";
import { Box, Button, IconButton, Typography, Sheet } from "@mui/joy";
import { ArrowForward } from "@mui/icons-material";
import useTheme from "app/hooks/useTheme";
import { useNavigate } from "react-router-dom";

/**
 * Credit: https://flutter.dev/
 */
export default function Main() {
  const navigator = useNavigate();
  const { theme, setTheme } = useTheme();
  return (
    <Box sx={{ position: "relative" }}>
      <Sheet
        variant="solid"
        color={theme === "light" ? "primary" : "info"}
        invertedColors
        sx={{
          flexGrow: 1,
          display: "flex",
          bgcolor: theme === "light" ? "#042449" : undefined,
          p: { xs: "36px", md: "70px" },
          pt: { xs: "24px", md: "60px" },
          borderRadius: "40px",
          overflow: "hidden",
          "& button": { borderRadius: "xl" },
        }}
      >
        <Box sx={{ zIndex: 1, position: "relative" }}>
          <Typography level="display2">Get started</Typography>
          <Typography sx={{ mt: 1, mb: 3 }}>
            Chat GPT를 모바일에서 음성으로 사용해보자
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              maxWidth: "max-content",
              "& > *": { flexGrow: 1, fontWeight: "lg" },
            }}
          >
            <Button sx={{ minWidth: 120 }} onClick={() => navigator("/")}>
              시작하기
            </Button>
            <Button
              variant="plain"
              endDecorator={<ArrowForward fontSize="md" />}
              sx={{
                "&:hover": { "--Button-gap": "0.75rem" },
                "& span": { transition: "0.3s" },
              }}
            >
              개발 문서
            </Button>
          </Box>
        </Box>
        <Box
          component="img"
          alt=""
          src="https://storage.googleapis.com/cms-storage-bucket/72521e62275b24d3c37d.png"
          sx={{ position: "absolute", height: "100%", top: 0, right: 0 }}
        />
        <IconButton
          sx={{
            position: "absolute",
            bottom: "1.5rem",
            right: "1.5rem",
            borderRadius: "50%",
          }}
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          🎨
        </IconButton>
      </Sheet>
    </Box>
  );
}
