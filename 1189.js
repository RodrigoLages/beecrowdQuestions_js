//var prompt = function(texto) { return lines.shift();};

var operation = prompt();
var M = [];
var sum = 0;

for (let i = 0; i < 12; i++) {
  var aux = [];
  for (let n = 0; n < 12; n++) {
    aux.push(parseFloat(prompt()));
  }
  M.push(aux);
}

for (let i = 1; i < 12; i++) {
  for (let n = 0; n < i && n < 11 - i; n++) {
    sum = sum + M[i][n];
  }
}

if (operation == "M") {
  var avg = sum / 30;
  console.log(avg.toFixed(1));
} else {
  console.log(sum.toFixed(1));
}
