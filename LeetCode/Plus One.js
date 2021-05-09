// https://leetcode.com/problems/plus-one/

var plusOne = function (digits) {
  let i = digits.length - 1;
  digits[i]++;

  if (digits[i] !== 10) return digits;

  while (digits[i] === 10) {
    digits[i] = 0;
    if (!i) {
      digits = [1].concat(digits);
      break;
    }
    digits[i - 1]++;
    i--;
  }

  return digits;
};

const digits = [9];
// const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

console.log(plusOne(digits));
