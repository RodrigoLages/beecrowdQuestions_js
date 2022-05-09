//var prompt = function(texto) { return lines.shift();};

var [digit, num] = prompt().split(" ");
var printed = "";

while (digit !== "0" || num !== "0") {
  for (let char of num) {
    if (char != digit) {
      printed += char;
    }
  }

  if (printed == 0) {
    console.log(0);
  } else if (printed.length < 10) {
    console.log(parseInt(printed));
  } else {
    console.log(printed);
  }

  printed = "";
  [digit, num] = prompt().split(" ");
}
