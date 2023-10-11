// function dfs(visited, map, row, col, curCount) {
//   const d1 = [1, -1, 0, 0];
//   const d2 = [0, 0, 1, -1];

//   visited[row][col] = curCount;

//   for (let i = 0; i < 4; i++) {
//     const x = row + d1[i];
//     const y = col + d2[i];

//     if (x >= 0 && y >= 0 && x < map.length && y < map.length) {
//       if (map[x][y] === 1 && visited[x][y] === 0)
//         dfs(visited, map, x, y, curCount);
//     }
//   }
// }

// const fs = require("fs");
// const path = require("path");
// const filepath = path.join(__dirname, "../example.txt");
// const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");
// const map = input.map((string) => string.split("").map(Number));
// const visited = Array.from(Array(parseInt(n)), () =>
//   Array(parseInt(n)).fill(0)
// );
// const result = [];
// let curCount = 0;

// for (let i = 0; i < parseInt(n); i++) {
//   for (let j = 0; j < parseInt(n); j++) {
//     if (map[i][j] === 1 && visited[i][j] === 0) {
//       curCount++;
//       dfs(visited, map, i, j, curCount);
//     }
//   }
// }

// for (let i = 1; i <= curCount; i++) {
//   let cnt = 0;
//   for (let j = 0; j < parseInt(n); j++) {
//     cnt += visited[j].filter((v) => v === i).length;
//   }
//   result.push(cnt);
// }
// console.log(curCount);
// console.log(result.sort((a, b) => a - b).join("\n"));

function dfs(map, visited, row, col, curCount) {
  const dr = [1, -1, 0, 0];
  const dc = [0, 0, 1, -1];
  const n = map.length;
  visited[row][col] = curCount;

  for (let i = 0; i < 4; i++) {
    const newRow = row + dr[i];
    const newCol = col + dc[i];

    if (newRow >= 0 && newCol >= 0 && newRow < n && newCol < n) {
      if (map[newRow][newCol] === 1 && visited[newRow][newCol] === 0) {
        dfs(map, visited, newRow, newCol, curCount);
      }
    }
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const map = input.map((arr) => arr.split("").map(Number));
const visited = Array.from(Array(parseInt(n)), () =>
  Array(parseInt(n)).fill(0)
);
let curCount = 0;

for (let i = 0; i < parseInt(n); i++) {
  for (let j = 0; j < parseInt(n); j++) {
    if (map[i][j] === 1 && visited[i][j] === 0) {
      dfs(map, visited, i, j, ++curCount);
    }
  }
}

console.log(curCount);
for (let i = 1; i <= curCount; i++) {
  let cnt = 0;

  for (let j = 0; j < parseInt(n); j++) {
    cnt += visited[j].filter((val) => val === i).length;
  }

  console.log(cnt);
}
