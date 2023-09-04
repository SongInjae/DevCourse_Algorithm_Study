const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [a, b] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

let max = BigInt(0);
min = BigInt(0);

if (a > b) {
  max = a;
  min = b;
} else {
  max = b;
  min = a;
}
while (min !== 1n) {
  if (max % min === 0n) break;

  const tmp = min;
  min = max % min;
  max = tmp;
}

console.log(Array(parseInt(min.toString())).fill(1).join(""));
