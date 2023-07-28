const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const n = parseInt(fs.readFileSync(filepath).toString());

const dp = Array(n + 1).fill(0);
const square = [4];

dp[1] = 1;
dp[2] = 2;
dp[3] = 3;
dp[4] = 1;

for (let i = 5; i <= n; i++) {
  if (Number.isInteger(Math.sqrt(i))) {
    dp[i] = 1;
    square.push(i);
  } else {
    const num = [];
    for (let j = square.length - 1; j >= 0; j--) {
      num.push(dp[i - square[j]] + 1);
    }
    dp[i] = Math.min(...num);
  }
}

console.log(dp[n]);
