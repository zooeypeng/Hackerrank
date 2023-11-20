// https://www.hackerrank.com/challenges/three-month-preparation-kit-missing-numbers
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr, brr) {
    // Write your code here
    // const frequencyMap = {};
    
    // for (const num of arr) {
    //     frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    // }
    
    // for (const num of brr) {
    //     if (frequencyMap[num] > 0) {
    //         frequencyMap[num]--;
    //     } else {
    //         frequencyMap[num] = 1;
    //     }
    // }
    
    // const missingNumbers = Object.keys(frequencyMap)
    //     .filter(num => frequencyMap[num] > 0)
    //     .join(' ');
    
    // console.log(missingNumbers);
    const min = Math.min(...brr);
    const dif = Array(100).fill(0);
    const res = [];

    for (let n of arr) dif[n - min]--;
    for (let n of brr) dif[n - min]++;

    for (let i in dif) {
        if (dif[i] > 0) {
            res.push(+i + min);
        }
    }

    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine().trim(), 10);

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
