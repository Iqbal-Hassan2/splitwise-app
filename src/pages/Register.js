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
import { RegisterForm } from "../components/auth/RegisterForm";
import { all_images } from "../assets/all_images";

// ----------------------------------------------------------------------

const StyledContent = styled("div")(() => ({
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

// ----------------------------------------------------------------------

export function Register() {
  return (
    <>
      <Helmet>
        <title> Register | Splitwise </title>
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
            <Typography variant="h3">Get started absolutely free.</Typography>
            <img src={all_images.register_banner} alt="register" />
          </Box>
          <Container maxWidth="sm">
            <StyledContent>
              <RegisterForm />
              <Divider sx={{ my: 3 }}>
                <Typography variant="body2">
                  Already have an account?{" "}
                  <Link
                    to="/login"
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
