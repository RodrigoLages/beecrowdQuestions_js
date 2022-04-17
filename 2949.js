//var prompt = function(texto) { return lines.shift();};

const fellowship = new Map();

fellowship.set("A", 0);
fellowship.set("E", 0);
fellowship.set("H", 0);
fellowship.set("M", 0);
fellowship.set("X", 0);

const people = parseInt(prompt());

for (let i = 0; i < people; i++) {
  var [nm, race] = prompt().split(" ");

  fellowship.set(race, fellowship.get(race) + 1);
}

console.log(fellowship.get("X") + " Hobbit(s)");
console.log(fellowship.get("H") + " Humano(s)");
console.log(fellowship.get("E") + " Elfo(s)");
console.log(fellowship.get("A") + " Anao(s)");
console.log(fellowship.get("M") + " Mago(s)");
