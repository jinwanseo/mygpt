import { Stack } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function Answer({ recentAnswer }) {
  return (
    <Stack spacing={1}>
      {recentAnswer && (
        <TypeAnimation
          sequence={[recentAnswer, 1000]}
          speed={29}
          style={{ fontSize: "1em" }}
          repeat={Infinity}
        />
      )}
    </Stack>
  );
}

export default Answer;
