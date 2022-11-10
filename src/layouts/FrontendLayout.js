import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./frontend/Footer";
import { Header } from "./frontend/Header";

export function FrontendLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
