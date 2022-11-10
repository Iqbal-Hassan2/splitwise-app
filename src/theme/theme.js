import React from "react";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
//
import palette from "./palette";
import typography from "./typography";
import shadows from "./shadows";

export default function StyleTheme({ children }) {
  const themeOption = {
    palette,
    typography,
    shadows: shadows(),
  };
  const theme = createTheme(themeOption);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}
