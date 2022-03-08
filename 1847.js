//var prompt = function(texto) { return lines.shift();};

var [day1, day2, day3] = prompt().split(" ").map(Number);
var change1 = day2 - day1;
var change2 = day3 - day2;
var mood;

if (change1 > 0) {
  if (change2 >= change1) {
    mood = ":)";
  } else {
    mood = ":(";
  }
}

if (change1 < 0) {
  if (change2 > change1) {
    mood = ":)";
  } else {
    mood = ":(";
  }
}

if (change1 == 0) {
  if (change2 > change1) {
    mood = ":)";
  } else {
    mood = ":(";
  }
}

console.log(mood);
