const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

const stack = [];

for (let i = 1; i <= input; i++) {
  for (let a = input; a > i; a--) stack.push(" ");
  for (let b = 1; b <= i; b++) stack.push("*");
  stack.push("\n");
}
for (let j = 1; j <= input - 1; j++) {
  for (let c = 1; c <= j; c++) stack.push(" ");
  for (let d = input; d > j; d--) stack.push("*");
  if (j !== input - 1) stack.push("\n");
}
console.log(stack.join(""));
