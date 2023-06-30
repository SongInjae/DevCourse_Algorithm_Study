const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

const stack = [];

for (let i = 1; i <= input; i++) {
  for (let j = input - 1; j >= i; j--) stack.push(" ");
  for (let k = 1; k <= i; k++) stack.push("* ");
  if (i !== input) stack.push("\n");
}

console.log(stack.join(""));
