// May LeetCoding Challenge 2021
// https://leetcode.com/problems/non-decreasing-array/
// Non-decreasing Array

var checkPossibility = function (nums) {
  let check = false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) continue;
    if (check) return false;
    check = true;
    if (!nums[i - 1] || nums[i + 1] >= nums[i - 1]) nums[i] = nums[i + 1];
    else nums[i + 1] = nums[i];
  }
  return true;
};

const nums = [4, 2, 3]; // true
// const nums = [4, 2, 1];  // false
// const nums = [3, 4, 2, 3]; // false
// const nums = [5, 7, 1, 8];  // true

console.log(checkPossibility(nums));
