import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// @mui
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import Iconify from "../iconify/Iconify";
import { useAuth } from "../../hooks/useAuth";

// ----------------------------------------------------------------------
const error_color = {
  color: "red",
};

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password);
    // navigate("/dashboard", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Email address"
          {...register("email", {
            required: "Email Address is Required",
            maxLength: 20,
          })}
        />
        {errors.email && <p style={error_color}>{errors.email?.message}</p>}

        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "Password is Required",
            maxLength: 20,
          })}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {errors.password && (
          <p style={error_color}>{errors.password?.message}</p>
        )}
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <Checkbox name="remember" label="Remember me" />
        <Link
          to="#"
          style={{
            textDecoration: "none",
            color: "blue",
            fontWeight: "bold",
          }}
        >
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained">
        Login
      </LoadingButton>
    </form>
  );
}
