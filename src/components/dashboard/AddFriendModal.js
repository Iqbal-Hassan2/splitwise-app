import React, { useState } from "react";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function AddFriendModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Invite friends
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
              <TextField
                label="Enter Friend Email Addresse"
                variant="outlined"
              />
              <TextField
                label="Include an optional message"
                multiline
                rows={4}
              />
              <Button fullWidth variant="outlined">
                Send invites and add friends
              </Button>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
