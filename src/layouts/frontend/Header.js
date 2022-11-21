import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Logo from "../../components/logo/Logo";
import { useAuth } from "../../hooks/useAuth";

export function Header() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1cc29f" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Logo />
          <div id="guest" style={{ display: "flex" }}>
            {!isAuthenticated ? (
              <Link
                style={{
                  margin: "0 8px",
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                  fontWeight: "bold",
                  fontSize: "0.9375rem",
                  padding: "8px 22px",
                  color: "#fff",
                  backgroundColor: "#373b3f",
                }}
                to="/admin"
              >
                Log in
              </Link>
            ) : (
              <div style={{ display: "flex" }}>
                <Link
                  style={{
                    margin: "0 8px",
                    borderRadius: "4px",
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    fontSize: "0.9375rem",
                    padding: "8px 22px",
                    color: "#fff",
                    backgroundColor: "#373b3f",
                  }}
                  to="/dashboard"
                >
                  Go to Dashboard
                </Link>
                <Button
                  sx={{
                    margin: "0 8px",
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
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
