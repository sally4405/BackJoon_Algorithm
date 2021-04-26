// https://www.acmicpc.net/problem/2164
// 카드2

// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = "64";

const binInput = parseInt(input).toString(2).split("");
binInput.shift();

const result = parseInt(binInput.join(""), 2);

console.log(result ? result * 2 : input);
