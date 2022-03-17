//var prompt = function(texto) { return lines.shift();};

while (true) {
  var [M, exp] = prompt().split(" ").map(Number);
  if (M == 0 && exp == 0) {
    break;
  }

  console.log(M * exp);
}
