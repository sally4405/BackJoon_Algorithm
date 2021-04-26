// https://www.acmicpc.net/problem/1003
// 피보나치 함수

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => parseInt(n));
const input = "8\n0\n1\n2\n3\n4\n5\n6\n40\n".split("\n").map((n) => parseInt(n));
input.shift();
input.pop();

const zeroCount = [1, 0];
const oneCount = [0, 1];

const max = Math.max(...input);

for (let i = 2; i <= max; i++) {
  zeroCount.push(zeroCount[i - 1] + zeroCount[i - 2]);
  oneCount.push(oneCount[i - 1] + oneCount[i - 2]);
}

input.map((n) => console.log(zeroCount[n], oneCount[n]));
