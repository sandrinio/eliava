var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

var port = process.env.PORT || 3000;

app.listen(port, process.env.IP, function () {  //if server is on
  console.log("======STARTED======");
  console.log("============");
  console.log("Listening to Port " + process.env.PORT);
});