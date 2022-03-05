//var prompt = function(texto) { return lines.shift();};

var column = parseInt(prompt());
var operation = prompt();
var C = [];
var sum = 0;

for (let l = 0; l < 144; l++) {
  C.push(parseFloat(prompt()));
}

for (let i = column; i < 144; i = i + 12) {
  sum = sum + C[i];
}

if ((operation = "M")) {
  var avg = sum / 12;
  console.log(avg.toFixed(1));
} else {
  console.log(sum.toFixed(1));
}
