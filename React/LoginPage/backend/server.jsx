const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '987654321',
  database: 'yourdb'
});

const JWT_SECRET = 'your_jwt_secret';

function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return 'Your password must be at least 8 characters, and contain at least one uppercase letter, lowercase letter, number, and special character.';
  }
  return null;
}

app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;
  const checkSql = 'SELECT * FROM users WHERE email = ?';
  db.query(checkSql, [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (results.length > 0) return res.status(400).json({ message: 'Account already exists' });

    const validationError = validatePassword(password);
    if (validationError) return res.status(400).json({ message: validationError });

    const insertSql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(insertSql, [email, password], (err) => {
      if (err) return res.status(500).json({ message: 'Signup failed' });
      res.json({ message: 'Signup successful' });
    });
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ email: results[0].email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
