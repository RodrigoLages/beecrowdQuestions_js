//var prompt = function(texto) { return lines.shift();};

while (true) {
  var attQtt = parseInt(prompt());
  if (isNaN(attQtt)) {
    break;
  }
  var [cardsM, cardsL] = prompt().split(" ").map(Number);
  var deckM = [];
  var deckL = [];

  if (attQtt == 1) {
    for (let i = 0; i < cardsM; i++) {
      let card = parseInt(prompt());
      deckM.push(card);
    }
    for (let i = 0; i < cardsL; i++) {
      let card = parseInt(prompt());
      deckL.push(card);
    }
  } else {
    for (let i = 0; i < cardsM; i++) {
      let card = prompt().split(" ").map(Number);
      deckM.push(card);
    }
    for (let i = 0; i < cardsL; i++) {
      let card = prompt().split(" ").map(Number);
      deckL.push(card);
    }
  }

  var [choiceM, choiceL] = prompt().split(" ").map(Number);
  var attribute = parseInt(prompt());

  if (deckM[choiceM - 1][attribute - 1] > deckL[choiceL - 1][attribute - 1]) {
    console.log("Marcos");
  } else if (
    deckM[choiceM - 1][attribute - 1] < deckL[choiceL - 1][attribute - 1]
  ) {
    console.log("Leonardo");
  } else {
    console.log("Empate");
  }
}
