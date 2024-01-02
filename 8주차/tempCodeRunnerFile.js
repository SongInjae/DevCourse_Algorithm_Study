const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, gob] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const arr = new Array(9999).fill(0);
arr[0] = n;
let idx = 1;

while (1) {
  const num = arr[idx - 1].toString();
  let sum = BigInt(0);

  for (let i = 0; i < num.length; i++) {
    let number = BigInt(num[i]);
    for (let j = 1; j < gob; j++) number *= number;
    sum += number;
  }
  if (arr.includes(sum)) {
    const cutIdx = arr.findIndex((num) => num === sum);
    console.log(arr.slice(0, cutIdx).length);
    break;
  }
  arr[idx] = sum;
  idx++;
}
