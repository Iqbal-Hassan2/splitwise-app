import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routers } from "./routes";
import StyleTheme from "./theme/theme";
import { useAuth } from "./hooks/useAuth";
import { LoadingScreen } from "./components/LoadingScreen";
export function App() {
  const { isInitialized } = useAuth();
  return (
    <HelmetProvider>
      <BrowserRouter>
        <StyleTheme>
          <ToastContainer />
          {isInitialized ? <Routers /> : <LoadingScreen />}
        </StyleTheme>
      </BrowserRouter>
    </HelmetProvider>
  );
}
