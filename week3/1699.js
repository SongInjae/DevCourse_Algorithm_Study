const fs = require("fs");
const filepath = process.platform === "linux" ? "./dev/stdin" : "../input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

const solution = (input) => {
  const n = Number(input.splice(0, 1));
  const dp = Array.from(Array(n + 1), () => Infinity);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < i; j++) {
      if (i - j ** 2 >= 0) dp[i] = Math.min(dp[i], (dp[i - j ** 2] ?? 0) + 1);
    }
  }

  return dp[n];
};

console.log(solution(input));
