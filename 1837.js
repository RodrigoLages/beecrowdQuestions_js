//var prompt = function(texto) { return lines.shift();};

var [a, b] = prompt().split(" ").map(Number);
var quotient;

for (var remainder = 0; remainder < Math.abs(b); remainder++) {
  if ((a - remainder) % b == 0) {
    quotient = (a - remainder) / b;
    break;
  }
}
console.log(quotient + " " + remainder);
