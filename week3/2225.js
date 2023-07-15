const fs = require("fs");
const filepath = process.platform === "linux" ? "./dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filepath)
  .toString()
  .split(" ")
  .map((v) => Number(v));

const solution = (input) => {
  const [n, m] = input;
  const dp = Array.from(Array(n + 1), () => Array.from(Array(m + 1), () => 0));
  for (let i = 1; i < m + 1; i++) {
    dp[1][i] = i;
  }
  for (let i = 1; i < n + 1; i++) {
    dp[i][1] = 1;
  }

  for (let i = 2; i < n + 1; i++) {
    for (let j = 2; j < m + 1; j++) {
      dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000000;
    }
  }

  return dp[n][m];
};

console.log(solution(input));
