const solution = (input) =>
  [...Array(+input).keys()].map((i) => input - i).join("\n");
const print = (input) => console.log(solution(input + ""));
process.stdin.on("data", print);
