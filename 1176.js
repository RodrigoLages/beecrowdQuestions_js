//var prompt = function(texto) { return lines.shift();};

const fib = [0, 1];

for (let i = 1; i < 60; i++) {
  fib.push(fib[i] + fib[i - 1]);
}

const cases = parseInt(prompt());
var indx;

for (let i = 0; i < cases; i++) {
  indx = parseInt(prompt());

  console.log(`Fib(${indx}) = ${fib[indx]}`);
}
