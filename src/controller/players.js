


    let players2 =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]
  
   
    let players1 =  function (req, res) {  
  
//console.log(req.body)
players2.push(req.body)
        //LOGIC WILL COME HERE
        res.send({ data:players2 , status: true } )
    }
 




module.exports ={players1  }