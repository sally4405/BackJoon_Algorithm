// https://www.acmicpc.net/problem/1244
// 스위치 켜고 끄기

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const input = "8\n0 1 0 1 0 0 0 1\n2\n1 3\n2 3\n".split("\n");
const input = "21\n0 1 0 1 0 0 0 1 0 0 0 1 0 1 0 0 0 1 0 0 1\n2\n1 8\n2 7\n".split("\n");

const N = input.shift();

const state = input
  .shift()
  .split(" ")
  .map((n) => {
    if (n === "1") return true;
    return false;
  });

const studentN = input.shift();

for (let i = 0; i < studentN; i++) {
  const [gender, switchNum] = input[i].split(" ");
  let target = parseInt(switchNum);

  if (gender === "1") {
    for (let j = 2; j < N; j++) {
      state[target - 1] = !state[target - 1];
      target *= j;
      if (target > N) break;
    }
  } else {
    state[target - 1] = !state[target - 1];
    let k = 1;
    while (true) {
      if (state[target - 1 - k] !== state[target - 1 + k]) break;
      state[target - 1 - k] = !state[target - 1 - k];
      state[target - 1 + k] = !state[target - 1 + k];
      k++;
      if (state[target - 1 - k] === undefined || state[target - 1 + k] === undefined) break;
    }
  }
}

let result = "";
for (let m = 0; m < Math.ceil(N / 20); m++) {
  result += `${state
    .slice(m * 20, (m + 1) * 20)
    .map((n) => {
      if (n) return 1;
      return 0;
    })
    .join(" ")}\n`;
}

console.log(result);
