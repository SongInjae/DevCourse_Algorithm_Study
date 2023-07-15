const solution = (n, arr) => {
  const dp = Array.from(Array(n + 1), () => 0);
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + arr[j]);
    }
  }
  return dp[n];
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let arr = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = Number(input.splice(0, 1));
  while (input.length) {
    arr.push([
      0,
      ...input
        .splice(0, 1)[0]
        .split(" ")
        .map((n) => Number(n)),
    ]);
  }
  console.log(solution(n, arr.splice(0, 1)[0]));
});
