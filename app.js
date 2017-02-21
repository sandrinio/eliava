var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

var landingRoute = require('./routes/landing');

app.use(landingRoute);






// ======== END ========

var port = process.env.PORT || 3000;

app.listen(port, process.env.IP, function () {  //if server is on
  console.log("======STARTED======");
  console.log("Listening to Port " + process.env.PORT);
});