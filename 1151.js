//var prompt = function(texto) { return lines.shift();};

const size = parseInt(prompt());
var fib = [0, 1];

for (let i = 1; i < size - 1; i++) {
  fib.push(fib[i] + fib[i - 1]);
}

if (size == 1) {
  console.log(0);
} else {
  console.log(fib.join(" "));
}
