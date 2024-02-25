const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr1 = input.splice(0, n).map((str) => str.split(" ").map(Number));
const k = input.shift();
const arr2 = input.map((str) => str.split(" ").map(Number));

arr2.forEach(([row1, col1, row2, col2]) => {
  let sum = 0;
  for (let i = row1 - 1; i < row2; i++) {
    for (let j = col1 - 1; j < col2; j++) sum += arr1[i][j];
  }
  console.log(sum);
});
