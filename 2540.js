//var prompt = function(texto) { return lines.shift();};

while (true) {
  var players = parseInt(prompt());
  if (isNaN(players)) {
    break;
  }
  var votes = prompt().split(" ").map(Number);
  var impeach = 0;

  for (let element of votes) {
    if (element == 1) {
      impeach++;
    }
  }

  if (impeach >= (players * 2) / 3) {
    console.log("impeachment");
  } else {
    console.log("acusacao arquivada");
  }
}
