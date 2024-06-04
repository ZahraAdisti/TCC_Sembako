//app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Pastikan impor route user
const sembakoRoutes = require('./routes/sembakoRoutes');

// Middleware
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// Routes
app.use('/api/user', userRoutes); // Pastikan impor dan penggunaan routes user
app.use('/api', sembakoRoutes);

app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync().then(() => {
    console.log('Database synced');
}).catch(err => {
    console.error('Error syncing database:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
