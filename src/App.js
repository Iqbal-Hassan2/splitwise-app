import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Routers } from "./routes";
import StyleTheme from "./theme/theme";
import { ProvideAuth } from "./hooks/useAuth";

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <StyleTheme>
          <ProvideAuth>
            <Routers />
          </ProvideAuth>
        </StyleTheme>
      </BrowserRouter>
    </HelmetProvider>
  );
}
