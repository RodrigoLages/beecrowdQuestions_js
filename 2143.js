//var prompt = function(texto) { return lines.shift();};

while (true) {
  var cases = parseInt(prompt());
  if (cases == 0) {
    break;
  }

  for (let i = 0; i < cases; i++) {
    var people = parseInt(prompt());
    var orders;

    if (people % 2 == 0) {
      orders = people * 2 - 2;
    } else {
      orders = people * 2 - 1;
    }

    console.log(orders);
  }
}
