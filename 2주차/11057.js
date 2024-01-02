const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

const dp = Array.from(Array(input + 1), () => Array(10).fill(0));

for (let i = 0; i <= 9; i++) dp[1][i] = 1;

for (let i = 2; i <= input; i++) {
  dp[i][9] = 1;
  for (let j = 8; j >= 0; j--) {
    dp[i][j] = (dp[i - 1][j] + dp[i][j + 1]) % 10007;
  }
}

let sum = 0;

for (let i = 0; i <= 9; i++) {
  sum = (sum + dp[input][i]) % 10007;
}

console.log(sum);
