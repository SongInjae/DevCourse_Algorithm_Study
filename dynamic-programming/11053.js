const fs = require("fs");
const filepath = process.platform === "linux" ? "./dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

const solution = (input) => {
  const n = Number(input.splice(0, 1));
  const arr = input
    .splice(0, 1)[0]
    .split(" ")
    .map((v) => Number(v));
  const dp = new Array(n).fill(0);

  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    const a = [0];
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) a.push(dp[j] + 1);
      else a.push(1);
    }
    dp[i] = Math.max(...a);
  }
  return Math.max(...dp);
};

console.log(solution(input));
