var Wordcount = function() {
};

Wordcount.prototype.store = function(arr) {
  var storage = {};
  arr.forEach(function(val) {
    val = val.toLowerCase()
    if (storage[val] !== undefined && typeof storage[val] !== 'function') {
      storage[val]++;
    } else {
      storage[val] = 1;
    }
  });
  return storage;
};

Wordcount.prototype.sentenceCheck = function(val) {
  var start;
  for (var i = 0; i < val.length; i++) {
    if (val[i] === '\n') {
      start = val.split('\n')
    } else if (val[i] === '\t') {
      start = val.split('\t')
    } 
  }
  if (start) {
    return start;
  }
  return val;
};

Wordcount.prototype.count = function(input) {
  input = input.split(' ')
  var arr = [];
  for (var i = 0; i < input.length; i++) {
    var temp = this.sentenceCheck(input[i]);
    if (Array.isArray(temp)) {
      temp = temp.filter(function(val) {
        return val !== '';
      })
    }
    if (temp) {
      if (Array.isArray(temp)) {
        temp.forEach(function(val) {
          arr.push(val)
        })
      } else {
        arr.push(temp)
      }
    }
  }
  if (!arr.length) {
    arr = input;
  }
  return this.store(arr)
};

module.exports = Wordcount;
