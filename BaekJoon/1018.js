// https://www.acmicpc.net/problem/1018
// 체스판 다시 칠하기

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "10 13\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nWWWWWWWWWWBWB\nWWWWWWWWWWBW\n".split("\n");
input.pop();

const size = input
  .shift()
  .split(" ")
  .map((n) => parseInt(n));
const N = size[0];
const M = size[1];

const board = input.map((row) => row.split(""));

let answer = 64;

const check = (x, y) => {
  let chagneCnt = 0;
  let topLeftColor = board[y][x];

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if ((i + j - y - x) % 2 && board[i][j] !== topLeftColor) chagneCnt++;
      else if (!((i + j - y - x) % 2) && board[i][j] === topLeftColor) chagneCnt++;
    }
  }
  chagneCnt = chagneCnt < 32 ? chagneCnt : 64 - chagneCnt;
  answer = answer < chagneCnt ? answer : chagneCnt;
};

let cnt = 0;
for (let y = 0; y < N - 7; y++) {
  for (let x = 0; x < M - 7; x++) {
    check(x, y);
  }
}

console.log(answer);
