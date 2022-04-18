//var prompt = function(texto) { return lines.shift();};

const candidates = parseInt(prompt());
const carlos = parseInt(prompt());
var elected = true;

let votes;
for (let i = 1; i < candidates; i++) {
  votes = parseInt(prompt());

  if (carlos < votes) {
    elected = false;
    break;
  }
}

if (elected) {
  console.log("S");
} else {
  console.log("N");
}
