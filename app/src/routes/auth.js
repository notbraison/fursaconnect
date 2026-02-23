const express = require('express');
const router = express.Router();

// Placeholder for Login
router.post('/login', (req, res) => {
    res.json({ message: "Auth endpoint working" });
});

module.exports = router; 