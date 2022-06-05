const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})

}
const getbooksData= async function (req, res) {
    let allbook= await UserModel.find()
    res.send({allbook})
}

module.exports.createUser= createUser
module.exports.getbooksData= getbooksData