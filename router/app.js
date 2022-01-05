// Import necessary libraries
var express = require("express")
var cors = require("cors")
var app = express()

// Router settings
app.use(express.json());

app.get("/test", (req, res) => {
    res.status(200).send("working!")
})

module.exports = app;
