//jshint esversion:6

// We must require the following packages in order
// to incorporate them into our project
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// We need our app to use body-parser
// body-parser works with express

// returns middleware that only parses urlencoded bodies
// and only looks at requests where
// the CONTENT-TYPE header matches the type option.
// Whenever you are trying to grab the information that gets posted to your server from an html form you must use urlencoded()
app.use(bodyParser.urlencoded({
  extended: true
})); // urlencoded is used when we are trying to parse data that comes from an HTML form
// extended: true allows us to post nested objects

// -------------------------------------- Calculator -------------------------------------- //

// Inside this 'get' method we are
// Targeting a route --> '/' at our home location and sending /index.html as a response.
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Inside this 'post' method we are
// Grabbing the information that the user posted and creating variables inside the 'post' method
app.post("/", function(req, res) {

  var num1 = Number(req.body.num1); // a regular req.body.num1 will store the values as strings
  var num2 = Number(req.body.num2); // a regular req.body.num1 will store the values as strings

  var result = num1 + num2;

  res.send("The result is " + result);

});


// -------------------------------------- BMI Calculator -------------------------------------- //

// Inside this 'get' method we are
// Targeting the route --> '/bmicalculator' and sending /bmiCalculator.html as a response via a callback function
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

// Inside this 'post' method we are
// Grabbing the information the user has provide as their weight and height. Then we are calculating their BMI and returning it via a callback function
app.post("/bmicalculator", function(req, res){

  var userWeight = parseFloat(req.body.userWeight); // using parseFloat() to parse it into a decimal number
  var userHeight = parseFloat(req.body.userHeight); // using parseFloat() to parse it into a decimal number

  var userBMI = userWeight / Math.pow(userHeight, 2);

  res.send("This is your BMI: " + userBMI );
});

// -------------------------------------- Listening to PORT:3000 -------------------------------------- //
app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
