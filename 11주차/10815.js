function binarySearch(findNumber) {
  let low = 0;
  let high = n;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (findNumber === myCards[mid]) return 1;
    else if (findNumber > myCards[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return 0;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const answer = [];

const n = parseInt(input[0]);
const myCards = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const m = parseInt(input[2]);
const checkCards = input[3].split(" ").map(Number);

for (const number of checkCards) {
  answer.push(binarySearch(number));
}

console.log(answer.join(" "));
