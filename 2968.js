//var prompt = function(texto) { return lines.shift();};

const [laps, signs] = prompt().split(" ").map(Number);
var aux = (laps * signs) / 10;

var nums = [];
for (let i = 1; i < 10; i++) {
  nums.push(Math.ceil(aux * i));
}

console.log(nums.join(" "));
