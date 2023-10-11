const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, m] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

for (let i = n; i <= m; i = i + 2) {
  let check = 0;
  for (let j = 3; j < i; j = j + 2) {
    if (i % j === 0) {
      check = 1;
      break;
    }
  }
  if (i !== 1 && check === 0) result.push(i);
  if (i % 2 === 0) i++;
}
console.log(result.join("\n"));
