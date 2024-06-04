const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Konfigurasi CORS
app.use(cors({
  origin: 'https://fe-toko-sembako-dot-tokosembako.et.r.appspot.com', // Sesuaikan dengan domain frontend Anda
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Middleware untuk parsing JSON
app.use(express.json());

// Data dummy
let items = [
  { id: 1, nama: 'Indomie', description: 'Instant noodles', quantity: 10, price: 5000, expiration_date: '2024-12-31' }
];

// CRUD routes
app.get('/api/sembako/', (req, res) => {
  res.json(items);
});

app.post('/api/sembako/', (req, res) => {
  const newItem = { ...req.body, id: items.length + 1 };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/api/sembako/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    items[index] = { ...items[index], ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.delete('/api/sembako/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Route login dummy
app.get('/api/user/login', (req, res) => {
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
