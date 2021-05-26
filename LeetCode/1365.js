// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
// How Many Numbers Are Smaller Than the Current Number

var smallerNumbersThanCurrent = function (nums) {
  return nums.map((n) => nums.filter((m) => m < n).length);
};

const nums = [8, 1, 2, 2, 3];
// Output: [4,0,1,1,3]

// const nums = [6, 5, 4, 8];
// // Output: [2,1,0,3]

// const nums = [7, 7, 7, 7];
// // Output: [0,0,0,0]

console.log(smallerNumbersThanCurrent(nums));
