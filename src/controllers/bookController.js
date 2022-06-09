const authorModel = require("../models/authorModel")
const publishermodel = require("../models/publishermodel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
     let book = req.body
    if(book.author_id==undefined || book.publisher_id==undefined) { return res.send({msg: "author id and publisher id is required" })}

 
    let authorid= req.body.author_id
    let publisherid =req.body.publisher_id
    let authorlist = await authorModel.findById({_id:authorid})
    let publisherlist = await publishermodel.findById({_id:publisherid})
// console.log(authorlist._id)
if(authorlist!=authorid || publisherlist!=publisherid){return res.send({msg:"not valid"})}


    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})

}

const allbooks = async (req,res) => {

    let allbook = await bookModel.find()
    res.send({data:allbook})
}

const updatebook = async (req,res) => {
 

  let publisher123 = await bookModel.find({  publisher_id:"62a1e5daa085189e90bf11d2"}).updateMany({$set:{ishardcover:true}},{new:true}  )
 
  let pulish = await bookModel.find({publisher_id:"62a1e5daa085189e90bf11d2"})
      
      
res.send({msg:pulish})
}

// const updateprice = async (req,res) =>{
// let data2 = await bookModel.find({ratings:{$gt:3.5}}).updateMany({$set:{price:bookModel.price+10}} )

// let data3 = await bookModel.find({ratings:{$gt:3.5}})
// res.send({msg:data3})

// }



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.allbooks  =allbooks
module.exports.updatebook = updatebook
// module.exports.updateprice = updateprice