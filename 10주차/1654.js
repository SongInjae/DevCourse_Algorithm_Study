const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, ...inputArr] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const [k, n] = info.split(" ").map(Number);
const lines = inputArr.map(Number).sort((a, b) => b - a);

let low = 1;
let high = lines[0];

while (low <= high) {
  const mid = parseInt((low + high) / 2);
  let totalSum = 0;

  for (let i = 0; i < k; i++) {
    totalSum += parseInt(lines[i] / mid);
  }

  if (totalSum >= n) low = mid + 1;
  else high = mid - 1;
}
console.log(high);
//console.log(maxLength);

// for (let i = n; i > 0; i--) {
//     const length = Math.floor(inputArr[0] / i);
//     let totalSum = 0;

//     for (let j = 0; j < k; j++) {
//       totalSum += Math.floor(inputArr[j] / length);
//     }

//     if (totalSum < n) break;
//     else maxLength = length;
// }
