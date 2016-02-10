var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var app = express();
var options = {
    host: '127.0.0.1',
    key: fs.readFileSync('../server.pem'),
    cert: fs.readFileSync('../server.crt')
  };
http.createServer(app).listen(8080);
//https.createServer(options, app).listen(443);
app.get('/', function(req, res){
  res.send('Hello from Express');
});