// https://programmers.co.kr/learn/courses/30/lessons/12915?language=swift
// 문자열 내 마음대로 정렬하기

func solution(_ strings:[String], _ n:Int) -> [String] {
    let answer: [String] = strings.sorted(by: { 
        let lhs = $0[$0.index($0.startIndex, offsetBy: n)]
        let rhs = $1[$1.index($1.startIndex, offsetBy: n)]
        return lhs == rhs ? $0 < $1 : lhs < rhs
    })
    return answer
}

let strings: String = ["sun", "bed", "car"]	
let n: Int = 1	
// ["car", "bed", "sun"]

// let strings: String = ["abce", "abcd", "cdx"]	
// let n: Int = 2	
// // ["abcd", "abce", "cdx"]

print(solution(strings, n))