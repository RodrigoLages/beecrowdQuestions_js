//var prompt = function(texto) { return lines.shift();};

while (true) {
  var alphabet = prompt().split("");
  if (alphabet.length < 26) {
    break;
  }
  var letters = parseInt(prompt());
  var bulbs = prompt().split(" ").map(Number);
  var message = "";

  for (let element of bulbs) {
    message = message + alphabet[element - 1];
  }

  console.log(message);
}
