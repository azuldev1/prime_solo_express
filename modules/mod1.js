var mod1 = {};
mod1.random = function(min,max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}



module.exports = mod1;
