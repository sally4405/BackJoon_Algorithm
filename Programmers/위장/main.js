function solution(clothes) {
  var answer = 0;

  const closet = new Map();
  clothes.map((cloth) => {
    const count = closet.get(cloth[1]);
    closet.set(cloth[1], count ? count + 1 : 2);
  });
  answer = Array.from(closet.values()).reduce((acc, cur) => acc * cur) - 1;

  return answer;
}
