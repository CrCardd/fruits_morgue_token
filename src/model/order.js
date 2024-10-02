const Sequelize = require('sequelize')
const database = require('../config/db');
const product_order = require('./product_order')


const Order = database.define('Order', {
    id_order: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    client_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaulValue: false
    }
});

Order.belongsTo(product_order, { foreignKey: "fk_product_order" });

module.exports = Order
