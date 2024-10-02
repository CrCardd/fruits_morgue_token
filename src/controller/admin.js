const Product = require('../model/product')
const Product_order = require('../model/product_order')
const Order = require('../model/order')


module.exports = {

    async init(req, res){
        res.render('../view/admin');
    }
}