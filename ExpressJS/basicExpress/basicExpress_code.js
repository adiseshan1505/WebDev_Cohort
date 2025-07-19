//call the express library
 const express= require('express');
 const app= express();

 //get endpoint
 app.get('/', function(req, res){
    res.send("Hello, world");
 });

//some post endpoint
app.post('/', function(req, res){
    res.send("Hello from post endpoint");
});

 //asd endpoint
 // 
 app.get('/asd', function(req, res){
    res.send("Hello, from asd endpoint");
 });

 app.listen(3000, ()=>{
    console.log("Server is running on port 3000.....");
 });