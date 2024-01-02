const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().split("\n");

const result = [];

for (let i = 0; i < input.length - 1; i++) {
  const row = Array(4).fill(0);

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] >= "a" && input[i][j] <= "z") row[0] += 1;
    else if (input[i][j] >= "A" && input[i][j] <= "Z") row[1] += 1;
    else if (input[i][j] >= "0" && input[i][j] <= "9") row[2] += 1;
    else if (input[i][j] === " " || input[i][j] === "\n") row[3] += 1;
  }

  result.push(row.join(" "));
}

console.log(result.join("\n"));
