const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [lastNum, count, input] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const breakArr = input.split(" ").reduce((acc, v) => {
  acc[v] = true;
  return acc;
}, {});

let answer = Math.abs(100 - parseInt(lastNum));

for (let i = 0; i <= 999900; i++) {
  const curr = i.toString();
  let isValid = true;

  for (const n of curr) {
    if (breakArr[n]) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    answer = Math.min(answer, Math.abs(i - parseInt(lastNum)) + curr.length);
  }
}

console.log(answer);
