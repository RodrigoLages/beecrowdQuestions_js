var width = "";
var height = "";

for (let i = 0; i < 39; i++) {
  width = width + "-";
  if (i == 0 || i == 38) {
    height = height + "|";
  } else {
    height = height + " ";
  }
}

console.log(width);
console.log(height.slice(0, 9) + "Roberto" + height.slice(16));
console.log(height);
console.log(height.slice(0, 9) + "5786" + height.slice(13));
console.log(height);
console.log(height.slice(0, 9) + "UNIFEI" + height.slice(15));
console.log(width);
