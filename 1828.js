//var prompt = function(texto) { return lines.shift();};

const games = parseInt(prompt());
const sheldon = [
  "tesoura papel",
  "papel pedra",
  "pedra lagarto",
  "lagarto Spock",
  "Spock tesoura",
  "tesoura lagarto",
  "lagarto papel",
  "papel Spock",
  "Spock pedra",
  "pedra tesoura",
];

const raj = [
  "papel tesoura",
  "pedra papel",
  "lagarto pedra",
  "Spock lagarto",
  "tesoura Spock",
  "lagarto tesoura",
  "papel lagarto",
  "Spock papel",
  "pedra Spock",
  "tesoura pedra",
];

for (let i = 1; i <= games; i++) {
  var result = prompt();
  var draw = true;

  for (let n = 0; n < 10; n++) {
    if (result == sheldon[n]) {
      console.log("Caso #" + i + ": Bazinga!");
      draw = false;
      break;
    }
    if (result == raj[n]) {
      console.log("Caso #" + i + ": Raj trapaceou!");
      draw = false;
      break;
    }
  }

  if (draw) {
    console.log("Caso #" + i + ": De novo!");
  }
}
