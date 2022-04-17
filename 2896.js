//var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var [bought, sets] = prompt().split(" ").map(Number);

  var bottles = Math.trunc(bought / sets) + (bought % sets);

  console.log(bottles);
}
