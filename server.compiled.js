"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 4200;

var path = require('path');

var bodyParser = require('body-parser');

var db = require('./database/queries.js');

app.use(express["static"](path.join(__dirname, './client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/display', function (req, res) {
  db.getProductInfo(function (err, result) {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.send(result);
    }
  });
});
app.listen(port, function () {
  return console.log("Image Component listening at http://localhost:".concat(port));
});
