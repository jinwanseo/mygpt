import { Mic } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/joy";
import { blueGrey, teal } from "@mui/material/colors";
import React from "react";
import { MoonLoader, ScaleLoader } from "react-spinners";

import PropTypes from "prop-types";

SpeechBtn.propTypes = {
  listening: PropTypes.bool,
  disabled: PropTypes.bool,
  handlers: PropTypes.object,
};

function SpeechBtn({ listening, disabled, handlers }) {
  return (
    <Stack direction={"row"} spacing={1} sx={{ p: 1.5 }}>
      <IconButton
        size="large"
        sx={{
          border: `2px solid ${listening ? teal["A400"] : blueGrey[300]}`,
          borderRadius: 50,
          p: 1,
          ":hover": {
            scale: 1.1,
          },
        }}
        onClick={listening ? handlers.onSpeechEnd : handlers.onSpeechStart}
        disabled={disabled}
      >
        {!listening && !disabled && (
          <Mic sx={{ fontSize: 35 }} color={teal["A400"]} />
        )}
        {listening && <ScaleLoader color={teal["A400"]} size={20} />}
        {disabled && <MoonLoader color={teal["A400"]} size={20} />}
      </IconButton>
    </Stack>
  );
}

export default SpeechBtn;
