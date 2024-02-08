function find_parent(index) {
  if (parent[index] === index) return index;

  parent[index] = find_parent(parent[index]);
  return parent[index];
}
function make_union(index_A, index_B) {
  const parent_A = find_parent(index_A);
  const parent_B = find_parent(index_B);

  if (parent_A < parent_B) parent[index_B] = parent_A;
  else if (parent_A > parent_B) parent[index_A] = parent_B;
}
function meet(index_A, index_B) {
  const rect_A = rectangleArray[index_A];
  const rect_B = rectangleArray[index_B];

  if (
    rect_B.y2 > rect_A.y2 &&
    rect_A.x2 < rect_B.x2 &&
    rect_A.y1 > rect_B.y1 &&
    rect_B.x1 < rect_A.x1
  )
    return false;
  if (
    rect_A.y2 > rect_B.y2 &&
    rect_B.x2 < rect_A.x2 &&
    rect_B.y1 > rect_A.y1 &&
    rect_B.x1 > rect_A.x1
  )
    return false;
  if (
    rect_B.y1 > rect_A.y2 ||
    rect_B.x1 > rect_A.x2 ||
    rect_A.y1 > rect_B.y2 ||
    rect_B.x2 < rect_A.x1
  )
    return false;
  return true;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const parent = Array.from({ length: parseInt(n) + 1 }, (_, index) => index);
const rectangleArray = [{ x1: 0, y1: 0, x2: 0, y2: 0 }];

input.forEach((str) => {
  const [x1, y1, x2, y2] = str.split(" ").map(Number);
  rectangleArray.push({ x1, y1, x2, y2 });
});

for (let i = 0; i < parseInt(n); i++) {
  for (let j = i + 1; j <= parseInt(n); j++) {
    if (meet(i, j)) make_union(i, j);
  }
}
//for (let i = 0; i <= parseInt(n); i++) find_parent(i);
console.log(parent);
console.log([...new Set(parent)].length - 1);
