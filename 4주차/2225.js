const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [num, cnt] = fs.readFileSync(filepath).toString().split(" ").map(Number);

const dp = Array.from(Array(num + 1), () => Array(cnt + 1).fill(0));

for (let i = 0; i <= cnt; i++) dp[1][i] = i;
for (let i = 0; i <= num; i++) dp[i][1] = 1;

for (let i = 2; i <= num; i++) {
  for (let j = 2; j <= cnt; j++) {
    dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000000;
  }
}

console.log(dp[3][3]);
