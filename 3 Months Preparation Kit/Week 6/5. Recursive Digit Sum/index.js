// https://www.hackerrank.com/challenges/three-month-preparation-kit-recursive-digit-sum

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
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
    // Write your code here
    const digitSum = (num) => {
        return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    };
    
    const superDigitRecursive = (num) => {
       if (num < 10) {
           return num
       } else {
           const sum = digitSum(num);
           return superDigitRecursive(sum);
       }
    };

    const initalSum = digitSum(n);
    
    const result = superDigitRecursive(initalSum * k);
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = firstMultipleInput[0];

    const k = parseInt(firstMultipleInput[1], 10);

    const result = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}
  