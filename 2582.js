//var prompt = function(texto) { return lines.shift();};

const songs = new Map();
songs.set(0, "PROXYCITY");
songs.set(1, "P.Y.N.G.");
songs.set(2, "DNSUEY!");
songs.set(3, "SERVERS");
songs.set(4, "HOST!");
songs.set(5, "CRIPTONIZE");
songs.set(6, "OFFLINE DAY");
songs.set(7, "SALT");
songs.set(8, "ANSWER!");
songs.set(9, "RAR?");
songs.set(10, "WIFI ANTENNAS");

var cases = parseInt(prompt());

for (let i = 0; i < cases; i++) {
  let [button1, button2] = prompt().split(" ").map(Number);
  console.log(songs.get(button1 + button2));
}
