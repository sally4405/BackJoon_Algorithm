// https://www.acmicpc.net/problem/1065
// 한수

const start = new Date().getTime();

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const input = parseInt("999\n");

if (input < 100) return console.log(input);
if (input === 1000) return console.log(144);

let answer = 99;
for (let i = 100; i <= input; i++) {
  const target = i
    .toString()
    .split("")
    .map((n) => parseInt(n));
  if (target[0] - target[1] === target[1] - target[2]) answer++;
}

console.log(answer);

const end = new Date().getTime() - start;
console.log("소요된 시간: " + end + "ms");
