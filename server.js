const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/database');
const sembakoRoutes = require('./routes/sembakoRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());

// Middleware for CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api', sembakoRoutes);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sync the database schema
sequelize.sync().then(() => {
    console.log('Database synced');
}).catch(err => {
    console.error('Error syncing database:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
