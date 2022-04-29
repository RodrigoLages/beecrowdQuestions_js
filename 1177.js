//var prompt = function(texto) { return lines.shift();};

const num = parseInt(prompt());
const N = [];
var count = 0;

for (let i = 0; i < 1000; i++) {
  N.push(count);
  count++;
  count = count % num;

  console.log(`N[${i}] = ${N[i]}`);
}
