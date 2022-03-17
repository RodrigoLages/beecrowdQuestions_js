//var prompt = function(texto) { return lines.shift();};

const measures = parseInt(prompt());
const RPM = prompt().split(" ").map(Number);
var fall = 0;

for (let i = 1; i < measures; i++) {
  if (RPM[i] < RPM[i - 1]) {
    fall = i + 1;
    break;
  }
}
console.log(fall);
