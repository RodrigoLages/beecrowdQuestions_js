//var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());
var registry = [];

for (let i = 0; i < cases; i++) {
  let [a, b] = prompt().split(" ").map(Number);
  registry.push(a);
  registry.push(b);
}

var highest = registry[1];

for (let i = 1; i < registry.length; i = i + 2) {
  highest = (highest + registry[i] + Math.abs(highest - registry[i])) / 2;
  highest = parseFloat(highest.toFixed(1));
}

if (highest < 8) {
  console.log("Minimum note not reached");
} else {
  console.log(registry[registry.indexOf(highest) - 1]);
}
