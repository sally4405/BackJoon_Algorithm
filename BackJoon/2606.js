// https://www.acmicpc.net/problem/2606
// 바이러스

// const [N, lineNum, lineList] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, lineNum, ...lineList] = "7\n6\n1 2\n2 3\n1 5\n5 2\n5 6\n4 7\n".split("\n");
const virus = [1];

lineList.pop();
lineList.map((n) =>
  n
    .split(" ")
    .map((m) => parseInt(m))
    .sort((a, b) => a - b)
);

console.log(virus);
