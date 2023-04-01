import { Stack, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";
import { Outlet } from "react-router-dom";

function Root(props) {
  return (
    <Stack alignItems={"center"}>
      <Typography
        variant="suttitle1"
        color={teal[900]}
        fontSize={20}
        fontWeight={700}
      >
        내손안의 GPT
      </Typography>
      <Outlet />
    </Stack>
  );
}

export default Root;
