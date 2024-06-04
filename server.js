const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk meng-handle JSON request body
app.use(express.json());
// Middleware untuk meng-handle form data
app.use(express.urlencoded({ extended: false }));

// Menggunakan middleware untuk menyajikan file statis
app.use(express.static(__dirname));

// Middleware CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// Menangani permintaan untuk file index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Menangani permintaan untuk file login.html
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Mulai server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
