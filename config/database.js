const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('toko_sembako', 'root', '', {
  host: '34.128.86.172', // Pastikan host ini benar
  dialect: 'mysql'
});

module.exports = sequelize;
