function solution(nums) {
  var answer = 0;
  const prime = [];
  const notPrime = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const target = nums[i] + nums[j] + nums[k];
        if (prime.includes(target)) answer++;
        else if (notPrime.includes(target)) continue;
        else {
          if (isPrime(target)) {
            prime.push(target);
            answer++;
            continue;
          }
          notPrime.push(target);
        }
      }
    }
  }

  return answer;
}

const isPrime = (n) => {
  let i = 2;
  while (i < n) {
    if (!(n % i)) return false;
    i++;
  }
  return true;
};

// const nums = [1, 2, 3, 4];
// // 1

const nums = [1, 2, 7, 6, 4];
// 4

console.log(solution(nums));
