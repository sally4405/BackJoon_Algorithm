// https://www.acmicpc.net/problem/10773
// 제로

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "10\n1\n3\n5\n4\n0\n0\n7\n0\n0\n6\n".split("\n");
input.shift();
input.pop();

const result = [];
input.map((n) => {
  if (!parseInt(n)) result.pop();
  else result.push(parseInt(n));
});

console.log(result.reduce((acc, cur) => acc + parseInt(cur), 0));
