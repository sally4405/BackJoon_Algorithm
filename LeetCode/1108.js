// https://leetcode.com/problems/defanging-an-ip-address/
// Defanging an IP Address

var defangIPaddr = function (address) {
  return address.replace(/\./g, "[.]");
};

// const address = "1.1.1.1";
const address = "255.100.50.0";

console.log(defangIPaddr(address));
