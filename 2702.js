//var prompt = function(texto) { return lines.shift();};

const stock = prompt().split(" ").map(Number);
const requested = prompt().split(" ").map(Number);
var missing = 0;

for (let i = 0; i < 3; i++) {
  missing = missing + Math.max(0, requested[i] - stock[i]);
}

console.log(missing);
