//var prompt = function(texto) { return lines.shift();};

const [choice, j1, j2, cheat, acc] = prompt().split(" ").map(Number);
const result = (j1 + j2) % 2;
var winner;

if (result == choice) {
  winner = 2;
} else {
  winner = 1;
}

if (cheat != acc) {
  winner = 1;
}
if (cheat == 1 && acc == 1) {
  winner = 2;
}

console.log("Jogador " + winner + " ganha!");
