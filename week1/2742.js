const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let n = Number(input[0]);
  let ret = "";
  while (n !== 0) {
    ret += `${n}\n`;
    n -= 1;
  }
  console.log(ret.substring(0, ret.length - 1));
  process.exit();
});
