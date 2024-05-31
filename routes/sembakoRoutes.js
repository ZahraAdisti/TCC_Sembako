const express = require('express');
const router = express.Router();
const sembakoController = require('../controllers/sembakoController');

// Dapatkan semua Sembako
router.get('/sembakos', sembakoController.getAllSembakos);

// Buat Sembako baru
router.post('/sembakos', sembakoController.createSembakos);

// Dapatkan Sembako berdasarkan ID
router.get('/sembakos/:id', sembakoController.getSembakosById);

// Perbarui Sembako berdasarkan ID
router.put('/sembakos/:id', sembakoController.updateSembakos);

// Hapus Sembako berdasarkan ID
router.delete('/sembakos/:id', sembakoController.deleteSembakos);

module.exports = router;
