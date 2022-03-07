//var prompt = function(texto) { return lines.shift();};

var [side1, side2, percent] = prompt().split(" ").map(Number);

while (side1 > 0) {
  var terrain = Math.sqrt((side1 * side2 * 100) / percent);
  console.log(Math.trunc(terrain));

  var [side1, side2, percent] = prompt().split(" ").map(Number);
}
