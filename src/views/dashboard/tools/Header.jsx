import React from "react";
import { Sheet, styled } from "@mui/joy";

import useTheme from "app/hooks/useTheme";
import { HomeAvatarIconButton, HomeMenuList } from "./Share";
import { BubbleChart, Home } from "@mui/icons-material";

/**
 * @title 메뉴 리스트
 * @memo 포멧에 맞게 작성시 자동 추가
 */
const menus = {
  home: {
    name: "home", //
    icon: <Home />,
    label: "메인",
    url: "/",
  },
  speech: {
    name: "speech",
    icon: <BubbleChart />,
    label: "내손안의 GPT",
    url: "/speech",
  },
};

const StyledSheet = styled(Sheet)`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 16px;
  min-width: min-content;
`;

export default function Header() {
  const { theme } = useTheme();

  return (
    <StyledSheet
      variant="solid"
      color={theme === "light" ? "primary" : "info"}
      invertedColors
      sx={{
        borderRadius: { xs: 0, sm: "xs" },
      }}
    >
      <HomeAvatarIconButton
        imgSrc={"https://avatars.githubusercontent.com/u/89370593?v=4"}
      />
      <HomeMenuList menus={menus} />
    </StyledSheet>
  );
}
