const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const n = parseInt(fs.readFileSync(filepath).toString().trim());
let sum = 1;

for (let i = 2; i <= n; i++) {
  sum *= i;
}

console.log(sum);
