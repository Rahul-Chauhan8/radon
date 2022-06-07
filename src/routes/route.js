const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const booksControllerAssignment = require("../controllers/booksControllerAssignment")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)


router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getBooksData)


router.get("/bookList", booksControllerAssignment.bookList)

router.post("/createAssignmentBook",booksControllerAssignment.createAssignmentBook )

router.post("/getBooksInYear", booksControllerAssignment.getBooksInYear)

router.post("/getParticularBooks", booksControllerAssignment.getParticularBooks)


router.get("/getXINRBooks", booksControllerAssignment.getXINRBooks)

router.get("/getRandomBooks", booksControllerAssignment.getRandomBooks)

module.exports = router;