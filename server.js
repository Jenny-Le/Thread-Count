const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

app.use(routes);
// // Add routes, both API and view
// app.use(routes);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/threadCount");


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});