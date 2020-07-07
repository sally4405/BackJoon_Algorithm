//const numbers = [3, 7, 30, 34, 9, 5, 91, 999, 900, 99, 911];
//const numbers = [3, 91, 999];
//const numbers = [188, 1882];
const numbers = [13, 131, 81, 8189];


function solution(numbers) {
    let answer = '';
    answer = numbers.sort(function(a, b) {
        const aStr = a.toString();
        const bStr = b.toString();
        let i = 0;
        while(true) {
            if(aStr[i] < bStr[i]) return 1;
            if(aStr[i] > bStr[i]) return -1;

            //aStr[i] === bStr[i]
            i++;
            if(aStr.length != bStr.length) {
                if(aStr[i] === undefined) {
                    // if(bStr[i] >= aStr[0]) return 1;
                    // return -1;
                    for(let j =0; j < bStr.length-i; j++) {
                        if(bStr[i+j] > bStr[j]) return 1;
                        if(bStr[i+j] < bStr[j]) return -1;
                    }
                }
                if(bStr[i] === undefined) {
                    // if(aStr[i] >= bStr[0]) return -1;
                    // return 1;
                    for(let j =0; j < aStr.length-i; j++) {
                        if(aStr[i+j] > aStr[j]) return -1;
                        if(aStr[i+j] < aStr[j]) return 1;
                    }
                }
            }
            
            if(aStr[i] === undefined) return 0;
        }
    });

    return answer;
    //return answer.join("");
}

// function compare(a, b) {

// }
    
console.log(solution(numbers));

// 예상 결과값
// 999, 99, 99, 91, 911, 900, 7, 5, 34, 30, 3
// 999, 91, 3
// 1882, 188
// 8189, 81, 13, 131


// 예상 결과값
// 999999911919007534303