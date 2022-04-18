//var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());
const expenses = new Map();
expenses.set("V", 0);
expenses.set("G", 0);

let aux;
for (let i = 0; i < cases; i++) {
  aux = prompt().split(" ");
  aux[1] = parseInt(aux[1]);

  expenses.set(aux[0], expenses.get(aux[0]) + aux[1]);
}

if (expenses.get("V") < expenses.get("G")) {
  console.log("NAO VAI TER CORTE, VAI TER LUTA!");
} else {
  console.log("A greve vai parar.");
}
