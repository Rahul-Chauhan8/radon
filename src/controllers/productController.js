const productModel = require("../models/productModel")

const createProduct = async function(req,res){
    let data =req.body
 let product1 = await productModel.create(data)

 let b = product1
 res.send({msg:b})


}




module.exports.createProduct = createProduct