const bookAssignmentModel2 = require("../models/bookmodel7-april")
const authorAssignmentModel2 = require("../models/authormodel7-april")


const createauthor = async function(req,res){
let authordata = req.body
let authorAssignmnetdata = await authorAssignmentModel2.create(authordata)
      res.send({msg:authorAssignmnetdata })

}

const createAssignmentBook2 = async function (req,res){
    let assignmentData = req.body 
 
    let saveAssignmentData = await bookAssignmentModel2.create(assignmentData)
      res.send({msg: saveAssignmentData})
 
 }
 const chetanbhagatbook = async function(req,res){

      let data = await authorAssignmentModel2.find({author_name:"Chetan Bhagat"}).select("author_id")
      let bkdata = await bookAssignmentModel2.find({author_id:data[0].author_id}).select({name:1,_id:0})
      res.send({bkdata})
 }
 const authorbook =async function(req,res){
       let data = await bookAssignmentModel2.findOneAndUpdate({bookname:"Two states"},{$set:{price:100}},{new:true}) 
      let data1 = await authorAssignmentModel2.find({author_id: data.author_id}).select("author_name")
      let prices = data.price
      res.send({msg:data1,prices})
      
      }


      const bookcost = async function(req,res){

let data = await bookAssignmentModel2.find({price:{$gt:50,$lt:100}}).select({author_id : 1})
let arr = []
for(let i=0;i<data.length;i++){
      let b =await authorAssignmentModel2.findOne(data[i]).select({author_name:1,_id:0})
      arr.push(b)
}
res.send({msg : arr })


      }

module.exports.createauthor  =createauthor
 module.exports.createAssignmentBook2 = createAssignmentBook2
 module.exports.chetanbhagatbook = chetanbhagatbook
 module.exports.authorbook = authorbook
 module.exports.bookcost = bookcost