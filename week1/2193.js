const fs = require("fs");
const filePath = process.platform === "linux" ? "./dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

const solution = (input) => {
  input = Number(input);
  const dp = Array.from(Array(input + 1), () => 0);

  dp[1] = 1;

  for (let i = 2; i <= input; i++) {
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
  }

  return String(dp[input]);
};

console.log(solution(input));
