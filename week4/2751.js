const solution = (input) => {
  input.sort((a, b) => a - b);
  console.log(input.join("\n"));
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (line) => {
  arr.push(line);
}).on("close", () => {
  const n = Number(arr.splice(0, 1));
  solution(arr);
  process.exit();
});
