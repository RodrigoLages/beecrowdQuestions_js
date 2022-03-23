//var prompt = function(texto) { return lines.shift();};

while (true) {
  var clones = parseInt(prompt());
  if (isNaN(clones)) {
    break;
  }

  var times = Math.log(clones) / Math.log(2);
  console.log(times);
}
