// https://www.acmicpc.net/problem/21557
// 불꽃놀이

// const [N, input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, input] = "5\n7 6 8 6 9\n".split("\n");
// const [N, input] = "3\n7 7 3\n".split("\n");
const A = input.split(" ");

const left = Number(A.shift());
const right = Number(A.pop());

const max = left > right ? left : right;
const min = left < right ? left : right;

const diff = max - min;
const choice = N - 2;

if (diff === choice) return console.log(min);
if (diff > choice) return console.log(max - choice);
if (diff < choice) return console.log(min - Math.ceil((choice - diff) / 2));
