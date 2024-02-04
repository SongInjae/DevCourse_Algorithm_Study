class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  append(value) {
    const newNode = new Node(value);
    this.count += 1;
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  shift() {
    this.count -= 1;
    const node = this.head;
    this.head = this.head.next;
    return node.value;
  }
}

function checkMove(index) {
  switch (index) {
    case 0:
      return [1, 3];
    case 1:
      return [-1, 1, 3];
    case 2:
      return [-1, 3];
    case 3:
      return [-3, 1, 3];
    case 4:
      return [-3, 1, 3, -1];
    case 5:
      return [-3, -1, 3];
    case 6:
      return [-3, 1];
    case 7:
      return [-3, -1, 1];
    case 8:
      return [-3, -1];
  }
}
function swap(str, prevIdx, nextIdx) {
  const newStr = str.split("");
  newStr[prevIdx] = newStr[nextIdx];
  newStr[nextIdx] = "0";

  return newStr.join("");
}
function bfs(map) {
  const needVisit = new LinkedList();
  needVisit.append(map);

  const count = {};
  count[map] = 0;

  while (needVisit.count) {
    const str = needVisit.shift();

    const curIdx = str.indexOf("0");
    if (str === "123456780") return count[str];

    const move = checkMove(curIdx);

    for (plusIdx of move) {
      const newIdx = curIdx + plusIdx;
      if (newIdx < 0 || newIdx > 8) continue;

      const newStr = swap(str, curIdx, newIdx);

      if (!count[newStr]) {
        needVisit.append(newStr);
        count[newStr] = count[str] + 1;
      }
    }
  }
  return -1;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const map = input.map((str) => str.split(" ").join("")).join("");

console.log(bfs(map));
