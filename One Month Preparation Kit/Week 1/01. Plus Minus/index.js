// Question: Plus Minus
// https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus

'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function formatedNum(num) {
    const n = Math.round(num * 1000000) / 1000000
    return n.toFixed(6)
}

function plusMinus(arr) {
    // Write your code here
    let neg = 0;
    let zero = 0;
    let pos = 0;
    const length = arr.length;
    
    arr.forEach((item) => {
        if (item === 0) {
            zero++
        } else if (item < 0) {
            neg++
        } else {
            pos++
        }
    })
    
    console.log(formatedNum(pos/length))
    console.log(formatedNum(neg/length))
    console.log(formatedNum(zero/length))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
