//var prompt = function(texto) { return lines.shift();};

var num;
for (let i = 0; i < 10; i++) {
  num = parseInt(prompt());
  if (num < 1) {
    num = 1;
  }

  console.log(`X[${i}] = ${num}`);
}
