//var prompt = function(texto) { return lines.shift();};

var students = [];
var [total, draw] = prompt().split(" ").map(Number);

for (let i = 0; i < total; i++) {
  students[i] = prompt();
}

for (let i = 1; i < total; i++) {
  let j = i;
  let aux = students[i];

  while (j > 0 && checkAlphOrder(students[j - 1], aux)) {
    students[j] = students[j - 1];
    j--;
  }

  students[j] = aux;
}

console.log(students[draw - 1]);

function checkAlphOrder(n1, n2) {
  for (let count = 0; true; count++) {
    if (n1.charCodeAt(count) > n2.charCodeAt(count)) {
      return true;
    } else if (n1.charCodeAt(count) < n2.charCodeAt(count)) {
      return false;
    } else if (isNaN(n1.charCodeAt(count)) || isNaN(n2.charCodeAt(count))) {
      break;
    }
  }
}
