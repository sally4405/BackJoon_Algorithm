// https://leetcode.com/problems/design-parking-system/
// Design Parking System

// const answer = [];

var ParkingSystem = function (big, medium, small) {
  this.slots = [big, medium, small];
  // answer.push(null);
};

ParkingSystem.prototype.addCar = function (carType) {
  if (this.slots[carType - 1]) {
    this.slots[carType - 1]--;
    // answer.push(true);
    return true;
  }
  // answer.push(false);
  return false;
};

// ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
// [[1, 1, 0], [1], [2], [3], [1]]
// [null, true, true, false, false]

const parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
parkingSystem.addCar(3); // return false because there is no available slot for a small car
parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.

// console.log(answer);
