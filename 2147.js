//var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var word = prompt();
  var time = word.length * 0.01;
  console.log(time.toFixed(2));
}
