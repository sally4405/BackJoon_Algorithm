// https://www.acmicpc.net/problem/1316
// 그룹 단어 체커

// const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [N, ...arr] = "3\nhappy\nnew\nyear\n".split("\n");
const [N, ...arr] = "4\naba\nabab\nabcabc\na\n".split("\n");

let count = 0;
let word = [];

for (let i = 0; i < N; i++) {
  const target = arr[i].split("");
  let bool = true;
  for (let j = 0; j < target.length; j++) {
    if (!word.includes(target[j])) {
      word.push(target[j]);
      continue;
    }
    if (target[j - 1] !== target[j]) {
      bool = false;
      break;
    }
  }
  word = [];
  if (bool) count++;
}

console.log(count);
