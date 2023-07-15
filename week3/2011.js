const solution = (input) => {
  const n = input.length;
  const dp = Array.from(Array(n + 1), () => 0);

  if (input[0] === "0") return 0;

  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    if (input[i - 1] === "0") {
      if (
        input[i - 2] + input[i - 1] < "27" &&
        input[i - 2] + input[i - 1] > "00"
      ) {
        dp[i] = dp[i - 2];
      } else {
        dp[i] = 0;
      }
    } else if (input[i - 2] === "0") {
      dp[i] = dp[i - 1];
    } else if (
      input[i - 2] + input[i - 1] < "27" &&
      input[i - 2] + input[i - 1] > "00"
    ) {
      dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000;
    } else {
      dp[i] = dp[i - 1];
    }
  }

  return dp[n];
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = "";

rl.on("line", (line) => {
  input = line;
  rl.close();
}).on("close", () => {
  console.log(solution(input));
  process.exit();
});
