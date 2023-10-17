// https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus

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

function plusMinus(arr) {
    // Write your code here
    let postive = 0;
    let negative = 0;
    let zero = 0;
    const length = arr.length;
    
    arr.forEach((item) => {
        if (item === 0) {
            zero++
        } else if (item < 0) {
            negative++
        } else {
            postive++
        }
    })
    
    
    console.log((postive/length).toFixed(6))
    console.log((negative/length).toFixed(6))
    console.log((zero/length).toFixed(6))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
