//var prompt = function(texto) { return lines.shift();};

const nota = parseInt(prompt());

if (85 < nota && nota <= 100) {
  console.log("A");
} else if (60 < nota) {
  console.log("B");
} else if (35 < nota) {
  console.log("C");
} else if (0 < nota) {
  console.log("D");
} else if (nota == 0) {
  console.log("E");
}
