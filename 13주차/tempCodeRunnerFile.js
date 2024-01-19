const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let index = 0;
let answer = 0;

input.sort((a, b) => a - b);

while (input[index] < 0 && index < n) {
  if (index !== n - 1 && input[index + 1] <= 0) {
    answer += input[index] * input[index + 1];
    index += 2;
  } else {
    answer += input[index];
    index++;
  }
}
index = n - 1;
while (input[index] > 0 && index >= 0) {
  if (index !== 0 && input[index - 1] > 0) {
    answer += input[index] * input[index - 1];
    index -= 2;
  } else {
    answer += input[index];
    index--;
  }
}

console.log(answer);
