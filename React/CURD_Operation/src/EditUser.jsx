import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const EditUser = ({ open, onClose, selectedUser, handleFieldChange, handleEditUser, fields }) => (
  <Dialog open={open} onClose={onClose} fullWidth>
    <DialogTitle>Edit User</DialogTitle>
    <DialogContent>
      {fields.map((key) => (
        <TextField
          key={key}
          label={key === "phnNum" ? "Phone Number" : key}
          value={selectedUser?.[key] || ""}
          onChange={(e) => handleFieldChange(key, e.target.value)}
          fullWidth
          margin="dense"
          disabled={key === "ssn"}
        />
      ))}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={handleEditUser} variant="contained">Update</Button>
    </DialogActions>
  </Dialog>
);

export default EditUser;
