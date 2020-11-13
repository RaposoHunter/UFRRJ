const express = require("express");
const bodyParser = require("body-parser");
const consign = require("consign");

let app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type"); 
	res.setHeader("Access-Control-Allow-Credentials", true);

    next();
});

consign()
    .include("app/routes")
    .then("config/dbConnection.js")
    .then("app/models")
    .then("app/controllers")
    .into(app);

module.exports = app;