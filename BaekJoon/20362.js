// https://www.acmicpc.net/problem/20362
// 유니대전 퀴즈쇼

// const [target, ...arr] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [target, ...arr] = "3 duck\noridya hello\norihehe hi\nduck hi\n".split("\n");
const [target, ...arr] = "8 orihehe\nhunni duck\nskynet duck\nrdd duck\nvega duck\nreversing duck\ndongbin duck\nkimyh duck\norihehe duck\n".split("\n");

const [N, winner] = target.split(" ");

let answer = "";
for (let i = 0; i < N; i++) {
  const [name, content] = arr[i].split(" ");
  if (name === winner) {
    answer = content;
    break;
  }
}

let result = 0;
for (let i = 0; i < N; i++) {
  const [name, content] = arr[i].split(" ");
  if (name === winner) break;
  if (content === answer) result++;
}

console.log(result);
