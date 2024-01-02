const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");
const inputArr = input.map((x) => parseInt(x));
const max = Math.max(...inputArr);

const dp = Array(parseInt(n)).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= max; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < parseInt(n); i++) {
  console.log(dp[inputArr[i]]);
}
