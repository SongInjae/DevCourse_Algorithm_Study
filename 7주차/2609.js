const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [a, b] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let max = 0;
let min = 0;

if (a < b) {
  max = b;
  min = a;
} else {
  max = a;
  min = b;
}

for (let i = max; i > 0; i--) {
  if (a % i === 0 && b % i === 0) {
    console.log(i);
    break;
  }
}

for (let i = max; i <= max * min; i += max) {
  if (i % a === 0 && i % b === 0) {
    console.log(i);
    return;
  }
}
