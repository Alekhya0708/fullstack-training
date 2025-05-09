import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';

function Signup({ onSignupSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  const [alertType, setAlertType] = useState('success');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setAlertType('error');
      setAlertMsg('Invalid email format');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/signup', { email, password });
      setAlertType('success');
      setAlertMsg(res.data.message);
      setTimeout(() => {
        setAlertMsg('');
        onSignupSuccess();
      }, 1500);
    } catch (err) {
      setAlertType('error');
      const errorMessage = err.response?.data?.message || err.message || 'Signup failed';
      setAlertMsg(errorMessage);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>Signup</Typography>
        {alertMsg && <Alert severity={alertType} sx={{ mb: 2 }}>{alertMsg}</Alert>}
        <form onSubmit={handleSignup}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            helperText="At least 8 characters, including uppercase, lowercase, number, and special character."
          />
          <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Signup
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Signup;
