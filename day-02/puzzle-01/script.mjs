import * as fs from 'fs';

let scores = {"A X\r" : 4, "A Y\r" : 8, "A Z\r" : 3, "B X\r" : 1, "B Y\r" : 5, "B Z\r" : 9, "C X\r" : 7, "C Y\r" : 2, "C Z\r" : 6, };
let score = 0;

fs.readFile('input.txt', 'utf8', (err, data) => {
    let startArr = data.split('\n');
    startArr.pop(), startArr.pop();
    startArr.forEach(combo => {
        score += scores[combo];
    });
    console.log(score);
});