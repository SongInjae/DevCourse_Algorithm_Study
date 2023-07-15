const fs = require("fs");
const filepath = process.platform === "linux" ? "./dev/stdin" : "../input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

const solution = () => {
  const n = Number(input.splice(0, 1));
  const arr = input.map((v) => Number(v));
  const dp = Array.from(Array(n), () => 0);

  dp[0] = arr[0];
  if (n > 1) dp[1] = arr[0] + arr[1];
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(
      (dp[i - 3] ?? 0) + arr[i - 1] + arr[i],
      dp[i - 2] + arr[i]
    );
  }

  return dp[n - 1];
};

console.log(solution(input));
