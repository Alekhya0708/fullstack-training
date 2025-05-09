import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const ViewUser = ({ open, onClose, selectedUser, fields }) => (
  <Dialog open={open} onClose={onClose} fullWidth>
    <DialogTitle>View User</DialogTitle>
    <DialogContent>
      {fields.map((key) => (
        <TextField
          key={key}
          label={key === "phnNum" ? "Phone Number" : key}
          value={selectedUser?.[key] || ""}
          fullWidth
          margin="dense"
          disabled
        />
      ))}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Close</Button>
    </DialogActions>
  </Dialog>
);

export default ViewUser;
