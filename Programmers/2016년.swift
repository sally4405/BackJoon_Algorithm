// https://programmers.co.kr/learn/courses/30/lessons/12901?language=swift
// 2016년

func solution(_ a:Int, _ b:Int) -> String {
    let day: [String] = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
    let monthSum: [Int] = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]
    var daySum: Int = a > 1 ? monthSum[a - 2] + b : b
    
    return day[daySum % 7]
}