//var prompt = function(texto) { return lines.shift();};

var [time, travel, zone] = prompt().split(" ").map(Number);
var endTime = time + travel + zone;

if (endTime >= 24) {
  endTime = endTime - 24;
}
if (endTime < 0) {
  endTime = endTime + 24;
}

console.log(endTime);
