//var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());
var message, codes, encrypted;

for (let i = 0; i < cases; i++) {
  message = prompt();
  codes = [];
  encrypted = "";

  for (let j = 0; j < message.length; j++) {
    codes.push(message.charCodeAt(j));
    if ((64 < codes[j] && codes[j] < 91) || (96 < codes[j] && codes[j] < 123)) {
      codes[j] += 3;
    }
  }

  codes.reverse();

  for (let j = Math.trunc(codes.length / 2); j < codes.length; j++) {
    codes[j] -= 1;
  }

  for (let item of codes) {
    encrypted += String.fromCharCode(item);
  }

  console.log(encrypted);
}
