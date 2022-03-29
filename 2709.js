//var prompt = function(texto) { return lines.shift();};

function isPrime(num) {
  let prime = true;

  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        prime = false;
        break;
      }
    }
  } else {
    prime = false;
  }

  return prime;
}

while (true) {
  var ammount = parseInt(prompt());
  if (isNaN(ammount)) {
    break;
  }

  var coins = [];
  for (let i = 0; i < ammount; i++) {
    coins.push(parseInt(prompt()));
  }

  var jump = parseInt(prompt());
  var sum = 0;

  for (let i = ammount - 1; i >= 0; i = i - jump) {
    sum = sum + coins[i];
  }

  if (isPrime(sum)) {
    console.log("You’re a coastal aircraft, Robbie, a large silver aircraft.");
  } else {
    console.log("Bad boy! I’ll hit you.");
  }
}
