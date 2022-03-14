//var prompt = function(texto) { return lines.shift();};

for (let cases = 1; true; cases++) {
  var sub = prompt().split("").map(Number);
  if (isNaN(sub[0])) {
    break;
  }
  var seq = prompt().split("").map(Number);
  var lastPos;
  var qtt = 0;

  for (let i = 0; i < seq.length; i++) {
    var equal = 0;

    for (let n = 0; n < sub.length; n++) {
      if (sub[n] == seq[i + n]) {
        equal++;
      }
    }
    if (equal == sub.length) {
      qtt++;
      lastPos = i + 1;
    }
  }

  console.log("Caso #" + cases + ":");
  if (qtt == 0) {
    console.log("Nao existe subsequencia");
  } else {
    console.log("Qtd.Subsequencias: " + qtt);
    console.log("Pos: " + lastPos);
  }
  console.log("");
}
