import { useState } from "react";
import { Link } from "react-router-dom";
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
import { toast } from "react-toastify";
// components
import Iconify from "../iconify/Iconify";
import { useAuth } from "../../hooks/useAuth";

// ----------------------------------------------------------------------
const error_color = {
  color: "red",
};

export function LoginForm() {
  const [loader, setloader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setloader(true);
    await login(data.email, data.password)
      .then((res) => {
        toast("User login Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      })
      .finally(() => {
        setloader(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Email address"
          {...register("email", {
            required: "Email Address is Required",
          })}
        />
        {errors.email && <p style={error_color}>{errors.email?.message}</p>}

        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "Password is Required",
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

      <LoadingButton
        loading={loader}
        loadingPosition="center"
        fullWidth
        size="large"
        type="submit"
        variant="contained"
      >
        Login
      </LoadingButton>
    </form>
  );
}
