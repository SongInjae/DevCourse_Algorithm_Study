const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, inputArr] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = info.split(" ").map(Number);
const trees = inputArr.split(" ").map(Number);
const longTree = Math.max(...trees);

let min = 1;
let max = longTree;

while (min <= max) {
  const mid = parseInt((min + max) / 2);
  let totalLength = 0;

  for (let i = 0; i < trees.length; i++) {
    const restLength = trees[i] - mid;
    if (restLength > 0) totalLength += restLength;
  }

  if (totalLength >= m) min = mid + 1;
  else max = mid - 1;
}
console.log(max);
