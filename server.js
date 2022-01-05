// Import necessary libraries
var express = require("express")
var dotenv = require("dotenv")

// Import necessary config scripts
var app = require('./router/app');
var database = require("./model/dbconfig")

// Server settings
var port = process.env.PORT || 8081
dotenv.config()
database.connect(process.env.DB_URL)
app.use(express.json());
app.use(express.static("public/public"))

// Handle 404 - Keep this as a last route
app.use((req, res) => {
    res.status(404)
    res.sendFile('public/error.html', { root: __dirname })
});

// Run server
var server = app.listen(port, () => {
    console.log('Web App Hosted at https://localhost:' + port);
});