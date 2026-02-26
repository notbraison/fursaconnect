const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '..', 'public')));

// Body Parser Middleware (Essential for your controllers)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PAGE ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// HEALTHCHECK ENDPOINT
app.get('/api/health', (req, res) => {
    res.json({
        status: 'FUrsa prototype online',
        owner: 'Braison Orina',
        version: '1.0.0',
        timestamp: new Date()
    });
});

// Serve pages from the public/pages folder
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'dashboard.html'));
});

// API ROUTES (Connected to existing src/routes)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/payments', require('./routes/payments'));

module.exports = app;
