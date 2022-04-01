var topBottom = "";
var content = "";

for (let i = 0; i < 39; i++) {
  topBottom = topBottom + "-";
  if (i == 0 || i == 12 || i == 22 || i == 38) {
    content = content + "|";
  } else {
    content = content + " ";
  }
}

console.log(topBottom);
console.log(
  content.slice(0, 3) +
    "decimal" +
    content.slice(10, 15) +
    "octal" +
    content.slice(20, 25) +
    "Hexadecimal" +
    content.slice(36)
);
console.log(topBottom);

var A = content.slice(0, 6);
var B = content.slice(8, 16);
var C = content.slice(18, 29);
var D = content.slice(31);

for (let i = 0; i < 16; i++) {
  console.log(
    A +
      i.toString().padStart(2) +
      B +
      i.toString(8).padStart(2) +
      C +
      i.toString(16).padStart(2).toUpperCase() +
      D
  );
}

console.log(topBottom);
