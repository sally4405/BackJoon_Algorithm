// https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/
// Longer Contiguous Segments of Ones than Zeros

var checkZeroOnes = function (s) {
  let zeroCnt = 0;
  let oneCnt = 0;
  let target = s[0];
  let temp = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === target) {
      temp++;
      continue;
    }

    if (target === "0") zeroCnt = zeroCnt > temp ? zeroCnt : temp;
    else oneCnt = oneCnt > temp ? oneCnt : temp;

    temp = 1;
    target = s[i];
  }

  if (target === "0") zeroCnt = zeroCnt > temp ? zeroCnt : temp;
  else oneCnt = oneCnt > temp ? oneCnt : temp;

  return oneCnt > zeroCnt;
};

// const s = "1101";
// const s = "111000";
const s = "110100010";

console.log(checkZeroOnes(s));
