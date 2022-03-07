//var prompt = function(texto) { return lines.shift();};

while (true) {
  var L = parseInt(prompt());
  if (isNaN(L)) {
    break;
  }

  var slugs = prompt().split(" ").map(Number);
  var fastest = slugs[0];

  for (let i = 1; i < L; i++) {
    fastest = (fastest + slugs[i] + Math.abs(fastest - slugs[i])) / 2;
  }

  if (fastest < 10) {
    console.log(1);
  }
  if (fastest >= 10 && fastest < 20) {
    console.log(2);
  }
  if (fastest >= 20) {
    console.log(3);
  }
}
