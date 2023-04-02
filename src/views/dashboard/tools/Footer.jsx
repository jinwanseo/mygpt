import React from "react";
import {
  AspectRatio,
  Box,
  IconButton,
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemDecorator,
  ListItemButton,
  Typography,
  Sheet,
} from "@mui/joy";

import { GitHub, Instagram, WebAsset } from "@mui/icons-material";

import useTheme from "app/hooks/useTheme";

export default function Footer() {
  const { theme } = useTheme();

  const handlers = {
    onLinkClick: (link) => {
      window.location.href = link;
    },
  };

  return (
    <Sheet
      variant="solid"
      color={theme === "light" ? "primary" : "info"}
      invertedColors
      sx={{
        bgcolor: `${theme === "light" ? "primary" : "info"}.800`,
        flexGrow: 1,
        p: 2,
        mx: -3,
        my: -3,
        borderRadius: { xs: 0, sm: "xs" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton
          variant="plain"
          onClick={() => handlers.onLinkClick("https://github.com/jinwanseo")}
        >
          <GitHub />
        </IconButton>
        <IconButton
          variant="plain"
          onClick={() =>
            handlers.onLinkClick("https://www.instagram.com/roimemory")
          }
        >
          <Instagram />
        </IconButton>
        <IconButton
          variant="plain"
          onClick={() => handlers.onLinkClick("https://goodmemory.tistory.com")}
        >
          <WebAsset />
        </IconButton>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          level="body2"
          startDecorator={<Typography textColor="text.tertiary">by</Typography>}
        >
          jinwanseo
        </Typography>

        <Typography level="body3" sx={{ ml: "auto" }}>
          Copyright 2023
        </Typography>
      </Box>
    </Sheet>
  );
}
