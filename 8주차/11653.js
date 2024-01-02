const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
let n = parseInt(fs.readFileSync(filepath).toString().trim());
const result = [];
let i = 2;

while (n >= 2) {
  if (n % i === 0) {
    result.push(i);
    n = n / i;
  } else {
    i++;
  }
}

console.log(result.join("\n"));
