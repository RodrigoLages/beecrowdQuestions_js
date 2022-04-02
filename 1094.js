//var prompt = function(texto) { return lines.shift();};

const subjects = new Map();
subjects.set("C", 0);
subjects.set("R", 0);
subjects.set("S", 0);

const cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var [ammount, type] = prompt().split(" ");

  subjects.set(type, subjects.get(type) + ammount);
}

const total = subjects.get("C") + subjects.get("R") + subjects.get("S");

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${subjects.get("C")}`);
console.log(`Total de ratos: ${subjects.get("R")}`);
console.log(`Total de sapos: ${subjects.get("S")}`);
console.log(
  `Percentual de coelhos: ${((subjects.get("C") * 100) / total).toFixed(2)} %`
);
console.log(
  `Percentual de ratos: ${((subjects.get("R") * 100) / total).toFixed(2)} %`
);
console.log(
  `Percentual de sapos: ${((subjects.get("S") * 100) / total).toFixed(2)} %`
);
