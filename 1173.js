//var prompt = function(texto) { return lines.shift();};

const num = parseInt(prompt());
const arr = [num];

for (let i = 0; i < 9; i++) {
  arr.push(arr[i] * 2);
}

for (let i = 0; i < 10; i++) {
  console.log(`N[${i}] = ${arr[i]}`);
}
