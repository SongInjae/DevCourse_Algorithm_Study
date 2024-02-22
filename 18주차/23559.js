const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");

let [N, X] = input.shift().split(" ").map(Number);
const arr = input
  .map((str) => str.split(" ").map(Number))
  .sort((a, b) => b[0] - b[1] - (a[0] - a[1]));
let answer = 0;

for (let i = 0; i < N; i++) {
  const [first, second] = arr[i];

  if (X < 1000) break;

  if (second >= first || X < 5000) {
    answer += second;
    X -= 1000;
  } else {
    answer += first;
    X -= 5000;
  }
}

console.log(answer);
