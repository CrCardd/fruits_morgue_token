const sequelize = require('sequelize');

const database = new sequelize (

    'FruitsMorgue',         //DATABASE
    'FruitsMorgue',         //USER
    'programa',             //PASSWORDD
    {
        host: 'localhost',
        port: 58868,
        dialect: 'mssql'
    }
);

database.sync();

module.exports = database;