import * as fs from 'fs';

let scores = {"A X\r" : 3, "A Y\r" : 4, "A Z\r" : 8, "B X\r" : 1, "B Y\r" : 5, "B Z\r" : 9, "C X\r" : 2, "C Y\r" : 6, "C Z\r" : 7, };
let score = 0;

fs.readFile('input.txt', 'utf8', (err, data) => {
    let startArr = data.split('\n');
    startArr.pop(), startArr.pop();
    startArr.forEach(combo => {
        score += scores[combo];
    });
    console.log(score);
});