const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

const stack = [];

for (let i = input; i > 0; i--) {
  for (let j = 1; j <= i; j++) stack.push("*");
  if (i !== 1) stack.push("\n");
}

console.log(stack.join(""));
