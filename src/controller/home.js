const Product = require('../model/product')
const Product_order = require('../model/product_order')
const Order = require('../model/order')

module.exports = {

    async init(req, res){
        res.render('../view/index');
    },

    async fazerPedido(req, res) {
        
        const { id, qtd } = req.params;

        const id_ = parseInt(id, 10);
        const quantity = parseInt(qtd, 10);


        console.log("ESSE ID AQUI:   " + id)

        await Product_order.create({ 
            fk_product: id_,
            quantity: quantity
        });


    }
}