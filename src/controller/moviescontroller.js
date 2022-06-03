




const getmovies = function(req,res){
  let  movies = ["Rang de basanti", 'The shining', 'Lord of the rings', 'Batman begins']
  res.send(movies)
}

const getmoviesIndex = function(req,res){

if(req.params.indexNumber===1){
    res.send("Rang de basanti")
}
    
}


module.exports ={getmovies ,getmoviesIndex}