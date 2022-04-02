//var prompt = function(texto) { return lines.shift();};

var people = 0;
var sum = 0;

while (true) {
  let age = parseInt(prompt());
  if (age < 0) {
    break;
  }

  sum = sum + age;
  people++;
}

console.log((sum / people).toFixed(2));
