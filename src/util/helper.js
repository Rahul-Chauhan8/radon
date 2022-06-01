const printdate =function(){
    let d = new Date
    console.log(d)
}
const printdata = function(){
    console.log( "Roadon, W3D3, the topic for today is Nodejs module system")
}

module.exports.printdata = printdata

module.exports.printdate = printdate