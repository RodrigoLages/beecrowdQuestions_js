//var prompt = function(texto) { return lines.shift();};

const tweet = prompt();
if (tweet.length > 140) {
  console.log("MUTE");
} else {
  console.log("TWEET");
}
