const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [input, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");

let [n, k] = input.split(" ").map(Number);
let answer = 0;

for (let i = n - 1; i >= 0; i--) {
  if (k - parseInt(arr[i]) >= 0) {
    answer += parseInt(k / parseInt(arr[i]));
    k %= parseInt(arr[i]);
  }
}

console.log(answer);
