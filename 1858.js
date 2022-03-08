//var prompt = function(texto) { return lines.shift();};

var size = parseInt(prompt());
var people = prompt().split(" ").map(Number);
var lowest = people[0];

for (let n = 1; n < size; n++) {
  lowest = (lowest + people[n] - Math.abs(lowest - people[n])) / 2;
}

console.log(people.indexOf(lowest) + 1);
