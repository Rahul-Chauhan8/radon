const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middelware = require("../middelware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users",userController.createUser )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middelware.mid1,middelware.mid2,userController.getUserData)

router.put("/users/:userId",middelware.mid1,middelware.mid2, userController.updateUser)

router.delete("/users/:userId",middelware.mid1,middelware.mid2, userController.deletUser)

router.post("/post/:userId/posts" , middelware.mid1,middelware.mid2, userController.postmessage)

module.exports = router;