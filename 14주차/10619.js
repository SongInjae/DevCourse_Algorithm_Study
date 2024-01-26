function calculate(arr) {
  let curMax = 0;

  for (let i = 0; i < parseInt(n) - 1; i++) {
    curMax += Math.abs(arr[i] - arr[i + 1]);
  }
  return curMax;
}

function dfs(depth) {
  for (let i = 0; i < parseInt(n); i++) {
    if (depth === parseInt(n)) {
      max = Math.max(max, calculate(newArr));
    } else if (!visited[i]) {
      visited[i] = true;
      newArr.push(inputArr[i]);
      dfs(depth + 1);
      visited[i] = false;
      newArr.pop();
    }
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, arr] = fs.readFileSync(filepath).toString().split("\n");

const inputArr = arr.split(" ").map(Number);
const visited = Array(parseInt(n)).fill(false);
const newArr = [];
let max = 0;

dfs(0);

console.log(max);
