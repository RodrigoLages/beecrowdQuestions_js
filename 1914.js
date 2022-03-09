//var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var [name1, choice1, name2, choice2] = prompt().split(" ");
  var [N, M] = prompt().split(" ").map(Number);
  var sum = N + M;

  if (sum % 2 == 0) {
    sum = "PAR";
  } else {
    sum = "IMPAR";
  }

  if (sum == choice1) {
    console.log(name1);
  } else {
    console.log(name2);
  }
}
