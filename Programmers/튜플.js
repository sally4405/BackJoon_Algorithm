// https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  var answer = [];
  const arr = s
    .slice(2, s.length - 2)
    .split("},{")
    .map((n) => n.split(",").map((m) => parseInt(m)))
    .sort((a, b) => a.length - b.length);

  for (let i = 0; i < arr.length; i++) {
    answer.push(find(answer, arr[i]));
  }

  return answer;
}

const find = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) return arr2[i];
  }
};

const s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
// [2, 1, 3, 4]

console.log(solution(s));
