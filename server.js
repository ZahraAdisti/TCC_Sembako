const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk meng-handle JSON request body
app.use(express.json());
// Middleware untuk meng-handle form data
app.use(express.urlencoded({ extended: false }));

// Menggunakan middleware untuk menyajikan file statis
app.use(express.static(path.join(__dirname, 'public' )));

// Middleware CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://fe-toko-sembako-dot-tokosembako.et.r.appspot.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Menangani permintaan untuk file index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  'index.html'));
});

// Menangani permintaan untuk file login.html
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname,  'login.html'));
});

// Mulai server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
