import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

export default function NavbarItem({ item }) {
  let listItemLink = {
    component: forwardRef((props, ref) => (
      <Link ref={ref} {...props} to={item.path} />
    )),
  };
  return (
    <ListItem
      {...listItemLink}
      sx={{
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "0.875rem",
        color: "rgb(55, 59, 63)",
        margin: "20px 0",
        padding: "9px 24px",
        borderRadius: "8px",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        "&:hover": {
          color: "#ace4d6",
        },
      }}
    >
      <ListItemIcon
        sx={{ color: "rgb(55, 59, 63)", "&:hover": { color: "#ace4d6" } }}
      >
        {item.icon}
      </ListItemIcon>
      <ListItemText sx={{ marginBottom: "0" }}>{item.title}</ListItemText>
    </ListItem>
  );
}
