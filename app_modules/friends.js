var friends = require("./database");

// This function adds new friends to database
exports.addFriend = function(req, res) {
    
}

exports.updateFriend = function(req, res) {
    
}

exports.deleteFriend = function(req, res) {
    
}

exports.getAllFriends = function(req, res) {
    friends.Friend.find(function(err, data) {
        if(err) res.send("Something went wrong");
        else res.send(data);
    });
}