const express = require('express');
const router = express.Router();

// Admin credentials
const ADMIN_USER = 'malik';
const ADMIN_PASS = 'admin123';

// Admin login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === ADMIN_USER && password === ADMIN_PASS) {
        res.json({ message: 'Admin logged in' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Get all users (admin only)
router.get('/users', (req, res) => {
    // Only for example; this would require authentication and proper permissions
    res.json(users);
});

module.exports = router;
