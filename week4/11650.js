const solution = (arr) => {
  console.log(
    arr
      .sort((a, b) => (a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]))
      .map((v) => `${v[0]} ${v[1]}`)
      .join("\n")
  );
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = Number(input.splice(0, 1)[0]);
  const arr = input.map((v) => v.split(" "));
  solution(arr);
});
