//var prompt = function(texto) { return lines.shift();};

var credits = prompt().split(" ").map(Number);
var travel = "N";

if (
  credits[0] == credits[1] ||
  credits[0] == credits[2] ||
  credits[1] == credits[2]
) {
  travel = "S";
}

if (
  credits[0] + credits[1] == credits[2] ||
  credits[1] + credits[2] == credits[0] ||
  credits[2] + credits[0] == credits[1]
) {
  travel = "S";
}

console.log(travel);
