const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().split("\n");

const inputArr = input.toString().split(" ");

const dp = Array(parseInt(n)).fill(0);

dp[0] = parseInt(inputArr[0]);

for (let i = 1; i < parseInt(n); i++) {
  const check = [];
  for (let j = 0; j < i; j++) {
    if (parseInt(inputArr[i]) > parseInt(inputArr[j]))
      check.push(dp[j] + parseInt(inputArr[i]));
    else check.push(parseInt(inputArr[i]));
  }
  dp[i] = Math.max(...check);
}

console.log(Math.max(...dp));
