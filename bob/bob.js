var Bob = function() {};

Bob.prototype.hey = function(input) {
  input = input.replace(/\s/g, '')
  if (!input.length) {
    return 'Fine. Be that way!'
  }
  var letters = input.match(/[\u00C0-\u017Fa-zA-Z]+/g)
  var caps;
  if (letters) {
      caps = letters.reduce(function(start, val) {
        if (val !== val.toUpperCase()) {
          return start = false;
        }
        return start;
      }, true)
  } 
  if (caps) {
    return 'Whoa, chill out!'
  } else if (input[input.length - 1] === '?') {
    return 'Sure.'
  } else {
    return 'Whatever.'
  }
};

module.exports = Bob;