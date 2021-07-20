//https://programmers.co.kr/learn/courses/30/lessons/12926?language=swift
//시저 암호

func solution(_ s:String, _ n:Int) -> String {
    let upperCaseAlphabet: [Character] = (65...90).map({Character(UnicodeScalar($0))})
    let lowerCaseAlphabet: [Character] = (97...122).map({Character(UnicodeScalar($0))})
    var sArray: [Character] = Array(s)
    
    for (index, target) in sArray.enumerated() {
        guard target != " " else {
            continue
        }
        sArray[index] = target.isUppercase ? findNextAlphabet(from: upperCaseAlphabet, target, step: n) : findNextAlphabet(from: lowerCaseAlphabet, target, step: n)
    }
    
    return String(sArray)
}

func findNextAlphabet(from arr: [Character], _ target: Character, step: Int) -> Character {
    if let targetIndex = arr.firstIndex(of: target) {
        let nextIndex = targetIndex < arr.count - step ? targetIndex + step : targetIndex + step - arr.count
        let next: Character = arr[nextIndex]
        return next
    } else {
        return Character("")
    }
}

//let s: String = "AB"
//let n: Int = 1
////"BC"

//let s: String = "z"
//let n: Int = 1
////"a"

let s: String = "a B z"
let n: Int = 4
//"e F d"

print(solution(s, n))

// [alphabet array 만들기 참고](https://stackoverflow.com/a/34870158)
