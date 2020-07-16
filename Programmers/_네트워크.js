// https://programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  var answer = 0;
  const network = [[0]];
  for (let i = 0; i < n; i++) {
    // console.log(computers[i].slice(0, i) + " / " + computers[i].slice(i + 1, computers.length));
    if (!computers[i].slice(i + 1, computers.length).includes(1) && !computers[i].slice(0, i).includes(1)) {
      if (i) network.push([i]);
    } else {
      for (let j = i + 1; j < n; j++) {
        if (computers[i][j]) {
          const containList = [];
          for (let k = 0; k < network.length; k++) {
            if (network[k].includes(i) || network[k].includes(j)) {
              containList.push(k);
            }
          }
          if (!containList.length) {
            network.push([i, j]);
            break;
          }
          if (containList.length === 1) {
            network[containList[0]].push(i);
            network[containList[0]].push(j);
            break;
          }
          if (containList.length > 1) {
            console.log(containList);
            // let joinedNetwort = [];
            for (let l = 1; l < containList.length; l++) {
              network[containList[0]].splice(0, 0, network[containList[l] - l]);
            }
            // for(let l = 0; l < containList.length; l++) {
            //   network.
            //   joinedNetwort.concat(network[containList-l])
            // }
            // containList.reduce((acc, cur) => network[cur].join(acc), [i, j]);
            break;
          }
        }
      }
    }
  }
  console.log(network);
  answer = network.length;
  return answer;
}

// const n = 3;
// const computers = [
//   [1, 1, 0],
//   [1, 1, 0],
//   [0, 0, 1],
// ];
// return 2

// const n = 3;
// const computers = [
//   [1, 1, 0],
//   [1, 1, 1],
//   [0, 1, 1],
// ];
// // return 1

// const n = 3;
// const computers = [
//   [1, 0, 1],
//   [0, 1, 1],
//   [1, 1, 1],
// ];
// // return 1

// const n = 5;
// const computers = [
//   [1, 0, 0, 0, 0],
//   [0, 1, 1, 0, 0],
//   [0, 1, 1, 0, 0],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1],
// ];
// // return 4

const n = 6;
const computers = [
  [1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 0, 1, 1, 0, 0],
  [1, 0, 1, 1, 0, 1],
  [0, 1, 0, 0, 1, 1],
  [0, 0, 0, 1, 1, 1],
];
// return 3

console.log(solution(n, computers));
