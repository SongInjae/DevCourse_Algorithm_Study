function Hanoi(num, from, other, to) {
  if (num === 0) return;
  else {
    Hanoi(num - 1, from, to, other);
    answer.push([`${from} ${to}`]);
    count++;
    Hanoi(num - 1, other, from, to);
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const n = fs.readFileSync(filepath).toString().trim();
const answer = [];
let count = 0;
Hanoi(parseInt(n), "1", "2", "3");
console.log(answer.join("\n"));
