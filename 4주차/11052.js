const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, input] = fs.readFileSync(filepath).toString().trim().split("\n");

const inputArr = input.split(" ").map(Number);

const dp = Array(parseInt(n) + 1).fill(0);

dp[1] = inputArr[0];

for (let i = 2; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + inputArr[j - 1]);
  }
}

console.log(dp[n]);
