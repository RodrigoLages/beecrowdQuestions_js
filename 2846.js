//var prompt = function(texto) { return lines.shift();};

var fib = [1, 1];
for (let i = 1; i < 29; i++) {
  fib.push(fib[i] + fib[i - 1]);
}

const term = parseInt(prompt());

let num = 4;
for (let i = 1; i <= term; num++) {
  if (!fib.includes(num)) {
    i++;
  }
}

console.log(num - 1);
