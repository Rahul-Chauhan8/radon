const mongoose = require("mongoose");

const bookAssignmentSchema = new mongoose.Schema({
    bookName : {
        type: String,
        required:true},
    

indianprice : Number,
europeanprice: Number,

    
    authorName : String,
     totalPages : Number,
      stockAvailable : Boolean,
      tags:[String],
    year :{

    type: Number,
    default:2021
    }


},{ timestamps: true });

module.exports = mongoose.model('assignmentBook', bookAssignmentSchema)