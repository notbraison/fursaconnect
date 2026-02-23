const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

//  Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

//  Body Parser Middleware (Essential for your controllers)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  PAGE ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
//HEALTHCHECK ENDPOINT
app.get('/api/health', (req, res) => {
    res.json({
        status: 'FUrsa prototype online',
        owner: 'Braison Orina',
        version: '1.0.0',
        timestamp: new Date()
    });
});

// Serve  pages from the public/pages folder
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'dashboard.html'));
});

// 4. API ROUTES (Conneced to my existing src/routes)
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/posts', require('./src/routes/posts'));
app.use('/api/payments', require('./src/routes/payments'));



// 5. START SERVER
app.listen(PORT, () => {
    console.log(`
    =============================================
    PROTOTYPE SERVER ACTIVE
    Status: Running
    URL: http://localhost:${PORT}
    =============================================
    `);
});