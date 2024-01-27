const e = require("express");
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;
const secretKey = "shivgaur";

app.use(express.json());
app.listen(port,()=>{
    console.log("listenig to the port :"+`${port}`);
});


//Assinging the jwt
function Signup(req,res,next){
    let obj = {
        name:req.body.name,
        password:req.body.password
    };
    try{
       const token = jwt.sign(obj,secretKey);
       res.send(token);
    }catch(e){
       console.log("There was some error in the process :"+e);
       next();
    }
}

//verifying the jwt
function Login(req,res,next){
   const token = req.body.token;
   try{
      jwt.verify(token,secretKey,(err,decoded)=>{
        if(err){
            res.send({
                "success":false,
                "verification":false
            })
        }
        console.log(decoded);
        res.send({
            "success":true,
            "verification":true
        })
      })
   }catch(e){
      next();
   }
}

app.post("/getToken",Signup,(req,res)=>{
     res.send({
        "success":false,
        "error":"Some eror while creating the token"
     })
});

app.post("/verifyUser",Login,(req,res)=>{
    res.send({
        "Success":false,
        "error":"Something went wrong"
    })
})