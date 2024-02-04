function bfs(startNode, totalWater) {
  const needVisit = [startNode];
  const visited = {};
  let possible_move_water = 0;
  visited[startNode.join("")] = true;

  while (needVisit.length) {
    const [current_a, current_b] = needVisit.shift();
    const current_c = totalWater - current_a - current_b;

    if (current_a === 0) answer.push(totalWater - current_b);

    // A -> B
    possible_move_water = Math.min(current_a, b - current_b);
    const case_AB = [
      current_a - possible_move_water,
      current_b + possible_move_water,
    ];
    if (!visited[case_AB.join("")]) {
      visited[case_AB.join("")] = true;
      needVisit.push(case_AB);
    }

    // A -> C
    possible_move_water = Math.min(current_a, c - current_c);
    const case_AC = [current_a - possible_move_water, current_b];
    if (!visited[case_AC.join("")]) {
      visited[case_AC.join("")] = true;
      needVisit.push(case_AC);
    }

    // B -> C
    possible_move_water = Math.min(current_b, c - current_c);
    const case_BC = [current_a, current_b - possible_move_water];
    if (!visited[case_BC.join("")]) {
      visited[case_BC.join("")] = true;
      needVisit.push(case_BC);
    }

    // B -> A
    possible_move_water = Math.min(current_b, a - current_a);
    const case_BA = [
      current_a + possible_move_water,
      current_b - possible_move_water,
    ];
    if (!visited[case_BA.join("")]) {
      visited[case_BA.join("")] = true;
      needVisit.push(case_BA);
    }

    // C -> A
    possible_move_water = Math.min(current_c, a - current_a);
    const case_CA = [current_a + possible_move_water, current_b];
    if (!visited[case_CA.join("")]) {
      visited[case_CA.join("")] = true;
      needVisit.push(case_CA);
    }

    // C -> B
    possible_move_water = Math.min(current_c, b - current_b);
    const case_CB = [current_a, current_b + possible_move_water];
    if (!visited[case_CB.join("")]) {
      visited[case_CB.join("")] = true;
      needVisit.push(case_CB);
    }
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [a, b, c] = fs.readFileSync(filepath).toString().split(" ").map(Number);
const answer = [];

bfs([0, 0], c);

console.log([...new Set(answer)].sort((a, b) => a - b).join(" "));
