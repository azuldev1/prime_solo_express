var express = require('express');
var app = express();
var path = require('path');
var mod1 = require('./modules/mod1.js');// import js module
var mod2 = require('./modules/mod2.js');// import js module
var mod3 = require('./modules/mod3.js');


app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req,res,next){
   res.sendFile(path.join(__dirname, './index.html'));

});
// how to send information
app.get('/balance', function(req, res, next) {
  res.send(mod3.balance(mod2.formatMoney(mod1.random(100, 100000))));
});

app.listen(3000);
