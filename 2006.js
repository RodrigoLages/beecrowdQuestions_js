//var prompt = function(texto) { return lines.shift();};

const tea = prompt();
const guesses = prompt().split(" ");
var correct = 0;

for (let i = 0; i < 5; i++) {
  if (tea == guesses[i]) {
    correct++;
  }
}

console.log(correct);
