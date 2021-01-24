// https://programmers.co.kr/learn/courses/30/lessons/67256
// [카카오 인턴] 키패드 누르기

function solution(numbers, hand) {
  var answer = "";
  let leftHand = 10;
  let rightHand = 12;
  const usingHand = hand === "right" ? "R" : "L";

  numbers.forEach((num) => {
    const targetNum = num === 0 ? 11 : num;

    if (targetNum % 3 === 1) {
      leftHand = targetNum;
      answer += "L";
    } else if (targetNum % 3 === 0) {
      rightHand = targetNum;
      answer += "R";
    } else {
      const distLeft = distance(leftHand, targetNum);
      const distRight = distance(rightHand, targetNum);
      if (distLeft < distRight) {
        leftHand = targetNum;
        answer += "L";
      } else if (distLeft > distRight) {
        rightHand = targetNum;
        answer += "R";
      } else {
        hand === "right" ? (rightHand = targetNum) : (leftHand = targetNum);
        answer += usingHand;
      }
      console.log(`[num : ${num}]`);
      console.log(`targetNum : ${targetNum}`);
      console.log(`leftHand : ${leftHand}`);
      console.log(`distLeft : ${distLeft}`);
      console.log(`rightHand : ${rightHand}`);
      console.log(`distRight : ${distRight}`);
      console.log();
    }
  });

  return answer;
}

function distance(movingHand, targetNum) {
  const movingPoint = getPoint(movingHand);
  const targetPoint = getPoint(targetNum);

  return Math.abs(targetPoint.row - movingPoint.row) + Math.abs(targetPoint.column - movingPoint.column);
}

function getPoint(num) {
  return {
    row: Math.floor((num - 1) / 3),
    column: (num - 1) % 3,
  };
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
// LRLLLRLLRRL
// LRLRRLLLRRR
// LRLRRRLLRRR
console.log(solution(numbers, "right"));
