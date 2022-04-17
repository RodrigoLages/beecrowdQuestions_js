//var prompt = function(texto) { return lines.shift();};

while (true) {
  var cases = parseInt(prompt());
  if (isNaN(cases)) {
    break;
  }

  var battery = [];
  for (let i = 0; i < cases; i++) {
    battery.push(parseFloat(prompt()));
  }

  console.log(Math.min(...battery));
}
