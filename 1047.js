//var prompt = function(texto) { return lines.shift();};

var [h1, m1, h2, m2] = prompt().split(" ").map(Number);

var minutes = m2 - m1;
var hours = h2 - h1;

if (minutes < 0) {
  minutes = minutes + 60;
  hours = hours - 1;
}

if (hours < 0) {
  hours = hours + 24;
}

if (h1 == h2 && m1 == m2) {
  hours = 24;
}

console.log("O JOGO DUROU " + hours + " HORA(S) E " + minutes + " MINUTO(S)");
