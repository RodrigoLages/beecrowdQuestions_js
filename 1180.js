//var prompt = function(texto) { return lines.shift();};

prompt();

const arr = prompt().split(" ").map(Number);
const lowest = Math.min(...arr);

console.log("Menor valor: " + lowest);
console.log("Posicao: " + arr.indexOf(lowest));
