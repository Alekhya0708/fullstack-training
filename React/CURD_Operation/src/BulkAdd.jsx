import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const BulkAdd = ({ open, onClose, handleBulkAddUser, fields }) => {
  const initialUser = { firstName: '', lastName: '', city: '', state: '', zip: '', ssn: '', phnNum: '' };

  const [users, setUsers] = useState([initialUser]);
  const handleFieldChange = (index, key, value) => {
    const updatedUsers = [...users];
    updatedUsers[index][key] = value;
    setUsers(updatedUsers);
  };

  const addUserField = () => {
    setUsers([...users, { ...initialUser }]);  
  };

  const removeUserField = (index) => {
    const updatedUsers = users.filter((user, currentIndex) =>currentIndex !== index);
    setUsers(updatedUsers);
  };

  const handleSubmit = () => {
    if (users.some(user => !user.firstName || !user.lastName || !user.phnNum)) {
      alert('Please fill in all required fields for all users.');
      return;
    }

    handleBulkAddUser(users); 
    onClose();  
  };
const handleClose = () => {
    setUsers([initialUser]);  
    onClose(); 
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Bulk Add Users</DialogTitle>
      <DialogContent>
        {users.map((user, index) => (
          <div key={index}>
            <h4>User {index + 1}</h4>
            {fields.map((key) => (
              <TextField
                key={key}
                label={key === 'phnNum' ? 'Phone Number' : key}
                value={user[key] || ''}
                onChange={(e) => handleFieldChange(index, key, e.target.value)}
                fullWidth
                margin="dense"
              />
            ))}
            {users.length > 1 && (
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => removeUserField(index)}
                style={{ marginTop: '10px' }}
              >
                Remove User
              </Button>
            )}
          </div>
        ))}
        <Button variant="outlined" onClick={addUserField} style={{ marginTop: '10px' }}>
          Add Another User
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">Add Users</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BulkAdd;
