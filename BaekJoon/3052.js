// https://www.acmicpc.net/problem/3052
// 나머지

const list = [];
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "39\n40\n41\n42\n43\n44\n82\n83\n84\n85\n".split("\n");
// const input = "1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n".split("\n");

input.pop();
input.map((n) => (!list.includes(n % 42) ? list.push(n % 42) : null));

console.log(list.length);
