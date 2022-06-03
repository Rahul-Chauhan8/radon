const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('lodash')
const router = express.Router();
const moviesController1 = require("../controller/moviescontroller")

router.get("/getmovies", moviesController1.getmovies)
router.get("/movies/:indexNumber", moviesController1.getmoviesIndex)





router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    const month =['January','February','March','April','May','June','July','August','September','Octuber','November','Decmber']
   const newmonth = lodash.chunk(month , 3);
   console.log(newmonth)

const odd = [1,3,5,7,9,11,13,15,17,19]
const newodd= lodash.tail(odd)
console.log(newodd)
    res.send('Hello there!')
const arr1 = [4,5,7,22,11]
const arr2 = [6,22,1,45,3]
const arr3 = [2,3,44,45,12 ]
const arr4 = [11,13,12,33,5]
const arr5 = [12,11,35,49,]
 const finalarr= lodash.union(arr1 ,arr2, arr3, arr4, arr5)
 console.log(finalarr)

const movie = [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"] ]
const movie1 = lodash.fromPairs(movie)
console.log(movie1)
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let Candidates = ['Akash','Suman']
    res.send(Candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason