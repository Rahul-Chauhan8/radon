const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
try{
  let data = req.body;
  let savedData = await userModel.create(data);
  res.status(201).send({ msg: savedData });
}
catch(error){
  res.status(500).send(error.message)
}
};

// here we login the user //

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

// this is used for user authentication //

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(404).send({
      status: false,
      msg: "username or the password is not corerct",
    });


  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, token: token });
  }
  catch(error){
    res.status(500).send(error.message)
  }
};

const getUserData = async function (req, res) {
  try{
  let token = req.headers["x-Auth-token"];

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
  }
  catch (error){
    res.status(500).send(error.message)
  }
};

const updateUser = async function (req, res) {
try {


  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.status(200).send({ status:true, data: updatedUser});
}
catch (error){
  res.status(500).send(error.message)
}
};


const deletUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    // these lines we written because if isdeleted already true then it respond already true //
  if(user.isDeleted=="true"){
    res.status(200).send({msg:"already deleted"})
  }
//  here we update the isdeleted true //
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{isDeleted:true},{new:true});

    res.status(200).send({ status:true, data:"deleted"});
}
catch (error){
  res.status(500).send(error.message)
}
  };
const postmessage = async function(req,res){
try{
let userid = req.params.userId
let user2 = await userModel.findById({_id:userid})
if(!user2){
  res.status(404).send({msg:"no such user find"})
}
let message = req.body.message
let userpost = user2.posts
userpost.push(message)
let updatedUser = await userModel.findOneAndUpdate({_id:userid},{posts:message},{new:true})
res.status(200).send({data:updatedUser})
}
catch (error){
  res.status(500).send(error.message)
}
}
 
  
module.exports.deletUser =deletUser
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postmessage = postmessage