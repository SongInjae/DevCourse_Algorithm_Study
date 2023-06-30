const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const temp = input[1].split(" ").map(Number);
  console.log(Math.min(...temp), Math.max(...temp));
});
