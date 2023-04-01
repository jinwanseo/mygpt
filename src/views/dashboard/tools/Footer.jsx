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
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-start" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: "row", md: "column" },
            minWidth: { xs: "100%", md: "auto" },
            gap: 1,
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: "initial" } }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/89370593?v=4"
              alt={"jinwaneo"}
            />
          </AspectRatio>
          <CardContent>
            <Typography level="body2">Intro to the MUI ecosystem</Typography>
            <Typography level="body3" sx={{ mb: 0.5 }}>
              MUI blog
            </Typography>
          </CardContent>
        </Card>
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, "--ListItem-radius": "8px" }}
        >
          <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
            <ListSubheader>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Services</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Blog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Contact us</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
            <ListSubheader>Product</ListSubheader>
            <List sx={{ "--ListItemDecorator-size": "32px" }}>
              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <img
                      alt=""
                      src="/static/branding/product-core-dark.svg"
                      width="24"
                    />
                  </ListItemDecorator>
                  MUI Core
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <img
                      alt=""
                      src="/static/branding/product-advanced-dark.svg"
                      width="24"
                    />
                  </ListItemDecorator>
                  MUI X
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <img
                      alt=""
                      src="/static/branding/product-toolpad-dark.svg"
                      width="24"
                    />
                  </ListItemDecorator>
                  MUI Toolpad
                  <Chip
                    variant="soft"
                    size="sm"
                    sx={{ minHeight: 20, fontSize: "xs2", ml: "auto" }}
                  >
                    BETA
                  </Chip>
                </ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
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
