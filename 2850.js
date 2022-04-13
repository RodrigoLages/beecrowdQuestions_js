//var prompt = function(texto) { return lines.shift();};

loop: while (true) {
  var legs = prompt();

  switch (legs) {
    case "esquerda":
      console.log("ingles");
      break;
    case "direita":
      console.log("frances");
      break;
    case "nenhuma":
      console.log("portugues");
      break;
    case "as duas":
      console.log("caiu");
      break;
    default:
      break loop;
  }
}
