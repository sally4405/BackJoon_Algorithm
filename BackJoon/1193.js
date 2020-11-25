// https://www.acmicpc.net/problem/1193
// 분수찾기

// const x = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const x = parseInt("14\n");

const lineNum = Math.ceil((-1 + Math.sqrt(1 + 8 * x)) / 2);
const sum = (lineNum * (lineNum - 1)) / 2;

const child = x - sum;
const parent = lineNum + 1 - child;

if (lineNum % 2) console.log(`${parent}/${child}`);
else console.log(`${child}/${parent}`);
