// https://www.hackerrank.com/challenges/three-month-preparation-kit-misere-nim-1

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
 * Complete the 'misereNim' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY s as parameter.
 */

function misereNim(s) {
    // Write your code here
    let sum = s.reduce((a, b) => a + b, 0);
    
    if (sum === s.length) {
        return sum % 2 === 0 ? 'First' : 'Second';
    }
    
    let xorSum = s.reduce((a, b) => a ^ b, 0);
    
    return xorSum === 0 ? 'Second' : 'First';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

        const result = misereNim(s);

        ws.write(result + '\n');
    }

    ws.end();
}
