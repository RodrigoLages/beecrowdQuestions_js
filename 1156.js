var S = 0;
var d = 1;

for (let i = 1; i < 40; i = i + 2) {
  S = S + i / d;
  d = d * 2;
}
console.log(S.toFixed(2));
