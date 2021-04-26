// https://www.acmicpc.net/problem/20528
// 끝말잇기

// const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, ...arr] = "3\npqqp pqpqp pbbbp\n".split("\n");
const S = arr[0].split(" ");
const target = S[0][0];

console.log(S.filter((v) => v[0] === target).length === S.length ? 1 : 0);
