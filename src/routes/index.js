import React from "react";
import { Route, Routes } from "react-router-dom";
//
import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { FrontendLayout } from "../layouts/FrontendLayout";
import { DashboardApp } from "../pages/DashboardApp";
// pages
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";

export function Routers() {
  return (
    <Routes>
      <Route path="/admin" element={<FrontendLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardApp />} />
      </Route>
    </Routes>
  );
}
