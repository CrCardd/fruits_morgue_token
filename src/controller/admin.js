const Product = require('../model/product')
const Product_order = require('../model/product_order')
const Order = require('../model/order')


module.exports = {

    async init(req, res){
        res.render('../view/admin');
    },

    async cadst_sobremesa(req,res){
        const data = req.body
        let foto = '-'
       
        if (req.file) {
            foto = req.file.filename;
        }

        console.log("\n\n\n\n\n\n\n\n\n-"+data.foto+"-\n\n\n")
        
        
        await Product.create({
            name: data.nome,
            photo: foto,
            price: data.preco
        });

        res.redirect('/admin')
    }
}