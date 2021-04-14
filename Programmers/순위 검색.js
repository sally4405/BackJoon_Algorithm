// https://programmers.co.kr/learn/courses/30/lessons/72412

function solution(info, query) {
  var answer = [];
  const infoMap = new Map();

  for (let i = 0; i < info.length; i++) {
    cutNpush2Map(infoMap, info[i]);
  }

  for (let value of infoMap.values()) {
    value.sort((a, b) => b - a);
  }

  for (let i = 0; i < query.length; i++) {
    const [language, end, age, foodScore] = query[i].split(" and ");
    const [food, score] = foodScore.split(" ");

    const target = infoMap.get(`${language}${end}${age}${food}`);
    answer.push(binarySearch(target, parseInt(score)));
  }

  return answer;
}

const cutNpush2Map = (map, str) => {
  const [language, end, age, food, score] = str.split(" ");

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        for (let m = 0; m < 2; m++) {
          const target = `${i ? language : "-"}${j ? end : "-"}${k ? age : "-"}${m ? food : "-"}`;
          if (!map.has(target)) map.set(target, []);
          map.set(target, [...map.get(target), parseInt(score)]);
        }
      }
    }
  }
};

const binarySearch = (sortedArray, seekElement) => {
  if (!sortedArray) return 0;

  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (sortedArray[middleIndex] >= seekElement) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return startIndex;
};

const info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"];

console.log(solution(info, query));
