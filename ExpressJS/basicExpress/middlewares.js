//transferring request to the route handler or the api endpoint all done by next();

const express=require('express');
const app=express();

app.use(function(req,res, next){
    console.log("request has been recieved");
    next();
})

app.get('/sum/:firstArg/:secondArg', function(req,res){
    const a= parseInt(req.params.firstArg);
    const b=parseInt(req.params.secondArg);

    res.json({
        answer: a+b
    });
});

app.listen(3000,()=>{
    console.log("on 3000....");
});


// modifying and transfering the request

const express=require('express');
const app=express();

app.use(function(req,res,next){
    req.name="cohort";
    next();
});

app.get('/sum/:firstArg/:secondArg', function(req,res){
    console.log(req.name);
    const a= parseInt(req.params.firstArg);
    const b=parseInt(req.params.secondArg);

    res.json({
        answer: a+b
    });
});

app.listen(3000,()=>{
    console.log("on 3000....");
});


// ending the request and response cycle just an example this is without the authentication logic that is coded in
//the middleware section.

const express=require('express');
const app=express();

app.use(function(req,res,next){
    res.json({
        alert:"method not allowed"
    });
})

app.get('/sum/:firstArg/:secondArg', function(req,res){
    console.log(req.name);
    const a= parseInt(req.params.firstArg);
    const b=parseInt(req.params.secondArg);

    res.json({
        answer: a+b
    });
});

app.listen(3000,()=>{
    console.log("on 30000....");
});