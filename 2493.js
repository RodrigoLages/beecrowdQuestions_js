//var prompt = function(texto) { return lines.shift();};

while (true) {
  var players = parseInt(prompt("players"));
  if (isNaN(players)) {
    break;
  }
  var expressions = [];
  var answers = [];
  var operations = [];
  var missed = [];

  for (let i = 0; i < players; i++) {
    expressions.push(prompt("expressions"));
  }
  for (let i = 0; i < players; i++) {
    answers.push(prompt("answers"));
  }

  for (let element of expressions) {
    element = element.split("=");
    element = element.join(" ").split(" ").map(Number);
    if (element[0] + element[1] == element[2]) {
      operations.push("+");
    } else if (element[0] - element[1] == element[2]) {
      operations.push("-");
    } else if (element[0] * element[1] == element[2]) {
      operations.push("*");
    } else {
      operations.push("I");
    }
  }

  for (let element of answers) {
    element = element.split(" ");
    if (element[2] != operations[element[1] - 1]) {
      missed.push(element[0]);
    }
  }

  switch (missed.length) {
    case 0:
      console.log("You Shall All Pass!");
      break;
    case players:
      console.log("None Shall Pass!");
      break;
    default:
      console.log(missed.sort().join(" "));
  }
}
