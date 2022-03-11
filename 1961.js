//var prompt = function(texto) { return lines.shift();};

const [jump, number] = prompt().split(" ").map(Number);
const pipes = prompt().split(" ").map(Number);
var game = true;

for (let i = 0; i < number - 1; i++) {
  if (jump < Math.abs(pipes[i + 1] - pipes[i])) {
    game = false;
    break;
  }
}

if (game) {
  console.log("YOU WIN");
} else {
  console.log("GAME OVER");
}
