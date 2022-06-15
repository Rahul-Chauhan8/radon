const jwt = require("jsonwebtoken");
// const userModel = require("../models/userModel");

const mid1 = function (req,res,next){


    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  

    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
    

next();
}

//this middeleware is used for user authorisation //

const mid2 = async function(req,res,next){
  let token = req.headers["x-auth-token"];
let userId = req.params.userId;
let decodedToken = jwt.verify(token, "functionup-radon")
let loggeduser = decodedToken.userId

if(userId!=loggeduser){
  res.send({msg:"not logged user"})
}
next()
}


module.exports.mid1 = mid1

module.exports.mid2 = mid2