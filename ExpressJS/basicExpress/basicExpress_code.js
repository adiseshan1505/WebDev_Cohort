//call the express library
const express= require('express');
//create an instance of it
const app= express();

//now all api endpoints with callbacks are done here (callback is done when routes are matched)
//these are all your route handlers.
app.get('/', function(req, res){
    //message
    res.send("Hello, world");
});
//listens on port 3000
app.listen(3000);

//run using node basicExpress_code.js
//and test the link on Postman first:- http://localhost:3000
//then run same link in your browser as well