//var prompt = function(texto) { return lines.shift();};

prompt();
const stamped = prompt().split(" ").map(Number);
const bought = prompt().split(" ").map(Number);
var missing = 0;

for (let sticker of stamped) {
  if (!bought.includes(sticker)) {
    missing++;
  }
}

console.log(missing);
