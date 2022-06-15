const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {

  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};

// here we login the user //

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

// this is used for user authentication //

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
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
  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {



  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status:true, data: updatedUser});
};


const deletUser = async function (req, res) {
  

  
  
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.send("No such user exists");
    }
    // these lines we written because if isdeleted already true then it respond already true //
  if(user.isDeleted=="true"){
    res.send({msg:"already deleted"})
  }
//  here we update the isdeleted true //
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{isDeleted:true},{new:true});

    res.send({ status:true, data:"deleted"});
  };
const postmessage = async function(req,res){

let userid = req.params.userId
let user2 = await userModel.findById({_id:userid})
if(!user2){
  res.send({msg:"no such user find"})
}
let message = req.body.message
let userpost = user2.posts
userpost.push(message)
let updatedUser = await userModel.findOneAndUpdate({_id:userid},{posts:message},{new:true})
res.send({data:updatedUser})
}

 
  
module.exports.deletUser =deletUser
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postmessage = postmessage
