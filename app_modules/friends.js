var friends = require("./database");

// This function adds new friends to database
exports.addFriend = function(req, res) {
    var temp = new friends.Friend(req.body);
    
    temp.save(function(err) {
        if(err) res.send("Error saving person");
        else res.send("New friend added");
    });
}

exports.updateFriend = function(req, res) {
    
}

exports.deleteFriend = function(req, res) {
    console.log(req.query._id);
    friends.Friend.remove({_id:req.query._id}, function(err) {
        if(err) console.log("Delete unsuccessful");
        else console.log("Delete done");
    });
}

exports.getAllFriends = function(req, res) {
    friends.Friend.find(function(err, data) {
        if(err) res.send("Something went wrong");
        else res.send(data);
    });
}