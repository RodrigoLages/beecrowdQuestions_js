//var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());
var STotal = 0;
var SPoints = 0;
var BTotal = 0;
var BPoints = 0;
var ATotal = 0;
var APoints = 0;

for (let i = 0; i < cases; i++) {
  prompt();
  let [s, b, a] = prompt().split(" ").map(Number);
  STotal = STotal + s;
  BTotal = BTotal + b;
  ATotal = ATotal + a;

  [s, b, a] = prompt().split(" ").map(Number);
  SPoints = SPoints + s;
  BPoints = BPoints + b;
  APoints = APoints + a;
}

var serve = (SPoints * 100) / STotal;
var block = (BPoints * 100) / BTotal;
var attack = (APoints * 100) / ATotal;

console.log("Pontos de Saque: " + serve.toFixed(2) + " %.");
console.log("Pontos de Bloqueio: " + block.toFixed(2) + " %.");
console.log("Pontos de Ataque: " + attack.toFixed(2) + " %.");
