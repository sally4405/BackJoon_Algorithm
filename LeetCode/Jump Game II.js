// https://leetcode.com/problems/jump-game-ii/

var jump = function (nums) {
  if (nums.length === 1) return 0;

  let answer = 0;

  for (let i = 0; i < nums.length; ) {
    const target = nums[i];
    if (i + target >= nums.length - 1) break;

    let index;
    let max;

    for (let j = 1; j <= target; j++) {
      const temp = nums[i + j] + j;
      if (!max || max < temp) {
        max = temp;
        index = i + j;
      }
    }

    answer++;
    i = index;
  }

  return answer + 1;
};

// const nums = [2, 3, 0, 1, 4];
// // 2

const nums = [0];
// 0

console.log(jump(nums));
