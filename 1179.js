//var prompt = function(texto) { return lines.shift();};

var num;
var evens = [];
var odds = [];

for (let i = 0; i < 15; i++) {
  num = parseInt(prompt());
  if (num % 2 == 0) {
    evens.push(num);
  } else {
    odds.push(num);
  }

  if (evens.length == 5) {
    for (let j = 0; j < 5; j++) {
      console.log(`par[${j}] = ${evens[j]}`);
    }
    evens = [];
  }

  if (odds.length == 5) {
    for (let j = 0; j < 5; j++) {
      console.log(`impar[${j}] = ${odds[j]}`);
    }
    odds = [];
  }
}

for (let j = 0; j < odds.length; j++) {
  console.log(`impar[${j}] = ${odds[j]}`);
}

for (let j = 0; j < evens.length; j++) {
  console.log(`par[${j}] = ${evens[j]}`);
}
