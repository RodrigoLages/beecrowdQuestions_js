//var prompt = function(texto) { return lines.shift();};

var [tabs, actions] = prompt().split(" ").map(Number);

for (let i = 0; i < actions; i++) {
  var action = prompt();

  switch (action) {
    case "fechou":
      tabs++;
      break;
    case "clicou":
      tabs--;
  }
}

console.log(tabs);
