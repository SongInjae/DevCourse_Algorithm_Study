const fs = require("fs");
const filepath = process.platform === "linux" ? "./dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

const solution = (input) => {
  const result = [];
  const n = Number(input.splice(0, 1));
  for (let i = 0; i < n; i++) {
    const k = Number(input.splice(0, 1));
    let arr = [];
    arr.push(input.splice(0, 1).join("").split(" "));
    arr.push(input.splice(0, 1).join("").split(" "));
    arr = arr.map((v) => v.map((v) => Number(v)));
    result.push(maxSum(k, arr));
  }

  result.forEach((v) => console.log(v));
};

const maxSum = (n, arr) => {
  const dp = Array.from(Array(2), () => Array(n).fill(0));
  dp[0][0] = arr[0][0];
  dp[1][0] = arr[1][0];
  for (let i = 0; i < n; i++) {
    dp[0][i] = Math.max(dp[1][i - 1] ?? 0, dp[1][i - 2] ?? 0) + arr[0][i];
    dp[1][i] = Math.max(dp[0][i - 1] ?? 0, dp[0][i - 2] ?? 0) + arr[1][i];
  }
  return Math.max(dp[0][n - 1], dp[1][n - 1]);
};

solution(input);
