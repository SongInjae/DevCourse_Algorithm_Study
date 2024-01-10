function isPossible(mid) {
  let count = c - 1;
  let prevHouse = houseInfo[0];

  for (let i = 1; i < houseInfo.length; i++) {
    if (houseInfo[i] - prevHouse >= mid) {
      count--;
      prevHouse = houseInfo[i];
    }
  }

  return count <= 0;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, ...input] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const [n, c] = info.split(" ").map(Number);

const houseInfo = input.map(Number).sort((a, b) => a - b);

let low = 1;
let high = houseInfo[houseInfo.length - 1];

while (low <= high) {
  const mid = Math.floor((low + high) / 2);

  if (isPossible(mid)) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(high);
