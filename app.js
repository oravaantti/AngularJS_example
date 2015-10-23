var express = require("express");
var path = require("path");
var database = require("./app_modules/database");
var friends_rest = require("./app_modules/friends_rest");

var app = express();

// This is my middleware, done using use function
// Middlewares must be defined BEFORE any router
app.use(function(req, res, next){
    //example.doSomething();
    
    console.log(req.path);
    console.log(req.method);
    
    // Next functon transfers the request to next function
    next();
});

app.use(express.static(path.join(__dirname, "views")));
app.use("/lib", express.static(path.join(__dirname, "lib")));
app.use("/scr", express.static(path.join(__dirname, "scr")));

app.use("/friend", friends_rest);

  //---------
 // ROUTERS
//----------

app.get("/persons", function (req, res) {
    res.send("You asked persons");
}); 

app.listen(3000);