//var prompt = function(texto) { return lines.shift();};

const N = [];

for (let i = 0; i < 20; i++) {
  N.unshift(parseInt(prompt()));
}

for (let i = 0; i < 20; i++) {
  console.log(`N[${i}] = ${N[i]}`);
}
