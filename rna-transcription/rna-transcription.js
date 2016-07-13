var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(str) {
  this.rna = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };
  this.new = '';
  for (var i = 0; i < str.length; i++) {
    this.new += this.rna[str[i]]
  };
  return this.new;
};

module.exports = DnaTranscriber;


// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`