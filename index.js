const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(require("./routes/index.js"));

app.listen("3000", () => console.log("RUNNING MOFO!!!!"));