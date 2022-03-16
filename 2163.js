//var prompt = function(texto) { return lines.shift();};

const [row, column] = prompt().split(" ").map(Number);

//added an extra row and column at the beggining and end of the array
var arr = [];
for (let i = 0; i < row; i++) {
  let aux = prompt().split(" ").map(Number);
  aux.push(0);
  aux.unshift(0);
  arr.push(aux);
}
let aux = [];
for (let i = 0; i < column + 2; i++) {
  aux.push(0);
}
arr.push(aux);
arr.unshift(aux);

var coordinates = [0, 0];

loop: for (let r = 0; r < row + 2; r++) {
  for (let c = 0; c < column + 2; c++) {
    if (arr[r][c] == 42) {
      if (
        arr[r][c - 1] == 7 &&
        arr[r + 1][c - 1] == 7 &&
        arr[r + 1][c] == 7 &&
        arr[r + 1][c + 1] == 7 &&
        arr[r][c + 1] == 7 &&
        arr[r - 1][c + 1] == 7 &&
        arr[r - 1][c] == 7 &&
        arr[r - 1][c - 1] == 7
      ) {
        coordinates = [r, c];
        break loop;
      }
    }
  }
}
console.log(coordinates.join(" "));
