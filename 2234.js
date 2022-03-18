//var prompt = function(texto) { return lines.shift();};

const [hd, people] = prompt().split(" ").map(Number);
console.log((hd / people).toFixed(2));
