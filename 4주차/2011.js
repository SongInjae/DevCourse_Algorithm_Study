const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const n = fs.readFileSync(filepath).toString().trim();

const dp = Array(n.length).fill(0);

if (n[0] === "0") {
  console.log(0);
  return;
}

if (n.includes("0")) {
  dp[0] = 0;
  if (parseInt(n[0] + n[1]) <= 26 && !n.slice(2).includes("0")) {
    dp[1] = 1;
  } else dp[1] = 0;
} else {
  dp[0] = 1;
  if (parseInt(n[0] + n[1]) <= 26) dp[1] = 2;
  else dp[1] = 1;
}

for (let i = 2; i < n.length; i++) {
  if (parseInt(n[i - 1] + n[i]) <= 26 && n[i - 1] !== "0") {
    if (dp[i - 2] !== 0) dp[i] = dp[i - 2] % 1000000;
    else dp[i] = 1;
  }
  dp[i] += dp[i - 1] % 1000000;
}

console.log(dp[n.length - 1]);
