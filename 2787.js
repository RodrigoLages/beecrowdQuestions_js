//var prompt = function(texto) { return lines.shift();};

const L = parseInt(prompt());
const C = parseInt(prompt());

if ((L + C) % 2 == 0) {
  console.log(1);
} else {
  console.log(0);
}
