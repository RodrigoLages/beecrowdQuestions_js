//var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());
var insideInterval = 0;

for (let i = 0; i < cases; i++) {
  var num = parseInt(prompt());

  if (10 <= num && num <= 20) {
    insideInterval++;
  }
}

console.log(insideInterval + " in");
console.log(cases - insideInterval + " out");
