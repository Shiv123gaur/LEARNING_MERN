const mongoose = require("mongoose");
const express = require("express");

const port = 3000;
const app = express();

mongoose.connect("mongodb+srv://shiv123gaur:sk0pOPoJMT1zbe1a@cluster0.ypal7j6.mongodb.net/userAppnew");

const User = mongoose.model("Users",{
    Name:String,
    Age:Number,
    Email:String,
    Password:String
});


let SecretData = [
    {"name":"shiv Gaur"},
    {"name":"ramlal"},
    {"name":"prasad"}
];

app.use(express.json());

function singnupp(req,res,next){
    let found = false;
     let name = req.body.name;
     let password = req.body.password;
     let age = req.body.age;
     let gender = req.body.gender;
     let email = req.body.email;
     SecretData.forEach((person)=>{
        if(person["name"]==name){
            found = true;
        }
     });
     if(found){
         const user = new User(
            {
                Name:name,
                Age:age,
                Email:email,
                Password:password
            }
         );
         user.save();
         res.send(SecretData);
     }else{
        next();
     }
    
}

app.use(express.static("styles"));
app.listen(port);

app.get("/",(req,res)=>{
    res.sendFile("E:/Cohort/mongoDb/sigup.html");
})


app.post("/signupp",singnupp,(req,res)=>{
    res.send("You name is not present in our list so cannot share our secret");
})