//var prompt = function(texto) { return lines.shift();};

const games = parseInt(prompt());

for (let i = 0; i < games; i++) {
  var P1 = prompt();
  var P2 = prompt();

  if (P1 == "ataque") {
    if (P2 == "ataque") {
      console.log("Aniquilacao mutua");
    } else {
      console.log("Jogador 1 venceu");
    }
  }

  if (P1 == "pedra") {
    switch (P2) {
      case "ataque":
        console.log("Jogador 2 venceu");
        break;
      case "pedra":
        console.log("Sem ganhador");
        break;
      case "papel":
        console.log("Jogador 1 venceu");
    }
  }

  if (P1 == "papel") {
    if (P2 == "papel") {
      console.log("Ambos venceram");
    } else {
      console.log("Jogador 2 venceu");
    }
  }
}
