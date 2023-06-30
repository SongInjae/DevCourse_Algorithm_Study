const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

const stack = [];

for (let i = 1; i <= input; i++) {
  for (let k = 1; k <= input - i; k++) stack.push(" ");
  for (let j = 1; j <= 2 * i - 1; j++) stack.push("*");
  if (i !== input) stack.push("\n");
}

console.log(stack.join(""));
