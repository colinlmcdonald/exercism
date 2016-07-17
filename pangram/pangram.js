var Pangram = function(input) {
  this.input = input.match(/[a-zA-Z]/g)
};

Pangram.prototype.isPangram = function() {
  var storage = {};
  var input = this.input;
  if (input) {
    input.forEach(function(val) {
      storage[val] = true;
    })
  }
  if (Object.keys(storage).length >= 26) {
    return true;
  }
  
  return false;
};

module.exports = Pangram;