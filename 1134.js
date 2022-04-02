//var prompt = function(texto) { return lines.shift();};

var fuel = 0;
var alcohol = 0;
var gasoline = 0;
var diesel = 0;

while (fuel != 4) {
  fuel = parseInt(prompt());

  switch (fuel) {
    case 1:
      alcohol++;
      break;
    case 2:
      gasoline++;
      break;
    case 3:
      diesel++;
  }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcohol);
console.log("Gasolina: " + gasoline);
console.log("Diesel: " + diesel);
