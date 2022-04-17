//var prompt = function(texto) { return lines.shift();};

var games = parseInt(prompt());
var wins = 0;

var car;
for (let i = 0; i < games; i++) {
  car = parseInt(prompt());

  if (car > 1) {
    wins++;
  }
}

console.log(wins);
