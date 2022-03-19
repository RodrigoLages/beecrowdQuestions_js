//var prompt = function(texto) { return lines.shift();};

function crescent(a) {
  let arraySort = [];

  while (a.length > 0) {
    let lowest = a[0];
    for (let i = 1; i < a.length; i++) {
      lowest = (lowest + a[i] - Math.abs(lowest - a[i])) / 2;
    }

    arraySort.push(lowest);
    a.splice(a.indexOf(lowest), 1);
  }

  return arraySort;
}

var sides = prompt().split(" ").map(Number);
sides = crescent(sides);

if (sides[0] + sides[1] <= sides[2]) {
  console.log("Invalido");
} else {
  var type;
  var rect;

  if (sides[0] == sides[1] && sides[1] == sides[2]) {
    type = "Equilatero";
  } else if (
    sides[0] == sides[1] ||
    sides[1] == sides[2] ||
    sides[0] == sides[2]
  ) {
    type = "Isoceles";
  } else {
    type = "Escaleno";
  }

  var h = Math.sqrt(Math.pow(sides[0], 2) + Math.pow(sides[1], 2));
  if (h == sides[2]) {
    rect = "S";
  } else {
    rect = "N";
  }

  console.log("Valido-" + type);
  console.log("Retangulo: " + rect);
}
