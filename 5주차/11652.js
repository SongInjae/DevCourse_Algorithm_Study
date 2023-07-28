const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);
let maxNum = input[0];
let maxSum = 1;
let sum = 1;

for (let i = 1; i < parseInt(n); i++) {
  if (input[i - 1] === input[i]) {
    sum++;
  } else {
    if (maxSum < sum) {
      maxNum = input[i - 1];
      maxSum = sum;
    }
    sum = 1;
  }
}

if (maxSum < sum) maxNum = input[n - 1];
console.log(maxNum);
