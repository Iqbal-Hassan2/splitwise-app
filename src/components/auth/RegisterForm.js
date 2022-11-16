import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
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
  const [loader, setloader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setloader(true);
    registerUser(data.email, data.password, data.firstName, data.lastName)
      .then((response) => {
        toast("User Register Successfully");
        navigate("/admin/login");
      })
      .catch((error) => {
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
          name="firstName"
          label="First Name"
          {...register("firstName", {
            required: "First Name is Required",
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
          })}
        />
        {errors.email && <p style={error_color}>{errors.email?.message}</p>}

        <TextField
          name="password"
          label="Password"
          {...register("password", {
            required: "Password is Required",
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
        loading={loader}
        sx={{ my: 2 }}
      >
        Register
      </LoadingButton>
    </form>
  );
}
