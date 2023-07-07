const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const solution = (input) => {
  input = Number(input);
  dp = Array(input + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let i = 4; i <= input; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[input];
};

const result = () => {
  for (let i = 1; i <= Number(input[0]); i++) {
    console.log(solution(input[i]));
  }
};

result();
