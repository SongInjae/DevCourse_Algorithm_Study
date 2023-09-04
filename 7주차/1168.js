const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [total, num] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = [];
let index = 0;

for (let i = 1; i <= total; i++) {
  index = (index + num - 1) % i;
  result.push(index + 1);
  index++;
}

console.log("<" + result.join(", ") + ">");
