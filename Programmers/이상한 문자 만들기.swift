// https://programmers.co.kr/learn/courses/30/lessons/12930?language=swift
// 이상한 문자 만들기

func solution(_ s:String) -> String {
    var splitted: [String] = s.components(separatedBy: " ")
    var answer: String = ""
    for (index, str) in splitted.enumerated() {
        for i in 0..<str.count {
            if i % 2 == 1 {
                answer += str[str.index(str.startIndex, offsetBy: i)].lowercased()
            } else {
                answer += str[str.index(str.startIndex, offsetBy: i)].uppercased()
            }
        }
        if index != splitted.count-1 { answer += " " }
    }
    return answer
}

let s: String	= "try hello world"	
// "TrY HeLlO WoRlD"

print(solution(s))