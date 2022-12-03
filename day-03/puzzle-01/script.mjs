import * as fs from 'fs';
let newArr = [];

fs.readFile('input.txt', 'utf8', (err, data) => {
    let startArr = data.split(' ');
    for (let i = 0; i < startArr.length; i++) {
        newArr[i] = [startArr[i].substring(0, (startArr[i].length / 2)), startArr[i].substring((startArr[i].length / 2))];
        newArr[i]
    }
    console.log(newArr);
});