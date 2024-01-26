const express = require("express");
const zodd = require("zod");

const app = express();


//Using zod we can define our schema and we can easily validate our input based on the schema.
   //eg 1
//const schema = zodd.string();

   //eg2
//const schema = zodd.array(zodd.string());

   //eg 3
const schema = zodd.object(
  {
    "name":zodd.string(),
    "age":zodd.number(),
    "hobbies":zodd.array(zodd.string())
  }
)

app.use(express.static("images"));
app.use(express.static("public"))
  
app.use(express.json());

const port = 3000;

app.get("/",(req,res)=>{
 
    res.sendFile("E:/Cohort/global_catch_and_zod/zod.html");
})

app.post("/trial",(req,res)=>{
     let ans = req.body.something;
     let response = schema.safeParse(ans);
     res.send(response);
})


//Global catches

    ///if somehting goes wrong in the backend we processing req bsa
app.use((err,req,res,next)=>{
     res.json({
      message:"There was some kind of error in our server !!"
     });
})

app.listen(port,(req,res)=>{
  console.log(`Listening to the port :${port}`);
});