var Mongolian = require("mongolian");

// Create a server instance with default host and port
var server = new Mongolian

// Get database
var db = server.db("awesome_blog");

// Get some collections
var posts = db.collection("posts");
var comments = db.collection("comments");

// Insert some data
posts.insert({
    pageId: "hallo",
    title: "Hallo",
    created: new Date,
    body: "Welcome to my new blog!"
});

// Get a single document
posts.findOne({ pageId: "hallo" }, function(err, post) {
    console.log(post._id.toString());
});