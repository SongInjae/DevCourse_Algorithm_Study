const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  for (let i = 0; i < input.length; i++) {
    let [A, B] = input[i].split(" ").map(Number);
    if (A + B === 0) return;
    console.log(A + B);
  }
  process.exit();
});
