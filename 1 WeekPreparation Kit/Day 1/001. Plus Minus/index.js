// Problem: Plus Minus
// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem

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
function formatted(num) {
    return num.toFixed(5)
}

function plusMinus(arr) {
    // Write your code here
    const leng = arr.length
    let neg = 0
    let pos = 0
    let zero = 0
    
    arr.forEach((item) => {
        if (item === 0) {
            zero++
        } else if (item < 0) {
            neg++
        } else {
            pos++
        }
    })
    
    console.log(formatted(pos/leng))
    console.log(formatted(neg/leng))
    console.log(formatted(zero/leng))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
