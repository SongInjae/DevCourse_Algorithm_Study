const fs = require("fs");
const filePath = process.platform === "linux" ? "./dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

const solution = (input) => {
  input = Number(input);
  const dp = Array.from(Array(input + 1), () => new Array(10).fill(0));
  dp[1].forEach((_, idx) => (dp[1][idx] = 1));
  for (let i = 2; i <= input; i++) {
    for (let j = 0; j <= 9; j++) {
      dp[i][j] = dp[i - 1].slice(j).reduce((a, c) => (a + c) % 10007, 0);
    }
  }
  return dp[input].reduce((a, c) => (a + c) % 10007, 0);
};

console.log(solution(input));
