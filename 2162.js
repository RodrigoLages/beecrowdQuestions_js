//var prompt = function(texto) { return lines.shift();};

const measures = parseInt(prompt());
const landscape = prompt().split(" ").map(Number);
var pattern = 0;

if (landscape[0] < landscape[1]) {
  for (let i = 1; i < measures; i++) {
    if (i % 2 == 1 && landscape[i - 1] < landscape[i]) {
      pattern++;
    }
    if (i % 2 == 0 && landscape[i - 1] > landscape[i]) {
      pattern++;
    }
  }
}

if (landscape[0] > landscape[1]) {
  for (let i = 1; i < measures; i++) {
    if (i % 2 == 1 && landscape[i - 1] > landscape[i]) {
      pattern++;
    }
    if (i % 2 == 0 && landscape[i - 1] < landscape[i]) {
      pattern++;
    }
  }
}

if (pattern == measures - 1) {
  console.log(1);
} else {
  console.log(0);
}
