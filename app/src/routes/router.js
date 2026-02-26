const express = require('express');
const path = require('path');

const router = express.Router();

// Serve static files from the 'public' folder
router.use(express.static(path.join(__dirname, '..', 'public')));

// PAGE ROUTES
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// HEALTHCHECK ENDPOINT
router.get('/api/health', (req, res) => {
    res.json({
        status: 'Fursa prototype online',
        owner: 'Braison Orina',
        version: '1.0.0',
        timestamp: new Date()
    });
});

// Serve pages from the public/pages folder (Uncomment if needed)
// router.get('/dashboard', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'dashboard.html'));
// });

// Import your other API routes
router.use('/api/auth', require('./auth'));
router.use('/api/posts', require('./posts'));
router.use('/api/payments', require('./payments'));
// Add any additional routes here as necessary

module.exports = router;

