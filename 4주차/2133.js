const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const n = parseInt(fs.readFileSync(filepath).toString());

const dp = Array(n + 1).fill(0);

dp[1] = 0;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
  if (i % 2 === 1) dp[i] = 0;
  else {
    dp[i] = dp[i - 2] * 4 - dp[i - 4];
  }
}

console.log(dp);
