// https://programmers.co.kr/learn/courses/30/lessons/42588

function solution(heights) {
  var answer = [];
  heights.reverse();

  for (let transmmiter = 0; transmmiter < heights.length; transmmiter++) {
    for (let receiver = transmmiter + 1; receiver < heights.length; receiver++) {
      if (heights[receiver] > heights[transmmiter]) {
        answer.push(heights.length - receiver);
        break;
      }
    }
    if (answer.length < transmmiter + 1) answer.push(0);
  }
  answer.reverse();
  return answer;
}

// const heights = [6, 9, 5, 7, 4]; // [0,0,2,2,4]
// const heights = [3, 9, 9, 3, 5, 7, 2]; // [0,0,0,3,3,3,6]
const heights = [1, 5, 3, 6, 7, 6, 5]; // [0,0,2,0,0,5,6]

console.log(solution(heights));
