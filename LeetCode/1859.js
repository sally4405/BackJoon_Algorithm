// https://leetcode.com/problems/sorting-the-sentence/
// Sorting the Sentence

var sortSentence = function (s) {
  const answer = [];

  s.split(" ").map((str) => {
    let i = -1;
    while (Number.isInteger(parseInt(str.slice(i)))) i--;
    i++;
    answer[str.slice(i) - 1] = str.slice(0, i);
  });

  return answer.join(" ");
};

// const s = "is2 sentence4 This1 a3";
const s = "Myself2 Me1 I4 and3";

console.log(sortSentence(s));
