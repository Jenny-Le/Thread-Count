const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// // Add routes, both API and view
// app.use(routes);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/threadCount", {
  useMongoClient: true
});


console.log('mongoose', mongoose);
console.log('User', db.User);

db.User.create({first_name: 'Jenny',
last_name: 'Le',
password: 'hellogoodbye',
email: 'jennybug89@yahoo.com'})
.then(function(dbUser) {
  // View the added result in the console
  console.log(dbUser);
})
.catch(function(err) {
  // If an error occurred, send it to the client
  return res.json(err);
});


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});