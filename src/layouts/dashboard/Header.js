import * as React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
// components
import Logo from "../../components/logo/Logo";
// hooks
import { useAuth } from "../../hooks/useAuth";

export function Header() {
  const { logout } = useAuth();
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#1cc29f", boxShadow: "none" }}
    >
      <Container maxWidth="100%">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Logo />
          <div style={{ display: "flex", padding: "10px 0" }}>
            <Link
              style={{
                borderRadius: "4px",
                whiteSpace: "nowrap",
                fontWeight: "bold",
                fontSize: "0.9375rem",
                padding: "8px 22px",
                color: "#fff",
                backgroundColor: "#373b3f",
              }}
              to="/"
            >
              Go to Home
            </Link>
            <Button
              sx={{
                margin: "0 8px",
                padding: "8px 22px",
                color: "#fff",
                backgroundColor: "#373b3f",
                "&:hover": { backgroundColor: "#0c3c32" },
              }}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
