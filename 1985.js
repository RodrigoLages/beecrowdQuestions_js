//var prompt = function(texto) { return lines.shift();};

const menu = {
  1001: 1.5,
  1002: 2.5,
  1003: 3.5,
  1004: 4.5,
  1005: 5.5,
};
const products = parseInt(prompt());
var total = 0;

for (let i = 0; i < products; i++) {
  var [number, quantity] = prompt().split(" ").map(Number);
  total = total + menu[number] * quantity;
}

console.log(total.toFixed(2));
