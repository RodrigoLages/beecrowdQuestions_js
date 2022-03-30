//var prompt = function(texto) { return lines.shift();};

const minutesLeft = parseInt(prompt());
const [giftA, giftB] = prompt().split(" ").map(Number);

if (giftA + giftB > minutesLeft) {
  console.log("Deixa para amanha!");
} else {
  console.log("Farei hoje!");
}
