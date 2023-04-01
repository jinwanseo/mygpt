import React, { useState } from "react";
import {
  Box,
  IconButton,
  ListItemDecorator,
  Menu,
  MenuItem,
  Sheet,
  Chip,
} from "@mui/joy";

import { BubbleChart, KeyboardArrowDown, Home } from "@mui/icons-material";
import useTheme from "app/hooks/useTheme";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigator = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const { theme } = useTheme();
  const [menu, setMenu] = useState("Home");

  const handlers = {
    onMenuClick: (menuName) => {
      setAnchorEl(null);
      switch (menuName) {
        case "home":
          setMenu("Home");
          navigator("/");
          return;
        case "speech":
          setMenu("내손안의 GPT");
          navigator("/speech");
          return;
        default:
          return;
      }
    },
  };

  return (
    <Sheet
      variant="solid"
      color={theme === "light" ? "primary" : "info"}
      invertedColors
      sx={{
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: "xs" },
        minWidth: "min-content",
      }}
    >
      <IconButton
        variant="soft"
        size="sm"
        onClick={() => {
          navigator("/");
        }}
        sx={{ borderRadius: "50%" }}
      >
        <Box
          component={"img"}
          alt="jinwanseo"
          src="https://avatars.githubusercontent.com/u/89370593?v=4"
          width={35}
          borderRadius={50}
        />
      </IconButton>
      <Box sx={{ flex: 1, display: "flex", gap: 1, px: 2 }}>
        <Chip
          variant="outlined"
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
          }}
          endDecorator={<KeyboardArrowDown />}
        >
          {menu}
        </Chip>
        <Menu
          variant="outlined"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          placement="bottom-start"
          disablePortal
          size="sm"
          sx={{
            "--ListItemDecorator-size": "24px",
            "--ListItem-minHeight": "40px",
            "--ListDivider-gap": "4px",
            minWidth: 200,
          }}
        >
          <MenuItem onClick={() => handlers.onMenuClick("home")}>
            <ListItemDecorator>
              <Home />
            </ListItemDecorator>
            Home
          </MenuItem>
          <MenuItem onClick={() => handlers.onMenuClick("speech")}>
            <ListItemDecorator>
              <BubbleChart />
            </ListItemDecorator>
            내손안의 GPT
            <Chip
              variant="outlined"
              size="sm"
              sx={{
                ml: "auto",
                bgcolor: (theme) =>
                  `rgba(${theme.vars.palette.primary.mainChannel} / 0.1)`,
              }}
            >
              Beta
            </Chip>
          </MenuItem>
        </Menu>
      </Box>
    </Sheet>
  );
}
