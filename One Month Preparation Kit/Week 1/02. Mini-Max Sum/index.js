// Question: Mini-Max Sum
// https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum

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
    const sortedArr = arr.sort((a, b) => a - b)
    const mid = sortedArr[1] + sortedArr[2] + sortedArr[3]
    console.log(sortedArr[0] + mid, sortedArr[4] + mid)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
