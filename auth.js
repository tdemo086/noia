const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Secret for JWT
const JWT_SECRET = 'your_jwt_secret';

// Signup
router.post('/signup', async (req, res) => {
    try {
        const { name, email, phone, photo, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, phone, photo, password: hashedPassword });
        // Save user to "database"
        users.push(user);
        res.status(201).json({ message: 'User created' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = users.find(user => user.email === email);
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Forgot password (example, not implemented)
router.post('/forgot-password', (req, res) => {
    // Logic for handling forgot password
    res.status(200).json({ message: 'Forgot password functionality' });
});

module.exports = router;
