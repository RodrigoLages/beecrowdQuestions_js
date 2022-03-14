//var prompt = function(texto) { return lines.shift();};

const bills = [2, 5, 10, 20, 50, 100];

while (true) {
  var [price, payed] = prompt().split(" ").map(Number);
  if (price == 0 && payed == 0) {
    break;
  }

  var change = payed - price;
  var possible = false;

  for (let i = 0; i < 6; i++) {
    for (let n = 0; n < 6; n++) {
      if (bills[i] + bills[n] == change) {
        possible = true;
        break;
      }
    }
  }

  if (possible) {
    console.log("possible");
  } else {
    console.log("impossible");
  }
}
