var express = require('express')
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.all('/update', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });
 
app.all('/initial', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/update', function (req, res) {
  var value = randomValue();
  res.send(JSON.stringify({ value: value }));
})

app.get('/initial', function (req, res) {
  response = [];
  for (var i = 0; i < 50; i++) {
    var value = randomValue();
    response.push({ value: value });
  }
  res.send(JSON.stringify(response));
})

function randomValue() {
  var base = 0.2 + (Math.random() * 0.6);
  var extra = (Math.random() > 0.9) ? 0.2 : 0;
  base += extra;
  return base;
}

console.log("serving on port 3000")
app.listen(3000)