const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");
let nextTime = -1;
let answer = 0;

const map = input
  .map((str) => str.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

map.forEach((time) => {
  if (time[0] >= nextTime) {
    answer++;
    nextTime = time[1];
  }
});

console.log(answer);
