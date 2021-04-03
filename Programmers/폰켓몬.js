// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const arr = new Map();

  nums.map((n) => arr.set(n, arr.get(n) ? arr.get(n) + 1 : 1));

  return nums.length / 2 < arr.size ? nums.length / 2 : arr.size;
}

const nums = [3, 1, 2, 3];
// 2

console.log(solution(nums));
