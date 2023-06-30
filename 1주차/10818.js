const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const inputArr = input.toString().split(" ");

let min = inputArr[0];
let max = inputArr[0];

for (let i = 0; i < n; i++) {
  console.log(inputArr[i]);
  if (min > parseInt(inputArr[i])) min = parseInt(inputArr[i]);
  if (max < parseInt(inputArr[i])) max = parseInt(inputArr[i]);
}
console.log(min, max);
