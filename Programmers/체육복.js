// https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let realReserve = reserve.filter((v) => !lost.includes(v));
  lost.map((n) => {
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
  // lost.map((n) => {
  //   while (realReserve.length) {
  //     const target = realReserve[0];
  //     if (target === n - 1 || target === n + 1) {
  //       answer++;
  //       realReserve.shift();
  //       return;
  //     }
  //     if (target >= n) return;
  //     realReserve.shift();
  //   }
  // });

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
