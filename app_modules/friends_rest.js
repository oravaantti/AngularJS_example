var express = require("express");
var friends = require("./friends");

var router = express.Router();

  //---------------------------------
 // REST API for Friends collection
//----------------------------------

router.get("/", function(res, req) {
    
    friends.getAllFriends(res, req);
});

router.post("/", function(res, req) {
    
});

router.put("/", function(res, req) {
    
});

router.delete("/", function(res, req) {
    
});

module.exports = router;