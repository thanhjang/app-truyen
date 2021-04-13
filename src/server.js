var express = require('express');
 var app = express();
 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));
 // route mặc định
 app.get('/', function (req, res) {
     return res.send({ error: true, message: 'hello' })
 });
 // chỉnh port
 app.listen(3000, function () {
     console.log('Node app is running on port 3000');
 });

 module.exports = app;