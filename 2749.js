var topBottom = "";
var middle = "";

for (let i = 0; i < 39; i++) {
  topBottom = topBottom + "-";
  if (i == 0 || i == 38) {
    middle = middle + "|";
  } else {
    middle = middle + " ";
  }
}

console.log(topBottom);
console.log(middle.slice(0, 1) + "x = 35" + middle.slice(7));
console.log(middle);
console.log(middle.slice(0, 16) + "x = 35" + middle.slice(22));
console.log(middle);
console.log(middle.slice(0, 32) + "x = 35" + middle.slice(38));
console.log(topBottom);
