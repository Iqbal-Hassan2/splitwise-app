import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Divider,
  Stack,
  Button,
  Box,
} from "@mui/material";
// components
import Logo from "../components/logo/Logo";
import Iconify from "../components/iconify/Iconify";
// sections
import { LoginForm } from "../components/auth/LoginForm";
import { all_images } from "../assets/all_images";

// ----------------------------------------------------------------------

const StyledContent = styled("div")(() => ({
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

// ----------------------------------------------------------------------

export function Login() {
  return (
    <>
      <Helmet>
        <title> Login | Splitwise </title>
      </Helmet>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mt: "3%", mb: "3%" }}>
          <Logo />
        </Box>
        <Box sx={{ display: "flex", width: "60%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">Hi, Welcome Back</Typography>
            <img src={all_images.login_banner} alt="login" />
          </Box>
          <Container maxWidth="sm">
            <StyledContent>
              <Stack direction="row" spacing={2}>
                <Button
                  fullWidth
                  size="large"
                  color="inherit"
                  variant="outlined"
                >
                  <Iconify
                    icon="eva:google-fill"
                    color="#DF3E30"
                    width={22}
                    height={22}
                    sx={{ mr: { xs: 1, sm: 2 } }}
                  />
                  Sign in with Google
                </Button>
              </Stack>

              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  OR
                </Typography>
              </Divider>
              {/* login form */}
              <LoginForm />
              <Divider sx={{ my: 3 }}>
                <Typography variant="body2">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      fontWeight: "bold",
                    }}
                  >
                    Get started
                  </Link>
                </Typography>
              </Divider>
            </StyledContent>
          </Container>
        </Box>
      </Box>
    </>
  );
}
