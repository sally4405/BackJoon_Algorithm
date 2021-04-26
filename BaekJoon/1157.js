// https://www.acmicpc.net/problem/1157
// 단어 공부

const list = Array.from({ length: 26 }, (n) => 0);

// const input = require("fs").readFileSync("/dev/stdin").toString().split("");
const input = "Mississipi".split("").map((n) => list[n.charCodeAt(0) > 90 ? n.charCodeAt(0) - 97 : n.charCodeAt(0) - 65]++);
const input = "zZa".split("").map((n) => list[n.charCodeAt(0) > 90 ? n.charCodeAt(0) - 97 : n.charCodeAt(0) - 65]++);

let max = 0;
let answer = [];
list.map((n, i) => {
  if (n > max) {
    max = n;
    answer = [i];
  } else if (n === max) answer.push(i);
});

console.log(answer.length > 1 ? "?" : String.fromCharCode(answer[0] + 65));
