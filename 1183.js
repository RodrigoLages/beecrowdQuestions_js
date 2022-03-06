//var prompt = function(texto) { return lines.shift();};

var operation = prompt();
var O = [];
var sum = 0;

for (let i = 0; i < 12; i++) {
  var aux = [];
  for (let n = 0; n < 12; n++) {
    aux.push(parseFloat(prompt()));
  }
  O.push(aux);
}

for (let i = 0; i < 12; i++) {
  for (let n = i + 1; n < 12; n++) {
    sum = sum + O[i][n];
  }
}

if ((operation = "M")) {
  var avg = sum / 66;
  console.log(avg.toFixed(1));
} else {
  console.log(sum.toFixed(1));
}
