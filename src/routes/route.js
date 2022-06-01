const express = require('express');
const externalModule = require('./logger')
const helpermodule = require("../util/helper")
const format = require("../validator/formatter")
const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
    helpermodule.printdate()
    helpermodule.printdata()
    format.trim1()
    format.lower()
    format.upper()
    res.send('My first ever api!')
});


module.exports = router;