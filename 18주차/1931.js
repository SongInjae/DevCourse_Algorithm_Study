function solution() {
  let answer = arr[0][0] === arr[0][1] ? 0 : 1;
  let prevEnd = arr[0][1];

  arr.forEach(([start, end]) => {
    if (end < prevEnd) prevEnd = end;
    else if (start >= prevEnd) {
      answer++;
      prevEnd = end;
    }
  });
  console.log(answer);
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const n = +input.shift();
const arr = input
  .map((str) => str.split(" ").map(Number))
  .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

solution();
