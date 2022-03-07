//var prompt = function(texto) { return lines.shift();};

var tests = parseInt(prompt());

for (let i = 0; i < tests; i++) {
  var [radius1, radius2] = prompt().split(" ").map(Number);

  console.log(radius1 + radius2);
}
