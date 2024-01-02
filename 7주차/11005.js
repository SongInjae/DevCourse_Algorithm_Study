const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [num, radix] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(num.toString(radix).toUpperCase());
