const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const n = parseInt(fs.readFileSync(filepath).toString());

const stack = [];

for (let i = 1; i <= n; i++) {
  if (i === n) {
    for (let a = 1; a <= 2 * n - 1; a++) stack.push("*");
    break;
  }
  for (let b = n - 1; b >= i; b--) stack.push(" ");
  stack.push("*");
  for (let c = 1; c <= 2 * (i - 1) - 1; c++) stack.push(" ");
  if (i !== 1) stack.push("*");
  stack.push("\n");
}

console.log(stack.join(""));
