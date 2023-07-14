const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().split("\n");
const inputArr = input.toString().split(" ");

const dp = Array(parseInt(n)).fill(0);

dp[0] = 1;

for (let i = 1; i < parseInt(n); i++) {
  const check = [];
  for (let j = 0; j < i; j++) {
    if (parseInt(inputArr[i]) < parseInt(inputArr[j])) check.push(dp[j] + 1);
    else check.push(1);
  }
  dp[i] = Math.max(...check);
}

console.log(dp);
