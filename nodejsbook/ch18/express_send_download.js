var express = require('express');
var url = require('url');
var app = express();
app.listen(8080);
app.get('/download', function (req, res) {
  res.sendfile('./views/word.docx', 'new.docx');
});