const fs = require("fs");
const filepath = process.platform === "linux" ? "./dev/stdin" : "../input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

const solution = (input) => {
  const n = Number(input.splice(0, 1));

  for (let i = 0; i < n; i++) {
    const num = Number(input.splice(0, 1));
    console.log(wave(num));
  }
};

const wave = (num) => {
  const dp = Array.from(new Array(num + 1), () => 0);

  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= num; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }

  return dp[num];
};

solution(input);
