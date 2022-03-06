//var prompt = function(texto) { return lines.shift();};

var column = parseInt(prompt());
var operation = prompt();
var M = [];
var sum = 0;

for (let i = 0; i < 12; i++) {
  var aux = [];
  for (let l = 0; l < 12; l++) {
    aux.push(parseFloat(prompt()));
  }
  M.push(aux);
}

for (let i = 0; i < 12; i++) {
  sum = sum + M[i][column];
}

if ((operation = "M")) {
  var avg = sum / 12;
  console.log(avg.toFixed(1));
} else {
  console.log(sum.toFixed(1));
}
