var express = require('express');
var app = express();
var path = require('path');


// app.get('/', function (req, res) {
//   console.log('7', path.join(__dirname, '/../client/index.html'));
//   res.sendFile(path.join(__dirname, '/../client/index.html'));
// })

app.use(express.static(path.join(__dirname, '/../dist')));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})