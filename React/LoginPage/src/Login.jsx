import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import Signup from './Signup';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  const [alertType, setAlertType] = useState('success');
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setAlertType('error');
      setAlertMsg('Invalid email format');
      return;
    }
    if (password.length < 6) {
      setAlertType('error');
      setAlertMsg('Password must be at least 6 characters');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      setAlertType('success');
      setAlertMsg(res.data.message);
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      setAlertType('error');
      setAlertMsg(err.response?.data?.message || 'Login failed');
    }
  };

  if (showSignup) return <Signup onSignupSuccess={() => setShowSignup(false)} />;

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>Login</Typography>
        {alertMsg && <Alert severity={alertType} sx={{ mb: 2 }}>{alertMsg}</Alert>}
        <form onSubmit={handleLogin}>
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
          />
          <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
        <Typography align="center" sx={{ mt: 2 }}>
          Don't have an account?
        </Typography>
        <Button fullWidth variant="outlined" color="secondary" onClick={() => setShowSignup(true)} sx={{ mt: 1 }}>
          Go to Signup
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
