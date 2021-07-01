//https://programmers.co.kr/learn/courses/30/lessons/12903?language=swift

import Foundation

func solution(_ s:String) -> String {
    var answer: String = ""
    let midLeft: Int = Int(floor(Double(s.count - 1) / 2))
    let midRight: Int = Int(ceil(Double(s.count - 1) / 2))
    
    for i in midLeft...midRight {
        answer += String(s[s.index(s.startIndex, offsetBy: i)])
    }
    
    return answer
}

let sa: String = "abcde"
//"c"

let sb: String = "qwer"
//"we"

print(solution(sa))
print(solution(sb))
