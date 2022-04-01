//var prompt = function(texto) { return lines.shift();};

var positives = 0;
var sum = 0;

for (let i = 0; i < 6; i++) {
  var num = parseFloat(prompt());

  if (num > 0) {
    sum = sum + num;
    positives++;
  }
}

console.log(positives + " valores positivos");
console.log((sum / positives).toFixed(1));
