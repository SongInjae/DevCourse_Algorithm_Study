const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const inputArr = Array.from(Array(parseInt(n)), () => Array(4).fill(0));

for (let i = 0; i < parseInt(n); i++) {
  const text = input[i].split(" ");
  inputArr[i][0] = text[0];
  inputArr[i][1] = parseInt(text[1]);
  inputArr[i][2] = parseInt(text[2]);
  inputArr[i][3] = parseInt(text[3]);
}

inputArr.sort((a, b) => {
  if (a[1] === b[1] && a[2] === b[2] && a[3] === b[3]) {
    return a[0] > b[0] ? 1 : -1;
  } else if (a[1] === b[1] && a[2] === b[2]) {
    return b[3] - a[3];
  } else if (a[1] === b[1]) {
    return a[2] - b[2];
  } else {
    return b[1] - a[1];
  }
});

const names = inputArr.map((item) => item[0]);
const result = names.join("\n");
console.log(result);
