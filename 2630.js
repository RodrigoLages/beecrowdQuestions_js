//var prompt = function(texto) { return lines.shift();};

var cases = parseInt(prompt());

for (let i = 1; i <= cases; i++) {
  var method = prompt();
  var rgb = prompt().split(" ").map(Number);
  var grayLevel;

  switch (method) {
    case "min":
      grayLevel = (rgb[0] + rgb[1] - Math.abs(rgb[0] - rgb[1])) / 2;
      grayLevel = (grayLevel + rgb[2] - Math.abs(grayLevel - rgb[2])) / 2;
      break;
    case "max":
      grayLevel = (rgb[0] + rgb[1] + Math.abs(rgb[0] - rgb[1])) / 2;
      grayLevel = (grayLevel + rgb[2] + Math.abs(grayLevel - rgb[2])) / 2;
      break;
    case "eye":
      grayLevel = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
      break;
    case "mean":
      grayLevel = (rgb[0] + rgb[1] + rgb[2]) / 3;
      break;
  }
  console.log("Caso #" + i + ": " + grayLevel.toFixed(0));
}
