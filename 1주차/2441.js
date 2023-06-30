const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

const stack = [];

for (let i = input; i > 0; i--) {
  for (let k = input - i; k > 0; k--) stack.push(" ");
  for (let j = 0; j < i; j++) stack.push("*");
  if (i !== 1) stack.push("\n");
}

console.log(stack.join(""));
