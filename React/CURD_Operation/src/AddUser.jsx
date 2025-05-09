import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const AddUser = ({ open, onClose, selectedUser, handleFieldChange, handleAddUser, fields }) => (
  <Dialog open={open} onClose={onClose} fullWidth>
    <DialogTitle>Add User</DialogTitle>
    <DialogContent>
      {fields.map((key) => (
        <TextField
          key={key}
          label={key === "phnNum" ? "Phone Number" : key}
          value={selectedUser?.[key] || ""}
          onChange={(e) => handleFieldChange(key, e.target.value)}
          fullWidth
          margin="dense"
        />
      ))}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={handleAddUser} variant="contained">Add</Button>
    </DialogActions>
  </Dialog>
);

export default AddUser;
