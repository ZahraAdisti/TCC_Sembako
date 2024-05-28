const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('toko_sembako', 'root', '', {
  host: '34.101.248.70',
  dialect: 'mysql'
});

module.exports = sequelize;
