const mongoose = require("mongoose");

const bookAssignmentSchema = new mongoose.Schema({

  bookNmae: String,

	indianPrice: Number,
	europeanPrice: Number,

Year: {
  type:Number,
  default:2021
},
authorName:String,
total Pages:Number,
stockAvilable: Boolean


},{ timestamps: true });

module.exports = mongoose.model('assignmentBook', bookAssignmentSchema)