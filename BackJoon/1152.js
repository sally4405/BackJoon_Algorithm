// https://www.acmicpc.net/problem/1152
// 단어의 개수

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").shift().split(" ");
const input = " The Curious Case of Benjamin Button \n".split("\n").shift().split(" ");

if (!input[0]) input.shift();
if (!input[input.length - 1]) input.pop();

console.log(input);
console.log(input.length);
