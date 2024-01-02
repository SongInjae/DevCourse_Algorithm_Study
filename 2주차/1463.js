const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

let min = 100000;

function solution(n, cnt) {
  if (min < cnt) return;
  if (n === 1) {
    if (min > cnt) min = cnt;
    return;
  }
  if (n % 3 === 0) solution(n / 3, cnt + 1);
  if (n % 2 === 0) solution(n / 2, cnt + 1);
  if (n > 1) solution(n - 1, cnt + 1);
}

solution(input, 0);
console.log(min);
