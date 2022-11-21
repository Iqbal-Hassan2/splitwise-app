import React, { useState } from "react";
// @mui/material
import { Container } from "@mui/material";
import { PageTitle } from "../components/dashboard/PageTitle";
import { AddFriendModal } from "../components/dashboard/AddFriendModal";

export function DashboardApp() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const page_title = "Dashboard";
  const page_title_btn = "Add Expense";
  return (
    <Container maxWidth="lg">
      <PageTitle
        title={page_title}
        btn_text={page_title_btn}
        handleOpen={handleOpen}
      />
      <AddFriendModal open={open} handleClose={handleClose} />
    </Container>
  );
}
