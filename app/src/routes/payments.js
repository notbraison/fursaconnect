const express = require('express');
const router = express.Router();

// Placeholder for M-Pesa/Stripe callback
router.get('/status', (req, res) => {
    res.json({ status: "Payment system online" });
});

module.exports = router;