const Sequelize = require('sequelize')
const database = require('../config/db');


const Product = database.define('Product', {
    id_product: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        primaryKey: true,
        type: Sequelize.STRING
    }
});


module.exports = Product
