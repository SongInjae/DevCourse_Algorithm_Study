const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim();

const stack = [];
let sum = 0;

for (let i = 0; i < input.length - 1; i++) {
  if (input[i] === "(") {
    if (input[i + 1] === ")") {
      for (let i = 0; i < stack.length; i++) stack[i] += 1;
      i++;
    } else {
      stack.push(1);
    }
  } else if (input[i] === ")") {
    sum += stack.pop();
  }
}

if (stack.length !== 0) sum += stack.pop();

console.log(sum);
