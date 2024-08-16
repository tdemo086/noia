const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get user profile
router.get('/profile/:email', (req, res) => {
    const { email } = req.params;
    const user = users.find(user => user.email === email);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
});

module.exports = router;
