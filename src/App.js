import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Routers } from "./routes";
import StyleTheme from "./theme/theme";

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <StyleTheme>
          <Routers />
        </StyleTheme>
      </BrowserRouter>
    </HelmetProvider>
  );
}
