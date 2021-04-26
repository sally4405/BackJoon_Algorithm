// https://www.acmicpc.net/problem/10809
// 알파벳 찾기

// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = "baekjoon";
const result = [];

for (let i = 0; i < 26; i++) {
  result[i] = input.indexOf(String.fromCharCode(i + 97));
}

console.log(result.join(" "));
