//var prompt = function(texto) { return lines.shift();};

const trays = parseInt(prompt());
var cans, cups;
var broken = 0;

for (let i = 0; i < trays; i++) {
  [cans, cups] = prompt().split(" ").map(Number);

  if (cans > cups) {
    broken += cups;
  }
}

console.log(broken);
