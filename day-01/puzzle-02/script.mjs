import * as fs from 'fs';

fs.readFile('input.txt', 'utf8', (err, data) => {
    let startArr = data.split('\n');
    let endArr = [];

    let i = 0, j = 0;
    startArr.forEach(calories => {
        j += Number(calories);
        if (calories === '\r') {
            endArr[i] = j;
            i++;
            j = 0;
        }
    });
    console.log(endArr.sort(function(a, b){return b-a})[0] + endArr[1] + endArr[2]);
});