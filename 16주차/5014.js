function bfs() {
  const needVisit = [[start, 0]];
  visited[start] = true;

  while (needVisit.length) {
    const [current, count] = needVisit.shift();

    if (current === goal) return count;

    if (current - down > 0 && !visited[current - down]) {
      needVisit.push([current - down, count + 1]);
      visited[current - down] = true;
    }
    if (current + up <= total && !visited[current + up]) {
      needVisit.push([current + up, count + 1]);
      visited[current + up] = true;
    }
  }
  return "use the stairs";
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [total, start, goal, up, down] = fs
  .readFileSync(filepath)
  .toString()
  .split(" ")
  .map(Number);
const visited = Array(total + 1).fill(false);

console.log(bfs());
