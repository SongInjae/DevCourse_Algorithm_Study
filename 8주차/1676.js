const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const n = parseInt(fs.readFileSync(filepath).toString().trim());
let sum = BigInt(1);
let result = 0;

for (let i = BigInt(2); i <= n; i++) {
  sum *= i;
}

sum = sum.toString();

for (let i = sum.length - 1; i >= 0; i--) {
  if (sum[i] === "0") result++;
  else break;
}

console.log(result);
