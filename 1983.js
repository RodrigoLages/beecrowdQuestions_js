//var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());
var registry = {};

for (let i = 0; i < cases; i++) {
  let [student, grade] = prompt().split(" ").map(Number);
  registry[grade] = student;
}

var grades = Object.keys(registry).map(Number);
var highest = grades[0];

for (let i = 1; i < cases; i++) {
  highest = (highest + grades[i] + Math.abs(highest - grades[i])) / 2;
  highest = parseFloat(highest.toFixed(1));
}

if (highest < 8) {
  console.log("Minimum note not reached");
} else {
  console.log(registry[highest]);
}
