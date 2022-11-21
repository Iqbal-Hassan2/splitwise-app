import React from "react";
// @mui/material
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

// components
import { Header } from "./dashboard/Header";
import { Sidebar } from "./dashboard/Sidebar";

export function DashboardLayout() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
            backgroundColor: "#1cc29f",
            width: "280px",
            height: "100vh",
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "calc(100% - 280px)",
              xl: "calc(100% - 280px)",
            },
            padding: "40px",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
