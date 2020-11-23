function solution(w, h) {
    let answer = 1;
    const max = w * h;
    //let canNotUse = 0;

    const myMap = new Map();

    for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
            const myPoint = new Point(x, y);
            myMap.set('point', { x, y });
        }
    }


    console.log(myMap);
    //answer = max - canNotUse;


    //return answer;
}

class Point {
    constructor(x, y) {
        this.point = { x, y };
        this.canUse = true;
    }
}

solution(3, 4);