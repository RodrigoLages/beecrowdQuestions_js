//var prompt = function(texto) { return lines.shift();};

const album = parseInt(prompt());
const bought = parseInt(prompt());
var uniques = [];
var sticker;

for (let i = 0; i < bought; i++) {
  sticker = prompt();

  if (!uniques.includes(sticker)) {
    uniques.push(sticker);
  }
}

console.log(album - uniques.length);
