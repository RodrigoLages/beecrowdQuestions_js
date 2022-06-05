//var prompt = function(texto) { return lines.shift();};

var cases, book;
var library = [];

while (true) {
  cases = parseInt(prompt());
  if (isNaN(cases)) {
    break;
  }

  library.length = 0;
  for (let i = 0; i < cases; i++) {
    book = parseInt(prompt());

    let j = library.length;
    library[j] = book;

    while (j > 0 && library[j - 1] > book) {
      library[j] = library[j - 1];
      j--;
    }

    library[j] = book;
  }

  for (let item of library) {
    console.log(item.toString().padStart(4, "0"));
  }
}
