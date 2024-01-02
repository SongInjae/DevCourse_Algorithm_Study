function factorial(arr, num) {
  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] * i;
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, m] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split(" ")
  .map((e) => BigInt(e));

const fac_arr = Array(n + 1n).fill(1);

factorial(fac_arr, n);

const comb = (
  BigInt(fac_arr[n]) / BigInt(fac_arr[n - m] * fac_arr[m])
).toString();
let sum = BigInt(0);

for (let i = BigInt(comb.length - 1); i >= BigInt(0); i--) {
  if (comb[i] === "0") sum++;
  else break;
}

console.log(sum.toString());
