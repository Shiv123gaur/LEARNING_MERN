const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile("E:/Cohort/http_server_1/todo.html");
})



app.post("/done",(req,res)=>{
    let task1 = req.body.task1;
    let task2 = req.body.task2;
    let task3 = req.body.task3;
    console.log(task1+" "+task2+" "+task3)
    res.send("Task 1:"+task1+" Task 2:"+task2+" Task 3:"+task2);
});


app.listen(port,(req,res)=>{
    console.log("Listening to the port :"+port);
})