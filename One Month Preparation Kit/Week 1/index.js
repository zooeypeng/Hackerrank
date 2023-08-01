// Problem: Plus Minus
// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    const sorted = arr.sort((a, b) => a - b);
    
    let mid = 0
    for (let i = 1; i < sorted.length - 1; i++) {
        mid += sorted[i]
    }
    
    console.log(mid + sorted[0], mid + sorted[sorted.length - 1])
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
