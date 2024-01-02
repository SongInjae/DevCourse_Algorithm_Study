const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

const dp = Array(input + 1).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for (let i = 4; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}
console.log(dp[input]);
