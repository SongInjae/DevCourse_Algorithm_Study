const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

const stack = [];

for (let i = 1; i <= input; i++) {
  for (let k = input; k > i; k--) stack.push(" ");
  for (let j = 1; j <= i; j++) stack.push("*");
  if (i !== input) stack.push("\n");
}

console.log(stack.join(""));
