//var prompt = function(texto) { return lines.shift();};

const arr = [];

for (let i = 0; i < 100; i++) {
  arr.push(parseFloat(prompt()));

  if (arr[i] <= 10) {
    console.log(`A[${i}] = ${arr[i].toFixed(1)}`);
  }
}
