const solution = () => {
  console.log(
    c.reduce((a, v, i) => {
      if (v) {
        while (v) {
          a += `${i}\n`;
          v -= 1;
        }
      }
      return a;
    }, "")
  );
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let init = false;
const arr = [];
const c = new Array(10001).fill(0);

rl.on("line", (line) => {
  if (!init) return (init = true);
  c[Number(line)] += 1;
}).on("close", () => {
  solution();
});
