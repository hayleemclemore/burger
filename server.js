var express = require("express");
var connection = require("./config/connection");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8090;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

// Set Handlebars.
var exhbs = require("express-handlebars");

app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
