const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

const dp = Array.from(Array(input + 1), () => Array(2).fill(0));

dp[1][0] = 0;
dp[1][1] = 1;
dp[2][0] = 1;
dp[2][1] = 0;

for (let i = 3; i <= input; i++) {
  dp[i][0] = BigInt(dp[i - 1][0] + dp[i - 1][1]);
  dp[i][1] = BigInt(dp[i - 1][0]);
}
const sum = BigInt(dp[input][0] + dp[input][1]).toString();
console.log(sum.slice(0, sum.length));
