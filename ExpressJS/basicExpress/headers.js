//now there is something called as query parameter.
//these query parameters are sent as a request to the HTTP server (here GET request).
//in browser how to run these query params
//http://localhost:3000/operation?a=val&b=val

//or we can write dynamic query params
//http://localhost:3000/operation/firstArg/secondArg  ----> way better
//whe u dynamically do this then u use req.params.arg1 and so on....

const express=require('express');
const app=express();

app.get('/sum/:firstArg/:secondArg', function (req,res){
    const a= parseInt(req.params.firstArg);
    const b= parseInt(req.params.secondArg);
    res.json({
        answer:a+b
    })
});


app.get('/multiply/:firstArg/:secondArg', function(req,res){
    const a= parseInt(req.params.firstArg);
    const b= parseInt(req.params.secondArg);
    res.json({
        answer:a*b
    })
});


app.get('/subtract/:firstArg/:secondArg', function(req,res){
    const a= parseInt(req.params.firstArg);
    const b= parseInt(req.params.secondArg);
    res.json({
        answer:a-b
    }) 
});


app.get('/divide/:firstArg/:secondArg', function(req,res){
    const a= parseInt(req.params.firstArg);
    const b= parseInt(req.params.secondArg);
    if(b==0){
        res.json({
            alert: "can't divide by zero."
        })
    }
    else{
        res.json({
            answer: a/b
        })
    }
});


app.listen(3000,()=>{
    console.log("Math app running on the port 3000....");
});