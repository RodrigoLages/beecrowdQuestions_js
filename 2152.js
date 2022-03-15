//var prompt = function(texto) { return lines.shift();};

const cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  var [hours, minutes, action] = prompt().split(" ").map(Number);

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (action == 1) {
    action = "abriu!";
  } else {
    action = "fechou!";
  }
  console.log(hours + ":" + minutes + " - A porta " + action);
}
