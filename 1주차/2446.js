const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

const stack = [];

for (let i = input; i > 0; i--) {
  for (let a = input; a > i; a--) stack.push(" ");
  for (let b = 1; b <= 2 * i - 1; b++) stack.push("*");
  stack.push("\n");
}

for (let j = 2; j <= input; j++) {
  for (let c = input; c > j; c--) stack.push(" ");
  for (let d = 1; d <= 2 * j - 1; d++) stack.push("*");
  if (j !== input) stack.push("\n");
}

console.log(stack.join(""));
