import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Chip,
  IconButton,
  ListItemDecorator,
  Menu,
  MenuItem,
} from "@mui/joy";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import usePath from "app/hooks/usePath";
import { getCompKey } from "app/utils/mixin";

/**
 * @title 헤더 아바타 버튼
 * @description 클릭시 홈 화면으로 이동
 */

HomeAvatarIconButton.propTypes = {
  // 이미지 소스 경로
  imgSrc: PropTypes.string.isRequired,
};
export function HomeAvatarIconButton({ imgSrc, ...others }) {
  const navigator = useNavigate();
  const onLinkClick = () => {
    navigator("/");
  };
  return (
    <IconButton
      variant="soft"
      size="sm"
      onClick={onLinkClick}
      sx={{ borderRadius: "50%" }}
    >
      <Box
        component={"img"}
        alt="jinwanseo"
        src={imgSrc}
        width={35}
        borderRadius={50}
        {...others}
      />
    </IconButton>
  );
}

/**
 * @title 메뉴 라벨 (메뉴 리스트 내에서 사용)
 */
const MainLabel = ({ name, label, icon, onMenuClick, isBeta }) => {
  return (
    <MenuItem onClick={() => onMenuClick(name)}>
      <ListItemDecorator>{icon}</ListItemDecorator>
      {label}
      {isBeta && (
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
      )}
    </MenuItem>
  );
};

/**
 * @title 메뉴 리스트
 */
export const HomeMenuList = ({ menus }) => {
  const { path, setPath } = usePath();
  const navigator = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  // Handlers..
  const handlers = {
    onMenuClick: (menuName) => {
      // 메뉴 드롭다운 활성화/비활성화
      setAnchorEl(null);
      // URL Path (메뉴 이름으로 구분)
      setPath(menuName);
      // 클릭시 메뉴 이동
      navigator(menus?.[menuName]?.url);
    },
  };

  console.log(path)

  return (
    <Box sx={{ flex: 1, display: "flex", gap: 1, px: 2 }}>
      <Chip
        variant="outlined"
        startDecorator={menus[path].icon}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
        endDecorator={<KeyboardArrowDown />}
      >
        {menus[path].label}
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
        {Object?.keys(menus)?.map((key) => (
          <MainLabel
            key={getCompKey()}
            name={menus[key].name}
            label={menus[key].label}
            icon={menus[key].icon}
            onMenuClick={handlers.onMenuClick}
          />
        ))}
      </Menu>
    </Box>
  );
};
