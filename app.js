var express = require('express');

var app = express();

app.get("/", function (req, res) {
  res.send({"hi":"hamza"});
});

const port = process.env.PORT || 5000;

app.listen(port);

module.exports = app;
