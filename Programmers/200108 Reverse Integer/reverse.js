/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = (x > 0)? x : -x;
    if(num > Math.pow(2,31)-1) return 0;
    let answer = 0;

    while(num != 0) {
        answer = (answer * 10) + (num % 10)
        num = parseInt(num / 10);
    }

    if(answer > Math.pow(2,31)-1) return 0;
    if(x < 0) answer *= (-1)
    return answer;
};

console.log(reverse(-1534236))

module.exports = {
    reverse
}