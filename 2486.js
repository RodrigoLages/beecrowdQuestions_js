//var prompt = function(texto) { return lines.shift();};

const table = {
  "suco de laranja": 120,
  "morango fresco": 85,
  mamao: 85,
  "goiaba vermelha": 70,
  manga: 56,
  laranja: 50,
  brocolis: 34,
};

var T = parseInt(prompt());
while (T != 0) {
  var C = 0;

  for (let i = 0; i < T; i++) {
    let intake = prompt().split(" ");
    let qtt = intake.shift();
    let food = intake.join(" ");

    C = C + table[food] * qtt;
  }

  if (C > 130) {
    console.log("Menos " + (C - 130) + " mg");
  } else if (C < 110) {
    console.log("Mais " + (110 - C) + " mg");
  } else {
    console.log(C + " mg");
  }

  T = parseInt(prompt());
}
