// https://programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  var answer = [];
  const genreList = [];
  const playList = [];

  genres.map((n, i) => {
    if (!genreList.includes(n)) genreList.push(n);
    const genreIndex = genreList.indexOf(n);

    if (!playList[genreIndex]) playList[genreIndex] = [0];
    playList[genreIndex].push({ num: i, times: plays[i] });
    playList[genreIndex][0] += plays[i];
  });

  playList
    .sort((a, b) => b[0] - a[0])
    .map((arr) => arr.sort((a, b) => b.times - a.times))
    .map((n) => {
      answer.push(n[1].num);
      if (n[2]) answer.push(n[2].num);
    });

  return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
// [4, 1, 3, 0]

console.log(solution(genres, plays));
