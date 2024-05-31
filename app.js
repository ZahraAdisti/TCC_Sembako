const express = require('express');
const path = require('path');
const sequelize = require('./config/database');
const sembakoRoutes = require('./routes/sembakoRoutes');
const userRoutes = require('./routes/user');


const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api/user', userRoutes);
app.use('/api', sembakoRoutes);
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync().then(() => {
    console.log('Database synced');
}).catch(err => {
    console.error('Error syncing database:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
