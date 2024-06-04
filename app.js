//app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Pastikan impor route user
const sembakoRoutes = require('./routes/sembakoRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/user', userRoutes); // Pastikan impor dan penggunaan routes user
app.use('/api', sembakoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
