//var prompt = function(texto) { return lines.shift();};

var number = parseInt(prompt());
var roman = "";
var values = [number, roman];
const M = [1000, "M"];
const D = [500, "D"];
const C = [100, "C"];
const L = [50, "L"];
const X = [10, "X"];
const V = [5, "V"];
const I = [1, "I"];

function rest(a, b) {
  if (a[0] - values[0] <= b[0]) {
    values[0] = values[0] - (a[0] - b[0]);
    values[1] = values[1] + b[1] + a[1];
  }
  return values;
}
function numerals(a) {
  while (values[0] >= a[0]) {
    values[0] = values[0] - a[0];
    values[1] = values[1] + a[1];
  }
  return values;
}

values = rest(M, C);
values = numerals(D);
values = rest(D, C);
values = numerals(C);
values = rest(C, X);
values = numerals(L);
values = rest(L, X);
values = numerals(X);
values = rest(X, I);
values = numerals(V);
values = rest(V, I);
values = numerals(I);

console.log(values[1]);
