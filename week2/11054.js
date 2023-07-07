const fs = require("fs");
const filepath = process.platform === "linux" ? "./dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

const solution = (input) => {
  const n = Number(input.splice(0, 1));
  const arr = input
    .splice(0, 1)[0]
    .split(" ")
    .map((v) => Number(v));

  const dp = Array.from(Array(2), () => Array.from(Array(n), () => 0));

  dp[0][0] = dp[1][n - 1] = 1;
  for (let i = 1; i < n; i++) {
    const b = [1];
    const s = [1];
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) b.push(dp[0][j] + 1);
      else b.push(1);

      if (arr[n - i - 1] > arr[n - j - 1]) s.push(dp[1][n - j - 1] + 1);
      else s.push(1);
    }
    dp[0][i] = Math.max(...b);
    dp[1][n - i - 1] = Math.max(...s);
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    if (max < dp[0][i] + dp[1][i] - 1) max = dp[0][i] + dp[1][i] - 1;
  }
  return max;
};

console.log(solution(input));
