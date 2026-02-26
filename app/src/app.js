const express = require('express');
const path = require('path');
const router = require('./routes/router'); // Import your newly created router


const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '..', 'public')));

// Body Parser Middleware (Essential for your controllers)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using the router for handling routes
app.use('/', router); // This will handle all routes defined in router.js

module.exports = app;