//var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var years = parseInt(prompt());
  var time = 2015 - years;

  if (time > 0) {
    console.log(time + " D.C.");
  } else {
    time = Math.abs(time - 1);
    console.log(time + " A.C.");
  }
}
