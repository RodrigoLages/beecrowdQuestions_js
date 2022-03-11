//var prompt = function(texto) { return lines.shift();};

var [priceIni, priceEnd] = prompt().split(" ").map(Number);
var percentage = ((priceEnd - priceIni) * 100) / priceIni;

console.log(percentage.toFixed(2) + "%");
