import { ThemeProvider as MuiThemeProvider } from "@mui/joy";
import useTheme from "app/hooks/useTheme";
import React from "react";
import PropTypes from "prop-types";
import { createTheme } from "@mui/system";

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * @title Theme Provider
 */
function ThemeProvider({ children }) {
  const { theme } = useTheme();
  const data = createTheme({
    pallete: {
      mode: theme,
    },
  });

  return <MuiThemeProvider theme={data}>{children}</MuiThemeProvider>;
}

export default ThemeProvider;
