// https://leetcode.com/problems/number-of-good-pairs/
// Number of Good Pairs

var numIdenticalPairs = function (nums) {
  let answer = 0;
  const list = {};
  nums.map((n) => {
    if (list[n]) list[n]++;
    else list[n] = 1;
  });

  for (const key in list) {
    answer += calc(list[key]);
  }

  return answer;
};

const calc = (n) => {
  return (n * (n - 1)) / 2;
};

// const nums = [1, 2, 3, 1, 1, 3];
// const nums = [1, 1, 1, 1];
const nums = [1, 2, 3];

console.log(numIdenticalPairs(nums));
