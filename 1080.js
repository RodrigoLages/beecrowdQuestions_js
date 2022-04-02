//var prompt = function(texto) { return lines.shift();};

var values = [];

for (let i = 0; i < 100; i++) {
  values.push(parseInt(prompt()));
}

var highest = Math.max(...values);
console.log(highest);
console.log(values.indexOf(highest) + 1);
