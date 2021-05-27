// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
// Number of Steps to Reduce a Number to Zero

var numberOfSteps = function (num) {
  let answer = 0;
  while (num > 0) {
    answer++;
    if (num % 2) num--;
    else num /= 2;
  }
  return answer;
};

// const num = 14;
// const num = 8;
const num = 123;

console.log(numberOfSteps(num));
