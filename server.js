const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/database');
const sembakoRoutes = require('./routes/sembakoRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());

// Middleware untuk CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api', sembakoRoutes);

// Layani file statis dari direktori 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Sinkronisasi skema database
sequelize.sync().then(() => {
    console.log('Database tersinkronisasi');
}).catch(err => {
    console.error('Error menyinkronisasi database:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server dimulai pada port ${PORT}`);
});
