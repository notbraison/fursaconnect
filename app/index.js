const app = require('./src/app');

const PORT = process.env.PORT || 3000;

// START SERVER
app.listen(PORT, () => {
    console.log(`
    =============================================
    PROTOTYPE SERVER ACTIVE
    Status: Running
    URL: http://localhost:${PORT}
    =============================================
    `);
});