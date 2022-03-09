//var prompt = function(texto) { return lines.shift();};

var cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var [hero, force] = prompt().split(" ");

  if (hero == "Thor") {
    console.log("Y");
  } else {
    console.log("N");
  }
}
