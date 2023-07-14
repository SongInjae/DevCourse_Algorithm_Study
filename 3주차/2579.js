const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().split("\n");

const num = parseInt(n);
const dp = Array(parseInt(n)).fill(0);

dp[0] = parseInt(input[0]);
if (num === 1) {
  console.log(dp[0]);
  return;
}
dp[1] = parseInt(input[0]) + parseInt(input[1]);
if (num === 2) {
  console.log(dp[1]);
  return;
}

for (let i = 2; i < num; i++) {
  dp[i] = Math.max(
    dp[i - 2] + parseInt(input[i]),
    (dp[i - 3] ?? 0) + parseInt(input[i]) + parseInt(input[i - 1])
  );
}

console.log(dp[num - 1]);
