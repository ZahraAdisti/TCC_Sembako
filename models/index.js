const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('toko_sembako', 'root', '', {
  host: '34.128.86.172',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Koneksi telah berhasil dibuat.');
  })
  .catch(err => {
    console.error('Tidak dapat terhubung ke database:', err);
  });

module.exports = sequelize;
