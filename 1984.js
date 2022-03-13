//var prompt = function(texto) { return lines.shift();};

const number = prompt().split("");
var invert = "";

for (let i = number.length - 1; i >= 0; i--) {
  invert = invert + number[i];
}

console.log(invert);

//Not working... why?
