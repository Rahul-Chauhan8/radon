const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({

    amount:Number,
	isFreeAppUser:{
        type: Boolean,
        default:false}, 
	date:String,
    userid:{
        type:ObjectId,
        ref:"User"
    },
    productid:{
        type:ObjectId,
        ref:"product"
    }



}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)