//var prompt = function(texto) { return lines.shift();};

var cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var energy = parseInt(prompt());
  if (energy > 8000) {
    console.log("Mais de 8000!");
  } else {
    console.log("Inseto!");
  }
}
