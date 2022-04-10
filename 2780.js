//var prompt = function(texto) { return lines.shift();};

const distance = parseInt(prompt());

if (distance <= 800) {
  console.log(1);
} else if (distance <= 1400) {
  console.log(2);
} else {
  console.log(3);
}
