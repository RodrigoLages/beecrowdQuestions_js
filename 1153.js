//var prompt = function(texto) { return lines.shift();};

var num = parseInt(prompt());

for (var factorial = 1; num > 1; num--) {
  factorial = factorial * num;
}

console.log(factorial);
