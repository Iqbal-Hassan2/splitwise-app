import React from "react";
import { Helmet } from "react-helmet-async";
import { CenterContent } from "../components/frontend/CenterContent";
import Slider from "../components/frontend/Slider";
import "../assets/styles/index.css";

export function Home() {
  return (
    <>
      <Helmet>
        <title> Home | Splitwise </title>
      </Helmet>
      <Slider />
      <CenterContent />
    </>
  );
}
