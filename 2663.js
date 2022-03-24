//var prompt = function(texto) { return lines.shift();};

function decrescent(A) {
  let arraySort = [];

  while (A.length > 0) {
    let lowest = Math.max(...A);

    arraySort.push(lowest);
    A.splice(A.indexOf(lowest), 1);
  }

  return arraySort;
}

var candidates = parseInt(prompt());
var approved = parseInt(prompt());
var score = [];

for (let i = 0; i < candidates; i++) {
  let points = parseInt(prompt());
  score.push(points);
}
score = decrescent(score);

var passScore = score[approved - 1];
var passed = score.lastIndexOf(passScore) + 1;

console.log(passed);
