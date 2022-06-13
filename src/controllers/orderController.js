const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function(req,res){
 let order = req.body

let iduser = order.userid

let idproduct = order.productid

let userlist = await userModel.findById({_id:iduser})
let productlist =await productModel.findById({_id:idproduct})



if(userlist==null || productlist==null){return res.send({msg:"Not Valid"})}

 
 if( req.headers.isfreeappuser==="false"){
         
    let balance =userlist.balance
let price = productlist.price
let find = {_id:iduser}
let update1 = {balance:30}
let update = await userModel.findOneAndUpdate({find},{update1})
}

let orderCreated = await orderModel.create(order)
    res.send({data:orderCreated})
  
}


module.exports.createOrder = createOrder