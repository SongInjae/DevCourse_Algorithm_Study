function calculateDistance(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function threeSearch(l, r) {
  let left = l;
  let right = r;

  for (let i = 0; i < 100; i++) {
    const p = (2 * left + right) / 3;
    const q = (left + 2 * right) / 3;

    if (calculateDistance(p) > calculateDistance(q)) left = p;
    else right = q;
  }
  return calculateDistance(left);
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../examplex.txt");
const [ax, ay, bx, by, cx, cy, dx, dy] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split(" ");
