//var prompt = function(texto) { return lines.shift();};

while (true) {
  var volume = parseFloat(prompt());
  if (isNaN(volume)) {
    break;
  }
  var diameter = parseFloat(prompt());

  var area = (diameter / 2) * (diameter / 2) * 3.14;
  var height = volume / area;

  console.log("ALTURA = " + height.toFixed(2));
  console.log("AREA = " + area.toFixed(2));
}
