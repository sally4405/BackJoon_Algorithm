// https://www.acmicpc.net/problem/1244
// 스위치 켜고 끄기
// [참고](https://3dpit.tistory.com/31)

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "8\n0 1 0 1 0 0 0 1\n2\n1 3\n2 3\n".split("\n");
// const input = "21\n0 1 0 1 0 0 0 1 0 0 0 1 0 1 0 0 0 1 0 0 1\n2\n1 8\n2 7\n".split("\n");
// const input = "4\n0 1 0 1\n1\n2 3\n".split("\n");

const N = input.shift();
const state = input.shift().split(" ");
const studentN = input.shift();

for (let i = 0; i < studentN; i++) {
  const [gender, switchNum] = input[i].split(" ");
  let target = parseInt(switchNum);

  if (gender === "1") {
    for (let j = target; j <= N; j += target) {
      state[j - 1] = state[j - 1] === "0" ? "1" : "0";
    }
  } else {
    let lIdx = target;
    let rIdx = target;
    while (true) {
      if (lIdx < 1 || rIdx > N + 1) break;
      if (state[lIdx - 1] !== state[rIdx - 1]) break;
      lIdx--;
      rIdx++;
    }
    lIdx++;
    rIdx--;
    for (; lIdx <= rIdx; lIdx++) {
      state[lIdx - 1] = state[lIdx - 1] === "0" ? "1" : "0";
    }
  }
}

let result = "";
for (let m = 0; m < Math.ceil(N / 20); m++) {
  result += `${state.slice(m * 20, (m + 1) * 20).join(" ")}\n`;
}

console.log(result);
