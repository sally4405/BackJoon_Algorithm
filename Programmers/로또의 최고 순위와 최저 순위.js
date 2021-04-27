// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  let jocker = 0;
  let confirm = 0;

  lottos.map((n) => (n ? (win_nums.includes(n) ? confirm++ : 0) : jocker++));

  const worst = confirm ? 7 - confirm : 6;
  const best = confirm + jocker ? 7 - (confirm + jocker) : 6;

  return [best, worst];
}

// const lottos = [44, 1, 0, 0, 31, 25];
// const win_nums = [31, 10, 45, 1, 6, 19];
// // [3, 5]

// const lottos = [0, 0, 0, 0, 0, 0];
// const win_nums = [38, 19, 20, 40, 15, 25];
// // [1, 6]

// const lottos = [45, 4, 35, 20, 3, 9];
// const win_nums = [20, 9, 3, 45, 4, 35];
// // [1, 1]

const lottos = [1, 2, 3, 4, 5, 6];
const win_nums = [7, 8, 9, 10, 11, 12];
// [6, 6]

console.log(solution(lottos, win_nums));
