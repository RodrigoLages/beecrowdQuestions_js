//var prompt = function(texto) { return lines.shift();};

const highest = parseInt(prompt());
const lowest = parseInt(prompt());
var sum = 0;

if (lowest % 2 == 0) {
  var i = lowest + 1;
} else {
  var i = lowest + 2;
}

for (i; i < highest; i = i + 2) {
  sum = sum + i;
}

console.log(sum);
