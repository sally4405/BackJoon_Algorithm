// https://leetcode.com/problems/running-sum-of-1d-array/
// Running Sum of 1d Array

var runningSum = function (nums) {
  const answer = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    answer.push(answer[i - 1] + nums[i]);
  }
  return answer;
};

const nums = [1, 2, 3, 4];

console.log(runningSum(nums));
