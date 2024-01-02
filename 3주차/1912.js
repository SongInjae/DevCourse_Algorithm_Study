const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, input] = fs.readFileSync(filepath).toString().split("\n");

const inputArr = input.split(" ");

const dp = Array(parseInt(n)).fill(0);

dp[0] = parseInt(inputArr[0]);
let max = dp[0];

for (let i = 1; i < parseInt(n); i++) {
  if (parseInt(inputArr[i]) > dp[i - 1] + parseInt(inputArr[i])) {
    dp[i] = parseInt(inputArr[i]);
    if (max < dp[i]) max = dp[i];
    continue;
  }
  if (max < dp[i - 1] + parseInt(inputArr[i])) {
    max = dp[i - 1] + parseInt(inputArr[i]);
  }
  dp[i] = dp[i - 1] + parseInt(inputArr[i]);
}

console.log(max);
