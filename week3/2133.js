const fs = require("fs");
const filepath = process.platform === "linux" ? "./dev/stdin" : "../input.txt";
let input = fs.readFileSync(filepath).toString();

const solution = (input) => {
  const n = Number(input);
  const dp = Array.from(Array(n + 1), () => 0);

  dp[0] = 1;
  if (n >= 2) dp[2] = 3;
  for (let i = 4; i < n + 1; i += 2) {
    dp[i] = dp[i - 2] * 3;
    for (let j = 4; j <= i; j += 2) {
      dp[i] += dp[i - j] * 2;
    }
  }
  return dp[n];
};

console.log(solution(input));
