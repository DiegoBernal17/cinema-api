const express = require("express");
const app = express();
const bodyParser = require("body-parser");
import db from "./models";

const PORT = 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//ROUTES
const URL_CRUD = "./routes/CRUDs";
require(URL_CRUD)(app, "cinema");
require(URL_CRUD)(app, "function");
require(URL_CRUD)(app, "movie");
require(URL_CRUD)(app, "product");
require(URL_CRUD)(app, "promotion_code");
require(URL_CRUD)(app, "purchase_product");
require(URL_CRUD)(app, "room");
require(URL_CRUD)(app, "ticket");
require(URL_CRUD)(app, "user");
require("./routes/special")(app);

// default route
app.get("/", function(req, res) {
  return res.send({ error: true, message: "Unauthorized" });
});

db.sequelize.sync().then(() => {
  app.listen(PORT, function() {
    console.log("Server ready at http://localhost:" + PORT);
  });
  module.exports = app;
});
