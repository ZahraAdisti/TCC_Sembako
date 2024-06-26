const express = require('express');
const router = express.Router();
const sembakoController = require('../controllers/sembakoController');

// Dapatkan semua Sembako
router.get('/sembako', sembakoController.getAllSembako);

// Buat Sembako baru
router.post('/sembako', sembakoController.createSembako);

// Dapatkan Sembako berdasarkan ID
router.get('/sembako/:id', sembakoController.getSembakoById);

// Perbarui Sembako berdasarkan ID
router.put('/sembako/:id', sembakoController.updateSembako);

// Hapus Sembako berdasarkan ID
router.delete('/sembako/:id', sembakoController.deleteSembako);

module.exports = router;
