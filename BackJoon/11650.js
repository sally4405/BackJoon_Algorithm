// https://www.acmicpc.net/problem/11650
// 좌표 정렬하기

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "5\n3 4\n1 1\n1 -1\n2 2\n3 3\n".split("\n");

input.shift();
input.pop();

const result = input
  .map((n) => {
    const position = n.split(" ");
    return { x: parseInt(position[0]), y: parseInt(position[1]) };
  })
  .sort((a, b) => {
    if (a.x !== b.x) return a.x - b.x;
    else return a.y - b.y;
  })
  .reduce((acc, cur) => (acc += `${cur.x} ${cur.y} \n`), "");

console.log(result);
