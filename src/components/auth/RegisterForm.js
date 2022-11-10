import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// @mui
import { Stack, IconButton, InputAdornment, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import Iconify from "../iconify/Iconify";
import { useAuth } from "../../hooks/useAuth";

// ----------------------------------------------------------------------
const error_color = {
  color: "red",
};
export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const handleSubmit = () => {
  //   navigate("/login", { replace: true });
  // };
  const onSubmit = (data) => {
    signUp(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField
          name="firstName"
          label="First Name"
          {...register("firstName", {
            required: "First Name is Required",
            maxLength: 20,
          })}
        />
        {errors.firstName && (
          <p style={error_color}>{errors.firstName?.message}</p>
        )}
        <TextField
          name="lastName"
          label="Last Name"
          {...register("lastName", {
            required: "Last Name is Required",
            maxLength: 20,
          })}
        />
        {errors.lastName && (
          <p style={error_color}>{errors.lastName?.message}</p>
        )}
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
          {...register("password", {
            required: "Password is Required",
            maxLength: 20,
          })}
          type={showPassword ? "text" : "password"}
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
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        sx={{ my: 2 }}
      >
        Register
      </LoadingButton>
    </form>
  );
}
