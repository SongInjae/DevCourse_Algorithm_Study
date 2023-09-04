function stack(val, arr, cmd, num) {
  if (cmd === "push") {
    arr.push(num);
  } else if (cmd === "pop") {
    val.push(arr.length === 0 ? -1 : arr.pop());
  } else if (cmd === "size") {
    val.push(arr.length);
  } else if (cmd === "empty") {
    val.push(arr.length === 0 ? 1 : 0);
  } else if (cmd === "top") {
    val.push(arr.length === 0 ? -1 : arr[arr.length - 1]);
  }
  return;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const inputArr = [];
const val = [];

for (let i = 0; i < parseInt(n); i++) {
  const text = input[i].split(" ");
  if (!text[1]) stack(val, inputArr, text[0]);
  else stack(val, inputArr, text[0], parseInt(text[1]));
}

console.log(val.join("\n"));
