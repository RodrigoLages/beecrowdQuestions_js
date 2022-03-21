//var prompt = function(texto) { return lines.shift();};

function decrescent(a) {
  let arraySort = [];

  while (a.length > 0) {
    let highest = a[0];
    for (let i = 1; i < a.length; i++) {
      highest = (highest + a[i] + Math.abs(highest - a[i])) / 2;
    }

    arraySort.push(highest);
    a.splice(a.indexOf(highest), 1);
  }

  return arraySort;
}

while (true) {
  var inpt = prompt().split("");
  if (isNaN(inpt[0])) {
    break;
  }
  var [citizens, queries] = inpt.join("").split(" ").map(Number);
  var grades = [];

  for (let i = 0; i < citizens; i++) {
    grades.push(parseInt(prompt()));
  }
  grades = decrescent(grades);

  for (let i = 0; i < queries; i++) {
    var rank = parseInt(prompt());
    console.log(grades[rank - 1]);
  }
}
