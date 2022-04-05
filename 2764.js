//var prompt = function(texto) { return lines.shift();};

const [dd, mm, yy] = prompt().split("/");

console.log([mm, dd, yy].join("/"));
console.log([yy, mm, dd].join("/"));
console.log([dd, mm, yy].join("-"));
