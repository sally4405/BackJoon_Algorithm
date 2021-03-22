// https://programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  var answer = 5;
  let caches = cacheSize ? [cities[0].toLowerCase()] : [];

  for (let i = 1; i < cities.length; i++) {
    const city = cities[i].toLowerCase();

    if (caches.includes(city)) {
      answer += 1;
      const targetIndex = caches.indexOf(city);
      caches = caches.slice(0, targetIndex).concat(caches.slice(targetIndex + 1, caches.length));
      caches.push(city);
      continue;
    }

    answer += 5;
    caches.push(city);

    if (caches.length > cacheSize) caches.shift();
  }

  return answer;
}

const cacheSize = 2;
const cities = ["Jeju", "Pangyo", "NewYork", "newyork"];
// 16

// const cacheSize = 5;
// const cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"];
// // 52

console.log(solution(cacheSize, cities));
