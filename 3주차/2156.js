const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const dp = Array(parseInt(n)).fill(0);

dp[0] = parseInt(input[0]);
dp[1] = parseInt(input[1]) + dp[0];

for (let i = 2; i < parseInt(n); i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 2] + parseInt(input[i]),
    (dp[i - 3] ?? 0) + parseInt(input[i - 1]) + parseInt(input[i])
  );
}
console.log(input);
console.log(dp);
//console.log(dp[parseInt(n) - 1]);
