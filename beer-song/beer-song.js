var BeerSong = function() {};

BeerSong.prototype.verse = function(str) {
  var x = str.toString();
  var s = 's';
  var k = 's';
  var t = x - 1;
  var num = 'one';
  if (x == 2) {
    k = '';
  }
  if (x == 1) {
    s = '';
    t = 'no more';
    num = 'it';
  }
  var verse = x + ' bottle' + s + ' of beer on the wall, ' + x + ' bottle' + s + ' of beer.\n'
  var verse2 = 'Take ' + num + ' down and pass it around, ' + t + ' bottle' + k + ' of beer on the wall.\n'
  if (x == 0) {
    verse = 'No more bottles of beer on the wall, no more bottles of beer.\n'
    verse2 = 'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
  }

  return verse + verse2;
};

BeerSong.prototype.sing = function(str, end) {
  var verses = '';
  if (!end) {
    end = 0
  }
  for (var i = str; i >= end; i--) {
    if (i > end) {
      verses += this.verse(i) + '\n';
    } else {
      verses += this.verse(i);
    }
  }
  return verses;
};

module.exports = BeerSong;

var song = new BeerSong();
//console.log(song.verse(0));

console.log(song.sing(3));