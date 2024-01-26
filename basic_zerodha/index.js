let promise = new Promise(function (response,reject){
    let a = 10+10;
    if(a ==20){
     setTimeout(console.log("running"),1000)
    }else{
     reject("failed it shiv");
    }
 })
 
 promise
 .then((message)=>{
    console.log("The message is in then is :"+message)})
 .catch((message)=>{
     console.log("The message in catch is :"+message);
 })
 
 
 
 