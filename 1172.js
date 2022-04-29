//var prompt = function(texto) { return lines.shift();};

const arr = [];
var num;

for (let i = 0; i < 10; i++) {
  num = parseInt(prompt());
  arr.push(num);

  if (arr[i] < 1) {
    arr[i] = 1;
  }

  console.log(`X[${i}] = ${arr[i]}`);
}
