const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
// const booksControllerAssignment = require("../controllers/booksController3-april")

const booksControllerAssignment2 = require("../controllers/bookcontroller7-april")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)


// router.post("/createBook", BookController.createBook  )
// router.get("/getBooksData", BookController.getBooksData)


// router.get("/bookList", booksControllerAssignment.bookList)

// router.post("/createAssignmentBook",booksControllerAssignment.createAssignmentBook )

// router.post("/getBooksInYear", booksControllerAssignment.getBooksInYear)

// router.post("/getParticularBooks", booksControllerAssignment.getParticularBooks)


// router.get("/getXINRBooks", booksControllerAssignment.getXINRBooks)

// router.get("/getRandomBooks", booksControllerAssignment.getRandomBooks)


router.post("/createAssignmentBook2", booksControllerAssignment2.createAssignmentBook2)

router.post("/createauthor",booksControllerAssignment2.createauthor )
router.get("/chetanbhagatbook", booksControllerAssignment2.chetanbhagatbook)
router.get("/authorbook", booksControllerAssignment2.authorbook)
router.get("/bookcost", booksControllerAssignment2.bookcost)
module.exports = router;