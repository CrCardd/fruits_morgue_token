const Sequelize = require('sequelize')
const database = require('../config/db');
const product = require('./product');


const product_order = database.define('product_order', {
    id_product_order: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

// Definindo as associações
product_order.belongsTo(product, { foreignKey: "fk_product" });


module.exports = product_order
