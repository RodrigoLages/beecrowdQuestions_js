//var prompt = function(texto) { return lines.shift();};

function lowest(a, b) {
  let value = (a + b - Math.abs(a - b)) / 2;
  return value;
}

var size = parseInt(prompt());

while (size > 0) {
  for (let i = 0; i < size; i++) {
    let line = [];

    for (let n = 0; n < size; n++) {
      let verticalDistance = lowest(size - i - 1, i);
      let horizDistance = lowest(size - n - 1, n);
      let borderDistance = lowest(verticalDistance, horizDistance);

      let value = (1 + borderDistance).toFixed(0);
      line.push(value.padStart(3));
    }

    console.log(line.join(" "));
  }

  console.log("");
  size = parseInt(prompt());
}
