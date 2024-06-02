const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk menangani JSON request body
app.use(express.json());
// Middleware untuk menangani form data
app.use(express.urlencoded({ extended: false }));

// Middleware untuk menyajikan file statis
app.use(express.static(path.join(__dirname, 'public')));

// Menangani permintaan untuk file index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Menangani permintaan untuk file login.html
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Mulai server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
