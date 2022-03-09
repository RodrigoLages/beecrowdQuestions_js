//var prompt = function(texto) { return lines.shift();};

var decimal = parseInt(prompt());
var hexa = [];
const char = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

while (decimal > 0) {
  hexa.unshift(char[decimal % 16]);
  decimal = Math.trunc(decimal / 16);
}

console.log(hexa.join(""));
