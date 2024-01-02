const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().split("\n");

const inputArr = input.map((num) => parseInt(num));
const max = Math.max(...inputArr);

const dp = Array(max + 1).fill(0);

dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;

for (let i = 6; i <= max; i++) dp[i] = dp[i - 1] + dp[i - 5];

console.log(input);
console.log(inputArr, max);
for (let i = 0; i < parseInt(n); i++) {
  console.log(dp[inputArr[i]]);
}
