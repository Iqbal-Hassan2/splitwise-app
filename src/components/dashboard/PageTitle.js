import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export function PageTitle({ title, btn_text, handleOpen }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#e5e5e5",
        padding: "15px",
        borderRadius: "4px",
      }}
    >
      <Typography variant="h3">{title}</Typography>
      {btn_text ? (
        <Button
          sx={{
            backgroundColor: "#ff652f",
            padding: "12px 20px",
            color: "#fff",
            "&:hover": { backgroundColor: "rgb(55, 59, 63)" },
            "&:focus": { outline: "none" },
          }}
          onClick={handleOpen}
        >
          {btn_text}
        </Button>
      ) : null}
    </Box>
  );
}
