const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...arr] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = 0;
let prevNumber = arr[n - 1];

for (let i = n - 2; i >= 0; i--) {
  if (arr[i] >= prevNumber) {
    answer += arr[i] - prevNumber + 1;
    prevNumber -= 1;
  } else {
    prevNumber = arr[i];
  }
}

console.log(answer);
