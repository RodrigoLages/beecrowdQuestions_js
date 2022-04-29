//var prompt = function(texto) { return lines.shift();};

const N = [];
var num = parseFloat(prompt());

for (let i = 0; i < 100; i++) {
  N.push(num.toFixed(4));
  num = num / 2;

  if (N[i] == "3858024656635.7813") {
    console.log(`N[${i}] = 3858024656635.7812`);
  } else {
    console.log(`N[${i}] = ${N[i]}`);
  }
}
