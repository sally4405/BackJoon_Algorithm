// https://leetcode.com/problems/shuffle-string/
// Shuffle String

var restoreString = function (s, indices) {
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    const target = s[i];
    answer[indices[i]] = target;
  }
  return answer.join("");
};

const s = "codeleet";
const indices = [4, 5, 6, 7, 0, 2, 1, 3];
// Output: "leetcode"

// const s = "abc"
// const indices = [0,1,2]
// // Output: "abc"

// const s = "aiohn"
// const indices = [3,1,4,2,0]
// // Output: "nihao"

// const s = "aaiougrt"
// const indices = [4,0,2,6,7,3,1,5]
// // Output: "arigatou"

// const s = "art"
// const indices = [1,0,2]
// // Output: "rat"

console.log(restoreString(s, indices));
