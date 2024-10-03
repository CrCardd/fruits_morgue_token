const Product = require('../model/product')
const Product_order = require('../model/product_order')
const Order = require('../model/order')

module.exports = {

    async init(req, res){
        res.render('../view/index');
    },

    async fazerPedido(req, res) {
        
        const products = req.body.produtos
        console.log(products)

        if(products.length > 0){

            
            console.log("\n\n\nENTROU, PORRA")
            products.forEach(async product => {
                
                await Product_order.create({ 
                    fk_product: product.id,
                    quantity: product.quantity
                });
            });
        } else { console.log("ENTROU NAO")}
            

        


    }
}