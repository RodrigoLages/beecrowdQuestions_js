//var prompt = function(texto) { return lines.shift();};

function crescent(a) {
  let arraySort = [];

  while (a.length > 0) {
    let lowest = a[0];
    for (let i = 1; i < a.length; i++) {
      lowest = (lowest + a[i] - Math.abs(lowest - a[i])) / 2;
    }

    arraySort.push(lowest);
    a.splice(a.indexOf(lowest), 1);
  }

  return arraySort;
}

var sticks = prompt().split(" ").map(Number);
sticks = crescent(sticks);
var triangle = false;

for (let i = 0; i < sticks.length - 2; i++) {
  if (sticks[i] + sticks[i + 1] > sticks[i + 2]) {
    triangle = true;
  }
}

if (triangle) {
  console.log("S");
} else {
  console.log("N");
}
