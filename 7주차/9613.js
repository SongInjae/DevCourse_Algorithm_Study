const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const result = [];

for (let i = 0; i < n; i++) {
  const arr = input[i].split(" ").map(Number);
  let sum = 0;
  for (let j = 1; j < arr[0]; j++) {
    for (let x = j + 1; x <= arr[0]; x++) {
      let max = 0;
      let min = 0;
      if (arr[j] > arr[x]) {
        max = arr[j];
        min = arr[x];
      } else {
        max = arr[x];
        min = arr[j];
      }

      while (min != 1) {
        if (max % min === 0) break;
        const tmp = min;
        min = max % min;
        max = tmp;
      }
      sum += min;
    }
  }
  result.push(sum);
}

console.log(result.join("\n"));
