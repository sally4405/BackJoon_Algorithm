// https://programmers.co.kr/learn/courses/30/lessons/70129
// 이진 변환 반복하기

function solution(s) {
  const answer = [0, 0];
  let target = s;

  while (target > 1) {
    answer[0]++;
    answer[1] += target.length;

    target = target
      .split("")
      .filter((v) => parseInt(v))
      .join("").length;
    answer[1] -= target;

    target = target.toString(2);
  }

  return answer;
}

const s = "110010101001";
// [3,8]

console.log(solution(s));
