//var prompt = function(texto) { return lines.shift();};

var message = prompt();
var bits = 0;

for (let char of message) {
  if (char == 1) {
    bits++;
  }
}

if (bits % 2 == 0) {
  message = message + "0";
} else {
  message = message + "1";
}

console.log(message);
