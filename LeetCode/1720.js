// https://leetcode.com/problems/decode-xored-array/
// Decode XORed Array

var decode = function (encoded, first) {
  const answer = [first];
  encoded.map((n) => answer.push(n ^ answer[answer.length - 1]));
  return answer;
};

// const encoded = [1, 2, 3];
// const first = 1;
// // [1,0,2,1]

const encoded = [6, 2, 7, 3];
const first = 4;
// [4,2,0,7,4]

console.log(decode(encoded, first));
