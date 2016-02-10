var http = require('http');
var https = require('https');
var fs = require('fs');

var options = {
    hostname: 'localhost',
    port: '8080',
    method: 'GET',
    path: '/',
    key: fs.readFileSync("../server.pem"),
    cert: fs.readFileSync("../server.crt"),
    agent: false
  };

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end('Hello secure world\n');
}).listen(8080);

/*

function handleResponse(response) {
  var serverData = '';
  response.on('data', function (chunk) {
    serverData += chunk;
  });
  response.on('end', function () {
    console.log("Response Status:", response.statusCode);
    console.log("Response Headers:", response.headers);    
    console.log(serverData);
  });
}
https.request(options, function(response){
  handleResponse(response);
}).end();
*/