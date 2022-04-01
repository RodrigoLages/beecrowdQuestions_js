//var prompt = function(texto) { return lines.shift();};

var evens = 0;

for (let i = 0; i < 5; i++) {
  var num = parseInt(prompt());

  if (num % 2 == 0) {
    evens++;
  }
}

console.log(evens + " valores pares");
