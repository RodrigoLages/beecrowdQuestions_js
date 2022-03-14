//var prompt = function(texto) { return lines.shift();};

while (true) {
  var N = parseInt(prompt());
  if (isNaN(N)) {
    break;
  }

  console.log(N - 1);
}
