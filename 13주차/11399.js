const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, input] = fs.readFileSync(filepath).toString().split("\n");
let sum = 0;
let arr = [];
let answer = 0;

const map = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(map);
for (let i = 0; i < parseInt(n); i++) {
  sum += map[i];
  arr.push(sum);
}

console.log(arr.reduce((arr, cur) => arr + cur, 0));
