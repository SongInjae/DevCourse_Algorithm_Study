const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [_, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");

for (let i = 0; i < arr.length; i += 2) {
  const numArr = arr[i + 1].split(" ").map(Number);
  let maxStock = 0;
  let answer = 0;

  for (let i = numArr.length - 1; i >= 0; i--) {
    if (numArr[i] > maxStock) maxStock = numArr[i];
    else if (numArr[i] < maxStock) answer += maxStock - numArr[i];
  }

  console.log(answer);
}
