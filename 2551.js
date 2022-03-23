//var prompt = function(texto) { return lines.shift();};

while (true) {
  var days = parseInt(prompt());
  if (isNaN(days)) {
    break;
  }
  var record = 0;

  for (let i = 1; i <= days; i++) {
    let [time, distance] = prompt().split(" ").map(Number);
    let V = distance / time;

    if (V > record) {
      console.log(i);
      record = V;
    }
  }
}
