//var prompt = function(texto) { return lines.shift();};

var cpf = prompt().split(".");

console.log(cpf[0]);
console.log(cpf[1]);
console.log(cpf[2].split("-").join("\n"));
