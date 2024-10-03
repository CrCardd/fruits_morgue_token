const express = require('express');
const route = express.Router();
const multer = require('multer');
const config = require('./src/config/multer');

const home = require('./src/controller/home');
route.get('/', home.init);
route.post('/fazerPedido', home.fazerPedido);

const admin = require('./src/controller/admin');
route.get('/admin', admin.init)
route.post('/create_sobremesa', multer(config).single('foto'), admin.cadst_sobremesa)






module.exports = route