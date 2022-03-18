//var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var bonus = parseInt(prompt());
  var [att1, def1, lvl1] = prompt().split(" ").map(Number);
  var [att2, def2, lvl2] = prompt().split(" ").map(Number);

  var value1 = (att1 + def1) / 2;
  var value2 = (att2 + def2) / 2;

  if (lvl1 % 2 == 0) {
    value1 = value1 + bonus;
  }
  if (lvl2 % 2 == 0) {
    value2 = value2 + bonus;
  }

  if (value1 > value2) {
    console.log("Dabriel");
  }
  if (value1 < value2) {
    console.log("Guarte");
  }
  if (value1 == value2) {
    console.log("Empate");
  }
}
