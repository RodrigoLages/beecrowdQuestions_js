//var prompt = function(texto) { return lines.shift();};

var jeeps = 0;
var tourists = 0;

while (true) {
  var inpt = prompt();
  if (inpt == "ABEND") {
    break;
  }

  var [direction, passengers] = inpt.split(" ");
  passengers = parseInt(passengers);

  if (direction == "SALIDA") {
    tourists = tourists + passengers;
    jeeps++;
  } else {
    tourists = tourists - passengers;
    jeeps--;
  }
}

console.log(tourists);
console.log(jeeps);
