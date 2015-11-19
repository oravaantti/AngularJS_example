var friends = require("./database");

// This function adds new friends to database
exports.addFriend = function(req, res) {
    var temp = new friends.Friend(req.body);
    
    temp.save(function(err) {
        if(err) res.send("Error saving person");
        else  {
            friends.User.update({username: req.session.username},
                                {$push: {"friend": temp._id}}, function() {
                res.send("Ok");
            });
        }
    });
}

exports.updateFriend = function(req, res) {
    friends.Friend.update({_id:req.query._id}, {name: req.query.name, address: req.query.address, age: req.query.age}, {}, function(err) {
        if(err) console.log("Update unsuccessful");
        else console.log("Update done");
    });
}

exports.deleteFriend = function(req, res) {
    friends.Friend.remove({_id:req.query._id}, function(err) {
        if(err) console.log("Delete unsuccessful");
        else console.log("Delete done");
    });
}

exports.getAllFriends = function(req, res) {
    
    friends.User.findOne({username: req.session.username}).populate("friend").exec(function(err, data){
        if(err) res.send("Something went wrong");
        else res.send(data.friend);
    });
}