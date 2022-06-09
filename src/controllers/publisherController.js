const publishermodel= require("../models/publishermodel")

const createpublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publishermodel.create(publisher)
    res.send({data: publisherCreated})
}



module.exports.createpublisher =createpublisher