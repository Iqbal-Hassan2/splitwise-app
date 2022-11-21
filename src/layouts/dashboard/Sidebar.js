import React from "react";
// @mui/material
import { Box, List } from "@mui/material";

// menu items
import { sidebar_config } from "./sidebar_config";
import NavbarItem from "./NavbarItem";

export function Sidebar() {
  return (
    <Box sx={{ width: "100%" }}>
      <List sx={{ padding: "0px 16px" }}>
        {sidebar_config?.map((item, index) => (
          <NavbarItem item={item} key={index} />
        ))}
      </List>
    </Box>
  );
}
