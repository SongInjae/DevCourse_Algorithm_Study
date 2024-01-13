function distance(x1, y1, x2, y2) {
  return (x1 - x2) ** 2 + (y1 - y2) ** 2;
}

function search(start, end) {
  for (let i = start; i < end - 1; i++) {
    for (let j = i + 1; j < end; j++) {
      const distanceDouble = distance(
        arr[i][0],
        arr[i][1],
        arr[j][0],
        arr[j][1]
      );
      if (min > distanceDouble) min = distanceDouble;
    }
  }
}

function middleBand(start, mid, end, minValue) {
  const array = [];

  for (let i = start; i < end; i++) {
    if ((arr[mid][0] - arr[i][0]) ** 2 < minValue) array.push(arr[i]);
  }

  array.sort((a, b) => a[1] - b[1]);

  for (let i = start; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const distanceDouble = distance(
        array[i][0],
        array[i][1],
        array[j][0],
        array[j][1]
      );

      if (distanceDouble < minValue) {
        minValue = distanceDouble;
      } else {
        break;
      }
    }
  }

  return minValue;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const arr = input
  .map((str) => str.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);
const mid = Math.floor(parseInt(n) / 2);
let min = Infinity;

if (parseInt(n) <= 3) {
  search(0, parseInt(n));
  console.log(min);
} else {
  search(0, mid);
  search(mid, parseInt(n));

  const answer = middleBand(0, mid, parseInt(n), min);

  console.log(answer);
}
