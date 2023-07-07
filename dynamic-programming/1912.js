const fs = require("fs");
const filepath = process.platform === "linux" ? "./dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

const solution = (input) => {
  const n = Number(input.splice(0, 1));
  const arr = input
    .splice(0, 1)[0]
    .split(" ")
    .map((v) => Number(v));

  const dp = Array.from(new Array(n), () => 0);
  dp[0] = arr[0];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
  }

  return Math.max(...dp);
};

console.log(solution(input));
