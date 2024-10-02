const express = require('express');
const route = express.Router();

const home = require('./src/controller/home');
route.get('/', home.init);

const admin = require('./src/controller/admin');
route.get('/admin', admin.init)






module.exports = route