function solution(brown, yellow) {
  var answer = [];
  const yellowBox = availableYellowBox(yellow);
  yellowBox.forEach((box) => {
    if (box[0] * 2 + box[1] * 2 + 4 === brown) {
      answer = [box[0] + 2, box[1] + 2];
      return;
    }
  });

  return answer;
}

const availableYellowBox = (yellow) => {
  const boxList = [];
  const usedNum = [];

  for (let i = 1; i <= yellow; i++) {
    if (usedNum.includes(i)) break;
    if (yellow % i === 0) {
      boxList.push([yellow / i, i]);
      usedNum.push(yellow / i);
    }
  }
  return boxList;
};

console.log(solution(24, 24));
