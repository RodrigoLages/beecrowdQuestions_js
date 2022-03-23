//var prompt = function(texto) { return lines.shift();};

while (true) {
  var inpt = prompt().split("");
  if (isNaN(inpt[0])) {
    break;
  }
  var [cases, Hmin, Hmax] = inpt.join("").split(" ").map(Number);
  var allowed = 0;

  for (let i = 0; i < cases; i++) {
    let guest = parseInt(prompt());
    if (Hmin <= guest && guest <= Hmax) {
      allowed++;
    }
  }

  console.log(allowed);
}
