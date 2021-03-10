// https://www.acmicpc.net/problem/1620
// 나는야 포켓몬 마스터 이다솜

// function binarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;
//   let mid = Math.floor((high + low) / 2);
//   while (target !== arr[mid][0]) {
//     if (target < arr[mid][0]) {
//       high = mid - 1;
//       mid = Math.floor((high + low) / 2);
//     } else {
//       low = mid + 1;
//       mid = Math.floor((high + low) / 2);
//     }
//   }
//   return arr[mid][1];
// }

function binarySearch(sortedArray, seekElement) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (sortedArray[middleIndex][0] === seekElement) {
      return sortedArray[middleIndex][1];
    }
    if (sortedArray[middleIndex][0] < seekElement) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}

// const input= require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "26 5\nBulbasaur\nIvysaur\nVenusaur\nCharmander\nCharmeleon\nCharizard\nSquirtle\nWartortle\nBlastoise\nCaterpie\nMetapod\nButterfree\nWeedle\nKakuna\nBeedrill\nPidgey\nPidgeotto\nPidgeot\nRattata\nRaticate\nSpearow\nFearow\nEkans\nArbok\nPikachu\nRaichu\n25\nRaichu\n3\nPidgey\nKakuna\n".split("\n");
const [N, M] = input.shift().split(" ");

const dicNum = input.splice(0, N);
const dicName = dicNum.map((v, i) => [v, i]).sort((a, b) => (a[0] > b[0]) - (a[0] < b[0]));

for (let j = 0; j < M; j++) {
  const target = input.shift();
  if (!Number.isNaN(parseInt(target))) console.log(dicNum[parseInt(target) - 1]);
  else console.log(binarySearch(dicName, target) + 1);
}
