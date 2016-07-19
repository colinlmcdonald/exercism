var PhoneNumber = function(num) {
  this.num = num;
};

PhoneNumber.prototype.number = function() {
  this.num = this.num.replace(/[\s.()-]/g, '')
  if (this.num.length > 10 && this.num[0] == 1) {
    this.num = this.num.split('').splice(1, this.num.length).join('')
  } else if (this.num.length !== 10) {
    return '0000000000'
  }
  return this.num.match(/[1234567890]/g).join('')
};

PhoneNumber.prototype.areaCode = function() {
  return this.num.slice(0, 3)
};

PhoneNumber.prototype.toString = function() {
  var formatted = '(';
  for (var i = 0; i < this.num.length; i++) {
    formatted += this.num[i]
    if (formatted.length === 4) {
      formatted += ') '
    }
    if (formatted.length === 9) {
      formatted += '-'
    }
  }
  return formatted;
};

module.exports = PhoneNumber;
