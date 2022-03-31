//var prompt = function(texto) { return lines.shift();};

const alphabet = "abcdefghklmnijopqrstuvwxyz";

while (true) {
  var letters = parseInt(prompt());
  if (isNaN(letters)) {
    break;
  }

  for (let i = 0; i < letters; i++) {
    var code = prompt();

    if (code.includes(" ")) {
      code = code.split(" ");
    } else {
      code = [code];
    }

    var index = code.length * 3 - 3;
    index = index + code[0].length - 1;
    console.log(index);

    console.log(alphabet.charAt(index));
  }
}
