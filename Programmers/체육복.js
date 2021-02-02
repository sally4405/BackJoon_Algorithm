// https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  let realReserve = reserve.filter((v) => !lost.includes(v));
  let realLost = lost.filter((v) => !reserve.includes(v));
  let answer = n - realLost.length;

  realLost.map((n) => {
    if (realReserve.includes(n - 1)) {
      answer++;
      realReserve = realReserve.filter((v) => v !== n - 1);
      return;
    }
    if (realReserve.includes(n + 1)) {
      answer++;
      realReserve = realReserve.filter((v) => v !== n + 1);
      return;
    }
  });

  return answer;
}

// const n = 5;
// const lost = [2, 4];
// const reserve = [1, 3, 5];

// const n = 5;
// const lost = [2, 4];
// const reserve = [3];

const n = 3;
const lost = [3];
const reserve = [1];

console.log(solution(n, lost, reserve));
