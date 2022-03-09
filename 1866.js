//var prompt = function(texto) { return lines.shift();};

var cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var sum = parseInt(prompt());

  if (sum % 2 == 0) {
    console.log(0);
  } else {
    console.log(1);
  }
}
