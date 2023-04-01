import { Stack, Typography } from "@mui/material";
import React from "react";

function Question({ message }) {
  if (!message) return null;
  return (
    <Stack spacing={1}>
      <Typography>{message}</Typography>
    </Stack>
  );
}

export default Question;
