//var prompt = function(texto) { return lines.shift();};

var inter = 0;
var gremio = 0;
var ties = 0;

while (true) {
  var grenal = prompt().split(" ").map(Number);

  if (grenal[0] > grenal[1]) {
    inter++;
  } else if (grenal[0] < grenal[1]) {
    gremio++;
  } else {
    ties++;
  }

  console.log("Novo grenal (1-sim 2-nao)");
  var repeat = prompt();
  if (repeat != "1") {
    break;
  }
}

console.log(inter + gremio + ties + " grenais");
console.log("Inter:" + inter);
console.log("Gremio:" + gremio);
console.log("Empates:" + ties);

if (inter > gremio) {
  console.log("Inter venceu mais");
} else if (inter < gremio) {
  console.log("Gremio venceu mais");
} else {
  console.log("Não houve vencedor");
}
