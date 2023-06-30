const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
const solution = (input) => {
  input = parseInt(input);
  const dp = Array(parseInt(input) + 1).fill(0);

  dp[1] = 0;
  dp[2] = dp[3] = 1;
  for (let i = 4; i <= input; i++) {
    let one = Infinity,
      two = Infinity,
      three = Infinity;
    if (i % 3 === 0) three = dp[i / 3] + 1;
    if (i % 2 === 0) two = dp[i / 2] + 1;
    one = dp[i - 1] + 1;
    dp[i] = Math.min(three, two, one);
  }
  return dp[input];
};

console.log(solution(input));
