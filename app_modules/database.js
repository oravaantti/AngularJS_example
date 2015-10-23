var mongoose = require("mongoose");

var uri = "mongodb://localhost:27017/person";

mongoose.connect(uri, function(bad, good) {
    if(bad) console.log("Not connected: " + bad.message);
    else console.log("Connected");
});

var Friends = mongoose.model("friends", {
    name: String,
    address: String,
    age: Number
});

var User = mongoose.model("user", {
    username: {type: String, unique: true},
    password: String
});

exports.Friend = Friends;
exports.User = User;