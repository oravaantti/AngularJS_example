var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var session = require("express-session");
var database = require("./app_modules/database");
var friends_rest = require("./app_modules/friends_rest");
var user = require("./app_modules/login");

var app = express();

// This middleware creates an session object in client request and
// generates session cookie for user (so you can reference req.session)
app.use(session({secret: "yourSecretTokenHere"}));

// This is my middleware, done using use function
// Middlewares must be defined BEFORE any router
app.use(function(req, res, next){
    //example.doSomething();
    
    //console.log(req.path);
    //console.log(req.method);
    
    // Next functon transfers the request to next function
    next();
});

app.use(express.static(path.join(__dirname, "views")));
app.use("/lib", express.static(path.join(__dirname, "lib")));
app.use("/scr", express.static(path.join(__dirname, "scr")));
app.use("/css", express.static(path.join(__dirname, "css")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/friend", friends_rest);
app.use("/user", user);

  //---------
 // ROUTERS
//----------

app.get("/persons", function (req, res) {
    res.send("You asked persons");
}); 

app.listen(3000);