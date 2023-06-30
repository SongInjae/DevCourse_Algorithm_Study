const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    const [A, B] = input[i].split(" ").map(Number);
    console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
  }
  process.exit();
});
