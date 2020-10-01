var cool = require("cool-ascii-faces");
var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 5000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/cool", (req, res) => res.send(cool()));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main.hbs",
    partialsDir: [
      //  path to your partials
      path.join(__dirname, "views/partial"),
    ],
  })
);
app.set("view engine", "hbs");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});