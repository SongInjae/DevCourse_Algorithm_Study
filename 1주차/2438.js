const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString();

const stack = [];

for (let i = 1; i <= parseInt(input); i++) {
  for (let j = 1; j <= i; j++) stack.push("*");
  stack.push("\n");
}

console.log(stack.join(""));
