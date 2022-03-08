//var prompt = function(texto) { return lines.shift();};

var crow;
var blink = 0;
var scream = 0;

while (scream < 3) {
  crow = prompt();

  if (crow == "caw caw") {
    console.log(blink);
    blink = 0;
    scream++;
  } else {
    var [a, b, c] = crow.split("");

    if (a == "*") {
      blink = blink + 4;
    }
    if (b == "*") {
      blink = blink + 2;
    }
    if (c == "*") {
      blink = blink + 1;
    }
  }
}
