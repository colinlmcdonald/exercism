var Gigasecond = function(date) {
  this.birthday = Date.parse(date);
};

Gigasecond.prototype.date = function() {
  var gigasecond = Math.pow(10, 9) * 1000;
  this.anniversary = gigasecond + this.birthday;
  return new Date(this.anniversary)
};

module.exports = Gigasecond;