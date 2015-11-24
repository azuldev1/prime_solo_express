var mod1 = require('./mod1.js');// import js module
var mod2 = require('./mod2.js');// import js module

var mod3 = {};

  var money = mod2.formatMoney(mod1.random(1000,10000));

mod3.balance = function(num){
  return "Account balance:\n" + num;
}

module.exports = mod3;
