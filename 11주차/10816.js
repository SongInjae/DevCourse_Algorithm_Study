function countNumberCard() {
  let checkNumber = myCards[0];
  let count = 1;

  for (let i = 1; i < n; i++) {
    if (myCards[i] === checkNumber) {
      count++;
    } else {
      countedCards.push([checkNumber, count]);
      checkNumber = myCards[i];
      count = 1;
    }
  }
  countedCards.push([checkNumber, count]);
}

function binarySearch(findNumber) {
  let low = 0;
  let high = countedCards.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (countedCards[mid][0] === findNumber) return countedCards[mid][1];
    else if (countedCards[mid][0] > findNumber) high = mid - 1;
    else low = mid + 1;
  }
  return 0;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const countedCards = [];
const answer = [];

const n = parseInt(input[0]);
const myCards = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const m = parseInt(input[2]);
const checkCards = input[3].split(" ").map(Number);

countNumberCard();

for (const number of checkCards) {
  answer.push(binarySearch(number));
}

console.log(answer.join(" "));
