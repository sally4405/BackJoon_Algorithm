// https://www.acmicpc.net/status?user_id=sally4405&problem_id=10951&from_mine=1
// A+B - 4

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "1 1\n2 3\n3 4\n9 8\n5 2\n".split("\n");

input.pop();

input.map((tc) =>
  console.log(
    tc
      .split(" ")
      .map((n) => parseInt(n))
      .reduce((acc, cur) => acc + cur, 0)
  )
);
