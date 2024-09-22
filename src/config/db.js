const sequelize = require('sequelize');

const database = new sequelize (

    'FruitsMorgue',         //DATABASE
    'FruitsMorgue',         //USER
    'programa',             //PASSWORDD
    {
        host: 'localhost',
        port: 56604,
        dialect: 'mssql'
    }
);

database.sync();

module.exports = database;