//var prompt = function(texto) { return lines.shift();};

var line = parseInt(prompt());
var operation = prompt();
var M = [];
var sum = 0;

for (let l = 0; l < 144; l++) {
  M.push(parseFloat(prompt()));
}

for (let i = 0; i < 12; i++) {
  sum = sum + M[i + line * 12];
}

if ((operation = "M")) {
  var avg = sum / 12;
  console.log(avg.toFixed(1));
} else {
  console.log(sum.toFixed(1));
}
