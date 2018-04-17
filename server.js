const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models");
const routes = require("./routes");
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;


const validPassword = (userPassword, password) => {
  return userPassword === password;
}

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(session({keys: ['secretkey1', 'secretkey2', '...']}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(db.User.authenticate()));

passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

// Serve up static assets
app.use(express.static("client/build"));


app.use(routes);
// // Add routes, both API and view
// app.use(routes);
mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/threadCount");
mongoose.connect("mongodb://heroku_3f9w290t:vfdm8cogae4ilnpchk4hu761r2@ds047692.mlab.com:47692/heroku_3f9w290t");


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});