const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

const dp = Array.from(Array(input + 1), () => Array(10).fill(0));

for (let i = 1; i <= 9; i++) dp[1][i] = 1;

for (i = 2; i <= input; i++) {
  dp[i][0] = dp[i - 1][1];
  for (j = 1; j < 9; j++) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
    dp[i][j] = dp[i][j] % 1000000000;
  }
  dp[i][9] = dp[i - 1][8];
}

let sum = 0;

for (let i = 1; i <= 9; i++) sum = (sum + dp[input][i]) % 1000000000;
console.log(dp[input]);

console.log(sum);
