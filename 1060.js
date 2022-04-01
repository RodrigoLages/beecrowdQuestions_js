//var prompt = function(texto) { return lines.shift();};

var positives = 0;

for (let i = 0; i < 6; i++) {
  var num = parseInt(prompt());
  if (num > 0) {
    positives++;
  }
}

console.log(positives + " valores positivos");
