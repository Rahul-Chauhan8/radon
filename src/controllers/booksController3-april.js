const bookAssignmentModel = require("../models/booksModel3-april")
const createAssignmentBook = async function (req,res){
   let assignmentData = req.body 

   let saveAssignmentData = await bookAssignmentModel.create(assignmentData)
     res.send({msg: saveAssignmentData})

}

const bookList = async function (req,res){
 let allAssignmentBook = await bookAssignmentModel.find().select({bookName:1, authorName:1, _id:0})

    res.send({msg:allAssignmentBook})
}

const getBooksInYear = async function (req,res){

   let year = req.body.year

    let publishyear = await bookAssignmentModel.find({ year })
   
       res.send({msg: publishyear}) }


   const getParticularBooks= async function (req,res){
let alldata = req.body
    let allAssignmentBook = await bookAssignmentModel.find({ 
        $or:[ { bookName:alldata.bookName}, {authorName:alldata.authorName},{year:alldata.year} ]
   
    }) 
     res.send({msg:allAssignmentBook})
   }
   

   const getXINRBooks = async function (req,res){
   let mydata = req.body
    let getinrdata = await bookAssignmentModel.find({
   // $or:[{ indianprice :{$eq:500}},{indianprice:{$eq:3000}}, {indianprice:{$eq:110}}]
   indianprice:$or[{$eq:500},{$eq:3000},{$eq:110}]

    })
   
       res.send({msg:getinrdata})
   }
   const getRandomBooks= async function (req,res){
    let randomBook = await bookAssignmentModel.find({
   $or :[{totalPages:{$gt:500}}, { stockAvailable:true}]
    })
   
       res.send({msg:randomBook})
   }


module.exports.createAssignmentBook = createAssignmentBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks