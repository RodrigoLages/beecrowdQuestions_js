//var prompt = function(texto) { return lines.shift();};
const cases = parseInt(prompt());
const table = [];

for (let i = 0; i < cases; i++) {
  let arr = prompt().split(" ");

  table[i] = {
    country: arr[0],
    gold: parseInt(arr[1]),
    silver: parseInt(arr[2]),
    bronze: parseInt(arr[3]),
  };
}

for (let i = 1; i < cases; i++) {
  let j = i;
  let aux = table[i];

  while (j > 0 && checkCountryOrder(table[j - 1], aux)) {
    table[j] = table[j - 1];
    j--;
  }

  table[j] = aux;
}

for (let item of table) {
  console.log(`${item.country} ${item.gold} ${item.silver} ${item.bronze}`);
}

function checkCountryOrder(c1, c2) {
  if (c1.gold < c2.gold) {
    return true;
  } else if (c1.gold > c2.gold) {
    return false;
  }
  if (c1.silver < c2.silver) {
    return true;
  } else if (c1.silver > c2.silver) {
    return false;
  }
  if (c1.bronze < c2.bronze) {
    return true;
  } else if (c1.bronze > c2.bronze) {
    return false;
  }

  for (let k = 0; true; k++) {
    if (c1.country.charCodeAt(k) > c2.country.charCodeAt(k)) {
      return true;
    } else if (c1.country.charCodeAt(k) < c2.country.charCodeAt(k)) {
      return false;
    }
  }
}
