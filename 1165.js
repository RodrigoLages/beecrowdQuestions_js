//var prompt = function(texto) { return lines.shift();};

function isPrime(num) {
  if (num < 2) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
  }

  return true;
}

const cases = parseInt(prompt());

for (let n = 0; n < cases; n++) {
  var value = parseInt(prompt());

  if (isPrime(value)) {
    console.log(value + " eh primo");
  } else {
    console.log(value + " nao eh primo");
  }
}
