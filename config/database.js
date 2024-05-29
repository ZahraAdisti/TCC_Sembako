const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('toko_sembako', 'root', '', {
  host: '34.101.223.26', // Samakan host dengan yang ada di models/index.js
  dialect: 'mysql'
});

module.exports = sequelize;
