const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/database'); // Impor dari config/database.js
const sembakoRoutes = require('./routes/sembakoRoutes'); // Impor route sembako yang benar
const userRoutes = require('./routes/userRoutes'); // Impor route user yang benar

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
app.use('/api/user', userRoutes); // Penggunaan routes user yang benar
app.use('/api', sembakoRoutes); // Penggunaan routes sembako yang benar

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
