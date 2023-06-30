const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

const stack = [];

for (let i = 1; i <= input; i++) {
  for (let a = 1; a <= i; a++) stack.push("*");
  for (let b = input; b > i; b--) stack.push(" ");
  for (let c = input; c > i; c--) stack.push(" ");
  for (let d = 1; d <= i; d++) stack.push("*");
  stack.push("\n");
}

for (let j = 1; j <= input - 1; j++) {
  for (let e = input; e > j; e--) stack.push("*");
  for (let f = 1; f <= j; f++) stack.push(" ");
  for (let g = 1; g <= j; g++) stack.push(" ");
  for (let h = input; h > j; h--) stack.push("*");
  if (j !== input - 1) stack.push("\n");
}

console.log(stack.join(""));
