var express = require('express');
var studentModule = require("./src/student");

var app = express();

app.use("/student", studentModule);

app.get("/", function(req, res) {
    res.send("Hi I am Express JS. Nice to meet you.");
});

app.get("/cdac", function(req, res) {
    res.send("Hello Subh");
});

app.get("/cdac/subh", function(req, res) {
    var output = { "name": "Subh", "inst": "CDAC" };
    res.json(output);
});

app.get("/json", function(req, res) {
    var output = { "name": "Hello Everyone. Thankyou." };
    res.json(output);
});

app.listen(3001, function() {
    console.log("SErver started successfully.");
});