//var prompt = function(texto) { return lines.shift();};

var [A, B] = prompt().split(" ").map(Number);
if (A < B) {
  var cards = [A, B];
} else {
  var cards = [B, A];
}

console.log(cards[1]);
