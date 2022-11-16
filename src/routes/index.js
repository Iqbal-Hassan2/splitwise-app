import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// guard
import { AuthGuard } from "../guards/AuthGuard";
import { GuestGuard } from "../guards/GuestGuard";
//
import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { FrontendLayout } from "../layouts/FrontendLayout";
// pages
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { DashboardApp } from "../pages/DashboardApp";

export function Routers() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GuestGuard>
            <FrontendLayout />
          </GuestGuard>
        }
      >
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route
        path="/admin"
        element={
          <GuestGuard>
            <AuthLayout />
          </GuestGuard>
        }
      >
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route
        exect
        path="/dashboard"
        element={
          <AuthGuard>
            <DashboardLayout />
          </AuthGuard>
        }
      >
        <Route index element={<DashboardApp />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
