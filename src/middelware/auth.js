const jwt = require("jsonwebtoken");
// const userModel = require("../models/userModel");

const mid1 = function (req,res,next){
try {

    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["X-Auth-Token"];
  

    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
  
    
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
      return res.status(400).send({ status: false, msg: "token is invalid" });
    

next();
}
catch (error){
  res.status(500).send(error.message)
}

}


//this middeleware is used for user authorisation //

const mid2 = async function(req,res,next){
  let token = req.headers["x-auth-token"];
let userId = req.params.userId;
let decodedToken = jwt.verify(token, "functionup-radon")
let loggeduser = decodedToken.userId

if(userId!=loggeduser){
 return res.status(403).send({msg:"not logged user"})
}
next()
}


module.exports.mid1 = mid1

module.exports.mid2 = mid2