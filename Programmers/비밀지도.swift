// https://programmers.co.kr/learn/courses/30/lessons/17681?language=swift
// 비밀지도

func solution(_ n:Int, _ arr1:[Int], _ arr2:[Int]) -> [String] {
    var answer: [String] = []
    
    for i in 0..<n {
        let sum: Int = arr1[i] | arr2[i]
        let binSum: String = String((String(repeating: "0", count: n) + String(sum, radix: 2)).suffix(n))
        let bin2Str: String = binSum.replacingOccurrences(of: "1", with: "#").replacingOccurrences(of: "0", with: " ")
        answer.append(bin2Str)
    }
    return answer
}
