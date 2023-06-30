const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

const solution = (input) => {
  input = Number(input);
  const dp = Array.from(Array(input + 1), () => new Array(10).fill(0));
  for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1;
  }
  for (let i = 2; i <= input; i++) {
    for (let j = 0; j <= 9; j++) {
      dp[i][j] =
        ((dp[i - 1][j - 1] ?? 0) % 1000000000) +
        ((dp[i - 1][j + 1] ?? 0) % 1000000000);
    }
  }
  return dp[input].reduce((a, c) => a + c, 0) % 1000000000;
};

console.log(solution(input));
