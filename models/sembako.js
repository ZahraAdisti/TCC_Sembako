// models/sembako.js
const sequelize = require('./index'); // Update this line to import sequelize from index.js
const { DataTypes } = require('sequelize');

const Sembako = sequelize.define('Sembako', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    expiration_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Sembako;
