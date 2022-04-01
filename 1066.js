//var prompt = function(texto) { return lines.shift();};

var positives = 0;
var negatives = 0;
var evens = 0;

for (let i = 0; i < 5; i++) {
  var num = parseInt(prompt());

  if (num > 0) {
    positives++;
  } else if (num < 0) {
    negatives++;
  }

  if (num % 2 == 0) {
    evens++;
  }
}

console.log(evens + " valor(es) par(es)");
console.log(5 - evens + " valor(es) impar(es)");
console.log(positives + " valor(es) positivo(s)");
console.log(negatives + " valor(es) negativo(s)");
