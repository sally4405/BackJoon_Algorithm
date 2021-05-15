// https://leetcode.com/problems/two-sum/
// Two Sum

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// const nums = [2, 7, 11, 15];
// const target = 9;

const nums = [3, 2, 4];
const target = 6;

console.log(twoSum(nums, target));
