//var prompt = function(texto) { return lines.shift();};

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const word1 = prompt();
const word2 = prompt();

const size = Math.min(word1.length, word2.length);
if (word1.length == size) {
  var sorted = [word1, word2];
} else {
  var sorted = [word2, word1];
}

var letter1Index;
var letter2Index;
for (let i = 0; i < size; i++) {
  letter1Index = alphabet.indexOf(word1.charAt(i));
  letter2Index = alphabet.indexOf(word2.charAt(i));

  if (letter1Index < letter2Index) {
    sorted = [word1, word2];
    break;
  } else if (letter1Index > letter2Index) {
    sorted = [word2, word1];
    break;
  }
}

console.log(sorted.join("\n"));
