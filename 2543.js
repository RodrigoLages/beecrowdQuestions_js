//var prompt = function(texto) { return lines.shift();};

while (true) {
  var inpt = prompt().split("");
  if (isNaN(inpt[0])) {
    break;
  }
  var [cases, id] = inpt.join("").split(" ").map(Number);
  var mine = 0;

  for (let i = 0; i < cases; i++) {
    let video = prompt().split(" ").map(Number);
    if (video[0] == id && video[1] == 0) {
      mine++;
    }
  }

  console.log(mine);
}
