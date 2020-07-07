function solution(s) {
  var answer = 0;

  answer = loop(s, answer);

  return answer;
}

const loop = (s, answer) => {
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      s.slice(i - 1, i + 1);
      if (s) loop(s, answer);
      else return (answer = 1);
    }
  }
  return (answer = 0);
};
