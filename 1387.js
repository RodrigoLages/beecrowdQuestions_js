//var prompt = function(texto) { return lines.shift();};

var [S, D] = prompt().split(" ").map(Number);

while (S !== 0 || D !== 0) {
  console.log(S + D);

  [S, D] = prompt().split(" ").map(Number);
}
