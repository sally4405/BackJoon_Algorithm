// https://leetcode.com/problems/shuffle-the-array/
// Shuffle the Array

var shuffle = function (nums, n) {
  const answer = [];
  for (let i = 0; i < nums.length / 2; i++) {
    answer.push(nums[i]);
    answer.push(nums[i + nums.length / 2]);
  }
  return answer;
};

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;

console.log(shuffle(nums, n));
