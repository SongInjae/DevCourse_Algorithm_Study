function sum(x1, y1, x2, y2) {
  let sum = 0;

  for (let i = x1; i <= x2; i++) {
    for (let j = y1; j <= y2; j++) {
      sum += map[i][j];
    }
  }

  return sum;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");

const [n, m] = info.split(" ").map(Number);
const map = arr.map((str) => str.split("").map(Number));
let max = 0;

// 1번
for (let i = 0; i < m - 2; i++) {
  for (let j = i + 1; j < m - 1; j++) {
    const r1 = sum(0, 0, n - 1, i);
    const r2 = sum(0, i + 1, n - 1, j);
    const r3 = sum(0, j + 1, n - 1, m - 1);

    if (max < r1 * r2 * r3) max = r1 * r2 * r3;
  }
}

// 2번
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    const r1 = sum(0, 0, i, m - 1);
    const r2 = sum(i + 1, 0, j, m - 1);
    const r3 = sum(j + 1, 0, n - 1, m - 1);

    if (max < r1 * r2 * r3) max = r1 * r2 * r3;
  }
}

// 3번
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < m - 1; j++) {
    const r1 = sum(0, 0, n - 1, j);
    const r2 = sum(0, j + 1, i, m - 1);
    const r3 = sum(i + 1, j + 1, n - 1, m - 1);

    if (max < r1 * r2 * r3) max = r1 * r2 * r3;
  }
}

// 4번
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < m - 1; j++) {
    const r1 = sum(0, 0, i, j);
    const r2 = sum(i + 1, 0, n - 1, j);
    const r3 = sum(0, j + 1, n - 1, m - 1);

    if (max < r1 * r2 * r3) max = r1 * r2 * r3;
  }
}

// 5번
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < m - 1; j++) {
    const r1 = sum(0, 0, i, m - 1);
    const r2 = sum(i + 1, 0, n - 1, j);
    const r3 = sum(i + 1, j + 1, n - 1, m - 1);

    if (max < r1 * r2 * r3) max = r1 * r2 * r3;
  }
}

// 6번
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < m - 1; j++) {
    const r1 = sum(0, 0, i, j);
    const r2 = sum(0, j + 1, i, m - 1);
    const r3 = sum(i + 1, 0, n - 1, m - 1);

    if (max < r1 * r2 * r3) max = r1 * r2 * r3;
  }
}

console.log(max);
