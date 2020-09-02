// https://www.acmicpc.net/problem/10952
// A+B - 5

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "1 1\n2 3\n3 4\n9 8\n5 2\n0 0\n".split("\n");

input.pop();
input.pop();

input.map((tc) =>
  console.log(
    tc
      .split(" ")
      .map((n) => parseInt(n))
      .reduce((acc, cur) => acc + cur, 0)
  )
);
