// https://www.acmicpc.net/problem/20540
// 연길이의 이상형

// const input = require("fs").readFileSync("/dev/stdin").toString().split("");
const input = "ESTJ\n".split("");

let answer = "";
answer += input[0] === "E" ? "I" : "E";
answer += input[1] === "S" ? "N" : "S";
answer += input[2] === "T" ? "F" : "T";
answer += input[3] === "J" ? "P" : "J";

console.log(answer);
