//var prompt = function(texto) { return lines.shift();};

const phrase = "LIFE IS NOT A PROBLEM TO BE SOLVED".split("");
const N = parseInt(prompt());
var aux = [];

for (let i = 0; i < N; i++) {
  aux.push(phrase[i]);
}

console.log(aux.join(""));
