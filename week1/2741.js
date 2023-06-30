const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const n = Number(input[0]);
  let ret = "";
  let start = 1;
  while (start !== n + 1) {
    ret += `${start}\n`;
    start += 1;
  }
  console.log(ret);
  process.exit();
});
