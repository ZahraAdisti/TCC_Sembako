const Sembako = require('../models/sembako');

// Mendapatkan semua sembako
exports.getAllSembako = async (req, res) => {
    console.log("Mengambil semua sembako");
    try {
        const sembakos = await Sembako.findAll();
        res.status(200).json(sembakos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Membuat sembako baru
exports.createSembako = async (req, res) => {
    console.log("Membuat sembako baru");
    try {
        const { name, description, quantity, price, expiration_date } = req.body;
        const newSembako = await Sembako.create({ name, description, quantity, price, expiration_date });
        res.status(201).json(newSembako);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mendapatkan sembako berdasarkan ID
exports.getSembakoById = async (req, res) => {
    console.log(`Mengambil sembako dengan ID: ${req.params.id}`);
    try {
        const sembako = await Sembako.findByPk(req.params.id);
        if (!sembako) {
            return res.status(404).json({ error: 'Sembako tidak ditemukan' });
        }
        res.status(200).json(sembako);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mengupdate sembako berdasarkan ID
exports.updateSembako = async (req, res) => {
    console.log(`Mengupdate sembako dengan ID: ${req.params.id}`);
    try {
        const { name, description, quantity, price, expiration_date } = req.body;
        const sembako = await Sembako.findByPk(req.params.id);
        if (!sembako) {
            return res.status(404).json({ error: 'Sembako tidak ditemukan' });
        }
        sembako.name = name;
        sembako.description = description;
        sembako.quantity = quantity;
        sembako.price = price;
        sembako.expiration_date = expiration_date;
        await sembako.save();
        res.status(200).json(sembako);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Menghapus sembako berdasarkan ID
exports.deleteSembako = async (req, res) => {
    console.log(`Menghapus sembako dengan ID: ${req.params.id}`);
    try {
        const sembako = await Sembako.findByPk(req.params.id);
        if (!sembako) {
            return res.status(404).json({ error: 'Sembako tidak ditemukan' });
        }
        await sembako.destroy();
        res.status(200).json({ message: 'Sembako berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
