const express = require('express');
const router = express.Router();

// Placeholder for fetching posts
router.get('/', (req, res) => {
    res.json({ posts: [] });
});

module.exports = router;