var Isogram = function(input) {
  var storage = {};

  this.isIsogram = function() {
    input = input.toLowerCase().replace(/[-\s]/g, '')
    for (var i = 0; i < input.length; i++) {
      var val = input[i]
      if (storage[val]) {
        return false;
      } else {
        storage[val] = true;
      }
    };
    return true;
  };
};

module.exports = Isogram;

var word = new Isogram('Emily Jung Schwartzkopf');
word.isIsogram()