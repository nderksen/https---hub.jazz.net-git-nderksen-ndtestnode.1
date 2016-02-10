var express = require('express');
var app = express();
app.use('/', express.static('./static'));
app.use('/images', express.static( '../images'));
app.use('/lib', express.static( '../lib'));
app.use('/scripts', express.static( '../scripts'));
app.listen(8080);