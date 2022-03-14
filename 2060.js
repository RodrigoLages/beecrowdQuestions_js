//var prompt = function(texto) { return lines.shift();};

const ammount = parseInt(prompt());
const numbers = prompt().split(" ").map(Number);

function multiples(a) {
  let M = 0;

  for (let i = 0; i < ammount; i++) {
    if (numbers[i] % a == 0) {
      M++;
    }
  }

  console.log(M + " Multiplo(s) de " + a);
}

multiples(2);
multiples(3);
multiples(4);
multiples(5);
