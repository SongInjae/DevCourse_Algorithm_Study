const fs = require("fs");
const filepath = process.platform === "linux" ? "./dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

const solution = (input) => {
  const n = Number(input.splice(0, 1));
  const arr = [];

  input.forEach((v) => arr.push(Number(v)));

  return maxGrape(n, arr);
};

const maxGrape = (n, arr) => {
  const dp = Array.from(Array(n), () => 0);
  dp[0] = arr[0];
  dp[1] = arr[0] + arr[1];

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(
      (dp[i - 2] ?? 0) + arr[i],
      (dp[i - 3] ?? 0) + arr[i - 1] + arr[i],
      dp[i - 1] ?? 0
    );
  }

  return dp[n - 1];
};

console.log(solution(input));
