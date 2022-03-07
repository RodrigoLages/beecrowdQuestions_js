//var prompt = function(texto) { return lines.shift();};

while (true) {
  var N = parseInt(prompt());
  if (isNaN(N)) {
    break;
  }

  if (N == 0) {
    console.log("vai ter copa!");
  } else {
    console.log("vai ter duas!");
  }
}
