const fs = require("fs");
const filePath = process.platform === "linux" ? "./dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString();

const solution = (input) => {
  input = Number(input);
  const dp = Array(input + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= input; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }
  return dp[input];
};

console.log(solution(input));
