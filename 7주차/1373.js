const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
let num = fs.readFileSync(filepath).toString().trim();

let result = "";

while (num.length >= 3) {
  result = parseInt(num.slice(num.length - 3), 2).toString(8) + result;
  num = num.slice(0, num.length - 3);
}

console.log((num ? parseInt(num, 2).toString(8) : "") + result);
