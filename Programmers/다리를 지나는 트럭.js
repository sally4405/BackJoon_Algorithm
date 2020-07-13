// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  var answer = 1;
  truck_weights.reverse();
  let onBridge = [];

  while (truck_weights.length) {
    answer++;
    onBridge.map((truck) => truck.drivingTime++);
    onBridge = onBridge.filter((truck) => truck.drivingTime <= bridge_length);
    if (sumOfTruckWeight(onBridge) + truck_weights[truck_weights.length - 1] <= weight) {
      onBridge.push({ weight: truck_weights.pop(), drivingTime: 1 });
    }
  }
  answer += bridge_length - onBridge[onBridge.length - 1].drivingTime;

  return answer;
}

const sumOfTruckWeight = (onBridge) => {
  let result = 0;
  for (let i = 0; i < onBridge.length; i++) {
    result += onBridge[i].weight;
  }
  return result;
};

// const bridge_length = 2;
// const weight = 10;
// const truck_weights = [7, 4, 5, 6]; // return 8

// const bridge_length = 100;
// const weight = 100;
// const truck_weights = [10]; // return 101

const bridge_length = 100;
const weight = 100;
const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]; // return 110

console.log(solution(bridge_length, weight, truck_weights));
