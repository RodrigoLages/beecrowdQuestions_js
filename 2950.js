//var prompt = function(texto) { return lines.shift();};

var [distance, r1, r2] = prompt().split(" ").map(Number);
console.log((distance / (r1 + r2)).toFixed(2));
